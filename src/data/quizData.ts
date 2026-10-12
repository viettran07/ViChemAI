export interface QuizQuestion {
  id: string;
  topic:
    | 'atomic-structure'
    | 'electron-config'
    | 'periodic-table'
    | 'periodic-trends'
    | 'bohr-orbital'
    | 'ion-formation';
  difficulty: 'basic' | 'intermediate' | 'advanced';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  ruleReferenced: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Cấu tạo nguyên tử
  {
    id: 'q1',
    topic: 'atomic-structure',
    difficulty: 'basic',
    question: 'Nguyên tử trung hòa natri có số hiệu nguyên tử Z = 11. Số lượng proton và electron trong nguyên tử này lần lượt là:',
    options: ['11 proton và 11 electron', '11 proton và 12 electron', '12 proton và 11 electron', '11 proton và 10 electron'],
    correctIndex: 0,
    explanation: 'Trong mọi nguyên tử trung hòa về điện, số proton trong hạt nhân luôn bằng số electron ở lớp vỏ nguyên tử và bằng số hiệu nguyên tử Z (Z = p = e = 11).',
    ruleReferenced: 'Tính trung hòa điện của nguyên tử',
  },
  {
    id: 'q2',
    topic: 'atomic-structure',
    difficulty: 'basic',
    question: 'Hạt nhân nguyên tử Kali (³⁹₁₉K) chứa bao nhiêu hạt neutron?',
    options: ['19 neutron', '20 neutron', '39 neutron', '58 neutron'],
    correctIndex: 1,
    explanation: 'Số khối A = Z + N => Số neutron N = A - Z = 39 - 19 = 20 neutron.',
    ruleReferenced: 'Công thức tính số khối hạt nhân A = Z + N',
  },
  {
    id: 'q3',
    topic: 'atomic-structure',
    difficulty: 'intermediate',
    question: 'Nguyên tố X có tổng số hạt cơ bản (p, n, e) là 40, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12. Ký hiệu của X là:',
    options: ['¹²Mg', '²⁷₁₃Al', '²³₁₁Na', '³¹₁₅P'],
    correctIndex: 1,
    explanation: 'Hệ phương trình: 2Z + N = 40 và 2Z - N = 12. Cộng lại: 4Z = 52 => Z = 13 (Nhôm, Al) và N = 14 => A = 27.',
    ruleReferenced: 'Giải toán hệ hạt cơ bản trong nguyên tử',
  },

  // Cấu hình electron
  {
    id: 'q4',
    topic: 'electron-config',
    difficulty: 'basic',
    question: 'Cấu hình electron của nguyên tử Clo (Z = 17) ở trạng thái cơ bản là:',
    options: [
      '1s² 2s² 2p⁶ 3s² 3p⁵',
      '1s² 2s² 2p⁶ 3s¹ 3p⁶',
      '1s² 2s² 2p⁶ 3s² 3p⁴ 4s¹',
      '1s² 2s² 2p⁶ 3s² 3d⁵',
    ],
    correctIndex: 0,
    explanation: 'Với Z = 17, electron lần lượt điền vào các phân lớp theo trật tự mức năng lượng: 1s² 2s² 2p⁶ 3s² 3p⁵ (viết gọn là [Ne] 3s² 3p⁵).',
    ruleReferenced: 'Nguyên lý vững bền và quy tắc Klechkovski',
  },
  {
    id: 'q5',
    topic: 'electron-config',
    difficulty: 'intermediate',
    question: 'Cấu hình electron nào sau đây là cấu hình ngoại lệ ở trạng thái cơ bản do đạt phân lớp d bán bão hòa?',
    options: [
      'Cr (Z = 24): [Ar] 3d⁵ 4s¹',
      'Fe (Z = 26): [Ar] 3d⁶ 4s²',
      'Mn (Z = 25): [Ar] 3d⁵ 4s²',
      'V (Z = 23): [Ar] 3d³ 4s²',
    ],
    correctIndex: 0,
    explanation: 'Crom (Cr) có cấu hình ngoại lệ [Ar] 3d⁵ 4s¹ thay vì [Ar] 3d⁴ 4s² vì 1 electron từ 4s chuyển sang 3d giúp phân lớp 3d đạt trạng thái bán bão hòa 3d⁵ có mức năng lượng thấp và bền vững hơn.',
    ruleReferenced: 'Quy tắc bán bão hòa phân lớp d',
  },
  {
    id: 'q6',
    topic: 'electron-config',
    difficulty: 'intermediate',
    question: 'Theo quy tắc Hund, số electron độc thân trong nguyên tử Nitơ (Z = 7) ở trạng thái cơ bản là:',
    options: ['1 electron', '2 electron', '3 electron', '0 electron'],
    correctIndex: 2,
    explanation: 'Nitơ có cấu hình 1s² 2s² 2p³. Ở phân lớp 2p, 3 electron sẽ phân bố đều vào 3 ô orbital (2px¹, 2py¹, 2pz¹) với các spin song song cùng hướng, do đó có đúng 3 electron độc thân.',
    ruleReferenced: 'Quy tắc Hund về số spin cực đại',
  },
  {
    id: 'q7',
    topic: 'electron-config',
    difficulty: 'advanced',
    question: 'Cấu hình electron của ion Fe³⁺ (cho biết Sắt Fe có Z = 26) là:',
    options: [
      '[Ar] 3d⁵',
      '[Ar] 3d⁶',
      '[Ar] 3d⁴ 4s¹',
      '[Ar] 3d³ 4s²',
    ],
    correctIndex: 0,
    explanation: 'Nguyên tử Fe có cấu hình: [Ar] 3d⁶ 4s². Khi tạo ion Fe³⁺, nguyên tử Fe nhường trước 2 electron ở lớp 4s ngoài cùng, sau đó nhường tiếp 1 electron ở phân lớp 3d: Fe → Fe³⁺ + 3e⁻, còn lại [Ar] 3d⁵ (bán bão hòa bền vững).',
    ruleReferenced: 'Quy tắc tạo ion kim loại chuyển tiếp',
  },

  // Bảng tuần hoàn & Vị trí
  {
    id: 'q8',
    topic: 'periodic-table',
    difficulty: 'basic',
    question: 'Nguyên tố có cấu hình electron [Ne] 3s² 3p⁴ thuộc chu kỳ và nhóm nào trong bảng tuần hoàn?',
    options: [
      'Chu kỳ 3, nhóm VIA',
      'Chu kỳ 3, nhóm IVA',
      'Chu kỳ 4, nhóm IIIA',
      'Chu kỳ 2, nhóm VIA',
    ],
    correctIndex: 0,
    explanation: 'Có 3 lớp electron => Chu kỳ 3. Là nguyên tố p và có 2 + 4 = 6 electron hóa trị ở lớp ngoài cùng => Nhóm VIA (nhóm 16 - Lưu huỳnh S).',
    ruleReferenced: 'Mối quan hệ giữa cấu hình e và vị trí bảng tuần hoàn',
  },
  {
    id: 'q9',
    topic: 'periodic-table',
    difficulty: 'basic',
    question: 'Các nguyên tố thuộc họ Lantan và Actini được xếp riêng thành hai hàng dưới đáy bảng tuần hoàn thuộc khối nguyên tố nào?',
    options: ['Khối nguyên tố f', 'Khối nguyên tố d', 'Khối nguyên tố s', 'Khối nguyên tố p'],
    correctIndex: 0,
    explanation: 'Các nguyên tố họ Lantan và Actini có electron cuối cùng điền vào phân lớp 4f hoặc 5f, vì vậy chúng thuộc khối nguyên tố f.',
    ruleReferenced: 'Phân loại khối nguyên tố s, p, d, f',
  },

  // Xu hướng tuần hoàn
  {
    id: 'q10',
    topic: 'periodic-trends',
    difficulty: 'basic',
    question: 'Trong một chu kỳ, đi từ trái sang phải theo chiều tăng dần của điện tích hạt nhân, bán kính nguyên tử biến đổi như thế nào?',
    options: [
      'Giảm dần',
      'Tăng dần',
      'Không thay đổi',
      'Tăng rồi giảm',
    ],
    correctIndex: 0,
    explanation: 'Trong cùng một chu kỳ, các nguyên tử có cùng số lớp electron nhưng điện tích hạt nhân Z tăng dần, làm tăng lực hút của hạt nhân đối với electron lớp ngoài cùng, kéo các electron lại gần hạt nhân hơn => Bán kính nguyên tử giảm dần.',
    ruleReferenced: 'Định luật biến đổi bán kính nguyên tử trong chu kỳ',
  },
  {
    id: 'q11',
    topic: 'periodic-trends',
    difficulty: 'intermediate',
    question: 'Sắp xếp các nguyên tố sau theo thứ tự bán kính nguyên tử tăng dần: ₁₁Na, ₁₂Mg, ₁₉K.',
    options: [
      'Mg < Na < K',
      'Na < Mg < K',
      'K < Na < Mg',
      'Mg < K < Na',
    ],
    correctIndex: 0,
    explanation: 'Na và Mg cùng chu kỳ 3: Z(Mg) > Z(Na) => R(Mg) < R(Na). Na và K cùng nhóm IA: K ở chu kỳ 4 (4 lớp e) nên R(K) > R(Na). Thứ tự tăng dần là Mg < Na < K.',
    ruleReferenced: 'So sánh bán kính nguyên tử qua chu kỳ và nhóm',
  },
  {
    id: 'q12',
    topic: 'periodic-trends',
    difficulty: 'intermediate',
    question: 'Nguyên tố nào sau đây có độ âm điện lớn nhất trong toàn bộ bảng tuần hoàn?',
    options: ['Flo (F)', 'Clo (Cl)', 'Oxi (O)', 'Xesi (Cs)'],
    correctIndex: 0,
    explanation: 'Flo (F) có độ âm điện lớn nhất theo thang Pauling (χ = 3.98) do nằm ở góc trên bên phải bảng tuần hoàn (chu kỳ 2, nhóm VIIA) và có bán kính rất nhỏ.',
    ruleReferenced: 'Quy luật độ âm điện nguyên tố',
  },

  // Bohr & Orbital
  {
    id: 'q13',
    topic: 'bohr-orbital',
    difficulty: 'intermediate',
    question: 'Điểm khác biệt căn bản giữa mô hình hành tinh nguyên tử Bohr và mô hình orbital hiện đại là gì?',
    options: [
      'Mô hình Bohr coi electron chuyển động trên quỹ đạo tròn cố định, còn orbital là vùng không gian xác suất tìm thấy electron',
      'Mô hình Bohr áp dụng cho ion, còn orbital áp dụng cho kim loại',
      'Orbital cho rằng electron chuyển động thẳng, Bohr cho rằng electron đứng yên',
      'Không có sự khác biệt nào',
    ],
    correctIndex: 0,
    explanation: 'Trong mô hình Bohr, electron được giả định chuyển động trên những quỹ đạo tròn đồng tâm cố định. Trong cơ học lượng tử hiện đại, theo hệ thức bất định Heisenberg, ta không thể xác định đồng thời chính xác vị trí và vận tốc của electron, orbital là vùng không gian có xác suất tìm thấy electron khoảng 90%.',
    ruleReferenced: 'Bản chất cơ học lượng tử của Orbital nguyên tử',
  },
  {
    id: 'q14',
    topic: 'bohr-orbital',
    difficulty: 'basic',
    question: 'Orbital s và orbital p có hình dạng không gian tương ứng là:',
    options: [
      'Orbital s có dạng hình cầu; orbital p có dạng hình số 8 nổi (quả tạ đôi)',
      'Orbital s có dạng hình số 8 nổi; orbital p có dạng hình cầu',
      'Cả hai đều có dạng hình cầu đối xứng',
      'Orbital s có dạng hình đĩa; orbital p có dạng hình cầu',
    ],
    correctIndex: 0,
    explanation: 'Orbital s (l = 0) có tính đối xứng cầu trong không gian. Orbital p (l = 1) có dạng quả tạ đôi gồm 2 thùy đối xứng qua hạt nhân dọc theo các trục px, py, pz.',
    ruleReferenced: 'Hình học không gian của các orbital nguyên tử',
  },

  // Tạo ion & Liên kết
  {
    id: 'q15',
    topic: 'ion-formation',
    difficulty: 'basic',
    question: 'Khi tham gia phản ứng hóa học, nguyên tử Magie (Mg, Z = 12) có xu hướng biến đổi thành ion nào?',
    options: [
      'Nhường 2 electron tạo cation Mg²⁺ có cấu hình bền của Neon',
      'Nhận 2 electron tạo anion Mg²⁻',
      'Nhường 1 electron tạo cation Mg⁺',
      'Nhận 6 electron tạo anion Mg⁶⁻',
    ],
    correctIndex: 0,
    explanation: 'Mg có cấu hình [Ne] 3s² với 2 electron ở lớp ngoài cùng. Để đạt cấu hình bát thể 8e bền vững của khí hiếm gần nhất (Neon), Mg dễ dàng nhường 2 electron: Mg → Mg²⁺ + 2e⁻.',
    ruleReferenced: 'Quy tắc bát thể Octet và xu hướng tạo cation kim loại kiềm thổ',
  },
];
