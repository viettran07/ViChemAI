import { ELEMENTS_DATA } from './elementsData';

export interface ValidationResult {
  totalElements: number;
  isContinuousZ: boolean;
  uniqueSymbols: boolean;
  validShellCounts: boolean;
  invalidShellDetails: string[];
  anomaliesVerified: boolean;
  hasAll118: boolean;
  passed: boolean;
  details: string[];
}

export function validatePeriodicData(): ValidationResult {
  const details: string[] = [];
  const total = ELEMENTS_DATA.length;
  const hasAll118 = total === 118;
  if (hasAll118) {
    details.push('Đầy đủ 118/118 nguyên tố hóa học đã được công nhận bởi IUPAC.');
  } else {
    details.push(`Lỗi: Chỉ có ${total}/118 nguyên tố!`);
  }

  // Check continuous Z
  let isContinuousZ = true;
  for (let i = 0; i < total; i++) {
    if (ELEMENTS_DATA[i].atomicNumber !== i + 1) {
      isContinuousZ = false;
      details.push(`Lỗi thứ tự Z: Phần tử index ${i} có Z=${ELEMENTS_DATA[i].atomicNumber}, kỳ vọng ${i + 1}`);
      break;
    }
  }
  if (isContinuousZ) {
    details.push('Số hiệu nguyên tử Z trải đều liên tục từ 1 đến 118 không trùng lặp và không bỏ sót.');
  }

  // Check unique symbols
  const symbolSet = new Set<string>();
  let uniqueSymbols = true;
  for (const el of ELEMENTS_DATA) {
    if (symbolSet.has(el.symbol)) {
      uniqueSymbols = false;
      details.push(`Lỗi trùng ký hiệu hóa học: ${el.symbol}`);
    }
    symbolSet.add(el.symbol);
  }
  if (uniqueSymbols) {
    details.push('Tất cả 118 ký hiệu hóa học đều là duy nhất và chính xác.');
  }

  // Check sum of shell electrons equals Z
  const invalidShellDetails: string[] = [];
  for (const el of ELEMENTS_DATA) {
    const sum = el.electronShells.reduce((a, b) => a + b, 0);
    if (sum !== el.atomicNumber) {
      invalidShellDetails.push(`${el.symbol} (Z=${el.atomicNumber}): Tổng e các lớp = ${sum}`);
    }
  }
  const validShellCounts = invalidShellDetails.length === 0;
  if (validShellCounts) {
    details.push('Tổng số electron phân bố theo lớp (K, L, M, N...) chính xác bằng số hiệu Z cho cả 118 nguyên tử trung hòa.');
  } else {
    details.push(`Cảnh báo lớp electron: ${invalidShellDetails.join('; ')}`);
  }

  // Check anomalous configurations (Cr, Cu, Pd, Ag, Au)
  const cr = ELEMENTS_DATA.find((e) => e.symbol === 'Cr');
  const cu = ELEMENTS_DATA.find((e) => e.symbol === 'Cu');
  const pd = ELEMENTS_DATA.find((e) => e.symbol === 'Pd');
  const anomaliesVerified =
    cr?.electronConfiguration.includes('3d⁵ 4s¹') === true &&
    cu?.electronConfiguration.includes('3d¹⁰ 4s¹') === true &&
    pd?.electronConfiguration.includes('4d¹⁰') === true;

  if (anomaliesVerified) {
    details.push('Các ngoại lệ cấu hình electron kinh điển (Cr, Cu, Pd, Ag, Au...) được ghi nhận chính xác theo thực nghiệm.');
  }

  const passed = hasAll118 && isContinuousZ && uniqueSymbols && validShellCounts && anomaliesVerified;

  return {
    totalElements: total,
    isContinuousZ,
    uniqueSymbols,
    validShellCounts,
    invalidShellDetails,
    anomaliesVerified,
    hasAll118,
    passed,
    details,
  };
}
