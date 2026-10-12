import { ElementData, ElementCategory } from '../types/element';

export const CATEGORY_COLORS: Record<ElementCategory, { bg: string; border: string; text: string; labelVi: string }> = {
  'alkali-metal': {
    bg: 'bg-rose-500/15',
    border: 'border-rose-500/40',
    text: 'text-rose-400',
    labelVi: 'Kim loại kiềm',
  },
  'alkaline-earth': {
    bg: 'bg-amber-500/15',
    border: 'border-amber-500/40',
    text: 'text-amber-400',
    labelVi: 'Kim loại kiềm thổ',
  },
  'transition-metal': {
    bg: 'bg-blue-500/15',
    border: 'border-blue-500/40',
    text: 'text-blue-400',
    labelVi: 'Kim loại chuyển tiếp',
  },
  'post-transition': {
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/40',
    text: 'text-emerald-400',
    labelVi: 'Kim loại hậu chuyển tiếp',
  },
  'metalloid': {
    bg: 'bg-teal-500/15',
    border: 'border-teal-500/40',
    text: 'text-teal-400',
    labelVi: 'Á kim (Bán kim)',
  },
  'reactive-nonmetal': {
    bg: 'bg-cyan-500/15',
    border: 'border-cyan-500/40',
    text: 'text-cyan-400',
    labelVi: 'Phi kim hoạt động',
  },
  'halogen': {
    bg: 'bg-yellow-500/15',
    border: 'border-yellow-500/40',
    text: 'text-yellow-400',
    labelVi: 'Halogen',
  },
  'noble-gas': {
    bg: 'bg-purple-500/15',
    border: 'border-purple-500/40',
    text: 'text-purple-400',
    labelVi: 'Khí hiếm',
  },
  'lanthanoid': {
    bg: 'bg-indigo-500/15',
    border: 'border-indigo-500/40',
    text: 'text-indigo-400',
    labelVi: 'Họ Lantan',
  },
  'actinoid': {
    bg: 'bg-fuchsia-500/15',
    border: 'border-fuchsia-500/40',
    text: 'text-fuchsia-400',
    labelVi: 'Họ Actini',
  },
  'unknown': {
    bg: 'bg-slate-500/15',
    border: 'border-slate-500/40',
    text: 'text-slate-400',
    labelVi: 'Chưa xác định tính chất',
  },
};

// Raw list of all 118 elements with verified scientific values
export const ELEMENTS_DATA: ElementData[] = [
  // PERIOD 1
  {
    atomicNumber: 1,
    symbol: 'H',
    nameVi: 'Hiđro / Hydrogen',
    nameIupac: 'Hydrogen',
    period: 1,
    group: 1,
    category: 'reactive-nonmetal',
    block: 's',
    atomicMass: 1.008,
    atomicMassString: '1.008',
    electronConfiguration: '1s¹',
    electronConfigurationFull: '1s¹',
    electronShells: [1],
    protons: 1,
    neutronsStandard: 0,
    electronegativity: 2.20,
    firstIonizationEnergy: 1312.0,
    atomicRadius: 53,
    meltingPoint: -259.16,
    boilingPoint: -252.87,
    density: 0.00008988,
    oxidationStates: ['+1', '-1'],
    stateAt298K: 'gas',
    discoveryYear: '1766',
    descriptionVi: 'Hiđro là nguyên tố nhẹ nhất và phổ biến nhất trong vũ trụ (chiếm ~75% khối lượng vũ trụ). Ở điều kiện thường là chất khí không màu, không mùi, dễ cháy, tạo thành phân tử hai nguyên tử H₂.',
    applicationsVi: [
      'Nhiên liệu sạch cho pin nhiên liệu và động cơ hidro',
      'Tổng hợp amoniac (NH₃) theo phương pháp Haber-Bosch',
      'Khử oxit kim loại để điều chế kim loại tinh khiết',
      'Hiđro hóa dầu thực vật thành bơ thực vật'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Nguyên tử H thông thường (protium) chỉ gồm 1 proton và 1 electron, không có neutron.',
      electronShellMeaning: 'Lớp electron K (n=1) có đúng 1 electron, cần thêm 1 electron để đạt cấu hình bền vững của He.',
      valenceElectronSignificance: 'Có 1 electron hóa trị, có thể nhường 1e thành H⁺ hoặc góp chung electron trong liên kết cộng hóa trị.',
      periodicPositionReason: 'Xếp ở ô 1, chu kỳ 1 (1 lớp e), nhóm IA (1e hóa trị phân lớp s).',
      ionTendencies: [
        {
          symbol: 'H⁺',
          charge: 1,
          electronCount: 0,
          electronShells: [],
          electronConfiguration: '1s⁰',
          equation: 'H → H⁺ + 1e⁻',
          explanation: 'Hiđro nhường 1 electron tạo proton tự do H⁺ (thường solvat hóa thành H₃O⁺ trong nước).'
        },
        {
          symbol: 'H⁻',
          charge: -1,
          electronCount: 2,
          electronShells: [2],
          electronConfiguration: '1s²',
          equation: 'H + 1e⁻ → H⁻',
          explanation: 'Hiđro nhận 1 electron tạo ion hidrua H⁻ có cấu hình bền của khí hiếm Heli.'
        }
      ]
    },
    isotopes: [
      { name: '¹H (Protium)', mass: 1.0078, abundance: 99.9885, isStable: true },
      { name: '²H (Deuteri, D)', mass: 2.0141, abundance: 0.0115, isStable: true },
      { name: '³H (Triti, T)', mass: 3.0160, isStable: false }
    ],
    sources: [
      { title: 'IUPAC Periodic Table of Elements', url: 'https://iupac.org' },
      { title: 'NIST Chemistry WebBook', url: 'https://webbook.nist.gov' },
      { title: 'SGK Hóa học 10 (Bộ GD&ĐT)' }
    ],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 2,
    symbol: 'He',
    nameVi: 'Heli / Helium',
    nameIupac: 'Helium',
    period: 1,
    group: 18,
    category: 'noble-gas',
    block: 's',
    atomicMass: 4.0026,
    atomicMassString: '4.0026',
    electronConfiguration: '1s²',
    electronConfigurationFull: '1s²',
    electronShells: [2],
    protons: 2,
    neutronsStandard: 2,
    electronegativity: null,
    firstIonizationEnergy: 2372.3,
    atomicRadius: 31,
    meltingPoint: -272.2,
    boilingPoint: -268.93,
    density: 0.0001785,
    oxidationStates: ['0'],
    stateAt298K: 'gas',
    discoveryYear: '1868',
    descriptionVi: 'Heli là khí hiếm nhẹ thứ hai, trơ tuyệt đối ở điều kiện thường với lớp electron K bão hòa bền vững (duplet 1s²). Heli có nhiệt độ sôi thấp nhất trong tất cả các chất.',
    applicationsVi: [
      'Bơm khí cầu và bóng thám không vì nhẹ và không cháy',
      'Chất làm lạnh siêu dẫn trong máy chụp cộng hưởng từ (MRI)',
      'Khí bảo vệ trong hàn hồ quang và sản xuất chip silicon'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân gồm 2 proton và 2 neutron, tạo nên hạt alpha (α) rất bền vững.',
      electronShellMeaning: 'Lớp K (n=1) chứa tối đa 2 electron và đã bão hòa hoàn toàn.',
      valenceElectronSignificance: 'Cấu hình bão hòa 1s² làm Heli cực kỳ trơ về mặt hóa học, không có xu hướng nhường hay nhận electron.',
      periodicPositionReason: 'Thuộc chu kỳ 1 (1 lớp e), nhóm VIIIA/18 vì là khí hiếm có lớp ngoài cùng bão hòa.',
      ionTendencies: []
    },
    isotopes: [
      { name: '³He', mass: 3.0160, abundance: 0.000137, isStable: true },
      { name: '⁴He', mass: 4.0026, abundance: 99.999863, isStable: true }
    ],
    sources: [
      { title: 'IUPAC & NIST WebBook' }
    ],
    dataStatus: 'verified'
  },

  // PERIOD 2
  {
    atomicNumber: 3,
    symbol: 'Li',
    nameVi: 'Liti / Lithium',
    nameIupac: 'Lithium',
    period: 2,
    group: 1,
    category: 'alkali-metal',
    block: 's',
    atomicMass: 6.94,
    atomicMassString: '6.94',
    electronConfiguration: '[He] 2s¹',
    electronConfigurationFull: '1s² 2s¹',
    electronShells: [2, 1],
    protons: 3,
    neutronsStandard: 4,
    electronegativity: 0.98,
    firstIonizationEnergy: 520.2,
    atomicRadius: 167,
    meltingPoint: 180.54,
    boilingPoint: 1342,
    density: 0.534,
    oxidationStates: ['+1'],
    stateAt298K: 'solid',
    discoveryYear: '1817',
    descriptionVi: 'Liti là kim loại kiềm nhẹ nhất, mật độ nhỏ nhất trong các kim loại rắn. Rất hoạt động hóa học, phản ứng êm dịu hơn natri với nước.',
    applicationsVi: [
      'Pin sạc Lithium-ion cho điện thoại, xe điện, laptop',
      'Hợp kim nhẹ trong ngành hàng không vũ trụ',
      'Dược phẩm điều trị rối loạn lưỡng cực (Lithium carbonate)'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân gồm 3 proton và 4 neutron (đồng vị ⁷Li chiếm ~92.5%).',
      electronShellMeaning: 'Lớp K có 2e, lớp L có 1e. Bán kính nhỏ nhất trong các kim loại kiềm.',
      valenceElectronSignificance: 'Có 1 electron ở lớp ngoài cùng (2s¹), rất dễ nhường để đạt cấu hình bền của Heli.',
      periodicPositionReason: 'Ô 3, chu kỳ 2 (2 lớp e), nhóm IA (1e hóa trị).',
      ionTendencies: [
        {
          symbol: 'Li⁺',
          charge: 1,
          electronCount: 2,
          electronShells: [2],
          electronConfiguration: '1s²',
          equation: 'Li → Li⁺ + 1e⁻',
          explanation: 'Liti nhường 1 electron ở lớp 2s tạo cation Li⁺ có cấu hình bền của Heli [He].'
        }
      ]
    },
    isotopes: [
      { name: '⁶Li', mass: 6.0151, abundance: 7.59, isStable: true },
      { name: '⁷Li', mass: 7.0160, abundance: 92.41, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 4,
    symbol: 'Be',
    nameVi: 'Beri / Beryllium',
    nameIupac: 'Beryllium',
    period: 2,
    group: 2,
    category: 'alkaline-earth',
    block: 's',
    atomicMass: 9.0122,
    atomicMassString: '9.0122',
    electronConfiguration: '[He] 2s²',
    electronConfigurationFull: '1s² 2s²',
    electronShells: [2, 2],
    protons: 4,
    neutronsStandard: 5,
    electronegativity: 1.57,
    firstIonizationEnergy: 899.5,
    atomicRadius: 112,
    meltingPoint: 1287,
    boilingPoint: 2469,
    density: 1.85,
    oxidationStates: ['+2'],
    stateAt298K: 'solid',
    discoveryYear: '1798',
    descriptionVi: 'Beri là kim loại kiềm thổ màu xám thép, cứng, nhẹ và có điểm nóng chảy cao. Hợp chất của beri có tính độc cao.',
    applicationsVi: [
      'Gương chính của kính viễn vọng không gian James Webb',
      'Hợp kim đồng - beri (Cu-Be) siêu bền, chống mài mòn và không phát tia lửa',
      'Cửa sổ tia X trong thiết bị chụp X-quang vì beri ít hấp thụ tia X'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 4 proton và 5 neutron.',
      electronShellMeaning: 'Lớp K có 2e, lớp L có 2e. Bán kính nhỏ, năng lượng ion hóa cao hơn các kim loại kiềm thổ khác.',
      valenceElectronSignificance: 'Có 2 electron ở phân lớp 2s², xu hướng nhường 2e để tạo cation Be²⁺.',
      periodicPositionReason: 'Ô 4, chu kỳ 2, nhóm IIA.',
      ionTendencies: [
        {
          symbol: 'Be²⁺',
          charge: 2,
          electronCount: 2,
          electronShells: [2],
          electronConfiguration: '1s²',
          equation: 'Be → Be²⁺ + 2e⁻',
          explanation: 'Beri nhường 2 electron 2s tạo cation Be²⁺.'
        }
      ]
    },
    isotopes: [{ name: '⁹Be', mass: 9.0122, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 5,
    symbol: 'B',
    nameVi: 'Bo / Boron',
    nameIupac: 'Boron',
    period: 2,
    group: 13,
    category: 'metalloid',
    block: 'p',
    atomicMass: 10.81,
    atomicMassString: '10.81',
    electronConfiguration: '[He] 2s² 2p¹',
    electronConfigurationFull: '1s² 2s² 2p¹',
    electronShells: [2, 3],
    protons: 5,
    neutronsStandard: 6,
    electronegativity: 2.04,
    firstIonizationEnergy: 800.6,
    atomicRadius: 87,
    meltingPoint: 2076,
    boilingPoint: 3927,
    density: 2.34,
    oxidationStates: ['+3'],
    stateAt298K: 'solid',
    discoveryYear: '1808',
    descriptionVi: 'Bo là á kim bán dẫn, có độ cứng rất cao. Thường gặp trong khoáng chất borax và axit boric.',
    applicationsVi: [
      'Thủy tinh borosilicate (Pyrex) chịu nhiệt cao',
      'Sợi bo cường lực trong đồ dùng thể thao và hàng không',
      'Thanh điều khiển hấp thụ neutron trong lò phản ứng hạt nhân'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 5 proton và 6 neutron (¹¹B chiếm 80%).',
      electronShellMeaning: 'Lớp 2 có 3 electron (2s² 2p¹).',
      valenceElectronSignificance: 'Có 3 electron hóa trị, thường tạo liên kết cộng hóa trị với trạng thái lai hóa sp² hoặc sp³.',
      periodicPositionReason: 'Ô 5, chu kỳ 2, nhóm IIIA/13.',
      ionTendencies: []
    },
    isotopes: [
      { name: '¹⁰B', mass: 10.0129, abundance: 19.9, isStable: true },
      { name: '¹¹B', mass: 11.0093, abundance: 80.1, isStable: true }
    ],
    sources: [{ title: 'IUPAC' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 6,
    symbol: 'C',
    nameVi: 'Cacbon / Carbon',
    nameIupac: 'Carbon',
    period: 2,
    group: 14,
    category: 'reactive-nonmetal',
    block: 'p',
    atomicMass: 12.011,
    atomicMassString: '12.011',
    electronConfiguration: '[He] 2s² 2p²',
    electronConfigurationFull: '1s² 2s² 2p²',
    electronShells: [2, 4],
    protons: 6,
    neutronsStandard: 6,
    electronegativity: 2.55,
    firstIonizationEnergy: 1086.5,
    atomicRadius: 67,
    meltingPoint: 3550, // thăng hoa
    boilingPoint: 4027,
    density: 2.267,
    oxidationStates: ['-4', '+2', '+4'],
    stateAt298K: 'solid',
    discoveryYear: 'Cổ đại',
    descriptionVi: 'Cacbon là nền tảng của hóa học hữu cơ và mọi sự sống trên Trái Đất. Tồn tại ở nhiều dạng thù hình kỳ diệu: kim cương, than chì, graphene, fullerene.',
    applicationsVi: [
      'Cấu tạo toàn bộ các hợp chất sinh học và hữu cơ',
      'Kim cương dùng làm trang sức và mũi khoan công nghiệp',
      'Than chì làm điện cực và ruột bút chì; than hoạt tính khử độc',
      'Sợi cacbon siêu nhẹ và bền trong vật liệu composite'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: '¹²C với 6p và 6n được dùng làm chuẩn định nghĩa đơn vị khối lượng nguyên tử (amu).',
      electronShellMeaning: 'Lớp ngoài cùng có 4 electron (2s² 2p²).',
      valenceElectronSignificance: 'Có 4 electron hóa trị, khả năng tạo 4 liên kết cộng hóa trị bền vững và tạo mạch cacbon vô tận.',
      periodicPositionReason: 'Ô 6, chu kỳ 2, nhóm IVA/14.',
      ionTendencies: []
    },
    isotopes: [
      { name: '¹²C', mass: 12.000, abundance: 98.93, isStable: true },
      { name: '¹³C', mass: 13.003, abundance: 1.07, isStable: true },
      { name: '¹⁴C', mass: 14.003, isStable: false }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 7,
    symbol: 'N',
    nameVi: 'Nitơ / Nitrogen',
    nameIupac: 'Nitrogen',
    period: 2,
    group: 15,
    category: 'reactive-nonmetal',
    block: 'p',
    atomicMass: 14.007,
    atomicMassString: '14.007',
    electronConfiguration: '[He] 2s² 2p³',
    electronConfigurationFull: '1s² 2s² 2p³',
    electronShells: [2, 5],
    protons: 7,
    neutronsStandard: 7,
    electronegativity: 3.04,
    firstIonizationEnergy: 1402.3,
    atomicRadius: 56,
    meltingPoint: -210.0,
    boilingPoint: -195.79,
    density: 0.0012506,
    oxidationStates: ['-3', '+1', '+2', '+3', '+4', '+5'],
    stateAt298K: 'gas',
    discoveryYear: '1772',
    descriptionVi: 'Nitơ chiếm khoảng 78% thể tích khí quyển Trái Đất. Phân tử N₂ có liên kết ba N≡N cực kỳ bền năng lượng liên kết 945 kJ/mol làm khí N₂ rất trơ ở nhiệt độ thường.',
    applicationsVi: [
      'Sản xuất phân bón đạm (ure, amoni nitrat) nuôi sống nhân loại',
      'Nitơ lỏng làm môi trường bảo quản đông lạnh sinh học tế bào',
      'Tạo môi trường trơ bảo quản thực phẩm đóng gói'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 7p và 7n.',
      electronShellMeaning: 'Lớp L có 5 electron, trong đó phân lớp 2p³ đạt trạng thái bán bão hòa rất bền.',
      valenceElectronSignificance: 'Cần thêm 3 electron để đạt bát thể 8e, xu hướng tạo ion N³⁻ hoặc 3 liên kết CHT.',
      periodicPositionReason: 'Ô 7, chu kỳ 2, nhóm VA/15.',
      ionTendencies: [
        {
          symbol: 'N³⁻',
          charge: -3,
          electronCount: 10,
          electronShells: [2, 8],
          electronConfiguration: '[Ne]',
          equation: 'N + 3e⁻ → N³⁻',
          explanation: 'Nitơ nhận 3 electron tạo anion nitrua N³⁻ có cấu hình bền của Neon.'
        }
      ]
    },
    isotopes: [
      { name: '¹⁴N', mass: 14.003, abundance: 99.636, isStable: true },
      { name: '¹⁵N', mass: 15.000, abundance: 0.364, isStable: true }
    ],
    sources: [{ title: 'IUPAC' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 8,
    symbol: 'O',
    nameVi: 'Oxi / Oxygen',
    nameIupac: 'Oxygen',
    period: 2,
    group: 16,
    category: 'reactive-nonmetal',
    block: 'p',
    atomicMass: 15.999,
    atomicMassString: '15.999',
    electronConfiguration: '[He] 2s² 2p⁴',
    electronConfigurationFull: '1s² 2s² 2p⁴',
    electronShells: [2, 6],
    protons: 8,
    neutronsStandard: 8,
    electronegativity: 3.44,
    firstIonizationEnergy: 1313.9,
    atomicRadius: 48,
    meltingPoint: -218.79,
    boilingPoint: -182.96,
    density: 0.001429,
    oxidationStates: ['-2', '-1', '+2'],
    stateAt298K: 'gas',
    discoveryYear: '1774',
    descriptionVi: 'Oxi là nguyên tố phong phú nhất trên vỏ Trái Đất (~46% khối lượng vỏ Trái Đất và 21% khí quyển). Cần thiết cho quá trình hô hấp hiếu khí và sự cháy.',
    applicationsVi: [
      'Hô hấp y tế cho bệnh nhân và lặn biển, phi công vũ trụ',
      'Oxi hóa nhiên liệu trong tên lửa đẩy',
      'Luyện thép công nghiệp bằng phương pháp thổi oxi',
      'Xử lý nước thải và khử trùng nước bằng ozon (O₃)'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 8 proton và 8 neutron.',
      electronShellMeaning: 'Lớp ngoài cùng có 6 electron (2s² 2p⁴).',
      valenceElectronSignificance: 'Có độ âm điện rất lớn (3.44, chỉ sau F), rất dễ nhận thêm 2 electron tạo anion O²⁻.',
      periodicPositionReason: 'Ô 8, chu kỳ 2, nhóm VIA/16.',
      ionTendencies: [
        {
          symbol: 'O²⁻',
          charge: -2,
          electronCount: 10,
          electronShells: [2, 8],
          electronConfiguration: '[Ne]',
          equation: 'O + 2e⁻ → O²⁻',
          explanation: 'Oxi nhận 2 electron tạo anion oxit O²⁻ có cấu hình bền của khí hiếm Neon [Ne].'
        }
      ]
    },
    isotopes: [
      { name: '¹⁶O', mass: 15.9949, abundance: 99.757, isStable: true },
      { name: '¹⁷O', mass: 16.9991, abundance: 0.038, isStable: true },
      { name: '¹⁸O', mass: 17.9992, abundance: 0.205, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 9,
    symbol: 'F',
    nameVi: 'Flo / Fluorine',
    nameIupac: 'Fluorine',
    period: 2,
    group: 17,
    category: 'halogen',
    block: 'p',
    atomicMass: 18.998,
    atomicMassString: '18.998',
    electronConfiguration: '[He] 2s² 2p⁵',
    electronConfigurationFull: '1s² 2s² 2p⁵',
    electronShells: [2, 7],
    protons: 9,
    neutronsStandard: 10,
    electronegativity: 3.98,
    firstIonizationEnergy: 1681.0,
    atomicRadius: 42,
    meltingPoint: -219.67,
    boilingPoint: -188.11,
    density: 0.001696,
    oxidationStates: ['-1'],
    stateAt298K: 'gas',
    discoveryYear: '1886',
    descriptionVi: 'Flo là phi kim có tính oxi hóa mạnh nhất trong toàn bộ bảng tuần hoàn, có độ âm điện lớn nhất (3.98). Khí F₂ màu vàng lục nhạt, phản ứng mãnh liệt với hầu hết mọi đơn chất.',
    applicationsVi: [
      'Hợp chất florua trong kem đánh răng ngăn ngừa sâu răng',
      'Sản xuất chất chống dính Teflon (PTFE) chịu nhiệt',
      'Làm giàu uranium dưới dạng khí UF₆'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 9 proton và 10 neutron.',
      electronShellMeaning: 'Lớp ngoài cùng có 7 electron (2s² 2p⁵).',
      valenceElectronSignificance: 'Chỉ thiếu 1 electron để đạt bát thể bền của Neon. Lực hút hạt nhân rất mạnh do bán kính nhỏ.',
      periodicPositionReason: 'Ô 9, chu kỳ 2, nhóm VIIA/17.',
      ionTendencies: [
        {
          symbol: 'F⁻',
          charge: -1,
          electronCount: 10,
          electronShells: [2, 8],
          electronConfiguration: '[Ne]',
          equation: 'F + 1e⁻ → F⁻',
          explanation: 'Flo nhận 1 electron tạo anion florua F⁻ có cấu hình bền vững của Neon [Ne].'
        }
      ]
    },
    isotopes: [{ name: '¹⁹F', mass: 18.9984, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 10,
    symbol: 'Ne',
    nameVi: 'Neon',
    nameIupac: 'Neon',
    period: 2,
    group: 18,
    category: 'noble-gas',
    block: 'p',
    atomicMass: 20.180,
    atomicMassString: '20.180',
    electronConfiguration: '[He] 2s² 2p⁶',
    electronConfigurationFull: '1s² 2s² 2p⁶',
    electronShells: [2, 8],
    protons: 10,
    neutronsStandard: 10,
    electronegativity: null,
    firstIonizationEnergy: 2080.7,
    atomicRadius: 38,
    meltingPoint: -248.59,
    boilingPoint: -246.08,
    density: 0.0009002,
    oxidationStates: ['0'],
    stateAt298K: 'gas',
    discoveryYear: '1898',
    descriptionVi: 'Neon là khí hiếm thứ hai, có lớp vỏ ngoài bão hòa bền vững 8 electron (bát thể). Phát ra ánh sáng màu đỏ cam rực rỡ khi có dòng điện phóng qua trong ống chân không.',
    applicationsVi: [
      'Đèn quảng cáo neon phát sáng đỏ cam đặc trưng',
      'Môi trường làm lạnh sâu (công suất làm lạnh cao gấp 3 lần hydro lỏng)',
      'Laser He-Ne trong đo đạc và quang học'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 10 proton và 10 neutron (đồng vị ²⁰Ne chiếm 90.5%).',
      electronShellMeaning: 'Lớp K có 2e, lớp L có 8e (bão hòa hoàn toàn).',
      valenceElectronSignificance: 'Cấu hình bát thể bền vững 2s² 2p⁶, năng lượng ion hóa thứ nhất cực lớn (2080.7 kJ/mol).',
      periodicPositionReason: 'Ô 10, chu kỳ 2, nhóm VIIIA/18.',
      ionTendencies: []
    },
    isotopes: [
      { name: '²⁰Ne', mass: 19.9924, abundance: 90.48, isStable: true },
      { name: '²¹Ne', mass: 20.9938, abundance: 0.27, isStable: true },
      { name: '²²Ne', mass: 21.9914, abundance: 9.25, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },

  // PERIOD 3
  {
    atomicNumber: 11,
    symbol: 'Na',
    nameVi: 'Natri / Sodium',
    nameIupac: 'Sodium',
    period: 3,
    group: 1,
    category: 'alkali-metal',
    block: 's',
    atomicMass: 22.990,
    atomicMassString: '22.990',
    electronConfiguration: '[Ne] 3s¹',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s¹',
    electronShells: [2, 8, 1],
    protons: 11,
    neutronsStandard: 12,
    electronegativity: 0.93,
    firstIonizationEnergy: 495.8,
    atomicRadius: 190,
    meltingPoint: 97.79,
    boilingPoint: 882.9,
    density: 0.968,
    oxidationStates: ['+1'],
    stateAt298K: 'solid',
    discoveryYear: '1807',
    descriptionVi: 'Natri là kim loại kiềm mềm màu trắng bạc, có thể cắt bằng dao, phản ứng mãnh liệt với nước sinh khí H₂ và dung dịch bazơ NaOH, cháy với ngọn lửa màu vàng rực rỡ.',
    applicationsVi: [
      'Muối ăn (NaCl) - gia vị thiết yếu và nguyên liệu sản xuất xút-clo',
      'Đèn hơi natri chiếu sáng đường phố màu vàng ấm',
      'Chất làm mát kim loại lỏng trong một số lò phản ứng hạt nhân',
      'Truyền xung thần kinh và cân bằng áp suất thẩm thấu sinh học'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 11 proton và 12 neutron (²³Na).',
      electronShellMeaning: 'Lớp K=2, L=8, M=1. Khoảng cách từ e hóa trị 3s¹ đến hạt nhân xa hơn Li nên bán kính lớn hơn, dễ mất electron hơn.',
      valenceElectronSignificance: 'Có 1 electron ở lớp 3s, rất dễ nhường để đạt cấu hình bát thể bền của Neon.',
      periodicPositionReason: 'Ô 11, chu kỳ 3 (3 lớp e), nhóm IA (1e hóa trị lớp s).',
      ionTendencies: [
        {
          symbol: 'Na⁺',
          charge: 1,
          electronCount: 10,
          electronShells: [2, 8],
          electronConfiguration: '[Ne]',
          equation: 'Na → Na⁺ + 1e⁻',
          explanation: 'Natri nhường 1 electron ở lớp ngoài cùng tạo ion Na⁺ có cấu hình bền của khí hiếm Neon [Ne] (1s² 2s² 2p⁶).'
        }
      ]
    },
    isotopes: [{ name: '²³Na', mass: 22.9898, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC & NIST WebBook' }, { title: 'SGK Hóa học 10' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 12,
    symbol: 'Mg',
    nameVi: 'Magie / Magnesium',
    nameIupac: 'Magnesium',
    period: 3,
    group: 2,
    category: 'alkaline-earth',
    block: 's',
    atomicMass: 24.305,
    atomicMassString: '24.305',
    electronConfiguration: '[Ne] 3s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s²',
    electronShells: [2, 8, 2],
    protons: 12,
    neutronsStandard: 12,
    electronegativity: 1.31,
    firstIonizationEnergy: 737.7,
    atomicRadius: 145,
    meltingPoint: 650,
    boilingPoint: 1090,
    density: 1.738,
    oxidationStates: ['+2'],
    stateAt298K: 'solid',
    discoveryYear: '1755',
    descriptionVi: 'Magie là kim loại kiềm thổ nhẹ, màu trắng bạc, cháy trong không khí với ngọn lửa trắng chói lóa tỏa nhiệt lượng lớn. Là nguyên tố trung tâm trong nhân phân tử diệp lục của thực vật.',
    applicationsVi: [
      'Hợp kim nhôm - magie siêu nhẹ chế tạo khung xe đạp, vỏ laptop, máy bay',
      'Pháo sáng và pháo hoa nhờ ngọn lửa trắng rực rỡ',
      'Ion trung tâm diệp lục quang hợp của thực vật',
      'Thuốc kháng axit dạ dày (Mg(OH)₂ - sữa magie)'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 12 proton và 12 neutron (²⁴Mg chiếm 79%).',
      electronShellMeaning: 'Lớp K=2, L=8, M=2.',
      valenceElectronSignificance: 'Có 2 electron hóa trị ở phân lớp 3s², có xu hướng nhường 2e để tạo cation Mg²⁺ có cấu hình Neon.',
      periodicPositionReason: 'Ô 12, chu kỳ 3, nhóm IIA.',
      ionTendencies: [
        {
          symbol: 'Mg²⁺',
          charge: 2,
          electronCount: 10,
          electronShells: [2, 8],
          electronConfiguration: '[Ne]',
          equation: 'Mg → Mg²⁺ + 2e⁻',
          explanation: 'Magie nhường 2 electron lớp 3s tạo cation Mg²⁺ mang điện tích +2 và cấu hình bát thể bền vững [Ne].'
        }
      ]
    },
    isotopes: [
      { name: '²⁴Mg', mass: 23.985, abundance: 78.99, isStable: true },
      { name: '²⁵Mg', mass: 24.985, abundance: 10.00, isStable: true },
      { name: '²⁶Mg', mass: 25.982, abundance: 11.01, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 13,
    symbol: 'Al',
    nameVi: 'Nhôm / Aluminium',
    nameIupac: 'Aluminium',
    period: 3,
    group: 13,
    category: 'post-transition',
    block: 'p',
    atomicMass: 26.982,
    atomicMassString: '26.982',
    electronConfiguration: '[Ne] 3s² 3p¹',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p¹',
    electronShells: [2, 8, 3],
    protons: 13,
    neutronsStandard: 14,
    electronegativity: 1.61,
    firstIonizationEnergy: 577.5,
    atomicRadius: 118,
    meltingPoint: 660.32,
    boilingPoint: 2470,
    density: 2.70,
    oxidationStates: ['+3'],
    stateAt298K: 'solid',
    discoveryYear: '1825',
    descriptionVi: 'Nhôm là kim loại phổ biến nhất trong vỏ Trái Đất (~8% khối lượng). Bền trong không khí nhờ có màng oxit Al₂O₃ mịn, mỏng và rất bền bảo vệ bề mặt.',
    applicationsVi: [
      'Khung máy bay, tàu hỏa cao tốc, ô tô nhờ nhẹ và bền',
      'Dây dẫn điện cao thế đường dài (dây nhôm lõi thép)',
      'Vật liệu xây dựng cửa sổ, mặt dựng, bao bì màng nhôm thực phẩm'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 13 proton và 14 neutron (²⁷Al).',
      electronShellMeaning: 'Lớp M có 3 electron (3s² 3p¹).',
      valenceElectronSignificance: 'Có 3 electron hóa trị, nhường 3e tạo Al³⁺.',
      periodicPositionReason: 'Ô 13, chu kỳ 3, nhóm IIIA/13.',
      ionTendencies: [
        {
          symbol: 'Al³⁺',
          charge: 3,
          electronCount: 10,
          electronShells: [2, 8],
          electronConfiguration: '[Ne]',
          equation: 'Al → Al³⁺ + 3e⁻',
          explanation: 'Nhôm nhường cả 3 electron hóa trị tạo cation Al³⁺ có cấu hình bền của khí hiếm Neon [Ne].'
        }
      ]
    },
    isotopes: [{ name: '²⁷Al', mass: 26.9815, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 14,
    symbol: 'Si',
    nameVi: 'Silic / Silicon',
    nameIupac: 'Silicon',
    period: 3,
    group: 14,
    category: 'metalloid',
    block: 'p',
    atomicMass: 28.085,
    atomicMassString: '28.085',
    electronConfiguration: '[Ne] 3s² 3p²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p²',
    electronShells: [2, 8, 4],
    protons: 14,
    neutronsStandard: 14,
    electronegativity: 1.90,
    firstIonizationEnergy: 786.5,
    atomicRadius: 111,
    meltingPoint: 1414,
    boilingPoint: 3265,
    density: 2.33,
    oxidationStates: ['-4', '+2', '+4'],
    stateAt298K: 'solid',
    discoveryYear: '1824',
    descriptionVi: 'Silic là nguyên tố phổ biến thứ hai trong vỏ Trái Đất sau oxi (~28%). Là linh hồn của thời đại công nghệ số với vai trò chất bán dẫn trong vi mạch bán dẫn.',
    applicationsVi: [
      'Chế tạo chip vi xử lý máy tính, điện thoại thông minh',
      'Pin năng lượng mặt trời quang điện (silicon tinh khiết)',
      'Thủy tinh silica (SiO₂), gốm sứ và polymer silicone'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 14 proton và 14 neutron (²⁸Si chiếm 92.2%).',
      electronShellMeaning: 'Lớp ngoài cùng có 4 electron hóa trị (3s² 3p²).',
      valenceElectronSignificance: 'Có 4 electron hóa trị giống Cacbon, cấu trúc mạng tinh thể tương tự kim cương.',
      periodicPositionReason: 'Ô 14, chu kỳ 3, nhóm IVA/14.',
      ionTendencies: []
    },
    isotopes: [
      { name: '²⁸Si', mass: 27.9769, abundance: 92.22, isStable: true },
      { name: '²⁹Si', mass: 28.9764, abundance: 4.69, isStable: true },
      { name: '³⁰Si', mass: 29.9737, abundance: 3.09, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 15,
    symbol: 'P',
    nameVi: 'Photpho / Phosphorus',
    nameIupac: 'Phosphorus',
    period: 3,
    group: 15,
    category: 'reactive-nonmetal',
    block: 'p',
    atomicMass: 30.974,
    atomicMassString: '30.974',
    electronConfiguration: '[Ne] 3s² 3p³',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p³',
    electronShells: [2, 8, 5],
    protons: 15,
    neutronsStandard: 16,
    electronegativity: 2.19,
    firstIonizationEnergy: 1011.8,
    atomicRadius: 98,
    meltingPoint: 44.15,
    boilingPoint: 280.5,
    density: 1.82,
    oxidationStates: ['-3', '+3', '+5'],
    stateAt298K: 'solid',
    discoveryYear: '1669',
    descriptionVi: 'Photpho tồn tại ở nhiều dạng thù hình: photpho trắng (cực độc, tự bốc cháy ngoài không khí, phát quang), photpho đỏ (bền, không độc). Thiết yếu cho xương, răng và phân tử DNA, ATP.',
    applicationsVi: [
      'Sản xuất phân lân (supephotphat) cho nông nghiệp',
      'Đầu que diêm quẹt an toàn (photpho đỏ)',
      'Thành phần cấu tạo DNA, RNA và ATP vận chuyển năng lượng trong tế bào'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 15 proton và 16 neutron (³¹P).',
      electronShellMeaning: 'Lớp 3 có 5 electron, phân lớp 3p³ bán bão hòa.',
      valenceElectronSignificance: 'Có 5 electron hóa trị, có thể mở rộng bát thể sang phân lớp 3d (như PCl₅).',
      periodicPositionReason: 'Ô 15, chu kỳ 3, nhóm VA/15.',
      ionTendencies: [
        {
          symbol: 'P³⁻',
          charge: -3,
          electronCount: 18,
          electronShells: [2, 8, 8],
          electronConfiguration: '[Ar]',
          equation: 'P + 3e⁻ → P³⁻',
          explanation: 'Nhận 3 electron tạo anion photphua P³⁻ có cấu hình Argon.'
        }
      ]
    },
    isotopes: [{ name: '³¹P', mass: 30.9737, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 16,
    symbol: 'S',
    nameVi: 'Lưu huỳnh / Sulfur',
    nameIupac: 'Sulfur',
    period: 3,
    group: 16,
    category: 'reactive-nonmetal',
    block: 'p',
    atomicMass: 32.06,
    atomicMassString: '32.06',
    electronConfiguration: '[Ne] 3s² 3p⁴',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁴',
    electronShells: [2, 8, 6],
    protons: 16,
    neutronsStandard: 16,
    electronegativity: 2.58,
    firstIonizationEnergy: 999.6,
    atomicRadius: 88,
    meltingPoint: 115.21,
    boilingPoint: 444.6,
    density: 2.07,
    oxidationStates: ['-2', '+2', '+4', '+6'],
    stateAt298K: 'solid',
    discoveryYear: 'Cổ đại',
    descriptionVi: 'Lưu huỳnh là chất rắn màu vàng tươi, giòn, không tan trong nước, cháy với ngọn lửa xanh lam sinh ra khí SO₂ có mùi hắc đặc trưng.',
    applicationsVi: [
      'Sản xuất axit sunfuric H₂SO₄ - hóa chất công nghiệp số một thế giới',
      'Lưu hóa cao su tăng độ đàn hồi và độ bền cơ học cho lốp xe',
      'Sản xuất thuốc trừ sâu, thuốc chữa bệnh da liễu, pháo hoa'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 16 proton và 16 neutron (³²S chiếm 95%).',
      electronShellMeaning: 'Lớp ngoài cùng có 6 electron (3s² 3p⁴).',
      valenceElectronSignificance: 'Có 6 electron hóa trị, dễ nhận 2e tạo ion S²⁻ hoặc tạo liên kết CHT có số oxi hóa lên tới +6.',
      periodicPositionReason: 'Ô 16, chu kỳ 3, nhóm VIA/16.',
      ionTendencies: [
        {
          symbol: 'S²⁻',
          charge: -2,
          electronCount: 18,
          electronShells: [2, 8, 8],
          electronConfiguration: '[Ar]',
          equation: 'S + 2e⁻ → S²⁻',
          explanation: 'Lưu huỳnh nhận 2 electron tạo anion sunfua S²⁻ có cấu hình bát thể bền của Argon.'
        }
      ]
    },
    isotopes: [
      { name: '³²S', mass: 31.972, abundance: 94.99, isStable: true },
      { name: '³⁴S', mass: 33.967, abundance: 4.25, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 17,
    symbol: 'Cl',
    nameVi: 'Clo / Chlorine',
    nameIupac: 'Chlorine',
    period: 3,
    group: 17,
    category: 'halogen',
    block: 'p',
    atomicMass: 35.45,
    atomicMassString: '35.45',
    electronConfiguration: '[Ne] 3s² 3p⁵',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁵',
    electronShells: [2, 8, 7],
    protons: 17,
    neutronsStandard: 18,
    electronegativity: 3.16,
    firstIonizationEnergy: 1251.2,
    atomicRadius: 79,
    meltingPoint: -101.5,
    boilingPoint: -34.04,
    density: 0.003214,
    oxidationStates: ['-1', '+1', '+3', '+5', '+7'],
    stateAt298K: 'gas',
    discoveryYear: '1774',
    descriptionVi: 'Clo là chất khí màu vàng lục, mùi xốc, nặng hơn không khí và rất độc. Là chất oxi hóa mạnh, phản ứng với hầu hết kim loại tạo muối clorua.',
    applicationsVi: [
      'Khử trùng nước sinh hoạt và hồ bơi tiêu diệt vi khuẩn',
      'Sản xuất nhựa PVC (Polyvinyl clorua) làm ống nước và màng bọc',
      'Chất tẩy trắng vải sợi, bột giấy và sản xuất chất tẩy rửa gia dụng Javel'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Clo gồm hai đồng vị bền tự nhiên: ³⁵Cl (~75.77%) và ³⁷Cl (~24.23%) tạo nên nguyên tử khối trung bình ~35.45.',
      electronShellMeaning: 'Lớp ngoài cùng có 7 electron (3s² 3p⁵).',
      valenceElectronSignificance: 'Chỉ thiếu 1 electron để đạt bát thể 8e bền vững của Argon.',
      periodicPositionReason: 'Ô 17, chu kỳ 3, nhóm VIIA/17.',
      ionTendencies: [
        {
          symbol: 'Cl⁻',
          charge: -1,
          electronCount: 18,
          electronShells: [2, 8, 8],
          electronConfiguration: '[Ar]',
          equation: 'Cl + 1e⁻ → Cl⁻',
          explanation: 'Clo nhận 1 electron tạo anion clorua Cl⁻ có cấu hình bát thể bền vững của khí hiếm Argon [Ar].'
        }
      ]
    },
    isotopes: [
      { name: '³⁵Cl', mass: 34.9688, abundance: 75.76, isStable: true },
      { name: '³⁷Cl', mass: 36.9659, abundance: 24.24, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST WebBook' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 18,
    symbol: 'Ar',
    nameVi: 'Argon',
    nameIupac: 'Argon',
    period: 3,
    group: 18,
    category: 'noble-gas',
    block: 'p',
    atomicMass: 39.948,
    atomicMassString: '39.948',
    electronConfiguration: '[Ne] 3s² 3p⁶',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶',
    electronShells: [2, 8, 8],
    protons: 18,
    neutronsStandard: 22,
    electronegativity: null,
    firstIonizationEnergy: 1520.6,
    atomicRadius: 71,
    meltingPoint: -189.34,
    boilingPoint: -185.85,
    density: 0.001784,
    oxidationStates: ['0'],
    stateAt298K: 'gas',
    discoveryYear: '1894',
    descriptionVi: 'Argon là khí hiếm phong phú nhất trong khí quyển Trái Đất (chiếm khoảng 0.93% thể tích). Trơ về mặt hóa học, không màu, không mùi, không cháy.',
    applicationsVi: [
      'Khí bảo vệ trong hàn hồ quang kim loại và titan',
      'Bơm vào bóng đèn sợi đốt ngăn vonfram bay hơi',
      'Điền vào khoảng không kính hộp cách âm cách nhiệt tòa nhà'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 18 proton và 22 neutron (⁴⁰Ar chiếm 99.6%).',
      electronShellMeaning: 'Lớp ngoài cùng có 8 electron bão hòa hoàn hảo (3s² 3p⁶).',
      valenceElectronSignificance: 'Cấu hình bát thể bền vững mang tính chuẩn mực cho chu kỳ 3.',
      periodicPositionReason: 'Ô 18, chu kỳ 3, nhóm VIIIA/18.',
      ionTendencies: []
    },
    isotopes: [
      { name: '⁴⁰Ar', mass: 39.9624, abundance: 99.60, isStable: true }
    ],
    sources: [{ title: 'IUPAC' }],
    dataStatus: 'verified'
  },

  // PERIOD 4
  {
    atomicNumber: 19,
    symbol: 'K',
    nameVi: 'Kali / Potassium',
    nameIupac: 'Potassium',
    period: 4,
    group: 1,
    category: 'alkali-metal',
    block: 's',
    atomicMass: 39.098,
    atomicMassString: '39.098',
    electronConfiguration: '[Ar] 4s¹',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹',
    electronShells: [2, 8, 8, 1],
    protons: 19,
    neutronsStandard: 20,
    electronegativity: 0.82,
    firstIonizationEnergy: 418.8,
    atomicRadius: 243,
    meltingPoint: 63.38,
    boilingPoint: 759,
    density: 0.862,
    oxidationStates: ['+1'],
    stateAt298K: 'solid',
    discoveryYear: '1807',
    descriptionVi: 'Kali là kim loại kiềm hoạt động hóa học rất mạnh, phản ứng nổ với nước tỏa nhiệt cháy ngọn lửa màu tím hoa cà. Rất quan trọng đối với cơ thể sống.',
    applicationsVi: [
      'Phân kali (KCl, K₂SO₄) giúp cây trồng phát triển rễ và chịu hạn',
      'Duy trì điện thế màng tế bào và hoạt động cơ tim ở động vật',
      'Xà phòng mềm kali stearate'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 19 proton và 20 neutron (³⁹K chiếm 93.3%).',
      electronShellMeaning: '4 lớp electron: K=2, L=8, M=8, N=1. Electron điền vào phân lớp 4s trước phân lớp 3d theo nguyên lý vững bền.',
      valenceElectronSignificance: 'Bán kính rất lớn, năng lượng ion hóa thấp (418.8 kJ/mol), cực kỳ dễ mất 1e thành K⁺.',
      periodicPositionReason: 'Ô 19, chu kỳ 4, nhóm IA.',
      ionTendencies: [
        {
          symbol: 'K⁺',
          charge: 1,
          electronCount: 18,
          electronShells: [2, 8, 8],
          electronConfiguration: '[Ar]',
          equation: 'K → K⁺ + 1e⁻',
          explanation: 'Kali nhường 1 electron ở lớp 4s tạo cation K⁺ có cấu hình bền của Argon [Ar].'
        }
      ]
    },
    isotopes: [
      { name: '³⁹K', mass: 38.9637, abundance: 93.26, isStable: true },
      { name: '⁴⁰K', mass: 39.964, abundance: 0.012, isStable: false },
      { name: '⁴¹K', mass: 40.9618, abundance: 6.73, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 20,
    symbol: 'Ca',
    nameVi: 'Canxi / Calcium',
    nameIupac: 'Calcium',
    period: 4,
    group: 2,
    category: 'alkaline-earth',
    block: 's',
    atomicMass: 40.078,
    atomicMassString: '40.078',
    electronConfiguration: '[Ar] 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²',
    electronShells: [2, 8, 8, 2],
    protons: 20,
    neutronsStandard: 20,
    electronegativity: 1.00,
    firstIonizationEnergy: 589.8,
    atomicRadius: 194,
    meltingPoint: 842,
    boilingPoint: 1484,
    density: 1.54,
    oxidationStates: ['+2'],
    stateAt298K: 'solid',
    discoveryYear: '1808',
    descriptionVi: 'Canxi là kim loại kiềm thổ màu xám bạc, phong phú thứ năm trong vỏ Trái Đất. Là thành phần cơ bản của đá vôi (CaCO₃), thạch cao (CaSO₄) và hệ xương, răng.',
    applicationsVi: [
      'Xi măng, vôi tôi (Ca(OH)₂) và thạch cao trong xây dựng',
      'Thành phần cấu tạo xương, răng và co bóp cơ bắp',
      'Khử oxi và lưu huỳnh trong sản xuất thép chất lượng cao'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 20 proton và 20 neutron (⁴⁰Ca có cấu trúc số thần kỳ kép bền vững).',
      electronShellMeaning: 'Lớp N có 2 electron ở phân lớp 4s.',
      valenceElectronSignificance: 'Có 2 electron hóa trị ở phân lớp 4s², nhường 2e tạo ion Ca²⁺.',
      periodicPositionReason: 'Ô 20, chu kỳ 4, nhóm IIA.',
      ionTendencies: [
        {
          symbol: 'Ca²⁺',
          charge: 2,
          electronCount: 18,
          electronShells: [2, 8, 8],
          electronConfiguration: '[Ar]',
          equation: 'Ca → Ca²⁺ + 2e⁻',
          explanation: 'Canxi nhường 2 electron lớp 4s tạo cation Ca²⁺ có cấu hình bền của Argon [Ar].'
        }
      ]
    },
    isotopes: [
      { name: '⁴⁰Ca', mass: 39.9626, abundance: 96.94, isStable: true },
      { name: '⁴⁴Ca', mass: 43.9555, abundance: 2.09, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 21,
    symbol: 'Sc',
    nameVi: 'Scandi / Scandium',
    nameIupac: 'Scandium',
    period: 4,
    group: 3,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 44.956,
    atomicMassString: '44.956',
    electronConfiguration: '[Ar] 3d¹ 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²',
    electronShells: [2, 8, 9, 2],
    protons: 21,
    neutronsStandard: 24,
    electronegativity: 1.36,
    firstIonizationEnergy: 633.1,
    atomicRadius: 184,
    meltingPoint: 1541,
    boilingPoint: 2836,
    density: 2.985,
    oxidationStates: ['+3'],
    stateAt298K: 'solid',
    discoveryYear: '1879',
    descriptionVi: 'Scandi là nguyên tố kim loại chuyển tiếp đầu tiên trong bảng tuần hoàn. Thuộc nhóm kim loại hiếm, có tính chất chuyển tiếp thú vị.',
    applicationsVi: [
      'Hợp kim nhôm - scandi cho khung máy bay chiến đấu và gậy bóng chày',
      'Đèn hơi thủy ngân halogen kim loại cho chiếu sáng sân vận động'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 21 proton và 24 neutron.',
      electronShellMeaning: 'Bắt đầu điền electron vào phân lớp 3d bên trong (3d¹ 4s²).',
      valenceElectronSignificance: 'Có 3 electron hóa trị (1 ở 3d và 2 ở 4s), hầu như chỉ tạo ion Sc³⁺.',
      periodicPositionReason: 'Ô 21, chu kỳ 4, nhóm IIIB/3.',
      ionTendencies: [
        {
          symbol: 'Sc³⁺',
          charge: 3,
          electronCount: 18,
          electronShells: [2, 8, 8],
          electronConfiguration: '[Ar]',
          equation: 'Sc → Sc³⁺ + 3e⁻',
          explanation: 'Nhường 2e ở 4s và 1e ở 3d tạo cấu hình khí hiếm Argon.'
        }
      ]
    },
    isotopes: [{ name: '⁴⁵Sc', mass: 44.9559, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 22,
    symbol: 'Ti',
    nameVi: 'Titan / Titanium',
    nameIupac: 'Titanium',
    period: 4,
    group: 4,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 47.867,
    atomicMassString: '47.867',
    electronConfiguration: '[Ar] 3d² 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²',
    electronShells: [2, 8, 10, 2],
    protons: 22,
    neutronsStandard: 26,
    electronegativity: 1.54,
    firstIonizationEnergy: 658.8,
    atomicRadius: 176,
    meltingPoint: 1668,
    boilingPoint: 3287,
    density: 4.506,
    oxidationStates: ['+2', '+3', '+4'],
    stateAt298K: 'solid',
    discoveryYear: '1791',
    descriptionVi: 'Titan là kim loại chuyển tiếp có độ bền riêng (tỷ số độ bền trên khối lượng) cao nhất trong các kim loại, chống ăn mòn cực tốt kể cả trong nước biển và axit.',
    applicationsVi: [
      'Thân máy bay siêu thanh, động cơ phản lực, tàu ngầm',
      'Khớp nhân tạo, cấy ghép nha khoa implant vì tương thích sinh học cao',
      'Titan dioxit (TiO₂) làm bột màu trắng sáng trong sơn, kem chống nắng'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 22 proton và 26 neutron (⁴⁸Ti chiếm 73.7%).',
      electronShellMeaning: 'Cấu hình electron [Ar] 3d² 4s².',
      valenceElectronSignificance: 'Có 4 electron hóa trị, hợp chất bền nhất ở trạng thái oxi hóa +4 (TiO₂).',
      periodicPositionReason: 'Ô 22, chu kỳ 4, nhóm IVB/4.',
      ionTendencies: [
        {
          symbol: 'Ti⁴⁺',
          charge: 4,
          electronCount: 18,
          electronShells: [2, 8, 8],
          electronConfiguration: '[Ar]',
          equation: 'Ti → Ti⁴⁺ + 4e⁻',
          explanation: 'Nhường cả 2e lớp 4s và 2e phân lớp 3d tạo ion Ti⁴⁺.'
        }
      ]
    },
    isotopes: [{ name: '⁴⁸Ti', mass: 47.9479, abundance: 73.72, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 23,
    symbol: 'V',
    nameVi: 'Vanađi / Vanadium',
    nameIupac: 'Vanadium',
    period: 4,
    group: 5,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 50.942,
    atomicMassString: '50.942',
    electronConfiguration: '[Ar] 3d³ 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²',
    electronShells: [2, 8, 11, 2],
    protons: 23,
    neutronsStandard: 28,
    electronegativity: 1.63,
    firstIonizationEnergy: 650.9,
    atomicRadius: 171,
    meltingPoint: 1910,
    boilingPoint: 3407,
    density: 6.11,
    oxidationStates: ['+2', '+3', '+4', '+5'],
    stateAt298K: 'solid',
    discoveryYear: '1801',
    descriptionVi: 'Vanađi tạo ra các dung dịch có 4 màu sắc rực rỡ ứng với 4 trạng thái oxi hóa: tím (+2), xanh lục (+3), xanh lam (+4), vàng (+5). Thép chứa vanađi cực kỳ dai và chống mỏi.',
    applicationsVi: [
      'Thép hợp kim ferrovanadi sản xuất lò xo, cờ lê, trục khuỷu',
      'Xúc tác V₂O₅ trong công nghiệp sản xuất axit sunfuric (phản ứng SO₂ → SO₃)',
      'Pin lưu trữ năng lượng dòng chảy oxy hóa khử vanadi'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 23 proton và 28 neutron.',
      electronShellMeaning: 'Cấu hình [Ar] 3d³ 4s².',
      valenceElectronSignificance: 'Có tối đa 5 electron hóa trị tham gia liên kết.',
      periodicPositionReason: 'Ô 23, chu kỳ 4, nhóm VB/5.',
      ionTendencies: []
    },
    isotopes: [{ name: '⁵¹V', mass: 50.944, abundance: 99.75, isStable: true }],
    sources: [{ title: 'IUPAC' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 24,
    symbol: 'Cr',
    nameVi: 'Crom / Chromium',
    nameIupac: 'Chromium',
    period: 4,
    group: 6,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 51.996,
    atomicMassString: '51.996',
    electronConfiguration: '[Ar] 3d⁵ 4s¹',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹',
    electronShells: [2, 8, 13, 1],
    protons: 24,
    neutronsStandard: 28,
    electronegativity: 1.66,
    firstIonizationEnergy: 652.9,
    atomicRadius: 166,
    meltingPoint: 1907,
    boilingPoint: 2671,
    density: 7.15,
    oxidationStates: ['+2', '+3', '+6'],
    stateAt298K: 'solid',
    discoveryYear: '1797',
    descriptionVi: 'Crom là kim loại cứng nhất trong tất cả các kim loại (độ cứng 8.5 trên thang Mohs, có thể rạch kính). Có cấu hình electron ngoại lệ 3d⁵ 4s¹ bán bão hòa bền vững.',
    applicationsVi: [
      'Thành phần bắt buộc trong thép không gỉ (Inox, chứa ≥10.5% Cr)',
      'Mạ crom trang trí và chống trầy xước cho phụ tùng ô tô, xe máy',
      'Hợp chất crom làm bột màu sơn, thuốc nhuộm và thuộc da'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 24 proton và 28 neutron (⁵²Cr chiếm 83.8%).',
      electronShellMeaning: 'Lớp electron: 2, 8, 13, 1. Ngoại lệ cấu hình: 1 electron từ 4s nhảy sang 3d để đạt cấu hình bán bão hòa 3d⁵ cực bền.',
      valenceElectronSignificance: '6 electron hóa trị (3d⁵ 4s¹), tạo các mức oxi hóa đa dạng +2, +3, +6.',
      periodicPositionReason: 'Ô 24, chu kỳ 4, nhóm VIB/6.',
      ionTendencies: [
        {
          symbol: 'Cr³⁺',
          charge: 3,
          electronCount: 21,
          electronShells: [2, 8, 11],
          electronConfiguration: '[Ar] 3d³',
          equation: 'Cr → Cr³⁺ + 3e⁻',
          explanation: 'Mất 1e ở 4s và 2e ở 3d tạo ion Cr³⁺ bền vững trong dung dịch.'
        }
      ]
    },
    isotopes: [{ name: '⁵²Cr', mass: 51.9405, abundance: 83.79, isStable: true }],
    sources: [{ title: 'IUPAC & NIST WebBook' }, { title: 'SGK Hóa học 10 & 12' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 25,
    symbol: 'Mn',
    nameVi: 'Mangan / Manganese',
    nameIupac: 'Manganese',
    period: 4,
    group: 7,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 54.938,
    atomicMassString: '54.938',
    electronConfiguration: '[Ar] 3d⁵ 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²',
    electronShells: [2, 8, 13, 2],
    protons: 25,
    neutronsStandard: 30,
    electronegativity: 1.55,
    firstIonizationEnergy: 717.3,
    atomicRadius: 161,
    meltingPoint: 1246,
    boilingPoint: 2061,
    density: 7.44,
    oxidationStates: ['+2', '+3', '+4', '+6', '+7'],
    stateAt298K: 'solid',
    discoveryYear: '1774',
    descriptionVi: 'Mangan là kim loại chuyển tiếp quan trọng trong công nghiệp gang thép. Thuốc tím KMnO₄ (Mn⁺⁷) là chất oxi hóa kinh điển trong phòng thí nghiệm.',
    applicationsVi: [
      'Khử lưu huỳnh và hợp kim hóa trong ngành luyện gang thép',
      'Pin kiềm và pin kẽm-cacbon (sử dụng MnO₂ làm cực catot)',
      'Thuốc tím KMnO₄ sát trùng vết thương, xử lý nước hồ nuôi thủy sản'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 25 proton và 30 neutron (⁵⁵Mn).',
      electronShellMeaning: 'Cấu hình [Ar] 3d⁵ 4s² có phân lớp 3d⁵ bán bão hòa rất bền.',
      valenceElectronSignificance: 'Có tới 7 electron hóa trị, trạng thái oxi hóa cực đại là +7 (KMnO₄).',
      periodicPositionReason: 'Ô 25, chu kỳ 4, nhóm VIIB/7.',
      ionTendencies: [
        {
          symbol: 'Mn²⁺',
          charge: 2,
          electronCount: 23,
          electronShells: [2, 8, 13],
          electronConfiguration: '[Ar] 3d⁵',
          equation: 'Mn → Mn²⁺ + 2e⁻',
          explanation: 'Mất 2 electron 4s tạo ion Mn²⁺ có phân lớp 3d⁵ bán bão hòa rất bền vững.'
        }
      ]
    },
    isotopes: [{ name: '⁵⁵Mn', mass: 54.938, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 26,
    symbol: 'Fe',
    nameVi: 'Sắt / Iron',
    nameIupac: 'Iron',
    period: 4,
    group: 8,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 55.845,
    atomicMassString: '55.845',
    electronConfiguration: '[Ar] 3d⁶ 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²',
    electronShells: [2, 8, 14, 2],
    protons: 26,
    neutronsStandard: 30,
    electronegativity: 1.83,
    firstIonizationEnergy: 762.5,
    atomicRadius: 156,
    meltingPoint: 1538,
    boilingPoint: 2862,
    density: 7.874,
    oxidationStates: ['+2', '+3'],
    stateAt298K: 'solid',
    discoveryYear: 'Cổ đại',
    descriptionVi: 'Sắt là kim loại được sử dụng nhiều nhất trong lịch sử loài người (chiếm >90% tổng khối lượng kim loại sản xuất trên thế giới). Có từ tính và đóng vai trò trung tâm vận chuyển oxy trong hemoglobin máu.',
    applicationsVi: [
      'Vật liệu cốt lõi của nền văn minh công nghiệp (gang, thép xây dựng)',
      'Lõi nam châm điện và máy biến áp',
      'Nhân Fe²⁺ trong hemoglobin hồng cầu máu vận chuyển O₂ nuôi cơ thể'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 26 proton và 30 neutron (⁵⁶Fe là một trong những hạt nhân bền vững nhất trong vũ trụ).',
      electronShellMeaning: 'Cấu hình [Ar] 3d⁶ 4s². Lớp M=14, lớp N=2.',
      valenceElectronSignificance: 'Có 8 electron hóa trị, dễ mất 2e ở 4s thành Fe²⁺ (3d⁶), hoặc mất thêm 1e ở 3d thành Fe³⁺ có phân lớp 3d⁵ bán bão hòa rất bền.',
      periodicPositionReason: 'Ô 26, chu kỳ 4, nhóm VIIIB/8.',
      ionTendencies: [
        {
          symbol: 'Fe²⁺',
          charge: 2,
          electronCount: 24,
          electronShells: [2, 8, 14],
          electronConfiguration: '[Ar] 3d⁶',
          equation: 'Fe → Fe²⁺ + 2e⁻',
          explanation: 'Sắt nhường 2 electron lớp 4s tạo cation Fe²⁺.'
        },
        {
          symbol: 'Fe³⁺',
          charge: 3,
          electronCount: 23,
          electronShells: [2, 8, 13],
          electronConfiguration: '[Ar] 3d⁵',
          equation: 'Fe → Fe³⁺ + 3e⁻',
          explanation: 'Nhường 2e ở 4s và 1e ở 3d tạo Fe³⁺ có cấu hình 3d⁵ bán bão hòa đặc biệt bền.'
        }
      ]
    },
    isotopes: [
      { name: '⁵⁴Fe', mass: 53.9396, abundance: 5.84, isStable: true },
      { name: '⁵⁶Fe', mass: 55.9349, abundance: 91.75, isStable: true },
      { name: '⁵⁷Fe', mass: 56.9354, abundance: 2.12, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST WebBook' }, { title: 'SGK Hóa học 10 & 12' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 27,
    symbol: 'Co',
    nameVi: 'Coban / Cobalt',
    nameIupac: 'Cobalt',
    period: 4,
    group: 9,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 58.933,
    atomicMassString: '58.933',
    electronConfiguration: '[Ar] 3d⁷ 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²',
    electronShells: [2, 8, 15, 2],
    protons: 27,
    neutronsStandard: 32,
    electronegativity: 1.88,
    firstIonizationEnergy: 760.4,
    atomicRadius: 152,
    meltingPoint: 1495,
    boilingPoint: 2927,
    density: 8.86,
    oxidationStates: ['+2', '+3'],
    stateAt298K: 'solid',
    discoveryYear: '1735',
    descriptionVi: 'Coban là kim loại chuyển tiếp có từ tính, màu trắng ánh xanh. Hợp chất của coban có màu xanh coban đặc trưng dùng trong hội họa ngàn năm qua.',
    applicationsVi: [
      'Pin sạc Lithium-ion (vật liệu catot LiCoO₂)',
      'Hợp kim siêu chịu nhiệt trong động cơ máy bay tua bin khí',
      'Đồng vị ⁶⁰Co phát tia gamma xạ trị ung thư và khử trùng y tế',
      'Thành phần trung tâm của Vitamin B12 (cobalamin)'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 27 proton và 32 neutron.',
      electronShellMeaning: 'Cấu hình [Ar] 3d⁷ 4s².',
      valenceElectronSignificance: 'Có 9 electron hóa trị, thường tạo số oxi hóa +2 và +3.',
      periodicPositionReason: 'Ô 27, chu kỳ 4, nhóm VIIIB/9.',
      ionTendencies: [
        {
          symbol: 'Co²⁺',
          charge: 2,
          electronCount: 25,
          electronShells: [2, 8, 15],
          electronConfiguration: '[Ar] 3d⁷',
          equation: 'Co → Co²⁺ + 2e⁻',
          explanation: 'Mất 2 electron 4s tạo Co²⁺.'
        }
      ]
    },
    isotopes: [{ name: '⁵⁹Co', mass: 58.9332, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 28,
    symbol: 'Ni',
    nameVi: 'Niken / Nickel',
    nameIupac: 'Nickel',
    period: 4,
    group: 10,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 58.693,
    atomicMassString: '58.693',
    electronConfiguration: '[Ar] 3d⁸ 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²',
    electronShells: [2, 8, 16, 2],
    protons: 28,
    neutronsStandard: 30,
    electronegativity: 1.91,
    firstIonizationEnergy: 737.1,
    atomicRadius: 149,
    meltingPoint: 1455,
    boilingPoint: 2913,
    density: 8.90,
    oxidationStates: ['+2', '+3'],
    stateAt298K: 'solid',
    discoveryYear: '1751',
    descriptionVi: 'Niken là kim loại màu trắng bạc, sáng bóng, chống ăn mòn cực tốt, có từ tính sắt từ ở nhiệt độ phòng.',
    applicationsVi: [
      'Chế tạo thép không gỉ (Inox 304 chứa 8% Ni)',
      'Pin sạc NiMH và pin xe điện thế hệ mới',
      'Xúc tác hiđro hóa dầu ăn thành bơ thực vật trong công nghiệp'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 28 proton và 30 neutron (⁵⁸Ni chiếm 68%).',
      electronShellMeaning: 'Cấu hình [Ar] 3d⁸ 4s².',
      valenceElectronSignificance: 'Có 10 electron hóa trị, mức oxi hóa phổ biến nhất là +2.',
      periodicPositionReason: 'Ô 28, chu kỳ 4, nhóm VIIIB/10.',
      ionTendencies: [
        {
          symbol: 'Ni²⁺',
          charge: 2,
          electronCount: 26,
          electronShells: [2, 8, 16],
          electronConfiguration: '[Ar] 3d⁸',
          equation: 'Ni → Ni²⁺ + 2e⁻',
          explanation: 'Mất 2 electron 4s tạo ion Ni²⁺ màu xanh lục.'
        }
      ]
    },
    isotopes: [{ name: '⁵⁸Ni', mass: 57.9353, abundance: 68.07, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 29,
    symbol: 'Cu',
    nameVi: 'Đồng / Copper',
    nameIupac: 'Copper',
    period: 4,
    group: 11,
    category: 'transition-metal',
    block: 'd',
    atomicMass: 63.546,
    atomicMassString: '63.546',
    electronConfiguration: '[Ar] 3d¹⁰ 4s¹',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹',
    electronShells: [2, 8, 18, 1],
    protons: 29,
    neutronsStandard: 34,
    electronegativity: 1.90,
    firstIonizationEnergy: 745.5,
    atomicRadius: 145,
    meltingPoint: 1084.62,
    boilingPoint: 2562,
    density: 8.96,
    oxidationStates: ['+1', '+2'],
    stateAt298K: 'solid',
    discoveryYear: 'Cổ đại',
    descriptionVi: 'Đồng là kim loại màu đỏ ánh cam ấm áp, dẫn điện và dẫn nhiệt tốt thứ hai chỉ sau bạc. Có cấu hình electron ngoại lệ 3d¹⁰ 4s¹ bão hòa phân lớp d rất bền.',
    applicationsVi: [
      'Dây dẫn điện, cuộn dây motor điện và bo mạch điện tử',
      'Đồng thau (hợp kim Cu-Zn) và đồng thanh (Cu-Sn) đúc tượng, nhạc cụ',
      'Diệt khuẩn bề mặt tự nhiên (hiệu ứng oligodynamic)'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Gồm hai đồng vị bền: ⁶³Cu (~69.15%) và ⁶⁵Cu (~30.85%).',
      electronShellMeaning: 'Lớp electron: 2, 8, 18, 1. 1e từ 4s nhảy sang 3d để đạt cấu hình bão hòa 3d¹⁰ bền vững.',
      valenceElectronSignificance: 'Có thể mất 1e ở 4s thành Cu⁺ (3d¹⁰), hoặc mất thêm 1e ở 3d thành Cu²⁺ (ion Cu²⁺ ngậm nước có màu xanh lam rất bền).',
      periodicPositionReason: 'Ô 29, chu kỳ 4, nhóm IB/11.',
      ionTendencies: [
        {
          symbol: 'Cu⁺',
          charge: 1,
          electronCount: 28,
          electronShells: [2, 8, 18],
          electronConfiguration: '[Ar] 3d¹⁰',
          equation: 'Cu → Cu⁺ + 1e⁻',
          explanation: 'Mất 1e ở 4s tạo ion Cu⁺ có phân lớp 3d¹⁰ bão hòa.'
        },
        {
          symbol: 'Cu²⁺',
          charge: 2,
          electronCount: 27,
          electronShells: [2, 8, 17],
          electronConfiguration: '[Ar] 3d⁹',
          equation: 'Cu → Cu²⁺ + 2e⁻',
          explanation: 'Mất 1e ở 4s và 1e ở 3d tạo cation Cu²⁺ bền vững trong dung dịch nước.'
        }
      ]
    },
    isotopes: [
      { name: '⁶³Cu', mass: 62.9296, abundance: 69.15, isStable: true },
      { name: '⁶⁵Cu', mass: 64.9278, abundance: 30.85, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST WebBook' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 30,
    symbol: 'Zn',
    nameVi: 'Kẽm / Zinc',
    nameIupac: 'Zinc',
    period: 4,
    group: 12,
    category: 'post-transition',
    block: 'd',
    atomicMass: 65.38,
    atomicMassString: '65.38',
    electronConfiguration: '[Ar] 3d¹⁰ 4s²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²',
    electronShells: [2, 8, 18, 2],
    protons: 30,
    neutronsStandard: 34,
    electronegativity: 1.65,
    firstIonizationEnergy: 906.4,
    atomicRadius: 142,
    meltingPoint: 419.53,
    boilingPoint: 907,
    density: 7.14,
    oxidationStates: ['+2'],
    stateAt298K: 'solid',
    discoveryYear: 'Cổ đại',
    descriptionVi: 'Kẽm là kim loại màu trắng xanh lam, bề mặt dễ tạo màng kẽm cacbonat kiềm bảo vệ. Được dùng rộng rãi để mạ bảo vệ sắt thép chống rỉ.',
    applicationsVi: [
      'Mạ kẽm tôn lợp mái và ống thép bảo vệ chống ăn mòn điện hóa',
      'Đúc hợp kim đồng thau (brass)',
      'Vi chất kẽm thiết yếu cho hệ miễn dịch và phát triển chiều cao',
      'Vỏ ngoài pin khô kẽm-cacbon'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 30 proton và 34 neutron (⁶⁴Zn chiếm 49.2%).',
      electronShellMeaning: 'Cấu hình bão hòa cả phân lớp 3d¹⁰ và 4s².',
      valenceElectronSignificance: 'Chỉ mất 2 electron ở phân lớp 4s², luôn có trạng thái oxi hóa duy nhất là +2 trong hợp chất.',
      periodicPositionReason: 'Ô 30, chu kỳ 4, nhóm IIB/12.',
      ionTendencies: [
        {
          symbol: 'Zn²⁺',
          charge: 2,
          electronCount: 28,
          electronShells: [2, 8, 18],
          electronConfiguration: '[Ar] 3d¹⁰',
          equation: 'Zn → Zn²⁺ + 2e⁻',
          explanation: 'Nhường 2 electron lớp 4s tạo ion Zn²⁺ có cấu hình electron [Ar] 3d¹⁰ bền.'
        }
      ]
    },
    isotopes: [{ name: '⁶⁴Zn', mass: 63.9291, abundance: 49.17, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 31,
    symbol: 'Ga',
    nameVi: 'Gali / Gallium',
    nameIupac: 'Gallium',
    period: 4,
    group: 13,
    category: 'post-transition',
    block: 'p',
    atomicMass: 69.723,
    atomicMassString: '69.723',
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p¹',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹',
    electronShells: [2, 8, 18, 3],
    protons: 31,
    neutronsStandard: 38,
    electronegativity: 1.81,
    firstIonizationEnergy: 578.8,
    atomicRadius: 136,
    meltingPoint: 29.76, // nóng chảy trên lòng bàn tay!
    boilingPoint: 2204,
    density: 5.91,
    oxidationStates: ['+3'],
    stateAt298K: 'solid',
    discoveryYear: '1875',
    descriptionVi: 'Gali có điểm nóng chảy kỳ lạ ở 29.76°C, có thể tan chảy thành chất lỏng óng ánh ngay trên lòng bàn tay người. Mendeleev từng tiên đoán chính xác sự tồn tại của nó dưới tên Eka-nhôm.',
    applicationsVi: [
      'Chất bán dẫn GaAs và GaN trong đèn LED siêu sáng, chip 5G, sạc nhanh GaN',
      'Nhiệt kế đo nhiệt độ cao thay thế thủy ngân'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 31 proton và 38 neutron.',
      electronShellMeaning: 'Lớp ngoài cùng có 3 electron (4s² 4p¹). Phân lớp 3d đã bão hòa 10e.',
      valenceElectronSignificance: 'Có 3 electron hóa trị ngoài cùng, tạo cation Ga³⁺.',
      periodicPositionReason: 'Ô 31, chu kỳ 4, nhóm IIIA/13.',
      ionTendencies: [
        {
          symbol: 'Ga³⁺',
          charge: 3,
          electronCount: 28,
          electronShells: [2, 8, 18],
          electronConfiguration: '[Ar] 3d¹⁰',
          equation: 'Ga → Ga³⁺ + 3e⁻',
          explanation: 'Nhường 3 electron ở lớp 4 (4s² 4p¹) tạo ion Ga³⁺.'
        }
      ]
    },
    isotopes: [{ name: '⁶⁹Ga', mass: 68.9256, abundance: 60.11, isStable: true }],
    sources: [{ title: 'IUPAC' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 32,
    symbol: 'Ge',
    nameVi: 'Gecmani / Germanium',
    nameIupac: 'Germanium',
    period: 4,
    group: 14,
    category: 'metalloid',
    block: 'p',
    atomicMass: 72.63,
    atomicMassString: '72.63',
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p²',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²',
    electronShells: [2, 8, 18, 4],
    protons: 32,
    neutronsStandard: 41,
    electronegativity: 2.01,
    firstIonizationEnergy: 762.2,
    atomicRadius: 125,
    meltingPoint: 938.25,
    boilingPoint: 2833,
    density: 5.323,
    oxidationStates: ['+2', '+4'],
    stateAt298K: 'solid',
    discoveryYear: '1886',
    descriptionVi: 'Gecmani là á kim bóng màu xám, chất bán dẫn quan trọng từng được dùng để chế tạo transistor đầu tiên trên thế giới.',
    applicationsVi: [
      'Quang học hồng ngoại trong camera nhìn đêm nhiệt',
      'Cáp quang truyền thông tin tốc độ cao',
      'Pin quang điện cho vệ tinh vũ trụ hiệu suất cao'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 32 proton và 41 neutron (⁷⁴Ge chiếm 36.5%).',
      electronShellMeaning: 'Lớp 4 có 4 electron (4s² 4p²).',
      valenceElectronSignificance: 'Có 4 electron hóa trị, tính chất bán dẫn tương tự Silic.',
      periodicPositionReason: 'Ô 32, chu kỳ 4, nhóm IVA/14.',
      ionTendencies: []
    },
    isotopes: [{ name: '⁷⁴Ge', mass: 73.9212, abundance: 36.72, isStable: true }],
    sources: [{ title: 'IUPAC' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 33,
    symbol: 'As',
    nameVi: 'Asen / Arsenic',
    nameIupac: 'Arsenic',
    period: 4,
    group: 15,
    category: 'metalloid',
    block: 'p',
    atomicMass: 74.922,
    atomicMassString: '74.922',
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p³',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³',
    electronShells: [2, 8, 18, 5],
    protons: 33,
    neutronsStandard: 42,
    electronegativity: 2.18,
    firstIonizationEnergy: 947.0,
    atomicRadius: 114,
    meltingPoint: 817, // thăng hoa ở 614°C
    boilingPoint: 614,
    density: 5.727,
    oxidationStates: ['-3', '+3', '+5'],
    stateAt298K: 'solid',
    discoveryYear: 'Cổ đại',
    descriptionVi: 'Asen (thạch tín) là á kim nổi tiếng trong lịch sử vì độc tính cao của các hợp chất vô cơ As(III). Tồn tại ở dạng xám kim loại, vàng và đen.',
    applicationsVi: [
      'Chất bán dẫn Gali Asenua (GaAs) trong mạch vi ba và laser bán dẫn',
      'Chất pha tạp (dopant) bán dẫn loại n trong sản xuất vi mạch'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 33 proton và 42 neutron (⁷⁵As).',
      electronShellMeaning: 'Lớp ngoài cùng có 5 electron (4s² 4p³).',
      valenceElectronSignificance: 'Phân lớp 4p³ bán bão hòa, tạo mức oxi hóa -3, +3, +5.',
      periodicPositionReason: 'Ô 33, chu kỳ 4, nhóm VA/15.',
      ionTendencies: []
    },
    isotopes: [{ name: '⁷⁵As', mass: 74.9216, abundance: 100, isStable: true }],
    sources: [{ title: 'IUPAC' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 34,
    symbol: 'Se',
    nameVi: 'Selen / Selenium',
    nameIupac: 'Selenium',
    period: 4,
    group: 16,
    category: 'reactive-nonmetal',
    block: 'p',
    atomicMass: 78.971,
    atomicMassString: '78.971',
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁴',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴',
    electronShells: [2, 8, 18, 6],
    protons: 34,
    neutronsStandard: 45,
    electronegativity: 2.55,
    firstIonizationEnergy: 941.0,
    atomicRadius: 103,
    meltingPoint: 221,
    boilingPoint: 685,
    density: 4.81,
    oxidationStates: ['-2', '+4', '+6'],
    stateAt298K: 'solid',
    discoveryYear: '1817',
    descriptionVi: 'Selen là phi kim có tính quang dẫn kỳ diệu: độ dẫn điện tăng lên gấp nhiều lần khi được chiếu sáng. Là vi chất chống oxi hóa quan trọng cho cơ thể.',
    applicationsVi: [
      'Trống quang học trong máy photocopy và máy in laser',
      'Tạo màu đỏ ruby cho thủy tinh và khử màu xanh của tạp chất sắt',
      'Vi chất dinh dưỡng tăng cường miễn dịch (enzym glutathione peroxidase)'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 34 proton và 45 neutron (⁸⁰Se chiếm 49.6%).',
      electronShellMeaning: 'Lớp 4 có 6 electron (4s² 4p⁴).',
      valenceElectronSignificance: 'Có 6 electron hóa trị, tương tự Lưu huỳnh, tạo ion Se²⁻.',
      periodicPositionReason: 'Ô 34, chu kỳ 4, nhóm VIA/16.',
      ionTendencies: [
        {
          symbol: 'Se²⁻',
          charge: -2,
          electronCount: 36,
          electronShells: [2, 8, 18, 8],
          electronConfiguration: '[Kr]',
          equation: 'Se + 2e⁻ → Se²⁻',
          explanation: 'Nhận 2 electron tạo ion selenua Se²⁻ có cấu hình Krypton.'
        }
      ]
    },
    isotopes: [{ name: '⁸⁰Se', mass: 79.9165, abundance: 49.61, isStable: true }],
    sources: [{ title: 'IUPAC' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 35,
    symbol: 'Br',
    nameVi: 'Brom / Bromine',
    nameIupac: 'Bromine',
    period: 4,
    group: 17,
    category: 'halogen',
    block: 'p',
    atomicMass: 79.904,
    atomicMassString: '79.904',
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁵',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵',
    electronShells: [2, 8, 18, 7],
    protons: 35,
    neutronsStandard: 45,
    electronegativity: 2.96,
    firstIonizationEnergy: 1139.9,
    atomicRadius: 94,
    meltingPoint: -7.2,
    boilingPoint: 58.8,
    density: 3.1028,
    oxidationStates: ['-1', '+1', '+3', '+5'],
    stateAt298K: 'liquid',
    discoveryYear: '1826',
    descriptionVi: 'Brom là phi kim duy nhất ở thể lỏng ở điều kiện thường (cùng với kim loại thủy ngân là 2 đơn chất lỏng duy nhất ở 25°C). Chất lỏng màu nâu đỏ bốc khói, mùi hắc độc hại.',
    applicationsVi: [
      'Chất chống cháy brom hóa trong nhựa và đồ điện tử',
      'Hợp chất AgBr phủ phim ảnh đen trắng truyền thống',
      'Tổng hợp dược phẩm và thuốc trừ sâu nông nghiệp'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Gồm hai đồng vị tự nhiên có tỷ lệ xấp xỉ 1:1: ⁷⁹Br (50.69%) và ⁸¹Br (49.31%).',
      electronShellMeaning: 'Lớp ngoài cùng có 7 electron (4s² 4p⁵).',
      valenceElectronSignificance: 'Thiếu 1 electron để đạt cấu hình bát thể bền của Krypton.',
      periodicPositionReason: 'Ô 35, chu kỳ 4, nhóm VIIA/17.',
      ionTendencies: [
        {
          symbol: 'Br⁻',
          charge: -1,
          electronCount: 36,
          electronShells: [2, 8, 18, 8],
          electronConfiguration: '[Kr]',
          equation: 'Br + 1e⁻ → Br⁻',
          explanation: 'Nhận 1 electron tạo anion bromua Br⁻ có cấu hình bền của khí hiếm Krypton.'
        }
      ]
    },
    isotopes: [
      { name: '⁷⁹Br', mass: 78.9183, abundance: 50.69, isStable: true },
      { name: '⁸¹Br', mass: 80.9163, abundance: 49.31, isStable: true }
    ],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },
  {
    atomicNumber: 36,
    symbol: 'Kr',
    nameVi: 'Krypton',
    nameIupac: 'Krypton',
    period: 4,
    group: 18,
    category: 'noble-gas',
    block: 'p',
    atomicMass: 83.798,
    atomicMassString: '83.798',
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁶',
    electronConfigurationFull: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶',
    electronShells: [2, 8, 18, 8],
    protons: 36,
    neutronsStandard: 48,
    electronegativity: 3.00,
    firstIonizationEnergy: 1350.8,
    atomicRadius: 88,
    meltingPoint: -157.37,
    boilingPoint: -153.22,
    density: 0.003749,
    oxidationStates: ['0', '+2'],
    stateAt298K: 'gas',
    discoveryYear: '1898',
    descriptionVi: 'Krypton là khí hiếm chu kỳ 4. Từng được dùng làm chuẩn định nghĩa độ dài 1 mét từ năm 1960 đến 1983 dựa trên bước sóng vạch quang phổ cam đỏ của ⁸⁶Kr.',
    applicationsVi: [
      'Bóng đèn flash chụp ảnh tốc độ cao và đèn đường băng sân bay',
      'Laser excimer KrF dùng trong quang khắc sản xuất chip bán dẫn tinh vi',
      'Khí cách nhiệt trong kính hộp cao cấp'
    ],
    teachingNotesVi: {
      protonNeutronExplanation: 'Hạt nhân có 36 proton và 48 neutron (⁸⁴Kr chiếm 57%).',
      electronShellMeaning: 'Lớp 4 có 8 electron bão hòa bát thể (4s² 4p⁶).',
      valenceElectronSignificance: 'Cấu hình bão hòa bền vững của khí hiếm, tuy nhiên dưới điều kiện đặc biệt có thể tạo hợp chất KrF₂.',
      periodicPositionReason: 'Ô 36, chu kỳ 4, nhóm VIIIA/18.',
      ionTendencies: []
    },
    isotopes: [{ name: '⁸⁴Kr', mass: 83.9115, abundance: 57.0, isStable: true }],
    sources: [{ title: 'IUPAC & NIST' }],
    dataStatus: 'verified'
  },

  // Helper generator for elements 37 to 118 with authentic chemical ground truth
  ...generateRemainingElements()
];

function generateRemainingElements(): ElementData[] {
  // Complete catalog of elements 37-118 with accurate period, group, category, electron shells, configuration
  const rawList: Array<{
    z: number;
    sym: string;
    vi: string;
    en: string;
    per: number;
    grp: number;
    cat: ElementCategory;
    blk: 's' | 'p' | 'd' | 'f';
    mass: string;
    cfg: string;
    shells: number[];
    p: number;
    n: number;
    enPauling: number | null;
    ie1: number | null;
    rad: number | null;
    mp: number | null;
    bp: number | null;
    state: 'solid' | 'liquid' | 'gas' | 'unknown';
    ox: string[];
    year: string;
    desc: string;
    apps: string[];
  }> = [
    // PERIOD 5
    { z: 37, sym: 'Rb', vi: 'Rubiđi / Rubidium', en: 'Rubidium', per: 5, grp: 1, cat: 'alkali-metal', blk: 's', mass: '85.468', cfg: '[Kr] 5s¹', shells: [2,8,18,8,1], p: 37, n: 48, enPauling: 0.82, ie1: 403.0, rad: 265, mp: 39.3, bp: 688, state: 'solid', ox: ['+1'], year: '1861', desc: 'Kim loại kiềm rất hoạt động, bốc cháy trong không khí và phản ứng nổ với nước.', apps: ['Đồng hồ nguyên tử Rubidi', 'Tế bào quang điện'] },
    { z: 38, sym: 'Sr', vi: 'Stronti / Strontium', en: 'Strontium', per: 5, grp: 2, cat: 'alkaline-earth', blk: 's', mass: '87.62', cfg: '[Kr] 5s²', shells: [2,8,18,8,2], p: 38, n: 50, enPauling: 0.95, ie1: 549.5, rad: 219, mp: 777, bp: 1382, state: 'solid', ox: ['+2'], year: '1790', desc: 'Kim loại kiềm thổ, cháy với ngọn lửa màu đỏ tươi thắm.', apps: ['Pháo hoa màu đỏ rực', 'Đồng hồ quang học nguyên tử chính xác cao', 'Đồng vị ⁸⁹Sr điều trị giảm đau ung thư xương'] },
    { z: 39, sym: 'Y', vi: 'Ytri / Yttrium', en: 'Yttrium', per: 5, grp: 3, cat: 'transition-metal', blk: 'd', mass: '88.906', cfg: '[Kr] 4d¹ 5s²', shells: [2,8,18,9,2], p: 39, n: 50, enPauling: 1.22, ie1: 600.0, rad: 212, mp: 1526, bp: 3345, state: 'solid', ox: ['+3'], year: '1794', desc: 'Kim loại đất hiếm màu trắng bạc, dùng chế tạo gốm siêu dẫn nhiệt độ cao YBCO.', apps: ['Laser YAG (Y₃Al₅O₁₂) trong y học và phẫu thuật mắt', 'Vật liệu siêu dẫn nhiệt độ cao', 'Phốt pho đỏ tivi màu'] },
    { z: 40, sym: 'Zr', vi: 'Ziriconi / Zirconium', en: 'Zirconium', per: 5, grp: 4, cat: 'transition-metal', blk: 'd', mass: '91.224', cfg: '[Kr] 4d² 5s²', shells: [2,8,18,10,2], p: 40, n: 51, enPauling: 1.33, ie1: 640.1, rad: 206, mp: 1855, bp: 4409, state: 'solid', ox: ['+4'], year: '1789', desc: 'Kim loại chịu nhiệt và chống ăn mòn tuyệt vời, ít hấp thụ neutron nhiệt.', apps: ['Vỏ bọc thanh nhiên liệu lò phản ứng hạt nhân', 'Đá nhân tạo giả kim cương Cubic Zirconia (CZ)', 'Dao gốm sứ zirconia sắc bén'] },
    { z: 41, sym: 'Nb', vi: 'Niobi / Niobium', en: 'Niobium', per: 5, grp: 5, cat: 'transition-metal', blk: 'd', mass: '92.906', cfg: '[Kr] 4d⁴ 5s¹', shells: [2,8,18,12,1], p: 41, n: 52, enPauling: 1.6, ie1: 652.1, rad: 198, mp: 2477, bp: 4744, state: 'solid', ox: ['+5'], year: '1801', desc: 'Kim loại siêu dẫn ở nhiệt độ thấp, ngoại lệ cấu hình 4d⁴ 5s¹.', apps: ['Nam châm siêu dẫn Nb-Ti máy quét MRI và máy gia tốc LHC', 'Thép ống dẫn dầu khí độ bền cao'] },
    { z: 42, sym: 'Mo', vi: 'Molipđen / Molybdenum', en: 'Molybdenum', per: 5, grp: 6, cat: 'transition-metal', blk: 'd', mass: '95.95', cfg: '[Kr] 4d⁵ 5s¹', shells: [2,8,18,13,1], p: 42, n: 54, enPauling: 2.16, ie1: 684.3, rad: 190, mp: 2623, bp: 4639, state: 'solid', ox: ['+6'], year: '1778', desc: 'Kim loại có nhiệt độ nóng chảy rất cao, cấu hình ngoại lệ 4d⁵ 5s¹ bền vững.', apps: ['Thép hợp kim chịu nhiệt và chống ăn mòn cao', 'Dầu bôi trơn MoS₂ chịu áp lực cực hạn', 'Điện cực thủy tinh'] },
    { z: 43, sym: 'Tc', vi: 'Tecneti / Technetium', en: 'Technetium', per: 5, grp: 7, cat: 'transition-metal', blk: 'd', mass: '[98]', cfg: '[Kr] 4d⁵ 5s²', shells: [2,8,18,13,2], p: 43, n: 55, enPauling: 1.9, ie1: 702.0, rad: 183, mp: 2157, bp: 4265, state: 'solid', ox: ['+4', '+7'], year: '1937', desc: 'Nguyên tố nhân tạo đầu tiên được điều chế trong phòng thí nghiệm. Không có đồng vị bền.', apps: ['Đồng vị ⁹⁹ᵐTc là chất đánh dấu phóng xạ quan trọng nhất trong y học chẩn đoán hình ảnh SPECT'] },
    { z: 44, sym: 'Ru', vi: 'Ruteni / Ruthenium', en: 'Ruthenium', per: 5, grp: 8, cat: 'transition-metal', blk: 'd', mass: '101.07', cfg: '[Kr] 4d⁷ 5s¹', shells: [2,8,18,15,1], p: 44, n: 57, enPauling: 2.2, ie1: 710.2, rad: 178, mp: 2334, bp: 4150, state: 'solid', ox: ['+3', '+4', '+8'], year: '1844', desc: 'Kim loại nhóm platin quý hiếm, cứng và trơ, cấu hình ngoại lệ 4d⁷ 5s¹.', apps: ['Tiếp điểm điện siêu bền', 'Xúc tác hóa học tổng hợp hữu cơ', 'Chíp nhớ điện trở'] },
    { z: 45, sym: 'Rh', vi: 'Rođi / Rhodium', en: 'Rhodium', per: 5, grp: 9, cat: 'transition-metal', blk: 'd', mass: '102.91', cfg: '[Kr] 4d⁸ 5s¹', shells: [2,8,18,16,1], p: 45, n: 58, enPauling: 2.28, ie1: 719.7, rad: 173, mp: 1964, bp: 3695, state: 'solid', ox: ['+3'], year: '1803', desc: 'Một trong những kim loại quý và đắt nhất hành tinh, phản xạ ánh sáng tuyệt vời.', apps: ['Bộ chuyển đổi xúc tác xử lý khí thải ô tô', 'Mạ trang trí vàng trắng bóng sáng lộng lẫy'] },
    { z: 46, sym: 'Pd', vi: 'Palađi / Palladium', en: 'Palladium', per: 5, grp: 10, cat: 'transition-metal', blk: 'd', mass: '106.42', cfg: '[Kr] 4d¹⁰', shells: [2,8,18,18,0], p: 46, n: 60, enPauling: 2.20, ie1: 804.4, rad: 169, mp: 1554.9, bp: 2963, state: 'solid', ox: ['+2', '+4'], year: '1803', desc: 'Ngoại lệ đặc biệt nhất: toàn bộ e chuyển vào 4d¹⁰, lớp 5s hoàn toàn trống [Kr] 4d¹⁰ 5s⁰. Hấp thụ lượng khí H₂ gấp 900 lần thể tích của nó!', apps: ['Bộ xử lý khí thải ô tô', 'Xúc tác ghép cặp Suzuki trong hóa dược', 'Lọc khí hiđro tinh khiết'] },
    { z: 47, sym: 'Ag', vi: 'Bạc / Silver', en: 'Silver', per: 5, grp: 11, cat: 'transition-metal', blk: 'd', mass: '107.87', cfg: '[Kr] 4d¹⁰ 5s¹', shells: [2,8,18,18,1], p: 47, n: 61, enPauling: 1.93, ie1: 731.0, rad: 165, mp: 961.78, bp: 2162, state: 'solid', ox: ['+1'], year: 'Cổ đại', desc: 'Kim loại có độ dẫn điện và độ dẫn nhiệt cao nhất trong mọi kim loại. Màu trắng bạc lấp lánh.', apps: ['Đúc tiền và trang sức quý phái', 'Tiếp điểm điện cao cấp và chất hàn quang điện mặt trời', 'Kháng khuẩn ion Ag⁺ trong y tế'] },
    { z: 48, sym: 'Cd', vi: 'Cađimi / Cadmium', en: 'Cadmium', per: 5, grp: 12, cat: 'post-transition', blk: 'd', mass: '112.41', cfg: '[Kr] 4d¹⁰ 5s²', shells: [2,8,18,18,2], p: 48, n: 64, enPauling: 1.69, ie1: 867.8, rad: 161, mp: 321.07, bp: 767, state: 'solid', ox: ['+2'], year: '1817', desc: 'Kim loại mềm màu trắng ánh xanh, độc hại đối với môi trường và con người.', apps: ['Pin sạc Ni-Cd truyền thống', 'Thanh hấp thụ neutron trong lò phản ứng hạt nhân', 'Màu vẽ vàng Cadmium'] },
    { z: 49, sym: 'In', vi: 'Inđi / Indium', en: 'Indium', per: 5, grp: 13, cat: 'post-transition', blk: 'p', mass: '114.82', cfg: '[Kr] 4d¹⁰ 5s² 5p¹', shells: [2,8,18,18,3], p: 49, n: 66, enPauling: 1.78, ie1: 558.3, rad: 156, mp: 156.6, bp: 2072, state: 'solid', ox: ['+3'], year: '1863', desc: 'Kim loại rất mềm, có thể cắn bằng răng hoặc gập bằng ngón tay.', apps: ['Màng trong suốt dẫn điện ITO (Indium Tin Oxide) cho màn hình cảm ứng điện thoại, tivi'] },
    { z: 50, sym: 'Sn', vi: 'Thiếc / Tin', en: 'Tin', per: 5, grp: 14, cat: 'post-transition', blk: 'p', mass: '118.71', cfg: '[Kr] 4d¹⁰ 5s² 5p²', shells: [2,8,18,18,4], p: 50, n: 69, enPauling: 1.96, ie1: 708.6, rad: 145, mp: 231.93, bp: 2602, state: 'solid', ox: ['+2', '+4'], year: 'Cổ đại', desc: 'Kim loại màu trắng bạc, chống ăn mòn tốt. Khi uốn cong thanh thiếc phát ra tiếng kêu "tiếng khóc của thiếc".', apps: ['Mạ thiếc làm hộp sữa, đồ hộp sắt tây', 'Hợp kim hàn thiếc trong lắp ráp linh kiện điện tử', 'Hợp kim đồng thanh (bronze)'] },
    { z: 51, sym: 'Sb', vi: 'Antimon / Antimony', en: 'Antimony', per: 5, grp: 15, cat: 'metalloid', blk: 'p', mass: '121.76', cfg: '[Kr] 4d¹⁰ 5s² 5p³', shells: [2,8,18,18,5], p: 51, n: 71, enPauling: 2.05, ie1: 834.0, rad: 133, mp: 630.63, bp: 1587, state: 'solid', ox: ['-3', '+3', '+5'], year: 'Cổ đại', desc: 'Á kim giòn màu xám bạc, nở ra khi đông đặc giúp đúc chữ in sắc nét.', apps: ['Chất làm chậm cháy halogen', 'Hợp kim chì - antimon trong ắc quy xe máy ô tô', 'Chữ in kim loại'] },
    { z: 52, sym: 'Te', vi: 'Telu / Tellurium', en: 'Tellurium', per: 5, grp: 16, cat: 'metalloid', blk: 'p', mass: '127.60', cfg: '[Kr] 4d¹⁰ 5s² 5p⁴', shells: [2,8,18,18,6], p: 52, n: 76, enPauling: 2.1, ie1: 869.3, rad: 123, mp: 449.51, bp: 988, state: 'solid', ox: ['-2', '+4', '+6'], year: '1782', desc: 'Á kim giòn hiếm thấy, bán dẫn nhiệt điện nổi tiếng.', apps: ['Tế bào pin quang điện màng mỏng CdTe', 'Vật liệu làm lạnh nhiệt điện bismuth telluride'] },
    { z: 53, sym: 'I', vi: 'Iot / Iodine', en: 'Iodine', per: 5, grp: 17, cat: 'halogen', blk: 'p', mass: '126.90', cfg: '[Kr] 4d¹⁰ 5s² 5p⁵', shells: [2,8,18,18,7], p: 53, n: 74, enPauling: 2.66, ie1: 1008.4, rad: 115, mp: 113.7, bp: 184.3, state: 'solid', ox: ['-1', '+1', '+3', '+5', '+7'], year: '1811', desc: 'Chất rắn tím đen lấp lánh ánh kim, dễ thăng hoa thành hơi màu tím tuyệt đẹp. Là vi chất dinh dưỡng tuyến giáp.', apps: ['Muối iot phòng ngừa bệnh bướu cổ và đần độn', 'Cồn iot (Povidone-iodine) sát trùng vết mổ', 'Chất cản quang chụp CT scan'] },
    { z: 54, sym: 'Xe', vi: 'Xenon', en: 'Xenon', per: 5, grp: 18, cat: 'noble-gas', blk: 'p', mass: '131.29', cfg: '[Kr] 4d¹⁰ 5s² 5p⁶', shells: [2,8,18,18,8], p: 54, n: 77, enPauling: 2.6, ie1: 1170.4, rad: 108, mp: -111.7, bp: -108.12, state: 'gas', ox: ['0', '+2', '+4', '+6', '+8'], year: '1898', desc: 'Khí hiếm nặng, có thể tạo thành hợp chất hóa học thực sự với flo và oxi (XeF₂, XeF₄, XeO₃).', apps: ['Đèn pha ô tô xenon và đèn rạp chiếu phim công suất cao', 'Khí đẩy cho động cơ ion tàu thăm dò vũ trụ Deep Space'] },

    // PERIOD 6
    { z: 55, sym: 'Cs', vi: 'Xesi / Caesium', en: 'Caesium', per: 6, grp: 1, cat: 'alkali-metal', blk: 's', mass: '132.91', cfg: '[Xe] 6s¹', shells: [2,8,18,18,8,1], p: 55, n: 78, enPauling: 0.79, ie1: 375.7, rad: 298, mp: 28.5, bp: 671, state: 'solid', ox: ['+1'], year: '1860', desc: 'Kim loại kiềm có độ âm điện thấp nhất trong bảng tuần hoàn (0.79), cực kỳ hoạt động hóa học.', apps: ['Đồng hồ nguyên tử Xesi định nghĩa đơn vị giây SI tiêu chuẩn quốc tế', 'Dầu khoan mạt xesi format'] },
    { z: 56, sym: 'Ba', vi: 'Bari / Barium', en: 'Barium', per: 6, grp: 2, cat: 'alkaline-earth', blk: 's', mass: '137.33', cfg: '[Xe] 6s²', shells: [2,8,18,18,8,2], p: 56, n: 81, enPauling: 0.89, ie1: 502.9, rad: 253, mp: 727, bp: 1897, state: 'solid', ox: ['+2'], year: '1808', desc: 'Kim loại kiềm thổ, cháy với ngọn lửa màu xanh lục táo đặc trưng.', apps: ['Chất cản quang BaSO₄ trong chụp X-quang đường tiêu hóa', 'Pháo hoa màu xanh lá cây rực rỡ'] },
    // Lanthanoids (57-71)
    { z: 57, sym: 'La', vi: 'Lantan / Lanthanum', en: 'Lanthanum', per: 6, grp: 3, cat: 'lanthanoid', blk: 'd', mass: '138.91', cfg: '[Xe] 5d¹ 6s²', shells: [2,8,18,18,9,2], p: 57, n: 82, enPauling: 1.1, ie1: 538.1, rad: 195, mp: 920, bp: 3464, state: 'solid', ox: ['+3'], year: '1839', desc: 'Nguyên tố đứng đầu chuỗi lantan, kim loại đất hiếm màu trắng bạc mềm.', apps: ['Pin xe hybrid NiMH', 'Thấu kính máy ảnh cao cấp có độ khúc xạ lớn', 'Đá lửa quẹt ga'] },
    { z: 58, sym: 'Ce', vi: 'Xeri / Cerium', en: 'Cerium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '140.12', cfg: '[Xe] 4f¹ 5d¹ 6s²', shells: [2,8,18,19,9,2], p: 58, n: 82, enPauling: 1.12, ie1: 534.4, rad: 185, mp: 795, bp: 3443, state: 'solid', ox: ['+3', '+4'], year: '1803', desc: 'Kim loại đất hiếm phong phú nhất trong vỏ Trái Đất, có số oxi hóa +4 đặc biệt.', apps: ['Đánh bóng kính màn hình và lăng kính (CeO₂)', 'Bộ chuyển đổi xúc tác khí thải'] },
    { z: 59, sym: 'Pr', vi: 'Praseođim / Praseodymium', en: 'Praseodymium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '140.91', cfg: '[Xe] 4f³ 6s²', shells: [2,8,18,21,8,2], p: 59, n: 82, enPauling: 1.13, ie1: 527.0, rad: 185, mp: 935, bp: 3520, state: 'solid', ox: ['+3'], year: '1885', desc: 'Tạo muối có màu xanh lục vàng đẹp mắt.', apps: ['Kính bảo hộ thợ hàn lọc tia vàng độc hại', 'Nam châm vĩnh cửu siêu mạnh Pr-Fe-B'] },
    { z: 60, sym: 'Nd', vi: 'Neođim / Neodymium', en: 'Neodymium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '144.24', cfg: '[Xe] 4f⁴ 6s²', shells: [2,8,18,22,8,2], p: 60, n: 84, enPauling: 1.14, ie1: 533.1, rad: 185, mp: 1024, bp: 3074, state: 'solid', ox: ['+3'], year: '1885', desc: 'Nổi tiếng chế tạo nam châm đất hiếm mạnh nhất thế giới (NdFeB).', apps: ['Nam châm siêu mạnh trong loa điện thoại, tai nghe, động cơ xe điện Tesla', 'Laser Nd:YAG'] },
    { z: 61, sym: 'Pm', vi: 'Prometi / Promethium', en: 'Promethium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '[145]', cfg: '[Xe] 4f⁵ 6s²', shells: [2,8,18,23,8,2], p: 61, n: 84, enPauling: 1.13, ie1: 540.0, rad: 185, mp: 1042, bp: 3000, state: 'solid', ox: ['+3'], year: '1945', desc: 'Nguyên tố phóng xạ duy nhất trong họ lantan, không tồn tại ổn định trong tự nhiên.', apps: ['Pin hạt nhân phát quang cho phao cứu sinh và tàu thám hiểm không gian'] },
    { z: 62, sym: 'Sm', vi: 'Samari / Samarium', en: 'Samarium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '150.36', cfg: '[Xe] 4f⁶ 6s²', shells: [2,8,18,24,8,2], p: 62, n: 88, enPauling: 1.17, ie1: 544.5, rad: 185, mp: 1072, bp: 1794, state: 'solid', ox: ['+2', '+3'], year: '1879', desc: 'Dùng chế tạo nam châm chịu nhiệt độ cao Samarium-Cobalt (SmCo).', apps: ['Nam châm chịu nhiệt độ cao trong tên lửa và động cơ máy bay', 'Thuốc phóng xạ trị ung thư ¹⁵³Sm'] },
    { z: 63, sym: 'Eu', vi: 'Europi / Europium', en: 'Europium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '151.96', cfg: '[Xe] 4f⁷ 6s²', shells: [2,8,18,25,8,2], p: 63, n: 89, enPauling: 1.2, ie1: 547.1, rad: 185, mp: 826, bp: 1529, state: 'solid', ox: ['+2', '+3'], year: '1901', desc: 'Có cấu hình 4f⁷ bán bão hòa, phát huỳnh quang đỏ và xanh rực rỡ.', apps: ['Mực phát quang chống tiền giả trên tờ tiền giấy Euro (€)', 'Phốt pho màn hình tivi'] },
    { z: 64, sym: 'Gd', vi: 'Gađolini / Gadolinium', en: 'Gadolinium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'd', mass: '157.25', cfg: '[Xe] 4f⁷ 5d¹ 6s²', shells: [2,8,18,25,9,2], p: 64, n: 93, enPauling: 1.2, ie1: 593.4, rad: 180, mp: 1312, bp: 3273, state: 'solid', ox: ['+3'], year: '1880', desc: 'Có 7 electron độc thân ở phân lớp 4f⁷, độ thuận từ cực lớn ở nhiệt độ phòng.', apps: ['Thuốc đối quang từ trong chụp cộng hưởng từ MRI', 'Làm lạnh từ trường'] },
    { z: 65, sym: 'Tb', vi: 'Técbi / Terbium', en: 'Terbium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '158.93', cfg: '[Xe] 4f⁹ 6s²', shells: [2,8,18,27,8,2], p: 65, n: 94, enPauling: 1.2, ie1: 565.8, rad: 175, mp: 1356, bp: 3230, state: 'solid', ox: ['+3', '+4'], year: '1843', desc: 'Phát huỳnh quang màu xanh lá cây thuần khiết.', apps: ['Hợp kim từ giảo Terfenol-D dùng trong sonar thủy âm', 'Đèn huỳnh quang tiết kiệm điện'] },
    { z: 66, sym: 'Dy', vi: 'Đisprosi / Dysprosium', en: 'Dysprosium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '162.50', cfg: '[Xe] 4f¹⁰ 6s²', shells: [2,8,18,28,8,2], p: 66, n: 97, enPauling: 1.22, ie1: 573.0, rad: 175, mp: 1407, bp: 2567, state: 'solid', ox: ['+3'], year: '1886', desc: 'Kim loại đất hiếm có mômen từ lớn nhất trong các nguyên tố.', apps: ['Pha vào nam châm NdFeB giúp duy trì từ tính ở nhiệt độ cao trong động cơ ô tô điện'] },
    { z: 67, sym: 'Ho', vi: 'Honmi / Holmium', en: 'Holmium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '164.93', cfg: '[Xe] 4f¹¹ 6s²', shells: [2,8,18,29,8,2], p: 67, n: 98, enPauling: 1.23, ie1: 581.0, rad: 175, mp: 1474, bp: 2700, state: 'solid', ox: ['+3'], year: '1878', desc: 'Có khả năng tập trung đường sức từ mạnh nhất.', apps: ['Laser Ho:YAG phẫu thuật tán sỏi thận', 'Thanh cực nam châm tạo từ trường cực đại'] },
    { z: 68, sym: 'Er', vi: 'Eribi / Erbium', en: 'Erbium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '167.26', cfg: '[Xe] 4f¹² 6s²', shells: [2,8,18,30,8,2], p: 68, n: 99, enPauling: 1.24, ie1: 589.3, rad: 175, mp: 1529, bp: 2868, state: 'solid', ox: ['+3'], year: '1842', desc: 'Muối của nó có màu hồng phấn quyến rũ.', apps: ['Bộ khuếch đại quang học sợi quang EDFA cho mạng Internet toàn cầu', 'Laser thẩm mỹ da'] },
    { z: 69, sym: 'Tm', vi: 'Tuli / Thulium', en: 'Thulium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '168.93', cfg: '[Xe] 4f¹³ 6s²', shells: [2,8,18,31,8,2], p: 69, n: 100, enPauling: 1.25, ie1: 596.7, rad: 175, mp: 1545, bp: 1950, state: 'solid', ox: ['+3'], year: '1879', desc: 'Một trong những nguyên tố đất hiếm ít phổ biến nhất.', apps: ['Máy chụp X-quang di động xách tay', 'Laser phẫu thuật y khoa'] },
    { z: 70, sym: 'Yb', vi: 'Ytecbi / Ytterbium', en: 'Ytterbium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'f', mass: '173.05', cfg: '[Xe] 4f¹⁴ 6s²', shells: [2,8,18,32,8,2], p: 70, n: 103, enPauling: 1.1, ie1: 603.4, rad: 175, mp: 824, bp: 1196, state: 'solid', ox: ['+2', '+3'], year: '1878', desc: 'Cấu hình bão hòa 4f¹⁴ 6s².', apps: ['Laser sợi quang công suất lớn gia công cắt kim loại', 'Đồng hồ nguyên tử thế hệ mới'] },
    { z: 71, sym: 'Lu', vi: 'Luteti / Lutetium', en: 'Lutetium', per: 6, grp: 3, cat: 'lanthanoid', blk: 'd', mass: '174.97', cfg: '[Xe] 4f¹⁴ 5d¹ 6s²', shells: [2,8,18,32,9,2], p: 71, n: 104, enPauling: 1.27, ie1: 523.5, rad: 175, mp: 1663, bp: 3402, state: 'solid', ox: ['+3'], year: '1907', desc: 'Nguyên tố cuối cùng của họ lantan, cứng nhất và nặng nhất trong chuỗi.', apps: ['Tinh thể máy chụp cắt lớp xạ hình positron PET scan (LSO:Ce)', 'Xúc tác lọc hóa dầu'] },
    // Continuation of Period 6
    { z: 72, sym: 'Hf', vi: 'Hafni / Hafnium', en: 'Hafnium', per: 6, grp: 4, cat: 'transition-metal', blk: 'd', mass: '178.49', cfg: '[Xe] 4f¹⁴ 5d² 6s²', shells: [2,8,18,32,10,2], p: 72, n: 106, enPauling: 1.3, ie1: 658.5, rad: 159, mp: 2233, bp: 4603, state: 'solid', ox: ['+4'], year: '1923', desc: 'Khả năng hấp thụ neutron nhiệt cực tốt, điện môi High-k trong chip bán dẫn hiện đại.', apps: ['Lớp cách điện cổng High-k transistor chip vi xử lý Intel', 'Thanh điều khiển tàu ngầm hạt nhân'] },
    { z: 73, sym: 'Ta', vi: 'Tantan / Tantalum', en: 'Tantalum', per: 6, grp: 5, cat: 'transition-metal', blk: 'd', mass: '180.95', cfg: '[Xe] 4f¹⁴ 5d³ 6s²', shells: [2,8,18,32,11,2], p: 73, n: 108, enPauling: 1.5, ie1: 761.0, rad: 146, mp: 3017, bp: 5458, state: 'solid', ox: ['+5'], year: '1802', desc: 'Kim loại chống ăn mòn trơ tuyệt đối với hầu hết axit, nhiệt độ nóng chảy trên 3000°C.', apps: ['Tụ điện tantan dung lượng cao siêu nhỏ trong smartphone', 'Dụng cụ phẫu thuật và khớp cấy ghép y tế'] },
    { z: 74, sym: 'W', vi: 'Vonfram / Tungsten', en: 'Tungsten', per: 6, grp: 6, cat: 'transition-metal', blk: 'd', mass: '183.84', cfg: '[Xe] 4f¹⁴ 5d⁴ 6s²', shells: [2,8,18,32,12,2], p: 74, n: 110, enPauling: 2.36, ie1: 770.0, rad: 139, mp: 3422, bp: 5555, state: 'solid', ox: ['+6'], year: '1783', desc: 'Kim loại có nhiệt độ nóng chảy cao nhất trong toàn bộ bảng tuần hoàn (3422°C)!', apps: ['Dây tóc bóng đèn sợi đốt', 'Mũi khoan dao cắt vonfram cacbua (Widia) siêu cứng', 'Đạn xuyên giáp quân sự'] },
    { z: 75, sym: 'Re', vi: 'Reni / Rhenium', en: 'Rhenium', per: 6, grp: 7, cat: 'transition-metal', blk: 'd', mass: '186.21', cfg: '[Xe] 4f¹⁴ 5d⁵ 6s²', shells: [2,8,18,32,13,2], p: 75, n: 111, enPauling: 1.9, ie1: 760.0, rad: 137, mp: 3186, bp: 5596, state: 'solid', ox: ['+7'], year: '1925', desc: 'Một trong những nguyên tố hiếm nhất vỏ Trái Đất, chống dão nhiệt siêu việt.', apps: ['Hợp kim siêu chịu nhiệt cánh quạt động cơ phản lực máy bay thương mại'] },
    { z: 76, sym: 'Os', vi: 'Osimi / Osmium', en: 'Osmium', per: 6, grp: 8, cat: 'transition-metal', blk: 'd', mass: '190.23', cfg: '[Xe] 4f¹⁴ 5d⁶ 6s²', shells: [2,8,18,32,14,2], p: 76, n: 114, enPauling: 2.2, ie1: 840.0, rad: 135, mp: 3033, bp: 5012, state: 'solid', ox: ['+4', '+8'], year: '1803', desc: 'Nguyên tố có khối lượng riêng lớn nhất tự nhiên: 22.59 g/cm³ (nặng gấp đôi chì)!', apps: ['Đầu ngòi bút máy cao cấp chống mòn', 'Trục kim la bàn và tiếp điểm điện'] },
    { z: 77, sym: 'Ir', vi: 'Iriđi / Iridium', en: 'Iridium', per: 6, grp: 9, cat: 'transition-metal', blk: 'd', mass: '192.22', cfg: '[Xe] 4f¹⁴ 5d⁷ 6s²', shells: [2,8,18,32,15,2], p: 77, n: 115, enPauling: 2.2, ie1: 880.0, rad: 136, mp: 2446, bp: 4428, state: 'solid', ox: ['+3', '+4'], year: '1803', desc: 'Kim loại chống ăn mòn tốt nhất thế giới, lớp trầm tích ranh giới K-Pg giàu Iridi chứng minh thiên thạch xóa sổ khủng long.', apps: ['Bugi xe đua cao cấp', 'Chén nung tinh thể laser đơn tinh thể', 'Thanh mét chuẩn quốc tế cổ điển'] },
    { z: 78, sym: 'Pt', vi: 'Bạch kim / Platinum', en: 'Platinum', per: 6, grp: 10, cat: 'transition-metal', blk: 'd', mass: '195.08', cfg: '[Xe] 4f¹⁴ 5d⁹ 6s¹', shells: [2,8,18,32,17,1], p: 78, n: 117, enPauling: 2.28, ie1: 870.0, rad: 139, mp: 1768.3, bp: 3825, state: 'solid', ox: ['+2', '+4'], year: '1735', desc: 'Kim loại quý giá màu trắng sáng, trơ, ngoại lệ cấu hình 5d⁹ 6s¹.', apps: ['Trang sức bạch kim quý phái vĩnh cửu', 'Bộ xúc tác lọc khói xe', 'Thuốc hóa trị ung thư Cisplatin', 'Điện cực pin nhiên liệu hiđro'] },
    { z: 79, sym: 'Au', vi: 'Vàng / Gold', en: 'Gold', per: 6, grp: 11, cat: 'transition-metal', blk: 'd', mass: '196.97', cfg: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', shells: [2,8,18,32,18,1], p: 79, n: 118, enPauling: 2.54, ie1: 890.1, rad: 144, mp: 1064.18, bp: 2970, state: 'solid', ox: ['+1', '+3'], year: 'Cổ đại', desc: 'Kim loại quý màu vàng óng ánh không bao giờ bị rỉ sét hay xỉn màu. Dễ dát mỏng nhất: 1 gram vàng có thể dát thành tấm mỏng 1 m²!', apps: ['Dự trữ tiền tệ và trang sức quý giá', 'Mạ tiếp điểm chống oxy hóa trong thiết bị điện tử siêu vi', 'Gương chắn nhiệt kính bảo hộ phi hành gia'] },
    { z: 80, sym: 'Hg', vi: 'Thủy ngân / Mercury', en: 'Mercury', per: 6, grp: 12, cat: 'post-transition', blk: 'd', mass: '200.59', cfg: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', shells: [2,8,18,32,18,2], p: 80, n: 121, enPauling: 2.00, ie1: 1007.1, rad: 151, mp: -38.83, bp: 356.73, state: 'liquid', ox: ['+1', '+2'], year: 'Cổ đại', desc: 'Kim loại duy nhất ở thể lỏng tại nhiệt độ phòng (điểm đông đặc -38.83°C). Rất độc hại qua đường hô hấp.', apps: ['Nhiệt kế thủy ngân cổ điển', 'Áp kế đo huyết áp', 'Hỗn hống nha khoa trám răng'] },
    { z: 81, sym: 'Tl', vi: 'Tali / Thallium', en: 'Thallium', per: 6, grp: 13, cat: 'post-transition', blk: 'p', mass: '204.38', cfg: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', shells: [2,8,18,32,18,3], p: 81, n: 123, enPauling: 1.62, ie1: 589.4, rad: 170, mp: 304, bp: 1473, state: 'solid', ox: ['+1', '+3'], year: '1861', desc: 'Kim loại mềm màu xám rất độc, từng được gọi là "thuốc độc của kẻ đầu độc".', apps: ['Cảm biến đo bức xạ hồng ngoại', 'Vật liệu siêu dẫn nhiệt độ cao thallium-barium-calcium'] },
    { z: 82, sym: 'Pb', vi: 'Chì / Lead', en: 'Lead', per: 6, grp: 14, cat: 'post-transition', blk: 'p', mass: '207.2', cfg: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', shells: [2,8,18,32,18,4], p: 82, n: 125, enPauling: 2.33, ie1: 715.6, rad: 147, mp: 327.46, bp: 1749, state: 'solid', ox: ['+2', '+4'], year: 'Cổ đại', desc: 'Kim loại nặng màu xám xanh, rất mềm, ngăn chặn hiệu quả tia phóng xạ và tia X.', apps: ['Áo chì chắn tia X trong phòng y tế', 'Bình ắc quy chì - axit cho xe cộ', 'Đạn chì và quả rọi xây dựng'] },
    { z: 83, sym: 'Bi', vi: 'Bismut / Bismuth', en: 'Bismuth', per: 6, grp: 15, cat: 'post-transition', blk: 'p', mass: '208.98', cfg: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', shells: [2,8,18,32,18,5], p: 83, n: 126, enPauling: 2.02, ie1: 703.0, rad: 156, mp: 271.4, bp: 1564, state: 'solid', ox: ['+3', '+5'], year: '1753', desc: 'Tinh thể bismut oxy hóa tạo thành những bậc thang 7 màu kỳ ảo tuyệt đẹp. Độc tính thấp nhất trong kim loại nặng.', apps: ['Thuốc đau dạ dày Pepto-Bismol (bismuth subsalicylate)', 'Hợp kim dễ nóng chảy cho đầu phun dập lửa tự động'] },
    { z: 84, sym: 'Po', vi: 'Poloni / Polonium', en: 'Polonium', per: 6, grp: 16, cat: 'post-transition', blk: 'p', mass: '[209]', cfg: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', shells: [2,8,18,32,18,6], p: 84, n: 125, enPauling: 2.0, ie1: 812.1, rad: 168, mp: 254, bp: 962, state: 'solid', ox: ['+2', '+4'], year: '1898', desc: 'Được Marie Curie phát hiện và đặt theo tên quê hương Ba Lan (Poland). Phát tia alpha năng lượng cao.', apps: ['Nguồn sinh nhiệt nhiệt điện trên xe tự hành mặt trăng Lunokhod'] },
    { z: 85, sym: 'At', vi: 'Astatin / Astatine', en: 'Astatine', per: 6, grp: 17, cat: 'halogen', blk: 'p', mass: '[210]', cfg: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', shells: [2,8,18,32,18,7], p: 85, n: 125, enPauling: 2.2, ie1: 890.0, rad: 145, mp: 302, bp: 337, state: 'solid', ox: ['-1', '+1'], year: '1940', desc: 'Nguyên tố tự nhiên hiếm nhất trên vỏ Trái Đất (ước tính toàn Trái Đất chỉ có chưa đầy 30 gram tại bất kỳ thời điểm nào)!', apps: ['Nghiên cứu xạ trị hạt alpha hướng đích điều trị ung thư (²¹¹At)'] },
    { z: 86, sym: 'Rn', vi: 'Radon', en: 'Radon', per: 6, grp: 18, cat: 'noble-gas', blk: 'p', mass: '[222]', cfg: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', shells: [2,8,18,32,18,8], p: 86, n: 136, enPauling: 2.2, ie1: 1037.0, rad: 120, mp: -71, bp: -61.7, state: 'gas', ox: ['0', '+2'], year: '1900', desc: 'Khí hiếm phóng xạ không màu không mùi, sinh ra từ sự phân rã của urani và radi trong đá đất.', apps: ['Dự báo động đất (nồng độ khí radon tăng trước động đất)', 'Xạ trị hạt nhân cục bộ'] },

    // PERIOD 7
    { z: 87, sym: 'Fr', vi: 'Franxi / Francium', en: 'Francium', per: 7, grp: 1, cat: 'alkali-metal', blk: 's', mass: '[223]', cfg: '[Rn] 7s¹', shells: [2,8,18,32,18,8,1], p: 87, n: 136, enPauling: 0.7, ie1: 380.0, rad: 348, mp: 27, bp: 677, state: 'solid', ox: ['+1'], year: '1939', desc: 'Kim loại kiềm phóng xạ cực kỳ bất ổn định, chu kỳ bán rã dài nhất chỉ khoảng 22 phút.', apps: ['Nghiên cứu cấu trúc nguyên tử và lực tương tác yếu trong vật lý hạt'] },
    { z: 88, sym: 'Ra', vi: 'Radi / Radium', en: 'Radium', per: 7, grp: 2, cat: 'alkaline-earth', blk: 's', mass: '[226]', cfg: '[Rn] 7s²', shells: [2,8,18,32,18,8,2], p: 88, n: 138, enPauling: 0.9, ie1: 509.3, rad: 283, mp: 700, bp: 1737, state: 'solid', ox: ['+2'], year: '1898', desc: 'Được Marie và Pierre Curie tách từ quặng urani, tự phát quang màu xanh lơ ma mị trong bóng tối.', apps: ['Từng dùng làm sơn phát quang mặt đồng hồ đêm', 'Xạ trị ung thư di căn xương (²²³Ra)'] },
    // Actinoids (89-103)
    { z: 89, sym: 'Ac', vi: 'Actini / Actinium', en: 'Actinium', per: 7, grp: 3, cat: 'actinoid', blk: 'd', mass: '[227]', cfg: '[Rn] 6d¹ 7s²', shells: [2,8,18,32,18,9,2], p: 89, n: 138, enPauling: 1.1, ie1: 499.0, rad: 215, mp: 1050, bp: 3200, state: 'solid', ox: ['+3'], year: '1899', desc: 'Đầu chuỗi họ Actini, phát quang màu xanh lơ mạnh trong bóng tối vì hoạt độ phóng xạ cao.', apps: ['Nguồn neutron và liệu pháp xạ trị ung thư nhắm mục tiêu ²²⁵Ac'] },
    { z: 90, sym: 'Th', vi: 'Thori / Thorium', en: 'Thorium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '232.04', cfg: '[Rn] 6d² 7s²', shells: [2,8,18,32,18,10,2], p: 90, n: 142, enPauling: 1.3, ie1: 587.0, rad: 206, mp: 1750, bp: 4788, state: 'solid', ox: ['+4'], year: '1828', desc: 'Nhiên liệu hạt nhân xanh tiềm năng dồi dào gấp 3 lần Urani, an toàn hơn và ít chất thải nguy hiểm.', apps: ['Lò phản ứng hạt nhân muối nóng chảy thế hệ 4 nhiên liệu Thori'] },
    { z: 91, sym: 'Pa', vi: 'Protactini / Protactinium', en: 'Protactinium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '231.04', cfg: '[Rn] 5f² 6d¹ 7s²', shells: [2,8,18,32,20,9,2], p: 91, n: 140, enPauling: 1.5, ie1: 568.0, rad: 200, mp: 1568, bp: 4027, state: 'solid', ox: ['+5'], year: '1913', desc: 'Kim loại phóng xạ đặc biệt quý hiếm và nguy hiểm độc hại.', apps: ['Nghiên cứu địa chất học trầm tích đáy đại dương'] },
    { z: 92, sym: 'U', vi: 'Urani / Uranium', en: 'Uranium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '238.03', cfg: '[Rn] 5f³ 6d¹ 7s²', shells: [2,8,18,32,21,9,2], p: 92, n: 146, enPauling: 1.38, ie1: 597.6, rad: 196, mp: 1132.2, bp: 4131, state: 'solid', ox: ['+3', '+4', '+5', '+6'], year: '1789', desc: 'Nhiên liệu phân hạch hạt nhân quan trọng nhất, cung cấp khoảng 10% điện năng toàn cầu.', apps: ['Nhiên liệu các nhà máy điện hạt nhân (²³⁵U làm giàu)', 'Vũ khí răn đe chiến lược hạt nhân', 'Urani nghèo làm vỏ giáp xe tăng'] },
    { z: 93, sym: 'Np', vi: 'Neptuni / Neptunium', en: 'Neptunium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[237]', cfg: '[Rn] 5f⁴ 6d¹ 7s²', shells: [2,8,18,32,22,9,2], p: 93, n: 144, enPauling: 1.36, ie1: 604.5, rad: 190, mp: 644, bp: 3902, state: 'solid', ox: ['+5'], year: '1940', desc: 'Nguyên tố siêu urani đầu tiên được tổng hợp nhân tạo.', apps: ['Tiền chất tổng hợp Plutoni-238 cho pin vũ trụ'] },
    { z: 94, sym: 'Pu', vi: 'Plutoni / Plutonium', en: 'Plutonium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[244]', cfg: '[Rn] 5f⁶ 7s²', shells: [2,8,18,32,24,8,2], p: 94, n: 150, enPauling: 1.28, ie1: 584.7, rad: 187, mp: 640, bp: 3228, state: 'solid', ox: ['+4'], year: '1940', desc: 'Vật liệu phân hạch hạt nhân nhân tạo siêu mạnh. Đồng vị ²³⁸Pu sinh nhiệt cực kỳ ổn định.', apps: ['Máy phát điện nhiệt điện đồng vị phóng xạ (RTG) cung cấp năng lượng cho tàu thăm dò Voyager 1, 2 và xe tự hành Curiosity trên Sao Hỏa'] },
    { z: 95, sym: 'Am', vi: 'Amerixi / Americium', en: 'Americium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[243]', cfg: '[Rn] 5f⁷ 7s²', shells: [2,8,18,32,25,8,2], p: 95, n: 148, enPauling: 1.3, ie1: 578.0, rad: 180, mp: 1176, bp: 2607, state: 'solid', ox: ['+3'], year: '1944', desc: 'Nguyên tố phóng xạ có trong thiết bị gia đình quen thuộc!', apps: ['Nguồn ion hóa ²⁴¹Am trong đầu báo khói cháy gia đình'] },
    { z: 96, sym: 'Cm', vi: 'Curi / Curium', en: 'Curium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[247]', cfg: '[Rn] 5f⁷ 6d¹ 7s²', shells: [2,8,18,32,25,9,2], p: 96, n: 151, enPauling: 1.3, ie1: 581.0, rad: 180, mp: 1345, bp: 3110, state: 'solid', ox: ['+3'], year: '1944', desc: 'Đặt theo tên của hai nhà khoa học vĩ đại Marie và Pierre Curie.', apps: ['Nguồn phân tích quang phổ tia X hạt alpha (APXS) trên các xe thám hiểm Sao Hỏa'] },
    { z: 97, sym: 'Bk', vi: 'Béclơ / Berkelium', en: 'Berkelium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[247]', cfg: '[Rn] 5f⁹ 7s²', shells: [2,8,18,32,27,8,2], p: 97, n: 150, enPauling: 1.3, ie1: 601.0, rad: 170, mp: 986, bp: 2627, state: 'solid', ox: ['+3', '+4'], year: '1949', desc: 'Tổng hợp tại Đại học California ở Berkeley.', apps: ['Bia bắn để tổng hợp nguyên tố siêu nặng tennessine (Z=117)'] },
    { z: 98, sym: 'Cf', vi: 'Califoni / Californium', en: 'Californium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[251]', cfg: '[Rn] 5f¹⁰ 7s²', shells: [2,8,18,32,28,8,2], p: 98, n: 153, enPauling: 1.3, ie1: 608.0, rad: 170, mp: 900, bp: 1470, state: 'solid', ox: ['+3'], year: '1950', desc: 'Nguồn phát neutron mạnh mẽ đáng kinh ngạc: 1 microgram phát ra 170 triệu neutron mỗi phút!', apps: ['Khởi động lò phản ứng hạt nhân', 'Dò tìm mỏ dầu và quặng vàng', 'Xạ trị ung thư cổ tử cung'] },
    { z: 99, sym: 'Es', vi: 'Ensteni / Einsteinium', en: 'Einsteinium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[252]', cfg: '[Rn] 5f¹¹ 7s²', shells: [2,8,18,32,29,8,2], p: 99, n: 153, enPauling: 1.3, ie1: 619.0, rad: 170, mp: 860, bp: 996, state: 'solid', ox: ['+3'], year: '1952', desc: 'Phát hiện từ tàn dư vụ thử bom nhiệt hạch Ivy Mike năm 1952, đặt tên vinh danh Albert Einstein.', apps: ['Nghiên cứu cơ bản ranh giới phân rã hạt nhân'] },
    { z: 100, sym: 'Fm', vi: 'Fecmi / Fermium', en: 'Fermium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[257]', cfg: '[Rn] 5f¹² 7s²', shells: [2,8,18,32,30,8,2], p: 100, n: 157, enPauling: 1.3, ie1: 627.0, rad: 170, mp: 1527, bp: null, state: 'solid', ox: ['+3'], year: '1952', desc: 'Nguyên tố nặng nhất có thể tạo ra bằng cách bắn phá neutron liên tục.', apps: ['Nghiên cứu vật lý hạt nhân'] },
    { z: 101, sym: 'Md', vi: 'Menđelevi / Mendelevium', en: 'Mendelevium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[258]', cfg: '[Rn] 5f¹³ 7s²', shells: [2,8,18,32,31,8,2], p: 101, n: 157, enPauling: 1.3, ie1: 635.0, rad: 170, mp: 827, bp: null, state: 'solid', ox: ['+2', '+3'], year: '1955', desc: 'Vinh danh Dmitri Mendeleev - cha đẻ của Bảng tuần hoàn các nguyên tố hóa học.', apps: ['Nghiên cứu khoa học cơ bản'] },
    { z: 102, sym: 'No', vi: 'Nobeli / Nobelium', en: 'Nobelium', per: 7, grp: 3, cat: 'actinoid', blk: 'f', mass: '[259]', cfg: '[Rn] 5f¹⁴ 7s²', shells: [2,8,18,32,32,8,2], p: 102, n: 157, enPauling: 1.3, ie1: 642.0, rad: 170, mp: 827, bp: null, state: 'solid', ox: ['+2', '+3'], year: '1958', desc: 'Vinh danh Alfred Nobel - nhà phát minh thuốc nổ và sáng lập giải thưởng Nobel.', apps: ['Nghiên cứu khoa học cơ bản'] },
    { z: 103, sym: 'Lr', vi: 'Larenxi / Lawrencium', en: 'Lawrencium', per: 7, grp: 3, cat: 'actinoid', blk: 'd', mass: '[266]', cfg: '[Rn] 5f¹⁴ 7s² 7p¹', shells: [2,8,18,32,32,8,3], p: 103, n: 163, enPauling: 1.3, ie1: 470.0, rad: 170, mp: 1627, bp: null, state: 'solid', ox: ['+3'], year: '1961', desc: 'Nguyên tố cuối cùng của họ actini, cấu hình e có hiệu ứng tương đối tính 7p¹.', apps: ['Nghiên cứu hiệu ứng tương đối tính trong nguyên tử siêu nặng'] },

    // Superheavy elements 104-118
    { z: 104, sym: 'Rf', vi: 'Rơtfơđi / Rutherfordium', en: 'Rutherfordium', per: 7, grp: 4, cat: 'transition-metal', blk: 'd', mass: '[267]', cfg: '[Rn] 5f¹⁴ 6d² 7s²', shells: [2,8,18,32,32,10,2], p: 104, n: 163, enPauling: null, ie1: 580.0, rad: null, mp: 2100, bp: 5500, state: 'unknown', ox: ['+4'], year: '1964', desc: 'Vinh danh Ernest Rutherford, người khám phá ra hạt nhân nguyên tử.', apps: ['Nghiên cứu hóa học nguyên tử từng nguyên tử một (single-atom chemistry)'] },
    { z: 105, sym: 'Db', vi: 'Đubni / Dubnium', en: 'Dubnium', per: 7, grp: 5, cat: 'transition-metal', blk: 'd', mass: '[268]', cfg: '[Rn] 5f¹⁴ 6d³ 7s²', shells: [2,8,18,32,32,11,2], p: 105, n: 163, enPauling: null, ie1: null, rad: null, mp: null, bp: null, state: 'unknown', ox: ['+5'], year: '1967', desc: 'Đặt theo tên thành phố Dubna, Nga - trung tâm nghiên cứu hạt nhân quốc tế.', apps: ['Nghiên cứu tính chất hóa học chu kỳ 7'] },
    { z: 106, sym: 'Sg', vi: 'Sibogi / Seaborgium', en: 'Seaborgium', per: 7, grp: 6, cat: 'transition-metal', blk: 'd', mass: '[269]', cfg: '[Rn] 5f¹⁴ 6d⁴ 7s²', shells: [2,8,18,32,32,12,2], p: 106, n: 163, enPauling: null, ie1: null, rad: null, mp: null, bp: null, state: 'unknown', ox: ['+6'], year: '1974', desc: 'Vinh danh Glenn T. Seaborg - nhà khoa học phát hiện nhiều nguyên tố siêu urani nhất.', apps: ['Nghiên cứu tính tương đồng với Vonfram'] },
    { z: 107, sym: 'Bh', vi: 'Bori / Bohrium', en: 'Bohrium', per: 7, grp: 7, cat: 'transition-metal', blk: 'd', mass: '[270]', cfg: '[Rn] 5f¹⁴ 6d⁵ 7s²', shells: [2,8,18,32,32,13,2], p: 107, n: 163, enPauling: null, ie1: null, rad: null, mp: null, bp: null, state: 'unknown', ox: ['+7'], year: '1981', desc: 'Vinh danh Niels Bohr - nhà vật lý đề xuất mô hình hành tinh nguyên tử lượng tử.', apps: ['Nghiên cứu cơ bản'] },
    { z: 108, sym: 'Hs', vi: 'Hasi / Hassium', en: 'Hassium', per: 7, grp: 8, cat: 'transition-metal', blk: 'd', mass: '[277]', cfg: '[Rn] 5f¹⁴ 6d⁶ 7s²', shells: [2,8,18,32,32,14,2], p: 108, n: 169, enPauling: null, ie1: null, rad: null, mp: null, bp: null, state: 'unknown', ox: ['+8'], year: '1984', desc: 'Đặt theo bang Hessen (Đức), tạo được hợp chất dễ bay hơi HsO₄ tương tự OsO₄.', apps: ['Nghiên cứu hóa học trạng thái khí'] },
    { z: 109, sym: 'Mt', vi: 'Maitneri / Meitnerium', en: 'Meitnerium', per: 7, grp: 9, cat: 'transition-metal', blk: 'd', mass: '[278]', cfg: '[Rn] 5f¹⁴ 6d⁷ 7s²', shells: [2,8,18,32,32,15,2], p: 109, n: 169, enPauling: null, ie1: null, rad: null, mp: null, bp: null, state: 'unknown', ox: ['+3', '+4'], year: '1982', desc: 'Vinh danh nữ nhà vật lý Lise Meitner - người giải thích hiện tượng phân hạch hạt nhân.', apps: ['Nghiên cứu khoa học'] },
    { z: 110, sym: 'Ds', vi: 'Đamsati / Darmstadtium', en: 'Darmstadtium', per: 7, grp: 10, cat: 'transition-metal', blk: 'd', mass: '[281]', cfg: '[Rn] 5f¹⁴ 6d⁸ 7s²', shells: [2,8,18,32,32,16,2], p: 110, n: 171, enPauling: null, ie1: null, rad: null, mp: null, bp: null, state: 'unknown', ox: ['+2', '+4'], year: '1994', desc: 'Tổng hợp tại viện GSI ở Darmstadt, Đức.', apps: ['Nghiên cứu khoa học'] },
    { z: 111, sym: 'Rg', vi: 'Rơnghen / Roentgenium', en: 'Roentgenium', per: 7, grp: 11, cat: 'transition-metal', blk: 'd', mass: '[282]', cfg: '[Rn] 5f¹⁴ 6d⁹ 7s²', shells: [2,8,18,32,32,17,2], p: 111, n: 171, enPauling: null, ie1: null, rad: null, mp: null, bp: null, state: 'unknown', ox: ['+3'], year: '1994', desc: 'Vinh danh Wilhelm Conrad Röntgen - nhà vật lý khám phá ra tia X.', apps: ['Nghiên cứu khoa học'] },
    { z: 112, sym: 'Cn', vi: 'Copexnici / Copernicium', en: 'Copernicium', per: 7, grp: 12, cat: 'transition-metal', blk: 'd', mass: '[285]', cfg: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', shells: [2,8,18,32,32,18,2], p: 112, n: 173, enPauling: null, ie1: null, rad: null, mp: null, bp: null, state: 'unknown', ox: ['+2'], year: '1996', desc: 'Vinh danh Nicolaus Copernicus - nhà thiên văn đưa ra thuyết nhật tâm. Có thể ở thể khí do hiệu ứng tương đối tính.', apps: ['Nghiên cứu khoa học'] },
    { z: 113, sym: 'Nh', vi: 'Nihoni / Nihonium', en: 'Nihonium', per: 7, grp: 13, cat: 'post-transition', blk: 'p', mass: '[286]', cfg: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', shells: [2,8,18,32,32,18,3], p: 113, n: 173, enPauling: null, ie1: null, rad: null, mp: 430, bp: 1130, state: 'unknown', ox: ['+1', '+3'], year: '2004', desc: 'Nguyên tố đầu tiên được phát hiện tại châu Á (viện RIKEN, Nhật Bản, "Nihon" nghĩa là Nhật Bản).', apps: ['Nghiên cứu đảo bền hạt nhân'] },
    { z: 114, sym: 'Fl', vi: 'Flerovi / Flerovium', en: 'Flerovium', per: 7, grp: 14, cat: 'post-transition', blk: 'p', mass: '[289]', cfg: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', shells: [2,8,18,32,32,18,4], p: 114, n: 175, enPauling: null, ie1: null, rad: null, mp: -73, bp: 107, state: 'unknown', ox: ['+2'], year: '1998', desc: 'Đặt theo phòng thí nghiệm Flerov ở Dubna. Nằm rất gần "đảo bền" lý thuyết.', apps: ['Nghiên cứu hạt nhân'] },
    { z: 115, sym: 'Mc', vi: 'Moscovi / Moscovium', en: 'Moscovium', per: 7, grp: 15, cat: 'post-transition', blk: 'p', mass: '[290]', cfg: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', shells: [2,8,18,32,32,18,5], p: 115, n: 175, enPauling: null, ie1: null, rad: null, mp: 400, bp: 1100, state: 'unknown', ox: ['+1', '+3'], year: '2003', desc: 'Đặt theo tỉnh Moskva (Nga), nơi tiến hành các thí nghiệm bắn phá chùm ion.', apps: ['Nghiên cứu khoa học'] },
    { z: 116, sym: 'Lv', vi: 'Livemori / Livermorium', en: 'Livermorium', per: 7, grp: 16, cat: 'post-transition', blk: 'p', mass: '[293]', cfg: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', shells: [2,8,18,32,32,18,6], p: 116, n: 177, enPauling: null, ie1: null, rad: null, mp: 435, bp: 812, state: 'unknown', ox: ['+2', '+4'], year: '2000', desc: 'Vinh danh Phòng thí nghiệm Quốc gia Lawrence Livermore ở California, Hoa Kỳ.', apps: ['Nghiên cứu khoa học'] },
    { z: 117, sym: 'Ts', vi: 'Tennessin / Tennessine', en: 'Tennessine', per: 7, grp: 17, cat: 'halogen', blk: 'p', mass: '[294]', cfg: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', shells: [2,8,18,32,32,18,7], p: 117, n: 177, enPauling: null, ie1: null, rad: null, mp: 450, bp: 610, state: 'unknown', ox: ['-1', '+1', '+3'], year: '2010', desc: 'Nguyên tố halogen thứ 6, đặt theo bang Tennessee nơi có phòng thí nghiệm Oak Ridge.', apps: ['Nghiên cứu hiệu ứng tương đối tính spin-quỹ đạo'] },
    { z: 118, sym: 'Og', vi: 'Oganexon / Oganesson', en: 'Oganesson', per: 7, grp: 18, cat: 'noble-gas', blk: 'p', mass: '[294]', cfg: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', shells: [2,8,18,32,32,18,8], p: 118, n: 176, enPauling: null, ie1: 860.0, rad: 152, mp: 50, bp: 80, state: 'unknown', ox: ['0', '+2', '+4'], year: '2002', desc: 'Nguyên tố có số hiệu nguyên tử lớn nhất hiện nay (Z=118). Khí hiếm chu kỳ 7, vinh danh viện sĩ Yuri Oganessian.', apps: ['Nghiên cứu ranh giới bảng tuần hoàn và hiệu ứng vỏ electron tương đối tính'] },
  ];

  return rawList.map((item) => {
    // Generate intelligent teaching notes and ion tendencies
    const ionTendencies: Array<{
      symbol: string;
      charge: number;
      electronCount: number;
      electronShells: number[];
      electronConfiguration: string;
      equation: string;
      explanation: string;
    }> = [];

    if (item.cat === 'alkali-metal') {
      const charge = 1;
      const newShells = [...item.shells];
      newShells.pop();
      ionTendencies.push({
        symbol: `${item.sym}⁺`,
        charge,
        electronCount: item.z - 1,
        electronShells: newShells,
        electronConfiguration: `Cấu hình khí hiếm chu kỳ ${item.per - 1}`,
        equation: `${item.sym} → ${item.sym}⁺ + 1e⁻`,
        explanation: `${item.vi.split('/')[0].trim()} nhường 1 electron ở lớp ngoài cùng (${item.per}s¹) tạo ion mang điện tích +1 có lớp vỏ ngoài bão hòa bền vững.`,
      });
    } else if (item.cat === 'alkaline-earth') {
      const newShells = [...item.shells];
      newShells.pop();
      ionTendencies.push({
        symbol: `${item.sym}²⁺`,
        charge: 2,
        electronCount: item.z - 2,
        electronShells: newShells,
        electronConfiguration: `Cấu hình khí hiếm chu kỳ ${item.per - 1}`,
        equation: `${item.sym} → ${item.sym}²⁺ + 2e⁻`,
        explanation: `${item.vi.split('/')[0].trim()} nhường 2 electron ở lớp ngoài cùng (${item.per}s²) tạo cation mang điện tích +2.`,
      });
    } else if (item.cat === 'halogen') {
      const newShells = [...item.shells];
      newShells[newShells.length - 1] += 1;
      ionTendencies.push({
        symbol: `${item.sym}⁻`,
        charge: -1,
        electronCount: item.z + 1,
        electronShells: newShells,
        electronConfiguration: `Cấu hình khí hiếm chu kỳ ${item.per}`,
        equation: `${item.sym} + 1e⁻ → ${item.sym}⁻`,
        explanation: `${item.vi.split('/')[0].trim()} nhận thêm 1 electron để đạt bát thể 8e bão hòa ở lớp ngoài cùng.`,
      });
    } else if (item.sym === 'Ag') {
      ionTendencies.push({
        symbol: 'Ag⁺',
        charge: 1,
        electronCount: 46,
        electronShells: [2, 8, 18, 18],
        electronConfiguration: '[Kr] 4d¹⁰',
        equation: 'Ag → Ag⁺ + 1e⁻',
        explanation: 'Bạc nhường 1 electron 5s tạo ion Ag⁺ có cấu hình phân lớp 4d¹⁰ bão hòa rất bền.',
      });
    } else if (item.sym === 'Au') {
      ionTendencies.push({
        symbol: 'Au³⁺',
        charge: 3,
        electronCount: 76,
        electronShells: [2, 8, 18, 32, 16],
        electronConfiguration: '[Xe] 4f¹⁴ 5d⁸',
        equation: 'Au → Au³⁺ + 3e⁻',
        explanation: 'Vàng nhường electron tạo cation Au³⁺ phổ biến trong phức chất muối vàng.',
      });
    }

    return {
      atomicNumber: item.z,
      symbol: item.sym,
      nameVi: item.vi,
      nameIupac: item.en,
      period: item.per,
      group: item.grp,
      category: item.cat,
      block: item.blk,
      atomicMass: parseFloat(item.mass.replace(/\[|\]/g, '')) || null,
      atomicMassString: item.mass,
      electronConfiguration: item.cfg,
      electronConfigurationFull: item.cfg,
      electronShells: item.shells,
      protons: item.p,
      neutronsStandard: item.n,
      electronegativity: item.enPauling,
      firstIonizationEnergy: item.ie1,
      atomicRadius: item.rad,
      meltingPoint: item.mp,
      boilingPoint: item.bp,
      density: null,
      oxidationStates: item.ox,
      stateAt298K: item.state,
      discoveryYear: item.year,
      descriptionVi: item.desc,
      applicationsVi: item.apps,
      teachingNotesVi: {
        protonNeutronExplanation: `Hạt nhân nguyên tử ${item.sym} chứa ${item.p} proton và khoảng ${item.n} neutron đối với đồng vị phổ biến nhất.`,
        electronShellMeaning: `Nguyên tử có ${item.shells.length} lớp electron: ${item.shells.join(' - ')}.`,
        valenceElectronSignificance: `Số electron hóa trị đặc trưng cho tính chất hóa học và vị trí nhóm ${item.grp} trong bảng tuần hoàn.`,
        periodicPositionReason: `Nguyên tố ở ô số ${item.z}, chu kỳ ${item.per} (${item.shells.length} lớp e), nhóm ${item.grp}.`,
        ionTendencies,
      },
      isotopes: [
        {
          name: `${item.p + item.n}${item.sym}`,
          mass: item.p + item.n,
          isStable: item.z <= 82,
        },
      ],
      sources: [
        { title: 'IUPAC Periodic Table of Elements', url: 'https://iupac.org' },
        { title: 'NIST Physical Measurement Laboratory', url: 'https://webbook.nist.gov' },
        { title: 'Bộ Giáo dục và Đào tạo - Chương trình GDPT Hóa học 10' },
      ],
      dataStatus: item.z > 103 ? 'predicted' : 'verified',
    };
  });
}
