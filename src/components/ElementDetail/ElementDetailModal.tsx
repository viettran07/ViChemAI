import React, { useState, useEffect } from 'react';
import { ElementData, IonVariant } from '../../types/element';
import { ELEMENTS_DATA, CATEGORY_COLORS } from '../../data/elementsData';
import { BohrModel3D } from '../Atom3D/BohrModel3D';
import { OrbitalModel3D } from '../Atom3D/OrbitalModel3D';
import { ElectronConfigurationView } from '../ElectronConfig/ElectronConfigurationView';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Atom,
  Binary,
  Compass,
  Briefcase,
  HelpCircle,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';

interface ElementDetailModalProps {
  element: ElementData;
  isOpen: boolean;
  onClose: () => void;
  onSelectElement: (element: ElementData) => void;
}

type DetailTab =
  | 'overview'
  | 'bohr3d'
  | 'orbital3d'
  | 'electronConfig'
  | 'applications'
  | 'quickQuiz'
  | 'sources';

export const ElementDetailModal: React.FC<ElementDetailModalProps> = ({
  element,
  isOpen,
  onClose,
  onSelectElement,
}) => {
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const [activeIon, setActiveIon] = useState<IonVariant | null>(null);

  // Reset active ion when element changes
  useEffect(() => {
    setActiveIon(null);
  }, [element.atomicNumber]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && element.atomicNumber > 1) {
        const prev = ELEMENTS_DATA.find((item) => item.atomicNumber === element.atomicNumber - 1);
        if (prev) onSelectElement(prev);
      }
      if (e.key === 'ArrowRight' && element.atomicNumber < 118) {
        const next = ELEMENTS_DATA.find((item) => item.atomicNumber === element.atomicNumber + 1);
        if (next) onSelectElement(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, element.atomicNumber, onClose, onSelectElement]);

  if (!isOpen) return null;

  const categoryConfig = CATEGORY_COLORS[element.category] || CATEGORY_COLORS.unknown;
  const prevElement = ELEMENTS_DATA.find((item) => item.atomicNumber === element.atomicNumber - 1);
  const nextElement = ELEMENTS_DATA.find((item) => item.atomicNumber === element.atomicNumber + 1);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between gap-4">
          {/* Element Identity Info */}
          <div className="flex items-center gap-3.5">
            <div
              className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center font-mono border shadow-inner ${categoryConfig.bg} ${categoryConfig.border}`}
            >
              <span className="text-[11px] text-slate-400 font-medium leading-none">{element.atomicNumber}</span>
              <span className={`text-2xl font-bold leading-tight ${categoryConfig.text}`}>
                {activeIon ? activeIon.symbol : element.symbol}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {element.nameVi}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-medium border border-slate-700">
                  {element.nameIupac}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1 font-mono">
                <span>Ô số: <strong className="text-slate-200">{element.atomicNumber}</strong></span>
                <span>·</span>
                <span>Chu kỳ: <strong className="text-slate-200">{element.period}</strong></span>
                <span>·</span>
                <span>Nhóm: <strong className="text-slate-200">{element.group}</strong></span>
                <span>·</span>
                <span>Phân nhóm: <strong className="text-slate-200">Khối {element.block}</strong></span>
                <span>·</span>
                <span className="text-indigo-400">{categoryConfig.labelVi}</span>
              </div>
            </div>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {prevElement && (
              <button
                onClick={() => onSelectElement(prevElement)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                title={`Nguyên tố trước: ${prevElement.symbol} (${prevElement.atomicNumber})`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {nextElement && (
              <button
                onClick={() => onSelectElement(nextElement)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                title={`Nguyên tố kế tiếp: ${nextElement.symbol} (${nextElement.atomicNumber})`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-300 transition ml-1"
              title="Đóng cửa sổ (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto px-4 py-2 border-b border-slate-800 bg-slate-900/90 text-xs scrollbar-none">
          <TabButton
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            icon={<Eye className="w-3.5 h-3.5" />}
            label="Tổng quan"
          />
          <TabButton
            active={activeTab === 'bohr3d'}
            onClick={() => setActiveTab('bohr3d')}
            icon={<Atom className="w-3.5 h-3.5 text-cyan-400" />}
            label="Mô hình Bohr 3D & Ion"
          />
          <TabButton
            active={activeTab === 'electronConfig'}
            onClick={() => setActiveTab('electronConfig')}
            icon={<Binary className="w-3.5 h-3.5 text-indigo-400" />}
            label="Cấu hình e & Ô Orbital"
          />
          <TabButton
            active={activeTab === 'orbital3d'}
            onClick={() => setActiveTab('orbital3d')}
            icon={<Compass className="w-3.5 h-3.5 text-emerald-400" />}
            label="Mô hình Orbital 3D"
          />
          <TabButton
            active={activeTab === 'applications'}
            onClick={() => setActiveTab('applications')}
            icon={<Briefcase className="w-3.5 h-3.5 text-amber-400" />}
            label="Ứng dụng & Hóa học"
          />
          <TabButton
            active={activeTab === 'quickQuiz'}
            onClick={() => setActiveTab('quickQuiz')}
            icon={<HelpCircle className="w-3.5 h-3.5 text-pink-400" />}
            label="Luyện tập nhanh"
          />
          <TabButton
            active={activeTab === 'sources'}
            onClick={() => setActiveTab('sources')}
            icon={<BookOpen className="w-3.5 h-3.5 text-slate-400" />}
            label="Nguồn khoa học"
          />
        </div>

        {/* Tab Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {activeTab === 'overview' && (
            <OverviewTab element={element} onGoToTab={(t) => setActiveTab(t)} />
          )}

          {activeTab === 'bohr3d' && (
            <div className="space-y-4">
              <BohrModel3D element={element} activeIon={activeIon} onSelectIon={setActiveIon} />
            </div>
          )}

          {activeTab === 'electronConfig' && (
            <ElectronConfigurationView element={element} activeIon={activeIon} />
          )}

          {activeTab === 'orbital3d' && (
            <div className="space-y-4">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-slate-300">
                Khám phá các orbital nguyên tử 3D tương ứng với lớp e ngoài cùng của <strong>{element.symbol}</strong> (phân lớp {element.block}).
              </div>
              <OrbitalModel3D />
            </div>
          )}

          {activeTab === 'applications' && (
            <ApplicationsTab element={element} />
          )}

          {activeTab === 'quickQuiz' && (
            <QuickQuizTab element={element} />
          )}

          {activeTab === 'sources' && (
            <SourcesTab element={element} />
          )}
        </div>
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab: React.FC<{ element: ElementData; onGoToTab: (tab: DetailTab) => void }> = ({
  element,
  onGoToTab,
}) => {
  return (
    <div className="space-y-6">
      {/* Chemical Property Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
        <PropertyBox label="Số hiệu nguyên tử (Z)" value={element.atomicNumber} unit="" highlight />
        <PropertyBox label="Nguyên tử khối" value={element.atomicMassString} unit="amu" />
        <PropertyBox label="Trạng thái ở 298 K" value={formatStateVi(element.stateAt298K)} unit="" />
        <PropertyBox label="Độ âm điện (Pauling)" value={element.electronegativity ?? 'Chưa xác định'} unit="" />
        <PropertyBox label="Năng lượng ion hóa I₁" value={element.firstIonizationEnergy ?? 'Chưa xác định'} unit="kJ/mol" />
        <PropertyBox label="Bán kính nguyên tử" value={element.atomicRadius ?? 'Chưa xác định'} unit="pm" />
        <PropertyBox label="Nhiệt độ nóng chảy" value={element.meltingPoint !== null ? `${element.meltingPoint}°C` : 'Chưa xác định'} unit="" />
        <PropertyBox label="Nhiệt độ sôi" value={element.boilingPoint !== null ? `${element.boilingPoint}°C` : 'Chưa xác định'} unit="" />
        <PropertyBox label="Số proton" value={element.protons} unit="" />
        <PropertyBox label="Số neutron chuẩn" value={element.neutronsStandard ?? 'Phụ thuộc đồng vị'} unit="" />
        <PropertyBox label="Số oxi hóa phổ biến" value={element.oxidationStates.join(', ') || 'Chưa xác định'} unit="" />
        <PropertyBox label="Năm phát hiện" value={element.discoveryYear} unit="" />
      </div>

      {/* High School Pedagogical Explanations */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-cyan-400" /> Giải thích dễ hiểu cho học sinh THPT
        </h3>
        <div className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
          <div className="border-l-2 border-cyan-500 pl-3">
            <strong className="text-white block font-medium">Hạt nhân và tính trung hòa điện:</strong>
            {element.teachingNotesVi.protonNeutronExplanation} Vì là nguyên tử trung hòa, số electron bằng đúng số proton ({element.protons}e).
          </div>

          <div className="border-l-2 border-indigo-500 pl-3">
            <strong className="text-white block font-medium">Phân bố electron theo lớp:</strong>
            {element.teachingNotesVi.electronShellMeaning}
          </div>

          <div className="border-l-2 border-amber-500 pl-3">
            <strong className="text-white block font-medium">Ý nghĩa số electron hóa trị:</strong>
            {element.teachingNotesVi.valenceElectronSignificance}
          </div>

          <div className="border-l-2 border-emerald-500 pl-3">
            <strong className="text-white block font-medium">Vị trí trong bảng tuần hoàn:</strong>
            {element.teachingNotesVi.periodicPositionReason}
          </div>
        </div>

        {/* Quick Launch Buttons */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
          <button
            onClick={() => onGoToTab('bohr3d')}
            className="px-3.5 py-1.5 bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-medium transition flex items-center gap-1.5"
          >
            <Atom className="w-3.5 h-3.5" /> Xem mô hình Bohr 3D & Tạo Ion
          </button>
          <button
            onClick={() => onGoToTab('electronConfig')}
            className="px-3.5 py-1.5 bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/40 rounded-lg text-xs font-medium transition flex items-center gap-1.5"
          >
            <Binary className="w-3.5 h-3.5" /> Xem sơ đồ ô Orbital (Hund/Pauli)
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 leading-relaxed">
        <h4 className="font-semibold text-slate-100 text-sm mb-1.5 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" /> Đặc điểm nổi bật
        </h4>
        <p>{element.descriptionVi}</p>
      </div>
    </div>
  );
};

// Applications Tab
const ApplicationsTab: React.FC<{ element: ElementData }> = ({ element }) => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2 mb-3">
          <Briefcase className="w-4 h-4 text-amber-400" /> Ứng dụng thực tế trong đời sống & công nghiệp
        </h3>
        {element.applicationsVi.length > 0 ? (
          <ul className="space-y-2.5 text-xs text-slate-300">
            {element.applicationsVi.map((app, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-slate-400">
            Nguyên tố siêu nặng nhân tạo hiện chủ yếu được dùng trong nghiên cứu vật lý hạt nhân cơ bản và khám phá ranh giới bảng tuần hoàn.
          </p>
        )}
      </div>

      {/* Isotopes Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h4 className="text-sm font-bold text-slate-100 mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" /> Đồng vị quan trọng
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
          {element.isotopes.map((iso, idx) => (
            <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono">
              <div className="font-bold text-cyan-400">{iso.name}</div>
              <div className="text-slate-400 text-[11px] mt-0.5">
                Khối lượng: {iso.mass} · {iso.abundance ? `Độ phổ biến: ${iso.abundance}%` : (iso.isStable ? 'Đồng vị bền' : 'Đồng vị phóng xạ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Quick Quiz Tab for this element
const QuickQuizTab: React.FC<{ element: ElementData }> = ({ element }) => {
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Generate dynamic question about this element
  const question = {
    text: `Nguyên tố ${element.nameVi.split('/')[0]} (${element.symbol}) có số electron ở lớp ngoài cùng là bao nhiêu?`,
    options: [
      element.electronShells.slice(-1)[0].toString(),
      ((element.electronShells.slice(-1)[0] % 8) + 1).toString(),
      element.period.toString(),
      element.protons.toString(),
    ].sort(() => 0.5 - Math.random()),
    correct: element.electronShells.slice(-1)[0].toString(),
  };

  const handleChoose = (idx: number) => {
    setSelectedAns(idx);
    setShowResult(true);
  };

  const isCorrect = selectedAns !== null && question.options[selectedAns] === question.correct;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 max-w-xl mx-auto space-y-4">
      <div className="flex items-center gap-2 text-pink-400 text-sm font-bold uppercase tracking-wider">
        <HelpCircle className="w-4 h-4" /> Luyện tập củng cố kiến thức
      </div>

      <p className="text-sm text-slate-100 font-medium leading-relaxed">{question.text}</p>

      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleChoose(idx)}
            className={`p-3 rounded-lg border text-left transition font-semibold ${
              showResult
                ? opt === question.correct
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : selectedAns === idx
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
                : 'bg-slate-900 border-slate-800 hover:border-cyan-400 text-slate-200'
            }`}
          >
            {String.fromCharCode(65 + idx)}. {opt}
          </button>
        ))}
      </div>

      {showResult && (
        <div
          className={`p-3.5 rounded-lg text-xs leading-relaxed ${
            isCorrect
              ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300'
              : 'bg-rose-500/15 border border-rose-500/40 text-rose-300'
          }`}
        >
          {isCorrect ? (
            <p>
              🎉 <strong>Chính xác!</strong> {element.symbol} có cấu hình electron{' '}
              <span className="font-mono">{element.electronConfiguration}</span>, phân bố theo các lớp e là{' '}
              <span className="font-mono">{element.electronShells.join(' - ')}</span>, do đó có{' '}
              <strong>{question.correct}</strong> electron ở lớp ngoài cùng.
            </p>
          ) : (
            <p>
              ⚠️ <strong>Chưa chính xác!</strong> Đáp án đúng là <strong>{question.correct}</strong>. Phân bố electron theo lớp của {element.symbol} là{' '}
              <span className="font-mono">{element.electronShells.join(' - ')}</span>.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Sources Tab
const SourcesTab: React.FC<{ element: ElementData }> = ({ element }) => {
  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-xs text-slate-300 space-y-3">
        <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" /> Nguồn dữ liệu & Trạng thái kiểm chứng
        </h4>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Trạng thái dữ liệu:</span>
          <span
            className={`px-2 py-0.5 rounded text-[11px] font-medium font-mono uppercase ${
              element.dataStatus === 'verified'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
            }`}
          >
            {element.dataStatus === 'verified' ? 'Đã kiểm chứng thực nghiệm' : 'Dự đoán lý thuyết'}
          </span>
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-800">
          {element.sources.map((src, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="font-medium text-slate-200">{src.title}</span>
              {src.url && (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono text-[11px]"
                >
                  Truy cập <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper components
const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({
  active,
  onClick,
  icon,
  label,
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
      active
        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const PropertyBox: React.FC<{ label: string; value: string | number; unit: string; highlight?: boolean }> = ({
  label,
  value,
  unit,
  highlight,
}) => (
  <div className={`p-3 rounded-lg border ${highlight ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-slate-950 border-slate-800'}`}>
    <div className="text-[11px] text-slate-400 truncate">{label}</div>
    <div className="text-sm sm:text-base font-bold font-mono text-slate-100 mt-0.5 truncate">
      {value} {unit && <span className="text-xs font-normal text-slate-400">{unit}</span>}
    </div>
  </div>
);

function formatStateVi(state: string): string {
  switch (state) {
    case 'gas':
      return 'Khí (Gas)';
    case 'liquid':
      return 'Lỏng (Liquid)';
    case 'solid':
      return 'Rắn (Solid)';
    default:
      return 'Chưa xác định';
  }
}
