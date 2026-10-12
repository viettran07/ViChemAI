import React, { useState } from 'react';
import { ElementData } from '../../types/element';
import { ELEMENTS_DATA } from '../../data/elementsData';
import { BohrModel3D } from '../Atom3D/BohrModel3D';
import { OrbitalModel3D } from '../Atom3D/OrbitalModel3D';
import { ElectronConfigurationView } from '../ElectronConfig/ElectronConfigurationView';
import {
  Maximize2,
  Minimize2,
  Atom,
  Binary,
  Compass,
  HelpCircle,
  Eye,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface TeacherPresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
  selectedElement: ElementData;
  onSelectElement: (el: ElementData) => void;
}

const CLASSROOM_QUESTIONS = [
  {
    question: 'Hãy xác định số electron ở lớp ngoài cùng của nguyên tử này và dự đoán tính kim loại hay phi kim?',
    answer: (el: ElementData) => {
      const valence = el.electronShells.slice(-1)[0];
      const type = valence <= 3 && el.atomicNumber !== 2 ? 'Kim loại (xu hướng nhường e)' : valence >= 5 ? 'Phi kim (xu hướng nhận e)' : 'Á kim hoặc khí hiếm';
      return `Nguyên tố ${el.symbol} có ${valence} electron lớp ngoài cùng. Dự đoán tính chất: ${type}.`;
    },
  },
  {
    question: 'Giải thích vì sao nguyên tố này lại xếp ở vị trí chu kỳ và nhóm hiện tại?',
    answer: (el: ElementData) => {
      return `Nguyên tố ${el.symbol} có ${el.electronShells.length} lớp electron nên thuộc Chu kỳ ${el.period}. Có ${el.electronShells.slice(-1)[0]}e hóa trị (thuộc khối ${el.block}) nên xếp ở Nhóm ${el.group}.`;
    },
  },
  {
    question: 'Viết phương trình quá trình tạo ion đặc trưng của nguyên tố này và nêu cấu hình electron của ion tạo thành?',
    answer: (el: ElementData) => {
      if (el.teachingNotesVi.ionTendencies.length > 0) {
        const ion = el.teachingNotesVi.ionTendencies[0];
        return `Phương trình: ${ion.equation}. Cấu hình electron ion: ${ion.electronConfiguration}. ${ion.explanation}`;
      }
      return `${el.symbol} thường tham gia tạo liên kết cộng hóa trị để dùng chung electron đạt cấu hình bền vững.`;
    },
  },
];

export const TeacherPresentationMode: React.FC<TeacherPresentationModeProps> = ({
  isOpen,
  onClose,
  selectedElement,
  onSelectElement,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeView, setActiveView] = useState<'bohr' | 'orbital' | 'config'>('bohr');
  const [questionIdx, setQuestionIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!isOpen) return null;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const currentQ = CLASSROOM_QUESTIONS[questionIdx];

  const prevElement = ELEMENTS_DATA.find((e) => e.atomicNumber === selectedElement.atomicNumber - 1);
  const nextElement = ELEMENTS_DATA.find((e) => e.atomicNumber === selectedElement.atomicNumber + 1);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col overflow-hidden select-none animate-in fade-in duration-200">
      {/* Top Projector Toolbar */}
      <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black font-mono text-cyan-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
              {selectedElement.symbol}
            </span>
            <div>
              <div className="text-xl font-bold flex items-center gap-2">
                <span>{selectedElement.nameVi}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono">
                  Z = {selectedElement.atomicNumber}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Chu kỳ {selectedElement.period} · Nhóm {selectedElement.group} · {selectedElement.atomicMassString} amu
              </div>
            </div>
          </div>

          {/* Quick Element Switcher */}
          <div className="flex items-center gap-1 ml-4 border-l border-slate-800 pl-4">
            <select
              value={selectedElement.symbol}
              onChange={(e) => {
                const found = ELEMENTS_DATA.find((el) => el.symbol === e.target.value);
                if (found) onSelectElement(found);
              }}
              className="bg-slate-950 border border-slate-700 text-sm font-bold text-cyan-400 rounded-lg px-3 py-1.5 focus:outline-none"
            >
              {ELEMENTS_DATA.map((el) => (
                <option key={el.symbol} value={el.symbol}>
                  {el.atomicNumber}. {el.symbol} - {el.nameVi.split('/')[0]}
                </option>
              ))}
            </select>
            {prevElement && (
              <button
                onClick={() => onSelectElement(prevElement)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                title="Nguyên tố trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            {nextElement && (
              <button
                onClick={() => onSelectElement(nextElement)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                title="Nguyên tố kế tiếp"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* View Switchers & Controls */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center gap-1 text-xs">
            <button
              onClick={() => setActiveView('bohr')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
                activeView === 'bohr'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Atom className="w-4 h-4 text-cyan-400" /> Mô hình Bohr 3D
            </button>
            <button
              onClick={() => setActiveView('orbital')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
                activeView === 'orbital'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4 text-emerald-400" /> Orbital 3D
            </button>
            <button
              onClick={() => setActiveView('config')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
                activeView === 'config'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Binary className="w-4 h-4 text-indigo-400" /> Cấu hình e & Ô orbital
            </button>
          </div>

          <button
            onClick={toggleFullscreen}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            title={isFullscreen ? 'Thu nhỏ cửa sổ' : 'Toàn màn hình trình chiếu'}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-300 transition"
            title="Thoát chế độ trình chiếu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Presentation Stage */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden p-4 sm:p-6 gap-6">
        {/* Left Column: 3D or Electron Model */}
        <div className="flex-1 h-full min-h-[420px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative bg-slate-900/60 flex flex-col justify-center">
          {activeView === 'bohr' && <BohrModel3D element={selectedElement} />}
          {activeView === 'orbital' && <OrbitalModel3D />}
          {activeView === 'config' && (
            <div className="p-6 overflow-y-auto h-full">
              <ElectronConfigurationView element={selectedElement} />
            </div>
          )}
        </div>

        {/* Right Column: Classroom Interaction & Questions Box */}
        <div className="w-full lg:w-96 flex flex-col gap-4">
          {/* Quick Specs Cards */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3 font-mono text-xs">
            <div className="text-slate-400 uppercase tracking-wider font-bold text-[11px] font-sans flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Thông số giảng dạy nhanh
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-200">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-sans">Cấu hình electron</span>
                <span className="font-bold text-cyan-400 text-xs sm:text-sm">{selectedElement.electronConfiguration}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-sans">Lớp e ngoài cùng</span>
                <span className="font-bold text-amber-400 text-xs sm:text-sm">{selectedElement.electronShells.slice(-1)[0]} electron</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-sans">Bán kính nguyên tử</span>
                <span className="font-bold text-emerald-400 text-xs sm:text-sm">{selectedElement.atomicRadius ? `${selectedElement.atomicRadius} pm` : 'N/A'}</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-sans">Độ âm điện</span>
                <span className="font-bold text-indigo-400 text-xs sm:text-sm">{selectedElement.electronegativity ?? 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Classroom Question Interactive Projector Widget */}
          <div className="flex-1 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" /> Câu hỏi cho cả lớp
                </span>
                <div className="flex items-center gap-1">
                  {CLASSROOM_QUESTIONS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setQuestionIdx(i);
                        setShowAnswer(false);
                      }}
                      className={`w-6 h-6 rounded-md font-mono text-xs font-bold transition ${
                        questionIdx === i
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <p className="text-base font-semibold text-white leading-relaxed">
                {currentQ.question}
              </p>

              {/* Answer Disclosure Box */}
              {showAnswer && (
                <div className="p-4 bg-emerald-500/15 border border-emerald-500/40 rounded-xl text-xs sm:text-sm text-emerald-200 leading-relaxed animate-in fade-in duration-200">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-300 mb-1">
                    <CheckCircle2 className="w-4 h-4" /> Đáp án chuẩn giáo khoa:
                  </div>
                  {currentQ.answer(selectedElement)}
                </div>
              )}
            </div>

            {/* Answer Toggle Button */}
            <div className="pt-4 border-t border-slate-800 mt-4">
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className={`w-full py-3 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg ${
                  showAnswer
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                }`}
              >
                <Eye className="w-4 h-4" />
                {showAnswer ? 'Ẩn đáp án' : 'Hiện đáp án chuẩn cho lớp'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
