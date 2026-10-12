import React, { useState } from 'react';
import { ElementData, IonVariant } from '../../types/element';
import { CheckCircle2, AlertTriangle, ArrowUp, ArrowDown, BookOpen, Layers } from 'lucide-react';

interface ElectronConfigurationViewProps {
  element: ElementData;
  activeIon?: IonVariant | null;
}

interface SubshellBoxData {
  name: string; // "1s", "2p", "3d", etc.
  type: 's' | 'p' | 'd' | 'f';
  boxes: Array<Array<'up' | 'down'>>; // array of electron spin lists per box
  maxElectrons: number;
  electronCount: number;
}

// Order of subshell filling by (n + l) Aufbau / Klechkovski principle
const AUFBAU_ORDER: Array<{ name: string; type: 's' | 'p' | 'd' | 'f'; capacity: number }> = [
  { name: '1s', type: 's', capacity: 2 },
  { name: '2s', type: 's', capacity: 2 },
  { name: '2p', type: 'p', capacity: 6 },
  { name: '3s', type: 's', capacity: 2 },
  { name: '3p', type: 'p', capacity: 6 },
  { name: '4s', type: 's', capacity: 2 },
  { name: '3d', type: 'd', capacity: 10 },
  { name: '4p', type: 'p', capacity: 6 },
  { name: '5s', type: 's', capacity: 2 },
  { name: '4d', type: 'd', capacity: 10 },
  { name: '5p', type: 'p', capacity: 6 },
  { name: '6s', type: 's', capacity: 2 },
  { name: '4f', type: 'f', capacity: 14 },
  { name: '5d', type: 'd', capacity: 10 },
  { name: '6p', type: 'p', capacity: 6 },
  { name: '7s', type: 's', capacity: 2 },
  { name: '5f', type: 'f', capacity: 14 },
  { name: '6d', type: 'd', capacity: 10 },
  { name: '7p', type: 'p', capacity: 6 },
];

export const ElectronConfigurationView: React.FC<ElectronConfigurationViewProps> = ({
  element,
  activeIon,
}) => {
  const [showAllSubshells, setShowAllSubshells] = useState(false);

  const electronCount = activeIon ? activeIon.electronCount : element.protons;
  const configString = activeIon ? activeIon.electronConfiguration : element.electronConfiguration;
  const shells = activeIon ? activeIon.electronShells : element.electronShells;

  // Calculate box diagram filling based on Hund's rule and Pauli's principle
  const subshellBoxes = calculateOrbitalBoxes(element, electronCount);

  // Check if element has an anomalous ground state
  const isAnomaly = ['Cr', 'Cu', 'Nb', 'Mo', 'Ru', 'Rh', 'Pd', 'Ag', 'Pt', 'Au'].includes(element.symbol);

  return (
    <div className="space-y-6 text-slate-200">
      {/* Configuration Badges */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>Cấu hình electron {activeIon ? `Ion ${activeIon.symbol}` : `Nguyên tử ${element.symbol}`}</span>
          {isAnomaly && !activeIon && (
            <span className="flex items-center gap-1 text-amber-400 text-xs normal-case bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              <AlertTriangle className="w-3.5 h-3.5" /> Ngoại lệ bán bão hòa / bão hòa d
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-baseline gap-3">
          <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-400 bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
            {formatElectronConfig(configString)}
          </div>
        </div>

        {/* Shell distribution */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-medium flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-indigo-400" /> Phân bố theo lớp:
          </span>
          {shells.map((count, idx) => {
            const shellName = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'][idx];
            return (
              <div key={idx} className="bg-slate-800 px-2.5 py-1 rounded font-mono text-slate-300">
                <span className="text-cyan-400 font-bold">{shellName}</span>: {count}e
              </div>
            );
          })}
        </div>
      </div>

      {/* Orbital Box Diagram (Sơ đồ ô orbital) */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" /> Sơ đồ ô orbital (Quy tắc Hund & Pauli)
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Mỗi ô vuông biểu diễn 1 orbital. Mũi tên (↑/↓) biểu diễn spin của electron (+1/2 và -1/2).
            </p>
          </div>
          <button
            onClick={() => setShowAllSubshells(!showAllSubshells)}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium transition"
          >
            {showAllSubshells ? 'Thu gọn các lớp trong' : 'Hiện toàn bộ các lớp'}
          </button>
        </div>

        {/* Boxes display */}
        <div className="space-y-3 overflow-x-auto py-2">
          {subshellBoxes
            .filter((sub) => (showAllSubshells ? true : sub.electronCount > 0))
            .map((sub, sIdx) => (
              <div key={sIdx} className="flex items-center gap-3 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/70">
                <div className="w-12 font-mono font-bold text-cyan-400 text-sm shrink-0">
                  {sub.name}
                  <span className="text-[11px] font-normal text-slate-400 block">
                    ({sub.electronCount}/{sub.maxElectrons}e)
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {sub.boxes.map((electrons, bIdx) => (
                    <div
                      key={bIdx}
                      className="w-9 h-11 border-2 border-slate-700 bg-slate-900 rounded flex items-center justify-center gap-0.5 relative group hover:border-cyan-500 transition"
                    >
                      {electrons.includes('up') && (
                        <ArrowUp className="w-4 h-4 text-cyan-400 stroke-[2.5]" />
                      )}
                      {electrons.includes('down') && (
                        <ArrowDown className="w-4 h-4 text-rose-400 stroke-[2.5]" />
                      )}
                      {electrons.length === 0 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Chemical Rules Applied */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3">
          <div className="flex items-center gap-1.5 font-semibold text-cyan-300 mb-1">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Nguyên lý vững bền
          </div>
          <p className="text-slate-400 leading-relaxed">
            Electron lần lượt chiếm các orbital có mức năng lượng từ thấp đến cao theo quy tắc Klechkovski (tổng số lượng tử n + l tăng dần).
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3">
          <div className="flex items-center gap-1.5 font-semibold text-indigo-300 mb-1">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Nguyên lý Pauli
          </div>
          <p className="text-slate-400 leading-relaxed">
            Trong một orbital chỉ có thể chứa tối đa 2 electron và hai electron này phải có spin ngược nhau (tự quay ngược chiều nhau ↑↓).
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3">
          <div className="flex items-center gap-1.5 font-semibold text-amber-300 mb-1">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Quy tắc Hund
          </div>
          <p className="text-slate-400 leading-relaxed">
            Trong cùng một phân lớp, các electron phân bố sao cho số electron độc thân là cực đại và các spin phải song song cùng hướng.
          </p>
        </div>
      </div>
    </div>
  );
};

// Formatter to render superscript numbers in configurations
function formatElectronConfig(config: string): React.ReactNode {
  // Replace numbers following s, p, d, f with superscripts
  const parts = config.split(' ');
  return (
    <span>
      {parts.map((p, idx) => {
        const match = p.match(/^([1-7][spdf])(\d+)$/);
        if (match) {
          return (
            <span key={idx} className="mr-1.5 inline-block">
              {match[1]}
              <sup>{match[2]}</sup>
            </span>
          );
        }
        return <span key={idx} className="mr-1.5 inline-block">{p}</span>;
      })}
    </span>
  );
}

// Calculate box distribution conforming strictly to Hund's rule
function calculateOrbitalBoxes(element: ElementData, totalElectrons: number): SubshellBoxData[] {
  let remaining = totalElectrons;
  const result: SubshellBoxData[] = [];

  // Special overrides for classic transition metal anomalies (Cr, Cu)
  const isCr = element.symbol === 'Cr' && totalElectrons === 24;
  const isCu = element.symbol === 'Cu' && totalElectrons === 29;

  for (const item of AUFBAU_ORDER) {
    if (remaining <= 0) {
      result.push({
        name: item.name,
        type: item.type,
        boxes: getEmptyBoxes(item.type),
        maxElectrons: item.capacity,
        electronCount: 0,
      });
      continue;
    }

    let count = Math.min(remaining, item.capacity);

    // Apply Cr anomaly: 3d5 4s1
    if (isCr) {
      if (item.name === '4s') count = 1;
      if (item.name === '3d') count = 5;
    }
    // Apply Cu anomaly: 3d10 4s1
    if (isCu) {
      if (item.name === '4s') count = 1;
      if (item.name === '3d') count = 10;
    }

    remaining -= count;

    // Distribute count electrons across boxes following Hund's rule
    const boxCount = item.capacity / 2;
    const boxes: Array<Array<'up' | 'down'>> = Array.from({ length: boxCount }, () => []);

    // Pass 1: Add spin up
    for (let b = 0; b < boxCount && b < count; b++) {
      boxes[b].push('up');
    }
    // Pass 2: Add spin down for remaining
    if (count > boxCount) {
      const extra = count - boxCount;
      for (let b = 0; b < extra; b++) {
        boxes[b].push('down');
      }
    }

    result.push({
      name: item.name,
      type: item.type,
      boxes,
      maxElectrons: item.capacity,
      electronCount: count,
    });
  }

  return result;
}

function getEmptyBoxes(type: 's' | 'p' | 'd' | 'f'): Array<Array<'up' | 'down'>> {
  const count = type === 's' ? 1 : type === 'p' ? 3 : type === 'd' ? 5 : 7;
  return Array.from({ length: count }, () => []);
}
