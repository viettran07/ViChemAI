import React, { useState } from 'react';
import { ElementData } from './types/element';
import { ELEMENTS_DATA } from './data/elementsData';
import { Header } from './components/Header';
import { PeriodicTable } from './components/PeriodicTable/PeriodicTable';
import { ElementDetailModal } from './components/ElementDetail/ElementDetailModal';
import { BohrModel3D } from './components/Atom3D/BohrModel3D';
import { OrbitalModel3D } from './components/Atom3D/OrbitalModel3D';
import { ElectronConfigurationView } from './components/ElectronConfig/ElectronConfigurationView';
import { PeriodicTrendsExplorer } from './components/PeriodicTrends/PeriodicTrendsExplorer';
import { ElementCompareModal } from './components/ElementCompare/ElementCompareModal';
import { QuizModule } from './components/Quiz/QuizModule';
import { TeacherPresentationMode } from './components/Presentation/TeacherPresentationMode';
import { ChemistryTutor } from './components/AI/ChemistryTutor';
import { DataValidationModal } from './components/DataValidationModal';
import {
  Atom,
  TrendingUp,
  BookOpen,
  Tv,
  Bot,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Layers,
} from 'lucide-react';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'table' | 'quiz' | 'bohr-explore' | 'orbital-explore'>('table');
  const [selectedElement, setSelectedElement] = useState<ElementData>(
    ELEMENTS_DATA.find((e) => e.symbol === 'Na') || ELEMENTS_DATA[0]
  );

  // Modals state
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isTrendsOpen, setIsTrendsOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);
  const [isValidationOpen, setIsValidationOpen] = useState(false);

  const handleSelectElement = (el: ElementData) => {
    setSelectedElement(el);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Header */}
      <Header
        currentView={currentView}
        onSetView={setCurrentView}
        onOpenTrends={() => setIsTrendsOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onOpenAITutor={() => setIsAITutorOpen(true)}
        onOpenValidation={() => setIsValidationOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-[1536px] w-full mx-auto p-2 sm:p-4 md:p-5 space-y-4 sm:space-y-5">
        {/* VIEW 1: Main Periodic Table with Hero Banner */}
        {currentView === 'table' && (
          <div className="space-y-6">
            {/* Hero Quick Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 p-5 sm:p-6 shadow-2xl">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Học Hóa học bằng cách quan sát, khám phá và tương tác
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                    Khám Phá Cấu Tạo Nguyên Tử Trong Không Gian 3D
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Nhấn vào bất kỳ nguyên tố nào trong số <strong>118 nguyên tố</strong> để mở mô phỏng quỹ đạo Bohr 3D, đám mây orbital, cấu hình electron chi tiết và giải thích kiến thức THPT theo chuẩn GDPT 2018.
                  </p>
                </div>

                {/* Quick Action Badges */}
                <div className="flex flex-wrap md:flex-col gap-2 shrink-0 text-xs">
                  <button
                    onClick={() => setCurrentView('bohr-explore')}
                    className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <Atom className="w-4 h-4" /> Mô phỏng Bohr 3D
                  </button>
                  <button
                    onClick={() => setIsTrendsOpen(true)}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 font-medium transition flex items-center gap-2"
                  >
                    <TrendingUp className="w-4 h-4 text-cyan-400" /> Xu hướng tuần hoàn
                  </button>
                </div>
              </div>
            </div>

            {/* Periodic Table Grid */}
            <PeriodicTable
              onSelectElement={handleSelectElement}
              selectedElement={selectedElement}
              onOpenCompare={() => setIsCompareOpen(true)}
              onOpenTrends={() => setIsTrendsOpen(true)}
            />
          </div>
        )}

        {/* VIEW 2: Bohr 3D Laboratory Explorer */}
        {currentView === 'bohr-explore' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Atom className="w-6 h-6 text-cyan-400" /> Phòng Thí Nghiệm Mô Phỏng Nguyên Tử Bohr 3D
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Quan sát hạt nhân (proton, neutron), các lớp electron K, L, M, N... và tương tác tạo ion
                </p>
              </div>

              {/* Element Dropdown Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Chọn nguyên tố:</span>
                <select
                  value={selectedElement.symbol}
                  onChange={(e) => {
                    const found = ELEMENTS_DATA.find((el) => el.symbol === e.target.value);
                    if (found) setSelectedElement(found);
                  }}
                  className="bg-slate-950 border border-slate-700 text-sm font-bold text-cyan-400 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-400"
                >
                  {ELEMENTS_DATA.map((el) => (
                    <option key={el.symbol} value={el.symbol}>
                      {el.atomicNumber}. {el.symbol} - {el.nameVi.split('/')[0]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3D Bohr Simulation */}
            <BohrModel3D element={selectedElement} />

            {/* Accompanying Electron Configuration Diagram */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" /> Cấu hình electron tương ứng với mô hình 3D
              </h3>
              <ElectronConfigurationView element={selectedElement} />
            </div>
          </div>
        )}

        {/* VIEW 3: Quantum Orbital 3D Laboratory Explorer */}
        {currentView === 'orbital-explore' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Atom className="w-6 h-6 text-emerald-400" /> Phòng Thí Nghiệm Mô Hình Orbital Nguyên Tử 3D
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Trực quan hóa hình học không gian của các orbital s, px, py, pz, dxy, dz2, dx2-y2 và giải thích cơ học lượng tử
              </p>
            </div>

            <OrbitalModel3D />
          </div>
        )}

        {/* VIEW 4: Quiz & Practice */}
        {currentView === 'quiz' && (
          <QuizModule />
        )}
      </main>

      {/* Floating AI Assistant Floating Action Button */}
      <button
        onClick={() => setIsAITutorOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-cyan-500/30 flex items-center gap-2.5 font-bold text-xs group transition-all duration-200 hover:scale-105"
        title="Trợ lý Hóa học ViChem AI"
      >
        <Bot className="w-5 h-5" />
        <span className="hidden sm:inline">Hỏi Trợ lý AI Hóa học</span>
      </button>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800/80 bg-slate-950 py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-bold font-mono text-sm">
              <Atom className="w-4 h-4 text-cyan-400" /> ViChem AI – BẢNG TUẦN HOÀN THÔNG MINH
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Phần mềm học liệu số Hóa học THPT do <strong>Trần Mạnh Việt</strong> sáng lập và biên soạn.
            </p>
            <p className="text-[11px] text-slate-400">
              Tuân thủ Chương trình Giáo dục Phổ thông Hóa học 10 (Bộ GD&ĐT) & Tiêu chuẩn IUPAC.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              onClick={() => setIsValidationOpen(true)}
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Kiểm định dữ liệu khoa học
            </button>
            <span>·</span>
            <button
              onClick={() => setIsPresentationOpen(true)}
              className="text-indigo-400 hover:underline flex items-center gap-1"
            >
              <Tv className="w-3.5 h-3.5" /> Chế độ Trình chiếu
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <ElementDetailModal
        element={selectedElement}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onSelectElement={(el) => setSelectedElement(el)}
      />

      <PeriodicTrendsExplorer
        isOpen={isTrendsOpen}
        onClose={() => setIsTrendsOpen(false)}
        onSelectElement={(el) => {
          setSelectedElement(el);
          setIsDetailOpen(true);
        }}
      />

      <ElementCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        initialElements={[selectedElement]}
      />

      <TeacherPresentationMode
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        selectedElement={selectedElement}
        onSelectElement={(el) => setSelectedElement(el)}
      />

      <ChemistryTutor
        isOpen={isAITutorOpen}
        onClose={() => setIsAITutorOpen(false)}
        currentElement={selectedElement}
      />

      <DataValidationModal
        isOpen={isValidationOpen}
        onClose={() => setIsValidationOpen(false)}
      />
    </div>
  );
};

export default App;
