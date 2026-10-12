export interface CurriculumAnswer {
  keywords: string[];
  title: string;
  answer: string;
}

export const CURRICULUM_QA_KNOWLEDGE: CurriculumAnswer[] = [
  {
    keywords: ['na', 'natri', 'nhường 1e', 'nhuong 1e', 'ion na+'],
    title: 'Tại sao Natri (Na) rất dễ nhường 1 electron?',
    answer: `Nguyên tử Natri (Na) có số hiệu nguyên tử Z = 11, cấu hình electron là 1s² 2s² 2p⁶ 3s¹ (hay [Ne] 3s¹).
1. Phân bố electron theo lớp là 2 - 8 - 1, có duy nhất 1 electron ở lớp ngoài cùng (3s¹).
2. Lớp thứ hai bên trong đã bão hòa với 8 electron bền vững của khí hiếm Neon (Octet).
3. Bán kính nguyên tử Na tương đối lớn so với điện tích hạt nhân +11, lực hút giữa hạt nhân và electron 3s¹ yếu (năng lượng ion hóa thứ nhất I₁ chỉ khoảng 495.8 kJ/mol).
Vì vậy, trong các phản ứng hóa học, Na rất dễ nhường đi 1 electron này để trở thành cation Na⁺ có cấu hình bát thể bền vững [Ne]: Na → Na⁺ + 1e⁻.`,
  },
  {
    keywords: ['bán kính', 'ban kinh', 'chu kỳ', 'chu ky', 'giam tu trai sang phai', 'giảm từ trái sang phải'],
    title: 'Vì sao bán kính nguyên tử giảm dần từ trái sang phải trong một chu kỳ?',
    answer: `Trong cùng một chu kỳ của bảng tuần hoàn:
1. Tất cả các nguyên tố đều có cùng số lớp electron (ví dụ chu kỳ 3 đều có 3 lớp e: K, L, M).
2. Khi đi từ trái sang phải, điện tích hạt nhân (Z) tăng dần liên tục (mỗi ô tăng thêm 1 proton).
3. Do số lớp e không đổi trong khi điện tích dương của hạt nhân tăng, lực hút tĩnh điện giữa hạt nhân và các electron lớp ngoài cùng tăng dần lên.
4. Lực hút mạnh hơn kéo các đám mây electron co lại gần hạt nhân hơn, làm cho bán kính nguyên tử có xu hướng giảm dần từ đầu chu kỳ đến cuối chu kỳ.`,
  },
  {
    keywords: ['cr', 'cu', 'crom', 'dong', 'bán bão hòa', 'ban bao hoa', 'ngoại lệ', 'ngoai le', 'cấu hình'],
    title: 'Giải thích hiện tượng cấu hình electron ngoại lệ của Cr và Cu?',
    answer: `Theo nguyên lý vững bền Klechkovski thông thường, Cr (Z=24) dự kiến là [Ar] 3d⁴ 4s² và Cu (Z=29) là [Ar] 3d⁹ 4s². Tuy nhiên thực nghiệm chứng minh:
- Crom (Cr): cấu hình thực tế là [Ar] 3d⁵ 4s¹ (1 electron từ 4s nhảy sang 3d). Phân lớp 3d có đúng 5 electron độc thân, đạt trạng thái "bán bão hòa" phân lớp d có tính đối xứng cầu và mức năng lượng đặc biệt bền.
- Đồng (Cu): cấu hình thực tế là [Ar] 3d¹⁰ 4s¹ (1 electron từ 4s nhảy sang 3d). Phân lớp 3d có đủ 10 electron, đạt trạng thái "bão hòa hoàn toàn" phân lớp d cực kỳ bền vững.
Sự chênh lệch năng lượng giữa 3d và 4s rất nhỏ, do đó năng lượng bền vững hóa do đạt cấu hình bán bão hòa (d⁵) hoặc bão hòa (d¹⁰) lớn hơn năng lượng cần để chuyển electron.`,
  },
  {
    keywords: ['bohr', 'orbital', 'phan biet', 'phân biệt', 'quỹ đạo', 'quy dao'],
    title: 'Phân biệt mô hình hành tinh Bohr và mô hình Orbital lượng tử?',
    answer: `Sự khác biệt căn bản giữa hai mô hình:
1. Mô hình Bohr (1913):
- Dựa trên cơ học cổ điển kết hợp giả thuyết lượng tử năng lượng.
- Coi electron như một hạt chuyển động trên những quỹ đạo tròn hoặc elip phẳng đồng tâm cố định xung quanh hạt nhân.
- Xác định được đồng thời chính xác vị trí và vận tốc (quỹ đạo xác định).
2. Mô hình Orbital hiện đại (Cơ học lượng tử Schrödinger):
- Dựa trên lưỡng tính sóng - hạt của electron và nguyên lý bất định Heisenberg (không thể xác định đồng thời cả tọa độ và vận tốc của vi hạt).
- Không có khái niệm quỹ đạo chuyển động cố định.
- Orbital nguyên tử (AO) là vùng không gian xung quanh hạt nhân mà xác suất tìm thấy electron tại đó đạt khoảng 90%.
- Các orbital có hình dạng không gian đa dạng: s (cầu), p (quả tạ đôi hướng theo các trục), d (cỏ 4 lá hoặc tạ có vành xuyến), f (đa thùy phức tạp).`,
  },
  {
    keywords: ['flo', 'fluorine', 'độ âm điện lớn nhất', 'do am dien lon nhat', 'f'],
    title: 'Vì sao Flo (F) có độ âm điện lớn nhất trong bảng tuần hoàn?',
    answer: `Độ âm điện đặc trưng cho khả năng hút electron của nguyên tử khi hình thành liên kết hóa học. Flo có độ âm điện cao nhất (χ = 3.98 theo Pauling) vì:
1. Vị trí: Nằm ở chu kỳ 2, nhóm VIIA (góc trên bên phải bảng tuần hoàn).
2. Bán kính nguyên tử: Flo chỉ có 2 lớp electron, bán kính cực kỳ nhỏ (khoảng 42 pm).
3. Lực hút hạt nhân: Điện tích hạt nhân Z = +9 tác dụng lực hút rất mạnh lên electron hóa trị ở khoảng cách rất gần và ít bị che chắn bởi các lớp e bên trong (chỉ có 2e ở lớp 1s che chắn).
4. Cấu hình e: Lớp ngoài cùng có 7e (2s² 2p⁵), chỉ thiếu đúng 1e để đạt bát thể Neon bền vững. Do đó Flo có xu hướng hút electron mãnh liệt nhất trong mọi nguyên tố.`,
  },
  {
    keywords: ['khí hiếm', 'khi hiem', 'trơ', 'tro', 'noble gas', 'bát thể'],
    title: 'Vì sao các khí hiếm trơ về mặt hóa học?',
    answer: `Các khí hiếm (He, Ne, Ar, Kr, Xe, Rn) trơ về mặt hóa học vì:
1. Lớp electron ngoài cùng đã bão hòa hoàn hảo: Heli có 2 electron bão hòa lớp K (duplet 1s²), các khí hiếm còn lại đều có 8 electron bão hòa lớp ngoài cùng (cấu hình bát thể ns² np⁶).
2. Cấu hình này có mức năng lượng cực tiểu và độ đối xứng cầu cao, rất bền vững.
3. Năng lượng ion hóa thứ nhất (I₁) rất cao, khó bứt electron ra thành ion dương.
4. Ái lực electron xấp xỉ bằng 0 hoặc âm, không có xu hướng nhận thêm electron.
Do đó ở điều kiện thường, các khí hiếm tồn tại dưới dạng nguyên tử đơn chất và không phản ứng với hầu hết các chất.`,
  },
];
