import React, { useState } from 'react';
import { ElementData, PeriodicTrendMetric } from '../../types/element';
import { ELEMENTS_DATA } from '../../data/elementsData';
import { TrendingUp, ArrowRight, ArrowDown, HelpCircle, X, Layers } from 'lucide-react';

interface PeriodicTrendsExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectElement?: (element: ElementData) => void;
}

type SeriesMode = 'period2' | 'period3' | 'group1' | 'group17';

export const PeriodicTrendsExplorer: React.FC<PeriodicTrendsExplorerProps> = ({
  isOpen,
  onClose,
  onSelectElement,
}) => {
  const [activeMetric, setActiveMetric] = useState<PeriodicTrendMetric>('radius');
  const [activeSeries, setActiveSeries] = useState<SeriesMode>('period3');

  if (!isOpen) return null;

  // Filter elements according to selected series
  const seriesElements: ElementData[] = (() => {
    switch (activeSeries) {
      case 'period2':
        return ELEMENTS_DATA.filter((e) => e.period === 2);
      case 'period3':
        return ELEMENTS_DATA.filter((e) => e.period === 3);
      case 'group1':
        return ELEMENTS_DATA.filter((e) => e.group === 1);
      case 'group17':
        return ELEMENTS_DATA.filter((e) => e.group === 17);
    }
  })();

  // Extract chart values
  const chartData = seriesElements.map((el) => {
    let val: number | null = null;
    let label = '';

    if (activeMetric === 'radius') {
      val = el.atomicRadius;
      label = val ? `${val} pm` : 'N/A';
    } else if (activeMetric === 'ionization') {
      val = el.firstIonizationEnergy;
      label = val ? `${Math.round(val)} kJ` : 'N/A';
    } else if (activeMetric === 'electronegativity') {
      val = el.electronegativity;
      label = val ? val.toFixed(2) : 'N/A';
    } else if (activeMetric === 'meltingPoint') {
      val = el.meltingPoint;
      label = val !== null ? `${val}°C` : 'N/A';
    } else if (activeMetric === 'mass') {
      val = el.atomicMass;
      label = el.atomicMassString;
    }

    return {
      element: el,
      value: val,
      displayLabel: label,
    };
  });

  const numericValues = chartData.map((d) => d.value).filter((v): v is number => v !== null);
  const maxVal = numericValues.length ? Math.max(...numericValues) : 1;
  const minVal = numericValues.length ? Math.min(0, Math.min(...numericValues)) : 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Khám phá Quy luật & Xu hướng Tuần hoàn
              </h2>
              <p className="text-xs text-slate-400">
                Quan sát sự biến đổi tuần hoàn về cấu tạo và tính chất của các nguyên tố theo chu kỳ và nhóm
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-300 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metric Selector & Series Selector Toolbar */}
        <div className="p-4 border-b border-slate-800 bg-slate-900 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-medium">Đại lượng:</span>
            <MetricButton
              active={activeMetric === 'radius'}
              onClick={() => setActiveMetric('radius')}
              label="Bán kính nguyên tử"
            />
            <MetricButton
              active={activeMetric === 'ionization'}
              onClick={() => setActiveMetric('ionization')}
              label="Năng lượng ion hóa I₁"
            />
            <MetricButton
              active={activeMetric === 'electronegativity'}
              onClick={() => setActiveMetric('electronegativity')}
              label="Độ âm điện"
            />
            <MetricButton
              active={activeMetric === 'meltingPoint'}
              onClick={() => setActiveMetric('meltingPoint')}
              label="Nhiệt độ nóng chảy"
            />
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-medium">Khảo sát theo:</span>
            <SeriesButton
              active={activeSeries === 'period3'}
              onClick={() => setActiveSeries('period3')}
              label="Chu kỳ 3 (Na → Ar)"
            />
            <SeriesButton
              active={activeSeries === 'period2'}
              onClick={() => setActiveSeries('period2')}
              label="Chu kỳ 2 (Li → Ne)"
            />
            <SeriesButton
              active={activeSeries === 'group1'}
              onClick={() => setActiveSeries('group1')}
              label="Nhóm IA (Kiềm)"
            />
            <SeriesButton
              active={activeSeries === 'group17'}
              onClick={() => setActiveSeries('group17')}
              label="Nhóm VIIA (Halogen)"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Trend Bar Chart Visualization */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Biểu đồ biến đổi {getMetricName(activeMetric)} theo {getSeriesName(activeSeries)}
              </h4>
              <span className="text-xs text-cyan-400 font-mono">
                {activeSeries.startsWith('period') ? 'Trái → Phải' : 'Trên → Dưới'}
              </span>
            </div>

            {/* Bars container */}
            <div className="h-56 sm:h-64 flex items-end justify-between gap-2 sm:gap-4 pt-6 pb-2 px-2 border-b border-slate-800">
              {chartData.map((item, idx) => {
                const heightPercent =
                  item.value !== null && maxVal > minVal
                    ? Math.max(10, Math.round(((item.value - minVal) / (maxVal - minVal)) * 92))
                    : 0;

                return (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                    onClick={() => onSelectElement && onSelectElement(item.element)}
                  >
                    {/* Floating Value */}
                    <span className="text-[10px] sm:text-xs font-mono text-cyan-400 mb-1.5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition truncate">
                      {item.displayLabel}
                    </span>

                    {/* Bar */}
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[42px] bg-gradient-to-t from-cyan-600/80 to-cyan-400 rounded-t-md group-hover:from-cyan-500 group-hover:to-cyan-300 transition-all duration-300 relative shadow-md shadow-cyan-500/10"
                    />

                    {/* Element Label below */}
                    <div className="mt-2 text-center">
                      <span className="font-mono font-bold text-xs sm:text-sm text-white block group-hover:text-cyan-300">
                        {item.element.symbol}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono block">
                        Z={item.element.atomicNumber}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scientific Trend Rules & Explanations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* In a Period */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <ArrowRight className="w-4 h-4 text-cyan-400" /> Quy luật trong một Chu kỳ (Trái → Phải)
              </div>
              <p className="text-slate-300 leading-relaxed">
                Khi đi từ trái sang phải trong cùng một chu kỳ:
              </p>
              <ul className="space-y-1.5 text-slate-400 pl-4 list-disc">
                <li>
                  <strong className="text-slate-200">Bán kính nguyên tử:</strong> Giảm dần (do điện tích hạt nhân Z tăng, số lớp e không đổi, lực hút của hạt nhân với electron lớp ngoài cùng tăng).
                </li>
                <li>
                  <strong className="text-slate-200">Năng lượng ion hóa thứ nhất (I₁):</strong> Nhìn chung tăng dần (do bán kính giảm, electron gắn kết chặt chẽ hơn).
                </li>
                <li>
                  <strong className="text-slate-200">Độ âm điện:</strong> Tăng dần (khả năng hút cặp electron liên kết tăng).
                </li>
                <li>
                  <strong className="text-slate-200">Tính kim loại & phi kim:</strong> Tính kim loại giảm dần, tính phi kim tăng dần.
                </li>
              </ul>
            </div>

            {/* In a Group */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-300">
                <ArrowDown className="w-4 h-4 text-indigo-400" /> Quy luật trong một Nhóm A (Trên → Dưới)
              </div>
              <p className="text-slate-300 leading-relaxed">
                Khi đi từ trên xuống dưới trong cùng một phân nhóm chính:
              </p>
              <ul className="space-y-1.5 text-slate-400 pl-4 list-disc">
                <li>
                  <strong className="text-slate-200">Bán kính nguyên tử:</strong> Tăng dần (do số lớp electron tăng lên sau mỗi chu kỳ, hiệu ứng chắn của các lớp e bên trong tăng).
                </li>
                <li>
                  <strong className="text-slate-200">Năng lượng ion hóa thứ nhất (I₁):</strong> Nhìn chung giảm dần (electron ngoài cùng ở xa hạt nhân hơn nên dễ bứt ra hơn).
                </li>
                <li>
                  <strong className="text-slate-200">Độ âm điện:</strong> Giảm dần (lực hút electron giảm do bán kính tăng).
                </li>
                <li>
                  <strong className="text-slate-200">Tính kim loại & phi kim:</strong> Tính kim loại tăng dần, tính phi kim giảm dần.
                </li>
              </ul>
            </div>
          </div>

          {/* Educational Note */}
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-slate-300">Lưu ý khoa học:</strong> Các xu hướng trên là quy luật biến đổi tổng quát. Trong thực nghiệm có các ngoại lệ cục bộ (ví dụ: năng lượng ion hóa của N cao hơn O do cấu hình 2p³ bán bão hòa bền của Nitơ).
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricButton: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({
  active,
  onClick,
  label,
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg font-medium transition ${
      active
        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
    }`}
  >
    {label}
  </button>
);

const SeriesButton: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({
  active,
  onClick,
  label,
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg font-medium transition ${
      active
        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-semibold'
        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
    }`}
  >
    {label}
  </button>
);

function getMetricName(m: PeriodicTrendMetric): string {
  switch (m) {
    case 'radius':
      return 'Bán kính nguyên tử (pm)';
    case 'ionization':
      return 'Năng lượng ion hóa I₁ (kJ/mol)';
    case 'electronegativity':
      return 'Độ âm điện (Pauling)';
    case 'meltingPoint':
      return 'Nhiệt độ nóng chảy (°C)';
    case 'mass':
      return 'Nguyên tử khối (amu)';
    default:
      return '';
  }
}

function getSeriesName(s: SeriesMode): string {
  switch (s) {
    case 'period2':
      return 'Chu kỳ 2';
    case 'period3':
      return 'Chu kỳ 3';
    case 'group1':
      return 'Nhóm IA (Kim loại kiềm)';
    case 'group17':
      return 'Nhóm VIIA (Halogen)';
  }
}
