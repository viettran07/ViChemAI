export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth'
  | 'transition-metal'
  | 'post-transition'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanoid'
  | 'actinoid'
  | 'unknown';

export type ElementBlock = 's' | 'p' | 'd' | 'f';
export type ElementStateAt298K = 'solid' | 'liquid' | 'gas' | 'unknown';

export interface IonVariant {
  symbol: string; // e.g. "Na⁺", "Fe²⁺", "Cl⁻"
  charge: number; // +1, +2, -1, etc.
  electronCount: number;
  electronShells: number[];
  electronConfiguration: string;
  equation: string; // e.g. "Na → Na⁺ + 1e⁻"
  explanation: string;
}

export interface IsotopeInfo {
  name: string; // e.g. "¹H (Protium)", "²H (Deuteri)"
  mass: number;
  abundance?: number; // percentage
  isStable: boolean;
}

export interface DataSourceReference {
  title: string;
  url?: string;
  note?: string;
}

export interface ElementData {
  atomicNumber: number; // Z (1..118)
  symbol: string;
  nameVi: string; // Vietnamese name (e.g. "Hiđro / Hydrogen")
  nameIupac: string; // IUPAC name (e.g. "Hydrogen")
  period: number; // 1..7
  group: number; // 1..18 (3 for Lanthanides/Actinides)
  category: ElementCategory;
  block: ElementBlock;
  atomicMass: number | null; // e.g. 1.008
  atomicMassString: string; // e.g. "1.008" or "[294]" for synthetic
  electronConfiguration: string; // e.g. "1s¹", "[Ne] 3s¹"
  electronConfigurationFull: string; // e.g. "1s² 2s² 2p⁶ 3s¹"
  electronShells: number[]; // e.g. [2, 8, 1] for K, L, M...
  protons: number;
  neutronsStandard: number | null; // standard/most abundant isotope
  electronegativity: number | null; // Pauling scale
  firstIonizationEnergy: number | null; // kJ/mol
  atomicRadius: number | null; // pm (van der Waals or empirical)
  meltingPoint: number | null; // °C
  boilingPoint: number | null; // °C
  density: number | null; // g/cm³ at room temp
  oxidationStates: string[]; // e.g. ["+1", "-1"]
  stateAt298K: ElementStateAt298K;
  discoveryYear: string;
  descriptionVi: string;
  applicationsVi: string[];
  teachingNotesVi: {
    protonNeutronExplanation: string;
    electronShellMeaning: string;
    valenceElectronSignificance: string;
    periodicPositionReason: string;
    ionTendencies: IonVariant[];
  };
  isotopes: IsotopeInfo[];
  sources: DataSourceReference[];
  dataStatus: 'verified' | 'predicted' | 'estimated';
}

export type PeriodicTrendMetric =
  | 'radius'
  | 'ionization'
  | 'electronegativity'
  | 'mass'
  | 'meltingPoint'
  | 'boilingPoint';
