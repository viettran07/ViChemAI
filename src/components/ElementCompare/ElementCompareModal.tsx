import React, { useState } from 'react';
import { ElementData } from '../../types/element';
import { ELEMENTS_DATA, CATEGORY_COLORS } from '../../data/elementsData';
import { BohrModel3D } from '../Atom3D/BohrModel3D';
import { X, ArrowRightLeft, Sparkles, BookOpen, Atom } from 'lucide-react';

interface ElementCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialElements?: ElementData[];
}

export const ElementCompareModal: React.FC<ElementCompareModalProps> = ({
  isOpen,
  onClose,
  initialElements,
}) => {
  // Elements being compared (default Na and Cl)
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>(
    initialElements && initialElements.length >= 2
      ? initialElements.map((e) => e.symbol)
      : ['Na', 'Cl']
  );
  const [show3DSideBySide, setShow3DSideBySide] = useState(false);

  if (!isOpen) return null;

  const currentElements = selectedSymbols
    .map((sym) => ELEMENTS_DATA.find((e) => e.symbol === sym))
    .filter((e): e is ElementData => e !== undefined);

  const handleSelectElementAt = (index: number, newSymbol: string) => {
    const updated = [...selectedSymbols];
    updated[index] = newSymbol;
    setSelectedSymbols(updated);
  };

  const handleAddSlot = () => {
    if (selectedSymbols.length < 3) {
      setSelectedSymbols([...selectedSymbols, 'Mg']);
    }
  };

  const handleRemoveSlot = (index: number) => {
    if (selectedSymbols.length > 2) {
      setSelectedSymbols(selectedSymbols.filter((_, i) => i !== index));
    }
  };

  // Preset quick comparisons
  const applyPreset = (symbols: string[]) => {
    setSelectedSymbols(symbols);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                So sánh Đối chiếu Các Nguyên tố Hóa học
              </h2>
              <p className="text-xs text-slate-400">
                So sánh cấu trúc nguyên tử, cấu hình electron, bán kính và tính chất hóa học
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

        {/* Preset Toolbar & Slot Controls */}
        <div className="p-3 sm:p-4 border-b border-slate-800 bg-slate-900 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-400 font-medium">Gợi ý so sánh:</span>
            <button
              onClick={() => applyPreset(['Na', 'Cl'])}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-medium transition"
            >
              Na vs Cl (Kim loại vs Phi kim)
            </button>
            <button
              onClick={() => applyPreset(['Na', 'Mg', 'Al'])}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-medium transition"
            >
              Na, Mg & Al (Chu kỳ 3)
            </button>
            <button
              onClick={() => applyPreset(['Li', 'Na', 'K'])}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-medium transition"
            >
              Li, Na & K (Nhóm IA)
            </button>
            <button
              onClick={() => applyPreset(['Fe', 'Cu'])}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-medium transition"
            >
              Fe vs Cu (Chuyển tiếp)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShow3DSideBySide(!show3DSideBySide)}
              className={`px-3 py-1.5 rounded-lg border font-medium transition flex items-center gap-1.5 ${
                show3DSideBySide
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Atom className="w-4 h-4 text-cyan-400" />
              {show3DSideBySide ? 'Hiện bảng dữ liệu' : 'So sánh mô hình 3D song song'}
            </button>
            {selectedSymbols.length < 3 && (
              <button
                onClick={handleAddSlot}
                className="px-3 py-1.5 bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 rounded-lg font-medium transition"
              >
                + Thêm nguyên tố thứ 3
              </button>
            )}
          </div>
        </div>

        {/* Selectors Bar */}
        <div className="p-3 bg-slate-950/70 border-b border-slate-800/80 flex items-center justify-around gap-4">
          {selectedSymbols.map((sym, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Nguyên tố #{idx + 1}:</span>
              <select
                value={sym}
                onChange={(e) => handleSelectElementAt(idx, e.target.value)}
                className="bg-slate-900 border border-slate-700 text-sm font-bold text-cyan-400 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-400"
              >
                {ELEMENTS_DATA.map((el) => (
                  <option key={el.symbol} value={el.symbol}>
                    {el.symbol} - {el.nameVi.split('/')[0]} (Z={el.atomicNumber})
                  </option>
                ))}
              </select>
              {selectedSymbols.length > 2 && (
                <button
                  onClick={() => handleRemoveSlot(idx)}
                  className="text-xs text-rose-400 hover:text-rose-300 p-1 rounded hover:bg-rose-500/10"
                  title="Xóa ô này"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {show3DSideBySide ? (
            /* Side by Side 3D Atoms */
            <div className={`grid grid-cols-1 ${currentElements.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4`}>
              {currentElements.map((el) => (
                <div key={el.atomicNumber} className="flex flex-col gap-2">
                  <div className="text-center font-bold text-white text-sm">
                    {el.symbol} - {el.nameVi.split('/')[0]} (Z={el.atomicNumber})
                  </div>
                  <div className="h-72 sm:h-80">
                    <BohrModel3D element={el} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Comparison Table */
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60">
                    <th className="p-3 text-slate-400 font-semibold w-1/4">Thuộc tính</th>
                    {currentElements.map((el) => {
                      const cat = CATEGORY_COLORS[el.category] || CATEGORY_COLORS.unknown;
                      return (
                        <th key={el.atomicNumber} className="p-3 text-center">
                          <div className={`font-mono text-xl font-bold ${cat.text}`}>{el.symbol}</div>
                          <div className="text-xs font-semibold text-white">{el.nameVi.split('/')[0]}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{cat.labelVi}</div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 font-mono">
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Số hiệu nguyên tử (Z)</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center text-slate-200 font-bold">
                        {el.atomicNumber}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Vị trí (Chu kỳ / Nhóm)</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center text-slate-300">
                        Chu kỳ {el.period} · Nhóm {el.group}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Cấu hình electron</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center text-cyan-400 font-bold">
                        {el.electronConfiguration}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Phân bố e theo lớp</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center text-slate-300">
                        {el.electronShells.join(' - ')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Electron lớp ngoài cùng</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center text-amber-400 font-bold">
                        {el.electronShells.slice(-1)[0]} e
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Bán kính nguyên tử</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center text-slate-300">
                        {el.atomicRadius ? `${el.atomicRadius} pm` : 'Chưa xác định'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Năng lượng ion hóa I₁</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center text-slate-300">
                        {el.firstIonizationEnergy ? `${Math.round(el.firstIonizationEnergy)} kJ/mol` : 'Chưa xác định'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Độ âm điện (Pauling)</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center text-slate-300">
                        {el.electronegativity ?? 'Chưa xác định'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-sans font-medium">Xu hướng tạo ion</td>
                    {currentElements.map((el) => (
                      <td key={el.atomicNumber} className="p-3 text-center font-sans text-xs">
                        {el.teachingNotesVi.ionTendencies.length > 0 ? (
                          <span className="text-emerald-400 font-mono font-bold">
                            {el.teachingNotesVi.ionTendencies.map((i) => i.symbol).join(', ')}
                          </span>
                        ) : (
                          <span className="text-slate-400">Chủ yếu tạo LK cộng hóa trị</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Automated Pedagogical Commentary */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 mb-2.5">
              <BookOpen className="w-4 h-4 text-cyan-400" /> Nhận xét so sánh dành cho học sinh THPT
            </h4>
            <div className="text-xs text-slate-300 leading-relaxed space-y-2">
              <GenerateComparisonComments elements={currentElements} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Generates dynamic educational comparison insight
const GenerateComparisonComments: React.FC<{ elements: ElementData[] }> = ({ elements }) => {
  if (elements.length < 2) return null;

  const el1 = elements[0];
  const el2 = elements[1];

  // Case 1: Same period
  if (el1.period === el2.period) {
    const leftEl = el1.group < el2.group ? el1 : el2;
    const rightEl = el1.group < el2.group ? el2 : el1;
    return (
      <p>
        Cả <strong>{el1.symbol}</strong> và <strong>{el2.symbol}</strong> đều thuộc <strong>Chu kỳ {el1.period}</strong> (có cùng {el1.electronShells.length} lớp electron).
        Từ trái sang phải trong chu kỳ, điện tích hạt nhân tăng từ Z={leftEl.atomicNumber} lên Z={rightEl.atomicNumber}, lực hút của hạt nhân với electron lớp ngoài cùng tăng dần khiến{' '}
        <strong>bán kính của {rightEl.symbol} nhỏ hơn {leftEl.symbol}</strong>, đồng thời độ âm điện và năng lượng ion hóa có xu hướng tăng dần.
      </p>
    );
  }

  // Case 2: Same group
  if (el1.group === el2.group) {
    const topEl = el1.period < el2.period ? el1 : el2;
    const bottomEl = el1.period < el2.period ? el2 : el1;
    return (
      <p>
        Cả <strong>{el1.symbol}</strong> và <strong>{el2.symbol}</strong> đều thuộc <strong>Nhóm {el1.group}</strong> (có cùng số electron lớp ngoài cùng).
        Đi từ trên xuống dưới trong nhóm, số lớp electron tăng từ {topEl.electronShells.length} lên {bottomEl.electronShells.length} lớp, hiệu ứng chắn tăng mạnh làm{' '}
        <strong>bán kính nguyên tử của {bottomEl.symbol} lớn hơn đáng kể so với {topEl.symbol}</strong>, electron hóa trị liên kết lỏng lẻo hơn nên năng lượng ion hóa giảm.
      </p>
    );
  }

  // Default comparison
  return (
    <p>
      So sánh giữa kim loại/phi kim: <strong>{el1.symbol}</strong> (Z={el1.atomicNumber}, {el1.electronShells.slice(-1)[0]}e lớp ngoài cùng) và{' '}
      <strong>{el2.symbol}</strong> (Z={el2.atomicNumber}, {el2.electronShells.slice(-1)[0]}e lớp ngoài cùng).
      Số electron lớp ngoài cùng quyết định bản chất hóa học: nguyên tố có 1, 2, 3e ngoài cùng có xu hướng nhường electron (tính kim loại), trong khi nguyên tố có 5, 6, 7e ngoài cùng có xu hướng nhận thêm electron để đạt bát thể bền vững (tính phi kim).
    </p>
  );
};
