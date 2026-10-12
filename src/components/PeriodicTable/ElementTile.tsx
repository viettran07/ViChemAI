import React from 'react';
import { ElementData, PeriodicTrendMetric } from '../../types/element';
import { CATEGORY_COLORS } from '../../data/elementsData';

interface ElementTileProps {
  element: ElementData;
  isSelected?: boolean;
  isFaded?: boolean;
  trendMetric?: PeriodicTrendMetric | null;
  onClick: (element: ElementData) => void;
  onMouseEnter?: (element: ElementData) => void;
  onMouseLeave?: () => void;
}

export const ElementTile: React.FC<ElementTileProps> = ({
  element,
  isSelected,
  isFaded,
  trendMetric,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const categoryConfig = CATEGORY_COLORS[element.category] || CATEGORY_COLORS.unknown;

  // Compute trend-based background heat colors if trend mode is active
  let customStyle: React.CSSProperties = {};
  let trendDisplayValue: string | null = null;

  if (trendMetric) {
    const { color, display } = getTrendColorAndValue(element, trendMetric);
    if (color) {
      customStyle = { backgroundColor: color };
    }
    trendDisplayValue = display;
  }

  return (
    <button
      onClick={() => onClick(element)}
      onMouseEnter={() => onMouseEnter && onMouseEnter(element)}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
      style={customStyle}
      className={`relative group min-w-0 w-full flex flex-col justify-between p-0.5 sm:p-1 rounded sm:rounded-md text-left transition-all duration-150 cursor-pointer select-none h-[42px] xs:h-[46px] sm:h-[52px] md:h-[58px] lg:h-[64px] border ${
        isSelected
          ? 'ring-2 ring-cyan-400 ring-offset-1 sm:ring-offset-2 ring-offset-slate-950 z-20 scale-105 shadow-lg shadow-cyan-500/20 ' +
            categoryConfig.bg + ' ' + categoryConfig.border
          : isFaded
          ? 'opacity-25 grayscale hover:opacity-100 hover:grayscale-0 border-slate-800 bg-slate-900/40'
          : !trendMetric
          ? `${categoryConfig.bg} ${categoryConfig.border} hover:border-cyan-400 hover:scale-105 hover:z-10 hover:shadow-md`
          : 'border-slate-700/80 hover:border-white hover:scale-105 hover:z-10'
      }`}
      aria-label={`${element.symbol} - ${element.nameVi}`}
    >
      {/* Top Row: Atomic Number Z & State/Mass indicator */}
      <div className="flex items-start justify-between w-full leading-none">
        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono font-medium text-slate-400 group-hover:text-cyan-300">
          {element.atomicNumber}
        </span>
        <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 hidden xl:inline">
          {element.electronShells.slice(-1)[0]}e
        </span>
      </div>

      {/* Middle: Symbol */}
      <div className="text-center w-full my-auto">
        <span
          className={`font-mono font-bold tracking-tight text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-none drop-shadow-sm ${
            trendMetric ? 'text-white' : categoryConfig.text
          }`}
        >
          {element.symbol}
        </span>
      </div>

      {/* Bottom: Vietnamese name or Trend Value */}
      <div className="w-full text-center leading-tight truncate">
        {trendDisplayValue ? (
          <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-mono font-bold text-white drop-shadow truncate block">
            {trendDisplayValue}
          </span>
        ) : (
          <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-sans text-slate-300 truncate block">
            {element.nameVi.split('/')[0].trim()}
          </span>
        )}
      </div>
    </button>
  );
};

// Calculate normalized heatmap colors for periodic trends
function getTrendColorAndValue(
  el: ElementData,
  metric: PeriodicTrendMetric
): { color: string | null; display: string | null } {
  if (metric === 'radius') {
    const val = el.atomicRadius;
    if (val === null) return { color: null, display: '—' };
    // Radii range approx 30pm (He) to 300pm (Cs)
    const ratio = Math.max(0, Math.min(1, (val - 30) / 260));
    // Blue (small) to Green to Yellow to Red (large)
    const color = `rgba(${Math.round(ratio * 240)}, ${Math.round(180 - ratio * 100)}, ${Math.round(255 - ratio * 200)}, 0.45)`;
    return { color, display: `${val} pm` };
  }

  if (metric === 'ionization') {
    const val = el.firstIonizationEnergy;
    if (val === null) return { color: null, display: '—' };
    // IE range ~380 (Cs) to 2372 (He)
    const ratio = Math.max(0, Math.min(1, (val - 380) / 1900));
    const color = `rgba(${Math.round(180 * ratio)}, ${Math.round(80 + ratio * 120)}, ${Math.round(250 - ratio * 150)}, 0.45)`;
    return { color, display: `${Math.round(val)} kJ` };
  }

  if (metric === 'electronegativity') {
    const val = el.electronegativity;
    if (val === null) return { color: null, display: '—' };
    // Range 0.7 (Fr) to 4.0 (F)
    const ratio = Math.max(0, Math.min(1, (val - 0.7) / 3.3));
    const color = `rgba(${Math.round(245 * ratio)}, ${Math.round(100 + ratio * 80)}, ${Math.round(50 + (1 - ratio) * 200)}, 0.45)`;
    return { color, display: val.toFixed(2) };
  }

  if (metric === 'mass') {
    const val = el.atomicMass;
    if (val === null) return { color: null, display: '—' };
    const ratio = Math.max(0, Math.min(1, val / 294));
    const color = `rgba(${Math.round(60 + ratio * 180)}, ${Math.round(120 - ratio * 60)}, ${Math.round(220 - ratio * 120)}, 0.45)`;
    return { color, display: el.atomicMassString };
  }

  if (metric === 'meltingPoint') {
    const val = el.meltingPoint;
    if (val === null) return { color: null, display: '—' };
    // Range -272 to 3422 (W)
    const ratio = Math.max(0, Math.min(1, (val + 272) / 3700));
    const color = `rgba(${Math.round(ratio * 255)}, ${Math.round(80 + (1 - ratio) * 100)}, ${Math.round(60)}, 0.45)`;
    return { color, display: `${Math.round(val)}°C` };
  }

  return { color: null, display: null };
}
