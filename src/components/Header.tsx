import React from 'react';
import {
  Atom,
  TrendingUp,
  ArrowRightLeft,
  BookOpen,
  Tv,
  Bot,
  ShieldCheck,
  Compass,
} from 'lucide-react';

interface HeaderProps {
  currentView: 'table' | 'quiz' | 'bohr-explore' | 'orbital-explore';
  onSetView: (view: 'table' | 'quiz' | 'bohr-explore' | 'orbital-explore') => void;
  onOpenTrends: () => void;
  onOpenCompare: () => void;
  onOpenPresentation: () => void;
  onOpenAITutor: () => void;
  onOpenValidation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onSetView,
  onOpenTrends,
  onOpenCompare,
  onOpenPresentation,
  onOpenAITutor,
  onOpenValidation,
}) => {
  return (
    <header className="bg-slate-950/95 border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-md">
      {/* Top Banner with Slogan and Teacher Accreditation */}
      <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border-b border-slate-800/50 py-1.5 px-4 text-center text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="text-cyan-400 font-semibold tracking-wide">
            Giáo viên sáng lập: Trần Mạnh Việt
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-400 italic hidden sm:inline">
            “Chạm vào nguyên tố – Khám phá thế giới nguyên tử.”
          </span>
        </div>

        <div className="flex items-center gap-3 mx-auto sm:mx-0 font-mono text-[11px] text-slate-400">
          <button
            onClick={onOpenValidation}
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition"
            title="Xem báo cáo kiểm định 118 nguyên tố"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> 118 nguyên tố đã kiểm định
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo & Title */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onSetView('table')}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition duration-200">
            <Atom className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-400 tracking-tight font-mono">
                ViChem AI
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 uppercase tracking-widest font-semibold">
                STEM THPT
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Bảng Tuần Hoàn Thông Minh & Mô Phỏng Nguyên Tử 3D
            </p>
          </div>
        </div>

        {/* View and Tool Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center text-xs">
          <NavButton
            active={currentView === 'table'}
            onClick={() => onSetView('table')}
            icon={<Atom className="w-4 h-4 text-cyan-400" />}
            label="Bảng tuần hoàn"
          />
          <NavButton
            active={currentView === 'bohr-explore'}
            onClick={() => onSetView('bohr-explore')}
            icon={<Atom className="w-4 h-4 text-indigo-400" />}
            label="Mô phỏng Bohr 3D"
          />
          <NavButton
            active={currentView === 'orbital-explore'}
            onClick={() => onSetView('orbital-explore')}
            icon={<Compass className="w-4 h-4 text-emerald-400" />}
            label="Mô hình Orbital 3D"
          />
          <NavButton
            active={currentView === 'quiz'}
            onClick={() => onSetView('quiz')}
            icon={<BookOpen className="w-4 h-4 text-amber-400" />}
            label="Luyện tập"
          />

          <div className="h-6 w-px bg-slate-800 mx-1 hidden lg:block" />

          {/* Action Modals Launchers */}
          <button
            onClick={onOpenTrends}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition flex items-center gap-1.5"
            title="Khám phá xu hướng tuần hoàn"
          >
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden xl:inline">Xu hướng</span>
          </button>

          <button
            onClick={onOpenCompare}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition flex items-center gap-1.5"
            title="So sánh nguyên tố"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden xl:inline">So sánh</span>
          </button>

          <button
            onClick={onOpenPresentation}
            className="px-3 py-1.5 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/40 font-semibold transition flex items-center gap-1.5 shadow-sm"
            title="Chế độ giáo viên trình chiếu trên máy chiếu"
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Trình chiếu lớp học</span>
          </button>

          <button
            onClick={onOpenAITutor}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold transition flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
            title="Mở Trợ lý Hóa học AI"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Trợ lý AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const NavButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({
  active,
  onClick,
  icon,
  label,
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
      active
        ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 font-semibold shadow-inner'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);
