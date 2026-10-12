import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Route for Gemini Chemistry Tutor
app.post('/api/gemini', async (req, res) => {
  try {
    const { question, elementContext } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      return res.status(200).json({
        answer: null,
        message: 'No API key provided',
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const contextStr = elementContext
      ? `Ngữ cảnh nguyên tố: ${elementContext.name} (${elementContext.symbol}), Z = ${elementContext.z}, Cấu hình electron = ${elementContext.config}, Chu kỳ ${elementContext.period}, Nhóm ${elementContext.group}, Các lớp e = ${elementContext.shells?.join('-')}.`
      : '';

    const prompt = `Bạn là Trợ lý Hóa học số ViChem AI (do Thầy Trần Mạnh Việt sáng lập) phục vụ học sinh THPT học môn Hóa học 10 (Chương trình GDPT 2018).
Nhiệm vụ: Giải thích chính xác, khoa học, chuẩn mực sư phạm và dễ hiểu các câu hỏi về bảng tuần hoàn, cấu tạo nguyên tử, cấu hình electron, orbital nguyên tử, liên kết hóa học.
${contextStr}
Câu hỏi của học sinh: "${question}"
Yêu cầu:
- Trả lời bằng tiếng Việt.
- Bám sát kiến thức Hóa học THPT (GDPT 2018).
- Nêu rõ bản chất cấu trúc electron hoặc định luật tuần hoàn.
- Ngắn gọn, súc tích (khoảng 3-5 đoạn ngắn hoặc các gạch đầu dòng rõ ràng).`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    res.json({ answer: response.text });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: error.message || 'Lỗi xử lý yêu cầu AI' });
  }
});

async function start() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`ViChem AI server running on http://0.0.0.0:${PORT}`);
  });
}

start();
