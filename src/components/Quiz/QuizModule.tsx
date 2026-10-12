import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../../data/quizData';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  BookOpen,
  Filter,
  Trash2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface QuizProgress {
  totalAnswered: number;
  correctAnswers: number;
  history: Array<{ date: string; score: number; total: number }>;
}

const STORAGE_KEY = 'vichem_ai_quiz_progress';

export const QuizModule: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Load progress from LocalStorage
  const [progress, setProgress] = useState<QuizProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('huong_chem_3d_quiz_progress');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore json parse error
    }
    return { totalAnswered: 0, correctAnswers: 0, history: [] };
  });

  const saveProgress = (newProg: QuizProgress) => {
    setProgress(newProg);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProg));
    } catch {
      // Ignore storage error
    }
  };

  const handleClearProgress = () => {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử luyện tập trên thiết bị này không?')) {
      const reset = { totalAnswered: 0, correctAnswers: 0, history: [] };
      saveProgress(reset);
    }
  };

  // Filter questions
  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    if (selectedTopic !== 'all' && q.topic !== selectedTopic) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Update progress
    const updated: QuizProgress = {
      totalAnswered: progress.totalAnswered + 1,
      correctAnswers: progress.correctAnswers + (isCorrect ? 1 : 0),
      history: progress.history,
    };
    saveProgress(updated);
  };

  const handleNext = () => {
    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsQuizCompleted(true);
      // Trigger confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      // Save test completion
      const updated: QuizProgress = {
        ...progress,
        history: [
          ...progress.history,
          {
            date: new Date().toLocaleDateString('vi-VN'),
            score: score + (selectedOption === currentQ.correctIndex ? 1 : 0),
            total: filteredQuestions.length,
          },
        ].slice(-10),
      };
      saveProgress(updated);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const accuracyPercent =
    progress.totalAnswered > 0
      ? Math.round((progress.correctAnswers / progress.totalAnswered) * 100)
      : 0;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Banner / Progress Summary */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" /> Ngân hàng Câu hỏi & Luyện tập Hóa học THPT
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Được biên soạn bám sát Chương trình GDPT Hóa học 10 của Thầy Trần Mạnh Việt
          </p>
        </div>

        {/* Progress Stats */}
        <div className="flex items-center gap-4 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono">
          <div>
            <span className="text-slate-400 block text-[10px]">Đã làm</span>
            <span className="font-bold text-cyan-400 text-sm">{progress.totalAnswered} câu</span>
          </div>
          <div className="h-7 w-px bg-slate-800" />
          <div>
            <span className="text-slate-400 block text-[10px]">Đúng</span>
            <span className="font-bold text-emerald-400 text-sm">{progress.correctAnswers} câu</span>
          </div>
          <div className="h-7 w-px bg-slate-800" />
          <div>
            <span className="text-slate-400 block text-[10px]">Tỷ lệ chính xác</span>
            <span className="font-bold text-indigo-400 text-sm">{accuracyPercent}%</span>
          </div>
          <button
            onClick={handleClearProgress}
            className="text-slate-500 hover:text-rose-400 p-1.5 transition ml-1"
            title="Xóa lịch sử luyện tập trên thiết bị này"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-400 font-medium flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-cyan-400" /> Chủ đề:
          </span>
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              handleRestart();
            }}
            className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-cyan-400"
          >
            <option value="all">Tất cả chủ đề</option>
            <option value="atomic-structure">Cấu tạo nguyên tử (p, n, e, A)</option>
            <option value="electron-config">Cấu hình electron & Ô orbital</option>
            <option value="periodic-table">Bảng tuần hoàn & Vị trí</option>
            <option value="periodic-trends">Quy luật & Xu hướng tuần hoàn</option>
            <option value="bohr-orbital">Mô hình Bohr & Orbital 3D</option>
            <option value="ion-formation">Tạo ion & Cấu hình ion</option>
          </select>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 font-medium">Độ khó:</span>
          <select
            value={selectedDifficulty}
            onChange={(e) => {
              setSelectedDifficulty(e.target.value);
              handleRestart();
            }}
            className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-cyan-400"
          >
            <option value="all">Tất cả mức độ</option>
            <option value="basic">Nhận biết (Cơ bản)</option>
            <option value="intermediate">Thông hiểu</option>
            <option value="advanced">Vận dụng cao</option>
          </select>
        </div>
      </div>

      {/* Quiz Card */}
      {!isQuizCompleted && currentQ ? (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-5">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
            <span className="font-mono text-cyan-400 font-semibold">
              Câu hỏi {currentIndex + 1} / {filteredQuestions.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-medium text-[11px]">
                {formatTopicName(currentQ.topic)}
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-medium text-[11px]">
                {formatDifficulty(currentQ.difficulty)}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <div className="text-base sm:text-lg font-semibold text-white leading-relaxed">
            {currentQ.question}
          </div>

          {/* Answer Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'bg-slate-950 border-slate-800 text-slate-200 hover:border-cyan-500 hover:bg-slate-900';
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold';
                } else {
                  btnStyle = 'bg-slate-950/50 border-slate-900 text-slate-500';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-sm transition flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-slate-300 shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && (
                    <div>
                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                      {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Revealed after answer) */}
          {isAnswered && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div
                className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                  selectedOption === currentQ.correctIndex
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                }`}
              >
                <div className="font-bold flex items-center gap-2 mb-1.5">
                  {selectedOption === currentQ.correctIndex ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Đúng rồi! Rất xuất sắc.
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-400" /> Chưa chính xác. Hãy xem giải thích chi tiết:
                    </>
                  )}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm">{currentQ.explanation}</p>
                <div className="mt-2.5 pt-2 border-t border-slate-700/50 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Quy tắc kiến thức: {currentQ.ruleReferenced}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-sm transition flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  {currentIndex + 1 < filteredQuestions.length ? 'Câu tiếp theo' : 'Xem kết quả tổng kết'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Completion Screen */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 text-center space-y-5 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 mx-auto flex items-center justify-center text-cyan-400">
            <Award className="w-8 h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Chúc mừng bạn đã hoàn thành bài luyện tập!
          </h3>

          <div className="text-sm text-slate-300 font-mono">
            Kết quả của bạn: <strong className="text-cyan-400 text-xl font-bold">{score}</strong> / {filteredQuestions.length} câu đúng
            ({Math.round((score / filteredQuestions.length) * 100)}%)
          </div>

          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Học tập kiên trì là chìa khóa chinh phục môn Hóa học. Bạn có thể làm lại bài để ôn luyện thêm hoặc chuyển sang chế độ Mô hình 3D!
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-sm transition flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Luyện tập lại từ đầu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function formatTopicName(t: string): string {
  switch (t) {
    case 'atomic-structure':
      return 'Cấu tạo nguyên tử';
    case 'electron-config':
      return 'Cấu hình electron';
    case 'periodic-table':
      return 'Bảng tuần hoàn';
    case 'periodic-trends':
      return 'Xu hướng tuần hoàn';
    case 'bohr-orbital':
      return 'Mô hình 3D';
    case 'ion-formation':
      return 'Tạo ion';
    default:
      return 'Tổng hợp';
  }
}

function formatDifficulty(d: string): string {
  switch (d) {
    case 'basic':
      return 'Cơ bản';
    case 'intermediate':
      return 'Thông hiểu';
    case 'advanced':
      return 'Vận dụng';
    default:
      return '';
  }
}
