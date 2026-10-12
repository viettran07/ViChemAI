import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, ZoomIn, ZoomOut, Compass, Info, Sparkles } from 'lucide-react';

export type OrbitalType =
  | '1s'
  | '2s'
  | '2px'
  | '2py'
  | '2pz'
  | '3dxy'
  | '3dxz'
  | '3dyz'
  | '3dx2-y2'
  | '3dz2'
  | '4f-overview';

interface OrbitalInfo {
  id: OrbitalType;
  label: string;
  nameVi: string;
  n: number;
  l: number;
  ml: string;
  geometryDesc: string;
  nodalSurfaces: string;
  explanation: string;
}

const ORBITALS_CATALOG: OrbitalInfo[] = [
  {
    id: '1s',
    label: 'Orbital 1s',
    nameVi: 'Orbital s (lớp 1)',
    n: 1,
    l: 0,
    ml: '0',
    geometryDesc: 'Đối xứng cầu hoàn hảo, hạt nhân nằm ở tâm',
    nodalSurfaces: 'Không có mặt nút nào (0 mặt nút)',
    explanation: 'Orbital 1s có xác suất tìm thấy electron đối xứng cầu xung quanh hạt nhân. Mật độ xác suất cao nhất tại hạt nhân và giảm dần theo khoảng cách r.',
  },
  {
    id: '2s',
    label: 'Orbital 2s',
    nameVi: 'Orbital s (lớp 2)',
    n: 2,
    l: 0,
    ml: '0',
    geometryDesc: 'Đối xứng cầu lớn hơn, có 1 mặt nút cầu bên trong',
    nodalSurfaces: '1 mặt nút cầu (xác suất = 0 tại bán kính r ~ 2a₀)',
    explanation: 'Orbital 2s có kích thước lớn hơn 1s. Giữa quả cầu trong và quả cầu ngoài có một mặt cầu nút tại đó xác suất tìm thấy electron bằng 0.',
  },
  {
    id: '2px',
    label: 'Orbital 2pₓ',
    nameVi: 'Orbital p định hướng trục X',
    n: 2,
    l: 1,
    ml: '+1 / -1',
    geometryDesc: 'Hình số 8 nổi (quả tạ đôi) nằm dọc theo trục X',
    nodalSurfaces: '1 mặt phẳng nút là mặt phẳng YZ (x = 0)',
    explanation: 'Gồm 2 thùy phân bố đối xứng hai bên hạt nhân dọc theo trục X. Hai thùy có dấu hàm sóng đối nghịch (+ và -).',
  },
  {
    id: '2py',
    label: 'Orbital 2pᵧ',
    nameVi: 'Orbital p định hướng trục Y',
    n: 2,
    l: 1,
    ml: '+1 / -1',
    geometryDesc: 'Hình số 8 nổi (quả tạ đôi) nằm dọc theo trục Y',
    nodalSurfaces: '1 mặt phẳng nút là mặt phẳng XZ (y = 0)',
    explanation: 'Gồm 2 thùy phân bố dọc theo trục Y. Vuông góc với 2pₓ và 2p𝓏.',
  },
  {
    id: '2pz',
    label: 'Orbital 2p𝓏',
    nameVi: 'Orbital p định hướng trục Z',
    n: 2,
    l: 1,
    ml: '0',
    geometryDesc: 'Hình số 8 nổi nằm dọc theo trục thẳng đứng Z',
    nodalSurfaces: '1 mặt phẳng nút là mặt phẳng XY (z = 0)',
    explanation: 'Gồm 2 thùy phân bố dọc theo trục Z. Thường được chọn làm trục liên kết σ trong hóa học lượng tử.',
  },
  {
    id: '3dz2',
    label: 'Orbital 3d𝓏²',
    nameVi: 'Orbital d𝓏² (Quả tạ có vành khăn)',
    n: 3,
    l: 2,
    ml: '0',
    geometryDesc: 'Hai thùy dọc theo trục Z và một vành xuyến (donut) nằm ở mặt phẳng XY',
    nodalSurfaces: '2 mặt nón nút đối xứng',
    explanation: 'Orbital d𝓏² có hình dạng độc đáo gồm 2 thùy dọc trục Z kết hợp với một vành khăn bánh xe bao quanh tâm ở mặt phẳng XY.',
  },
  {
    id: '3dx2-y2',
    label: 'Orbital 3dₓ²₋ᵧ²',
    nameVi: 'Orbital d cỏ 4 lá dọc theo các trục',
    n: 3,
    l: 2,
    ml: '+2 / -2',
    geometryDesc: '4 thùy hình cánh hoa nằm trực tiếp trên trục X và trục Y',
    nodalSurfaces: '2 mặt phẳng nút x = y và x = -y',
    explanation: '4 thùy hướng chính xác về phía các phối tử trong phức chất bát diện, gây ra sự tách mức năng lượng trường tinh thể.',
  },
  {
    id: '3dxy',
    label: 'Orbital 3dₓᵧ',
    nameVi: 'Orbital d cỏ 4 lá giữa trục X và Y',
    n: 3,
    l: 2,
    ml: '+2 / -2',
    geometryDesc: '4 thùy hình cỏ 4 lá nằm giữa các trục X và Y (mặt phẳng XY)',
    nodalSurfaces: '2 mặt phẳng nút x = 0 (YZ) và y = 0 (XZ)',
    explanation: '4 thùy nằm trên các đường phân giác giữa trục X và Y. Đóng vai trò then chốt trong liên kết π của kim loại chuyển tiếp.',
  },
  {
    id: '4f-overview',
    label: 'Orbital 4f (Tổng quan)',
    nameVi: 'Orbital f đa thùy phức tạp',
    n: 4,
    l: 3,
    ml: '-3 đến +3',
    geometryDesc: 'Hình dạng đa thùy (6 đến 8 thùy) với cấu trúc không gian bậc cao',
    nodalSurfaces: '3 mặt nút phức tạp',
    explanation: 'Phân lớp 4f có 7 orbital. Độ khuếch tán trong không gian lớn và bị chắn mạnh bởi các lớp e bên ngoài, tạo nên hiện tượng co lantanoid nổi tiếng.',
  },
];

export const OrbitalModel3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedOrbital, setSelectedOrbital] = useState<OrbitalType>('2px');
  const [showAxes, setShowAxes] = useState(true);
  const [opacity, setOpacity] = useState(0.75);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const orbitalGroupRef = useRef<THREE.Group | null>(null);
  const axesGroupRef = useRef<THREE.Group | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const prevMousePosRef = useRef({ x: 0, y: 0 });
  const cameraRotationRef = useRef({ theta: 0.5, phi: 1.1, radius: 14 });

  const currentOrbitalInfo = ORBITALS_CATALOG.find((o) => o.id === selectedOrbital) || ORBITALS_CATALOG[0];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    cameraRef.current = camera;
    updateCameraPosition();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(10, 15, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.8);
    dirLight2.position.set(-15, -10, -10);
    scene.add(dirLight2);

    // Center nucleus dot
    const nucleusGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const nucleusMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    scene.add(nucleus);

    // 3D Coordinate Axes with arrow indicators
    const axesGroup = new THREE.Group();
    axesGroupRef.current = axesGroup;
    scene.add(axesGroup);

    const axisRadius = 0.04;
    const axisLength = 6.5;

    // X Axis (Red)
    const xGeo = new THREE.CylinderGeometry(axisRadius, axisRadius, axisLength);
    const xMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const xAxis = new THREE.Mesh(xGeo, xMat);
    xAxis.rotation.z = -Math.PI / 2;
    axesGroup.add(xAxis);

    // Y Axis (Green)
    const yGeo = new THREE.CylinderGeometry(axisRadius, axisRadius, axisLength);
    const yMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const yAxis = new THREE.Mesh(yGeo, yMat);
    axesGroup.add(yAxis);

    // Z Axis (Blue)
    const zGeo = new THREE.CylinderGeometry(axisRadius, axisRadius, axisLength);
    const zMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    const zAxis = new THREE.Mesh(zGeo, zMat);
    zAxis.rotation.x = Math.PI / 2;
    axesGroup.add(zAxis);

    // Build the 3D mathematical mesh for the selected orbital
    const orbitalGroup = new THREE.Group();
    orbitalGroupRef.current = orbitalGroup;
    scene.add(orbitalGroup);

    buildOrbitalMesh(orbitalGroup, selectedOrbital, opacity);

    // Animation loop (slow gentle auto-rotation)
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isDraggingRef.current) {
        orbitalGroup.rotation.y += delta * 0.15;
        axesGroup.rotation.y += delta * 0.15;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Mouse / Touch handlers
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
      cameraRotationRef.current.radius = Math.max(6, Math.min(35, cameraRotationRef.current.radius + e.deltaY * 0.02));
      updateCameraPosition();
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('wheel', onWheel);
      renderer.dispose();
    };
  }, [selectedOrbital, opacity]);

  useEffect(() => {
    if (axesGroupRef.current) {
      axesGroupRef.current.visible = showAxes;
    }
  }, [showAxes]);

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

  // Construct 3D geometry representing real mathematical wave functions
  function buildOrbitalMesh(group: THREE.Group, type: OrbitalType, alpha: number) {
    const posPhaseMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Cyan (+ phase)
      emissive: 0x0891b2,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: alpha,
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    const negPhaseMat = new THREE.MeshStandardMaterial({
      color: 0xf97316, // Orange (- phase)
      emissive: 0xea580c,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: alpha,
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    // Helper: create smooth teardrop/dumbbell lobe mesh along an axis
    const createLobe = (direction: THREE.Vector3, isPositivePhase: boolean, length = 2.8, width = 1.35) => {
      const lobeGeo = new THREE.SphereGeometry(width, 32, 32);
      // Stretch into teardrop/ellipsoid pointing along vector
      const mesh = new THREE.Mesh(lobeGeo, isPositivePhase ? posPhaseMat : negPhaseMat);
      mesh.scale.set(0.8, 1.4, 0.8);

      const targetPos = direction.clone().multiplyScalar(length * 0.55);
      mesh.position.copy(targetPos);

      // Rotate to match direction vector
      const up = new THREE.Vector3(0, 1, 0);
      const quat = new THREE.Quaternion().setFromUnitVectors(up, direction.clone().normalize());
      mesh.setRotationFromQuaternion(quat);

      return mesh;
    };

    if (type === '1s') {
      const geo = new THREE.SphereGeometry(2.3, 36, 36);
      const mesh = new THREE.Mesh(geo, posPhaseMat);
      group.add(mesh);
    } else if (type === '2s') {
      // Outer sphere
      const outerGeo = new THREE.SphereGeometry(3.6, 36, 36);
      const outerMesh = new THREE.Mesh(outerGeo, posPhaseMat);
      group.add(outerMesh);

      // Inner sphere (+ phase inside)
      const innerGeo = new THREE.SphereGeometry(1.6, 28, 28);
      const innerMesh = new THREE.Mesh(innerGeo, negPhaseMat);
      group.add(innerMesh);
    } else if (type === '2px') {
      group.add(createLobe(new THREE.Vector3(1, 0, 0), true));
      group.add(createLobe(new THREE.Vector3(-1, 0, 0), false));
    } else if (type === '2py') {
      group.add(createLobe(new THREE.Vector3(0, 1, 0), true));
      group.add(createLobe(new THREE.Vector3(0, -1, 0), false));
    } else if (type === '2pz') {
      group.add(createLobe(new THREE.Vector3(0, 0, 1), true));
      group.add(createLobe(new THREE.Vector3(0, 0, -1), false));
    } else if (type === '3dz2') {
      // 2 dumbbell lobes along Z
      group.add(createLobe(new THREE.Vector3(0, 0, 1), true, 3.0, 1.2));
      group.add(createLobe(new THREE.Vector3(0, 0, -1), true, 3.0, 1.2));

      // Torus donut ring in XY plane (negative phase)
      const torusGeo = new THREE.TorusGeometry(1.6, 0.45, 24, 48);
      const torusMesh = new THREE.Mesh(torusGeo, negPhaseMat);
      // Torus by default lies in XY plane
      group.add(torusMesh);
    } else if (type === '3dx2-y2') {
      // 4 lobes along axes X and Y
      group.add(createLobe(new THREE.Vector3(1, 0, 0), true, 2.6, 1.1));
      group.add(createLobe(new THREE.Vector3(-1, 0, 0), true, 2.6, 1.1));
      group.add(createLobe(new THREE.Vector3(0, 1, 0), false, 2.6, 1.1));
      group.add(createLobe(new THREE.Vector3(0, -1, 0), false, 2.6, 1.1));
    } else if (type === '3dxy') {
      // 4 lobes between axes in XY plane (at 45 deg)
      const diag1 = new THREE.Vector3(1, 1, 0).normalize();
      const diag2 = new THREE.Vector3(-1, -1, 0).normalize();
      const diag3 = new THREE.Vector3(-1, 1, 0).normalize();
      const diag4 = new THREE.Vector3(1, -1, 0).normalize();

      group.add(createLobe(diag1, true, 2.6, 1.1));
      group.add(createLobe(diag2, true, 2.6, 1.1));
      group.add(createLobe(diag3, false, 2.6, 1.1));
      group.add(createLobe(diag4, false, 2.6, 1.1));
    } else if (type === '3dxz') {
      const diag1 = new THREE.Vector3(1, 0, 1).normalize();
      const diag2 = new THREE.Vector3(-1, 0, -1).normalize();
      const diag3 = new THREE.Vector3(-1, 0, 1).normalize();
      const diag4 = new THREE.Vector3(1, 0, -1).normalize();

      group.add(createLobe(diag1, true, 2.6, 1.1));
      group.add(createLobe(diag2, true, 2.6, 1.1));
      group.add(createLobe(diag3, false, 2.6, 1.1));
      group.add(createLobe(diag4, false, 2.6, 1.1));
    } else if (type === '3dyz') {
      const diag1 = new THREE.Vector3(0, 1, 1).normalize();
      const diag2 = new THREE.Vector3(0, -1, -1).normalize();
      const diag3 = new THREE.Vector3(0, -1, 1).normalize();
      const diag4 = new THREE.Vector3(0, 1, -1).normalize();

      group.add(createLobe(diag1, true, 2.6, 1.1));
      group.add(createLobe(diag2, true, 2.6, 1.1));
      group.add(createLobe(diag3, false, 2.6, 1.1));
      group.add(createLobe(diag4, false, 2.6, 1.1));
    } else if (type === '4f-overview') {
      // 8-lobed cubic f orbital representation
      for (let x of [-1, 1]) {
        for (let y of [-1, 1]) {
          for (let z of [-1, 1]) {
            const dir = new THREE.Vector3(x, y, z).normalize();
            const isPos = x * y * z > 0;
            group.add(createLobe(dir, isPos, 2.4, 0.85));
          }
        }
      }
    }
  }

  const handleResetCamera = () => {
    cameraRotationRef.current = { theta: 0.5, phi: 1.1, radius: 14 };
    updateCameraPosition();
  };

  const handleZoom = (delta: number) => {
    cameraRotationRef.current.radius = Math.max(6, Math.min(35, cameraRotationRef.current.radius + delta));
    updateCameraPosition();
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden select-none relative">
      {/* 3D Canvas */}
      <div
        ref={containerRef}
        className="w-full h-80 sm:h-96 md:h-[440px] relative cursor-grab active:cursor-grabbing bg-radial from-slate-900/60 to-slate-950"
      />

      {/* Floating Orbital Info Overlay */}
      <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/70 rounded-lg p-3 max-w-sm shadow-xl">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-cyan-400 font-mono">{currentOrbitalInfo.label}</span>
          <span className="text-xs text-slate-300 font-medium px-2 py-0.5 bg-slate-800 rounded">
            l = {currentOrbitalInfo.l}
          </span>
        </div>
        <p className="text-xs text-slate-200 mt-1 font-semibold">{currentOrbitalInfo.nameVi}</p>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-2 text-[11px] text-slate-400 border-t border-slate-800 pt-1.5 font-mono">
          <div>n: <span className="text-slate-200">{currentOrbitalInfo.n}</span></div>
          <div>mₗ: <span className="text-slate-200">{currentOrbitalInfo.ml}</span></div>
        </div>
        <div className="mt-1.5 text-[11px] text-slate-300">
          <span className="text-cyan-400 font-medium">Mặt phẳng nút:</span> {currentOrbitalInfo.nodalSurfaces}
        </div>
      </div>

      {/* Camera & Axes Controls */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-lg border border-slate-800 shadow-lg">
        <button
          onClick={() => setShowAxes(!showAxes)}
          className={`p-2 rounded transition ${showAxes ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:bg-slate-800'}`}
          title="Bật/Tắt hệ trục tọa độ X, Y, Z"
        >
          <Compass className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetCamera}
          className="p-2 hover:bg-slate-800 rounded text-slate-200 transition"
          title="Đặt lại góc nhìn"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(-2)}
          className="p-2 hover:bg-slate-800 rounded text-slate-200 transition"
          title="Phóng to"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(2)}
          className="p-2 hover:bg-slate-800 rounded text-slate-200 transition"
          title="Thu nhỏ"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
      </div>

      {/* Axis Color Legend */}
      {showAxes && (
        <div className="absolute bottom-16 sm:bottom-20 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-lg px-2.5 py-1.5 flex items-center gap-2.5 text-[11px] font-mono shadow-lg">
          <span className="flex items-center gap-1 text-red-400"><span className="w-2 h-2 rounded-full bg-red-500"></span> Trục X</span>
          <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Trục Y</span>
          <span className="flex items-center gap-1 text-blue-400"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Trục Z</span>
        </div>
      )}

      {/* Orbital Selector Bar */}
      <div className="bg-slate-900/95 border-t border-slate-800 p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-thin">
          <span className="text-slate-400 font-medium mr-1 whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Chọn Orbital:
          </span>
          {ORBITALS_CATALOG.map((orb) => (
            <button
              key={orb.id}
              onClick={() => setSelectedOrbital(orb.id)}
              className={`px-2.5 py-1 rounded font-mono transition ${
                selectedOrbital === orb.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              {orb.id}
            </button>
          ))}
        </div>

        {/* Phase Color Legend */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1 text-cyan-300">
            <span className="w-2.5 h-2.5 rounded bg-cyan-500"></span> Pha dương (+)
          </span>
          <span className="flex items-center gap-1 text-orange-300">
            <span className="w-2.5 h-2.5 rounded bg-orange-500"></span> Pha âm (-)
          </span>
        </div>
      </div>

      {/* Scientific explanation callout */}
      <div className="bg-slate-950 px-3 py-2 border-t border-slate-900 text-[11px] text-slate-400 flex items-center gap-1.5">
        <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span>
          <strong className="text-slate-300">Bản chất cơ học lượng tử:</strong> Orbital nguyên tử là vùng không gian xung quanh hạt nhân mà xác suất tìm thấy electron tại đó đạt khoảng 90%. Màu sắc phân biệt dấu (+/-) của hàm sóng ψ, <em>hoàn toàn không phải điện tích</em>.
        </span>
      </div>
    </div>
  );
};
