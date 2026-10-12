import React, { useState, useMemo } from 'react';
import { ElementData, ElementCategory, PeriodicTrendMetric } from '../../types/element';
import { ELEMENTS_DATA, CATEGORY_COLORS } from '../../data/elementsData';
import { ElementTile } from './ElementTile';
import { Search, Filter, Sparkles, TrendingUp, X } from 'lucide-react';

interface PeriodicTableProps {
  onSelectElement: (element: ElementData) => void;
  selectedElement?: ElementData | null;
  onOpenCompare?: () => void;
  onOpenTrends?: () => void;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({
  onSelectElement,
  selectedElement,
  onOpenCompare,
  onOpenTrends,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | 'all'>('all');
  const [trendMetric, setTrendMetric] = useState<PeriodicTrendMetric | null>(null);
  const [hoveredElement, setHoveredElement] = useState<ElementData | null>(null);

  // Group and Period coordinates map for standard 18x7 layout
  const gridElements = useMemo(() => {
    const mainTable: Array<{ element: ElementData; row: number; col: number }> = [];
    const lanthanoids: ElementData[] = [];
    const actinoids: ElementData[] = [];

    ELEMENTS_DATA.forEach((el) => {
      if (el.atomicNumber >= 57 && el.atomicNumber <= 71) {
        lanthanoids.push(el);
      } else if (el.atomicNumber >= 89 && el.atomicNumber <= 103) {
        actinoids.push(el);
      } else {
        mainTable.push({
          element: el,
          row: el.period,
          col: el.group,
        });
      }
    });

    return { mainTable, lanthanoids, actinoids };
  }, []);

  // Filter matching
  const isElementFaded = (el: ElementData): boolean => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchSymbol = el.symbol.toLowerCase() === q;
      const matchZ = el.atomicNumber.toString() === q;
      const matchName = el.nameVi.toLowerCase().includes(q) || el.nameIupac.toLowerCase().includes(q);
      if (!(matchSymbol || matchZ || matchName)) return true;
    }

    if (selectedCategory !== 'all' && el.category !== selectedCategory) {
      return true;
    }

    return false;
  };

  const previewTarget = hoveredElement || selectedElement;

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Top Search & Filter Toolbar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 sm:p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-lg">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo ký hiệu (Na, Fe), tên (Natri), số Z (11)..."
            className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Trend Heatmap Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-xs text-slate-400 font-medium whitespace-nowrap flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Tô màu theo:
          </span>
          <select
            value={trendMetric || ''}
            onChange={(e) => setTrendMetric((e.target.value as PeriodicTrendMetric) || null)}
            className="bg-slate-950 border border-slate-700 rounded-lg text-xs py-1.5 px-3 text-slate-200 focus:outline-none focus:border-cyan-400"
          >
            <option value="">Phân loại nguyên tố (Mặc định)</option>
            <option value="radius">Bán kính nguyên tử (pm)</option>
            <option value="ionization">Năng lượng ion hóa I₁ (kJ/mol)</option>
            <option value="electronegativity">Độ âm điện (Pauling)</option>
            <option value="mass">Nguyên tử khối (amu)</option>
            <option value="meltingPoint">Nhiệt độ nóng chảy (°C)</option>
          </select>

          {onOpenTrends && (
            <button
              onClick={onOpenTrends}
              className="px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-medium whitespace-nowrap transition"
            >
              Quy luật biến đổi ↗
            </button>
          )}

          {onOpenCompare && (
            <button
              onClick={onOpenCompare}
              className="px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-lg text-xs font-medium whitespace-nowrap transition"
            >
              So sánh 2-3 nguyên tố ⇄
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-thin text-xs">
        <span className="text-slate-400 font-medium whitespace-nowrap mr-1 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5 text-cyan-400" /> Nhóm chất:
        </span>
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-2.5 py-1 rounded transition whitespace-nowrap ${
            selectedCategory === 'all'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
              : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          Tất cả (118)
        </button>
        {Object.entries(CATEGORY_COLORS).map(([key, config]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(selectedCategory === key ? 'all' : (key as ElementCategory))}
            className={`px-2.5 py-1 rounded transition whitespace-nowrap flex items-center gap-1.5 border ${
              selectedCategory === key
                ? `${config.bg} ${config.border} ${config.text} font-bold ring-1 ring-cyan-400`
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${config.bg.replace('/15', '')} border border-current`}></span>
            <span>{config.labelVi}</span>
          </button>
        ))}
      </div>

      {/* Main Periodic Table Grid Container (Fits screen frame) */}
      <div className="w-full overflow-x-auto xl:overflow-x-visible bg-slate-950/70 border border-slate-800/90 rounded-2xl p-1.5 sm:p-2.5 md:p-3 shadow-2xl relative scrollbar-thin">
        {/* Outer Grid Container fitting width */}
        <div className="w-full flex flex-col gap-0.5 sm:gap-1">
          {/* Header Row: Column Numbers 1 to 18 */}
          <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-0.5 sm:gap-1 text-center font-mono text-[8px] sm:text-[9px] md:text-[10px] text-slate-400 pb-0.5">
            {Array.from({ length: 18 }, (_, i) => (
              <span key={i} className="font-semibold text-slate-400">
                {i + 1}
              </span>
            ))}
          </div>

          {/* 7 Periods */}
          {[1, 2, 3, 4, 5, 6, 7].map((periodNum) => (
            <div key={periodNum} className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-0.5 sm:gap-1 items-stretch w-full">
              {Array.from({ length: 18 }, (_, colIdx) => {
                const groupNum = colIdx + 1;

                // Handle Lanthanide placeholder in Period 6 Group 3
                if (periodNum === 6 && groupNum === 3) {
                  return (
                    <div
                      key={colIdx}
                      className="border border-indigo-500/40 bg-indigo-500/10 rounded sm:rounded-md p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-indigo-500/20 transition h-[42px] xs:h-[46px] sm:h-[52px] md:h-[58px] lg:h-[64px]"
                      onClick={() => setSelectedCategory('lanthanoid')}
                    >
                      <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-mono text-indigo-400">57-71</span>
                      <span className="text-[10px] xs:text-xs font-bold text-indigo-300 font-mono">La–Lu</span>
                      <span className="text-[7px] xs:text-[8px] text-indigo-400/80 leading-none truncate hidden sm:inline">Họ Lantan</span>
                    </div>
                  );
                }

                // Handle Actinide placeholder in Period 7 Group 3
                if (periodNum === 7 && groupNum === 3) {
                  return (
                    <div
                      key={colIdx}
                      className="border border-fuchsia-500/40 bg-fuchsia-500/10 rounded sm:rounded-md p-0.5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-fuchsia-500/20 transition h-[42px] xs:h-[46px] sm:h-[52px] md:h-[58px] lg:h-[64px]"
                      onClick={() => setSelectedCategory('actinoid')}
                    >
                      <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-mono text-fuchsia-400">89-103</span>
                      <span className="text-[10px] xs:text-xs font-bold text-fuchsia-300 font-mono">Ac–Lr</span>
                      <span className="text-[7px] xs:text-[8px] text-fuchsia-400/80 leading-none truncate hidden sm:inline">Họ Actini</span>
                    </div>
                  );
                }

                // Find element matching this cell
                const item = gridElements.mainTable.find(
                  (m) => m.row === periodNum && m.col === groupNum
                );

                if (!item) {
                  // If cell is in top center (periods 1-3, groups 3-12), let's render the Hover Preview card in period 2-3 middle!
                  if (periodNum === 2 && groupNum === 8 && previewTarget) {
                    return (
                      <div
                        key={colIdx}
                        className="col-span-6 row-span-2 absolute pointer-events-none z-10 hidden md:block"
                        style={{
                          left: '16.666%',
                          top: '12%',
                          width: '44%',
                        }}
                      >
                        <QuickElementInspector element={previewTarget} />
                      </div>
                    );
                  }
                  return <div key={colIdx} className="w-full" />;
                }

                const isFaded = isElementFaded(item.element);
                const isSelected = selectedElement?.atomicNumber === item.element.atomicNumber;

                return (
                  <ElementTile
                    key={item.element.atomicNumber}
                    element={item.element}
                    isSelected={isSelected}
                    isFaded={isFaded}
                    trendMetric={trendMetric}
                    onClick={onSelectElement}
                    onMouseEnter={(el) => setHoveredElement(el)}
                    onMouseLeave={() => setHoveredElement(null)}
                  />
                );
              })}
            </div>
          ))}

          {/* Spacer between main table and f-block */}
          <div className="h-3 sm:h-4" />

          {/* Lanthanoids Row (57-71) */}
          <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-0.5 sm:gap-1 items-stretch w-full">
            <div className="col-span-2 flex items-center justify-end pr-1 sm:pr-2 text-right">
              <span className="text-[8px] sm:text-[10px] md:text-[11px] font-semibold text-indigo-400 uppercase tracking-wider truncate">
                Họ Lantan
              </span>
            </div>
            {gridElements.lanthanoids.map((el) => {
              const isFaded = isElementFaded(el);
              const isSelected = selectedElement?.atomicNumber === el.atomicNumber;
              return (
                <ElementTile
                  key={el.atomicNumber}
                  element={el}
                  isSelected={isSelected}
                  isFaded={isFaded}
                  trendMetric={trendMetric}
                  onClick={onSelectElement}
                  onMouseEnter={(element) => setHoveredElement(element)}
                  onMouseLeave={() => setHoveredElement(null)}
                />
              );
            })}
            <div className="col-span-1" />
          </div>

          {/* Actinoids Row (89-103) */}
          <div className="grid grid-cols-[repeat(18,minmax(0,1fr))] gap-0.5 sm:gap-1 items-stretch w-full">
            <div className="col-span-2 flex items-center justify-end pr-1 sm:pr-2 text-right">
              <span className="text-[8px] sm:text-[10px] md:text-[11px] font-semibold text-fuchsia-400 uppercase tracking-wider truncate">
                Họ Actini
              </span>
            </div>
            {gridElements.actinoids.map((el) => {
              const isFaded = isElementFaded(el);
              const isSelected = selectedElement?.atomicNumber === el.atomicNumber;
              return (
                <ElementTile
                  key={el.atomicNumber}
                  element={el}
                  isSelected={isSelected}
                  isFaded={isFaded}
                  trendMetric={trendMetric}
                  onClick={onSelectElement}
                  onMouseEnter={(element) => setHoveredElement(element)}
                  onMouseLeave={() => setHoveredElement(null)}
                />
              );
            })}
            <div className="col-span-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Center preview inspector widget
const QuickElementInspector: React.FC<{ element: ElementData }> = ({ element }) => {
  const categoryConfig = CATEGORY_COLORS[element.category] || CATEGORY_COLORS.unknown;

  return (
    <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-xl p-3.5 shadow-2xl flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center border font-mono ${categoryConfig.bg} ${categoryConfig.border}`}>
          <span className="text-[11px] text-slate-400 leading-none">{element.atomicNumber}</span>
          <span className={`text-2xl font-bold leading-tight ${categoryConfig.text}`}>{element.symbol}</span>
        </div>
        <div>
          <div className="text-base font-bold text-white flex items-center gap-2">
            <span>{element.nameVi}</span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-normal">
              {element.nameIupac}
            </span>
          </div>
          <div className="text-xs text-slate-400 mt-0.5 font-mono">
            Chu kỳ {element.period} · Nhóm {element.group} · Khối lượng: {element.atomicMassString} amu
          </div>
          <div className="text-xs font-mono text-cyan-400 mt-1">
            {element.electronConfiguration}
          </div>
        </div>
      </div>

      <div className="text-right text-xs space-y-1 font-mono text-slate-300 pr-2">
        {element.atomicRadius && <div>Bán kính: <span className="text-cyan-400">{element.atomicRadius} pm</span></div>}
        {element.electronegativity && <div>Độ âm điện: <span className="text-cyan-400">{element.electronegativity}</span></div>}
        {element.firstIonizationEnergy && <div>Năng lượng I₁: <span className="text-cyan-400">{element.firstIonizationEnergy} kJ</span></div>}
      </div>
    </div>
  );
};
