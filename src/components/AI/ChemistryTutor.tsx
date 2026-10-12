import React, { useState, useRef, useEffect } from 'react';
import { ElementData } from '../../types/element';
import { CURRICULUM_QA_KNOWLEDGE } from '../../data/curriculumQA';
import {
  Bot,
  Send,
  X,
  Sparkles,
  BookOpen,
  MessageSquare,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';

interface ChemistryTutorProps {
  isOpen: boolean;
  onClose: () => void;
  currentElement?: ElementData | null;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  'Tại sao Na rất dễ nhường 1 electron?',
  'Vì sao bán kính nguyên tử giảm dần từ trái sang phải trong một chu kỳ?',
  'Giải thích cấu hình ngoại lệ của Cr và Cu?',
  'Phân biệt mô hình Bohr và Orbital nguyên tử?',
  'Vì sao Flo có độ âm điện lớn nhất?',
  'Vì sao các khí hiếm trơ về mặt hóa học?',
];

export const ChemistryTutor: React.FC<ChemistryTutorProps> = ({
  isOpen,
  onClose,
  currentElement,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Xin chào các em học sinh! Thầy là Trợ lý Hóa học số ViChem AI. Các em có thắc mắc gì về cấu tạo nguyên tử, cấu hình electron, mô hình 3D hay định luật tuần hoàn không? Hãy chọn câu hỏi gợi ý bên dưới hoặc nhập câu hỏi trực tiếp nhé!',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // 1. Try calling real backend proxy /api/gemini
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: text,
          elementContext: currentElement
            ? {
                symbol: currentElement.symbol,
                name: currentElement.nameVi,
                z: currentElement.atomicNumber,
                config: currentElement.electronConfiguration,
                period: currentElement.period,
                group: currentElement.group,
                shells: currentElement.electronShells,
              }
            : null,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.answer) {
          const aiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            text: data.answer,
            timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
          };
          setMessages((prev) => [...prev, aiMsg]);
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Fallback seamlessly to verified curriculum knowledge base
    }

    // 2. Verified offline curriculum knowledge base fallback
    setTimeout(() => {
      const lower = text.toLowerCase();
      const match = CURRICULUM_QA_KNOWLEDGE.find((item) =>
        item.keywords.some((k) => lower.includes(k))
      );

      let answerText = '';
      if (match) {
        answerText = match.answer;
      } else if (currentElement && (lower.includes('nguyên tố này') || lower.includes(currentElement.symbol.toLowerCase()))) {
        answerText = `Nguyên tố ${currentElement.nameVi} (${currentElement.symbol}, Z = ${currentElement.atomicNumber}):
- Cấu hình electron: ${currentElement.electronConfiguration}.
- Phân bố theo các lớp: ${currentElement.electronShells.join(' - ')} (${currentElement.electronShells.slice(-1)[0]} electron hóa trị).
- Vị trí: Chu kỳ ${currentElement.period}, Nhóm ${currentElement.group}.
- ${currentElement.teachingNotesVi.valenceElectronSignificance}
${currentElement.teachingNotesVi.ionTendencies.length > 0 ? `Xu hướng tạo ion: ${currentElement.teachingNotesVi.ionTendencies[0].equation}.` : ''}`;
      } else {
        answerText = `Cảm ơn câu hỏi của em! Để giải đáp thắc mắc này, em hãy lưu ý các nguyên tắc trọng tâm trong chương trình Hóa học 10:
1. Nguyên lý vững bền Klechkovski: Electron điền vào các orbital theo thứ tự mức năng lượng tăng dần.
2. Quy tắc bát thể (Octet): Các nguyên tử có xu hướng nhường, nhận hoặc góp chung electron để đạt lớp ngoài cùng 8e bền vững giống khí hiếm.
3. Xu hướng tuần hoàn: Trong 1 chu kỳ từ trái sang phải, Z tăng => bán kính giảm, độ âm điện tăng. Trong 1 nhóm từ trên xuống, số lớp e tăng => bán kính tăng, độ âm điện giảm.`;
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: answerText,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-4 animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md h-[88vh] sm:h-[650px] flex flex-col shadow-2xl overflow-hidden">
        {/* Tutor Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                Trợ lý Hóa học ViChem AI
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>
              <p className="text-[11px] text-slate-400">Giải đáp kiến thức Hóa học THPT chuẩn mực</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-300 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current Context Pill if viewing an element */}
        {currentElement && (
          <div className="bg-slate-950 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Ngữ cảnh:
            </span>
            <span className="text-cyan-300 font-bold">
              {currentElement.symbol} - {currentElement.nameVi.split('/')[0]} (Z={currentElement.atomicNumber})
            </span>
          </div>
        )}

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[88%] p-3 rounded-2xl whitespace-pre-line leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-slate-500 mt-1 px-1 font-mono">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-2xl rounded-tl-none text-slate-400 text-xs w-36">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Đang suy nghĩ...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2 border-t border-slate-800/80 bg-slate-950/70 overflow-x-auto scrollbar-none flex items-center gap-1.5 text-[11px]">
          <span className="text-slate-400 px-1 font-medium whitespace-nowrap flex items-center gap-1">
            <Lightbulb className="w-3 h-3 text-amber-400" /> Gợi ý:
          </span>
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap transition border border-slate-700/60"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-800 bg-slate-950 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Hỏi về cấu tạo nguyên tử, cấu hình e, mô hình 3D..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() || isLoading}
            className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 transition font-bold"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
