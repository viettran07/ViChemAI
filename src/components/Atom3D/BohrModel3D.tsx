import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ElementData, IonVariant } from '../../types/element';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Info, Sparkles, Layers } from 'lucide-react';

interface BohrModel3DProps {
  element: ElementData;
  activeIon?: IonVariant | null;
  onSelectIon?: (ion: IonVariant | null) => void;
}

const SHELL_NAMES = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
const SHELL_COLORS = [
  '#38bdf8', // K - Cyan
  '#818cf8', // L - Indigo
  '#a855f7', // M - Purple
  '#ec4899', // N - Pink
  '#f43f5e', // O - Rose
  '#f97316', // P - Orange
  '#eab308', // Q - Yellow
];

export const BohrModel3D: React.FC<BohrModel3DProps> = ({
  element,
  activeIon: externalIon,
  onSelectIon,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [selectedShellIndex, setSelectedShellIndex] = useState<number | null>(null);
  const [internalIon, setInternalIon] = useState<IonVariant | null>(null);

  const activeIon = externalIon !== undefined ? externalIon : internalIon;
  const handleSelectIon = (ion: IonVariant | null) => {
    if (onSelectIon) onSelectIon(ion);
    else setInternalIon(ion);
  };

  // Determine current active shells and total electron count
  const currentShells = activeIon ? activeIon.electronShells : element.electronShells;
  const currentElectronCount = activeIon ? activeIon.electronCount : element.protons;
  const protonCount = element.protons;
  const neutronCount = element.neutronsStandard ?? Math.round((element.atomicMass ?? element.protons * 2) - element.protons);

  // References for Three.js animation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const electronObjectsRef = useRef<Array<{ mesh: THREE.Mesh; shellIndex: number; baseAngle: number; radius: number; tiltX: number; tiltZ: number }>>([]);
  const shellRingsRef = useRef<THREE.Line[]>([]);
  const isDraggingRef = useRef(false);
  const prevMousePosRef = useRef({ x: 0, y: 0 });
  const cameraRotationRef = useRef({ theta: 0.4, phi: 0.9, radius: 24 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    cameraRef.current = camera;
    updateCameraPosition();

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2.5, 50);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(10, 20, 15);
    scene.add(dirLight);

    // 5. Nucleus generation (Cluster of protons & neutrons)
    const nucleusGroup = new THREE.Group();
    scene.add(nucleusGroup);

    // Dynamic number of display spheres for nucleus (scale down for high Z to keep 60fps)
    const displayProtons = Math.min(protonCount, 18);
    const displayNeutrons = Math.min(neutronCount, 20);
    const nucleusRadius = Math.max(0.7, Math.min(2.0, 0.6 + Math.cbrt(protonCount) * 0.28));

    const protonGeo = new THREE.SphereGeometry(0.32, 16, 16);
    const neutronGeo = new THREE.SphereGeometry(0.32, 16, 16);
    const protonMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xb91c1c,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.2,
    });
    const neutronMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      emissive: 0x334155,
      emissiveIntensity: 0.3,
      roughness: 0.4,
      metalness: 0.2,
    });

    // Nucleus glow mesh
    const glowGeo = new THREE.SphereGeometry(nucleusRadius * 1.25, 24, 24);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xf87171,
      transparent: true,
      opacity: 0.18,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    nucleusGroup.add(glowMesh);

    // Place protons & neutrons evenly on sphere / inside ball
    const totalNucleons = displayProtons + displayNeutrons;
    for (let i = 0; i < totalNucleons; i++) {
      const isProton = i < displayProtons;
      const mesh = new THREE.Mesh(isProton ? protonGeo : neutronGeo, isProton ? protonMat : neutronMat);

      // Fibonacci sphere packing
      const phi = Math.acos(-1 + (2 * i) / totalNucleons);
      const theta = Math.sqrt(totalNucleons * Math.PI) * phi;
      const r = (nucleusRadius * 0.75) * (0.5 + 0.5 * Math.random());

      mesh.position.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
      nucleusGroup.add(mesh);
    }

    // 6. Electron Shells & Orbiting Electrons
    electronObjectsRef.current = [];
    shellRingsRef.current = [];

    const electronGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const baseRadius = nucleusRadius + 1.8;
    const ringSpacing = 1.6;

    currentShells.forEach((electronCountInShell, shellIdx) => {
      if (electronCountInShell <= 0) return;

      const shellRadius = baseRadius + shellIdx * ringSpacing;
      const tiltX = (shellIdx * 0.22) * (shellIdx % 2 === 0 ? 1 : -1);
      const tiltZ = (shellIdx * 0.18) * (shellIdx % 3 === 0 ? 1 : -1);

      // Create ring line
      const curve = new THREE.EllipseCurve(0, 0, shellRadius, shellRadius, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(80);
      const ringGeo = new THREE.BufferGeometry().setFromPoints(points.map((p) => new THREE.Vector3(p.x, 0, p.y)));

      const isCurrentShellSelected = selectedShellIndex === null || selectedShellIndex === shellIdx;
      const shellColor = new THREE.Color(SHELL_COLORS[shellIdx % SHELL_COLORS.length]);

      const ringMat = new THREE.LineBasicMaterial({
        color: shellColor,
        transparent: true,
        opacity: isCurrentShellSelected ? (selectedShellIndex === shellIdx ? 0.95 : 0.45) : 0.15,
        linewidth: isCurrentShellSelected ? 2 : 1,
      });

      const ringLine = new THREE.Line(ringGeo, ringMat);
      ringLine.rotation.x = tiltX;
      ringLine.rotation.z = tiltZ;
      scene.add(ringLine);
      shellRingsRef.current.push(ringLine);

      // Electrons on this shell
      const electronMat = new THREE.MeshStandardMaterial({
        color: shellColor,
        emissive: shellColor,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });

      for (let e = 0; e < electronCountInShell; e++) {
        const eMesh = new THREE.Mesh(electronGeo, electronMat);
        const baseAngle = (e * (2 * Math.PI)) / electronCountInShell;
        scene.add(eMesh);

        electronObjectsRef.current.push({
          mesh: eMesh,
          shellIndex: shellIdx,
          baseAngle,
          radius: shellRadius,
          tiltX,
          tiltZ,
        });
      }
    });

    // Adjust camera radius based on atom size
    const maxRadius = baseRadius + currentShells.length * ringSpacing + 6;
    cameraRotationRef.current.radius = Math.max(18, maxRadius * 1.35);
    updateCameraPosition();

    // 7. Animation Loop
    let clock = new THREE.Clock();
    let accumulatedTime = 0;

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isPlaying) {
        accumulatedTime += delta * speedMultiplier;

        // Subtle nucleus breathing
        const scale = 1 + 0.03 * Math.sin(accumulatedTime * 2.5);
        glowMesh.scale.set(scale, scale, scale);
        nucleusGroup.rotation.y += delta * 0.2;
        nucleusGroup.rotation.x += delta * 0.1;

        // Orbit electrons
        electronObjectsRef.current.forEach((item) => {
          // Keplerian velocity: inner orbits revolve faster
          const angularSpeed = 1.8 / Math.pow(item.shellIndex + 1, 0.7);
          const currentAngle = item.baseAngle + accumulatedTime * angularSpeed;

          // Compute raw 2D position on orbit plane
          const rawX = item.radius * Math.cos(currentAngle);
          const rawZ = item.radius * Math.sin(currentAngle);

          // Apply ring tilt transformation
          const pos = new THREE.Vector3(rawX, 0, rawZ);
          pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), item.tiltX);
          pos.applyAxisAngle(new THREE.Vector3(0, 0, 1), item.tiltZ);

          item.mesh.position.copy(pos);
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 9. Mouse / Touch Controls
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - prevMousePosRef.current.x;
      const dy = e.clientY - prevMousePosRef.current.y;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };

      cameraRotationRef.current.theta -= dx * 0.008;
      cameraRotationRef.current.phi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraRotationRef.current.phi - dy * 0.008));
      updateCameraPosition();
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraRotationRef.current.radius = Math.max(10, Math.min(65, cameraRotationRef.current.radius + e.deltaY * 0.04));
      updateCameraPosition();
    };

    // Touch events for mobile
    let touchStartDist = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDraggingRef.current) {
        const dx = e.touches[0].clientX - prevMousePosRef.current.x;
        const dy = e.touches[0].clientY - prevMousePosRef.current.y;
        prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

        cameraRotationRef.current.theta -= dx * 0.008;
        cameraRotationRef.current.phi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraRotationRef.current.phi - dy * 0.008));
        updateCameraPosition();
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = touchStartDist - dist;
        touchStartDist = dist;
        cameraRotationRef.current.radius = Math.max(10, Math.min(65, cameraRotationRef.current.radius + diff * 0.08));
        updateCameraPosition();
      }
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('wheel', onWheel, { passive: false });
    domEl.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Clean up
    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('wheel', onWheel);
      domEl.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      // Dispose three.js resources
      renderer.dispose();
      protonGeo.dispose();
      neutronGeo.dispose();
      electronGeo.dispose();
      glowGeo.dispose();
      protonMat.dispose();
      neutronMat.dispose();
      glowMat.dispose();
    };
  }, [element, activeIon, selectedShellIndex, isPlaying, speedMultiplier]);

  function updateCameraPosition() {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraRotationRef.current;
    cameraRef.current.position.set(
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.cos(theta)
    );
    cameraRef.current.lookAt(0, 0, 0);
  }

  const handleResetCamera = () => {
    cameraRotationRef.current = { theta: 0.4, phi: 0.9, radius: 24 };
    updateCameraPosition();
  };

  const handleZoom = (delta: number) => {
    cameraRotationRef.current.radius = Math.max(10, Math.min(65, cameraRotationRef.current.radius + delta));
    updateCameraPosition();
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden relative select-none">
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-80 sm:h-96 md:h-[460px] relative cursor-grab active:cursor-grabbing bg-radial from-slate-900/60 to-slate-950"
      />

      {/* Floating Header Info */}
      <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/70 rounded-lg p-3 max-w-xs shadow-xl pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-cyan-400 font-mono">{activeIon ? activeIon.symbol : element.symbol}</span>
          <div>
            <div className="text-sm font-semibold text-slate-100 leading-tight">
              {activeIon ? `Ion ${activeIon.symbol}` : element.nameVi.split('/')[0]}
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Z = {element.atomicNumber} · {currentElectronCount} electron · {protonCount}p · {neutronCount}n
            </div>
          </div>
        </div>

        {activeIon && (
          <div className="mt-2 pt-2 border-t border-slate-800 text-xs">
            <span className="text-amber-400 font-medium">Phản ứng tạo ion:</span>
            <div className="font-mono text-cyan-300 mt-0.5">{activeIon.equation}</div>
            <div className="text-slate-300 text-[11px] mt-1 leading-snug">{activeIon.explanation}</div>
          </div>
        )}
      </div>

      {/* Camera & Playback Overlay Controls */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-lg border border-slate-800 shadow-lg">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 hover:bg-slate-800 rounded text-slate-200 transition"
          title={isPlaying ? 'Tạm dừng hoạt ảnh' : 'Tiếp tục quay'}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
        </button>
        <button
          onClick={handleResetCamera}
          className="p-2 hover:bg-slate-800 rounded text-slate-200 transition"
          title="Đặt lại góc nhìn"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(-3)}
          className="p-2 hover:bg-slate-800 rounded text-slate-200 transition"
          title="Phóng to"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(3)}
          className="p-2 hover:bg-slate-800 rounded text-slate-200 transition"
          title="Thu nhỏ"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
      </div>

      {/* Speed Slider Floating Control */}
      <div className="absolute bottom-16 sm:bottom-20 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg text-xs">
        <span className="text-slate-400 whitespace-nowrap">Tốc độ:</span>
        <input
          type="range"
          min="0.2"
          max="3"
          step="0.2"
          value={speedMultiplier}
          onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
          className="w-16 accent-cyan-500 cursor-pointer"
        />
        <span className="font-mono text-cyan-400 w-8">{speedMultiplier}x</span>
      </div>

      {/* Bottom Bar: Shell Selectors & Ion Controls */}
      <div className="bg-slate-900/95 border-t border-slate-800 p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Shell Highlights */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-thin">
          <span className="text-slate-400 flex items-center gap-1 font-medium mr-1 whitespace-nowrap">
            <Layers className="w-3.5 h-3.5 text-cyan-400" /> Lớp e:
          </span>
          <button
            onClick={() => setSelectedShellIndex(null)}
            className={`px-2.5 py-1 rounded font-medium transition ${
              selectedShellIndex === null
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            Tất cả ({currentElectronCount}e)
          </button>
          {currentShells.map((count, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedShellIndex(selectedShellIndex === idx ? null : idx)}
              className={`px-2.5 py-1 rounded font-mono transition flex items-center gap-1 ${
                selectedShellIndex === idx
                  ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="font-bold text-slate-100">{SHELL_NAMES[idx]}:</span>
              <span>{count}e</span>
            </button>
          ))}
        </div>

        {/* Ion State Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-400 flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Trạng thái:
          </span>
          <button
            onClick={() => handleSelectIon(null)}
            className={`px-2.5 py-1 rounded font-medium transition ${
              !activeIon
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            Nguyên tử {element.symbol}⁰
          </button>

          {element.teachingNotesVi.ionTendencies.map((ion, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectIon(activeIon?.symbol === ion.symbol ? null : ion)}
              className={`px-2.5 py-1 rounded font-medium transition ${
                activeIon?.symbol === ion.symbol
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {ion.symbol} ({ion.charge > 0 ? `+${ion.charge}` : ion.charge})
            </button>
          ))}
        </div>
      </div>

      {/* Pedagogical Scientific Note */}
      <div className="bg-slate-950 px-3 py-2 border-t border-slate-900 text-[11px] text-slate-400 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>
            <strong className="text-slate-300">Lưu ý sư phạm:</strong> Mô hình Bohr biểu diễn trực quan các mức năng lượng theo lớp e. Trong cơ học lượng tử hiện đại, electron chuyển động không theo quỹ đạo tròn mà phân bố theo xác suất trong các orbital nguyên tử.
          </span>
        </div>
      </div>
    </div>
  );
};
