// Measurement data types for the AI fashion platform

export interface BodyMeasurement {
  id: string;
  name: string;
  value: number;
  unit: 'cm' | 'inches';
  confidenceScore: number; // 0-100
  category: 'upper' | 'lower' | 'general';
}

export interface BlouseMeasurements {
  shoulderWidth: BodyMeasurement;
  shoulderSlope: BodyMeasurement;
  bustCircumference: BodyMeasurement;
  underbustCircumference: BodyMeasurement;
  armholeDepth: BodyMeasurement;
  sleeveLength: BodyMeasurement;
  sleeveCircumference: BodyMeasurement;
  backNeckDepth: BodyMeasurement;
  frontNeckDepth: BodyMeasurement;
  waistCircumference: BodyMeasurement;
  blouseLength: BodyMeasurement;
}

export interface FitPreference {
  id: string;
  name: string;
  description: string;
  value: 'tight' | 'comfort' | 'loose' | 'festive';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  lastScanDate: string;
  measurements?: BlouseMeasurements;
  fitPreferences: FitPreference[];
}

export interface SareeType {
  id: string;
  name: string;
  fabric: 'silk' | 'chiffon' | 'cotton' | 'georgette' | 'crepe';
  description: string;
  imageUrl: string;
}

export interface BlouseStyle {
  id: string;
  name: string;
  neckType: string;
  backType: string;
  sleeveType: string;
  imageUrl: string;
}

export interface Order {
  id: string;
  userId: string;
  tailorId?: string;
  status: 'pending' | 'processing' | 'cutting' | 'stitching' | 'quality_check' | 'ready' | 'delivered';
  sareeType: SareeType;
  blouseStyle: BlouseStyle;
  measurements: BlouseMeasurements;
  fitPreferences: FitPreference[];
  createdAt: string;
  estimatedDelivery: string;
  price: number;
}

export interface Tailor {
  id: string;
  name: string;
  shopName: string;
  phone: string;
  email: string;
  location: string;
  rating: number;
  ordersCompleted: number;
  specializations: string[];
}

export interface FitFeedback {
  measurementId: string;
  rating: 'tight' | 'perfect' | 'loose';
  notes?: string;
}

// Mock data for development
export const mockMeasurements: BlouseMeasurements = {
  shoulderWidth: {
    id: 'shoulder_width',
    name: 'Shoulder Width',
    value: 38,
    unit: 'cm',
    confidenceScore: 95,
    category: 'upper',
  },
  shoulderSlope: {
    id: 'shoulder_slope',
    name: 'Shoulder Slope',
    value: 22,
    unit: 'cm',
    confidenceScore: 88,
    category: 'upper',
  },
  bustCircumference: {
    id: 'bust_circ',
    name: 'Bust Circumference',
    value: 91,
    unit: 'cm',
    confidenceScore: 96,
    category: 'upper',
  },
  underbustCircumference: {
    id: 'underbust_circ',
    name: 'Underbust Circumference',
    value: 76,
    unit: 'cm',
    confidenceScore: 94,
    category: 'upper',
  },
  armholeDepth: {
    id: 'armhole_depth',
    name: 'Armhole Depth',
    value: 21,
    unit: 'cm',
    confidenceScore: 82,
    category: 'upper',
  },
  sleeveLength: {
    id: 'sleeve_length',
    name: 'Sleeve Length',
    value: 15,
    unit: 'cm',
    confidenceScore: 90,
    category: 'upper',
  },
  sleeveCircumference: {
    id: 'sleeve_circ',
    name: 'Sleeve Circumference',
    value: 30,
    unit: 'cm',
    confidenceScore: 91,
    category: 'upper',
  },
  backNeckDepth: {
    id: 'back_neck_depth',
    name: 'Back Neck Depth',
    value: 8,
    unit: 'cm',
    confidenceScore: 85,
    category: 'upper',
  },
  frontNeckDepth: {
    id: 'front_neck_depth',
    name: 'Front Neck Depth',
    value: 12,
    unit: 'cm',
    confidenceScore: 87,
    category: 'upper',
  },
  waistCircumference: {
    id: 'waist_circ',
    name: 'Waist Circumference',
    value: 71,
    unit: 'cm',
    confidenceScore: 93,
    category: 'general',
  },
  blouseLength: {
    id: 'blouse_length',
    name: 'Blouse Length',
    value: 38,
    unit: 'cm',
    confidenceScore: 89,
    category: 'upper',
  },
};

export const mockFitPreferences: FitPreference[] = [
  {
    id: 'bust_fit',
    name: 'Bust Fit',
    description: 'How fitted you prefer around the bust area',
    value: 'comfort',
  },
  {
    id: 'sleeve_fit',
    name: 'Sleeve Tightness',
    description: 'Preferred sleeve fit around arms',
    value: 'comfort',
  },
  {
    id: 'overall_fit',
    name: 'Overall Fit Style',
    description: 'General fit preference for blouse',
    value: 'festive',
  },
];

export const mockSareeTypes: SareeType[] = [
  {
    id: 'banarasi_silk',
    name: 'Banarasi Silk',
    fabric: 'silk',
    description: 'Rich, heavy silk with intricate zari work. Perfect for weddings.',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'kanjeevaram',
    name: 'Kanjeevaram',
    fabric: 'silk',
    description: 'Temple-inspired designs with rich colors. South Indian heritage.',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'chiffon_party',
    name: 'Party Chiffon',
    fabric: 'chiffon',
    description: 'Lightweight and flowing. Ideal for parties and casual occasions.',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'cotton_daily',
    name: 'Cotton Daily Wear',
    fabric: 'cotton',
    description: 'Comfortable and breathable. Perfect for everyday elegance.',
    imageUrl: '/placeholder.svg',
  },
];

export const mockBlouseStyles: BlouseStyle[] = [
  {
    id: 'classic_round',
    name: 'Classic Round Neck',
    neckType: 'Round',
    backType: 'Deep Round',
    sleeveType: 'Short Sleeve',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'boat_neck',
    name: 'Elegant Boat Neck',
    neckType: 'Boat',
    backType: 'V-Back',
    sleeveType: 'Three-Quarter',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'deep_v',
    name: 'Deep V-Neck',
    neckType: 'Deep V',
    backType: 'Backless',
    sleeveType: 'Sleeveless',
    imageUrl: '/placeholder.svg',
  },
  {
    id: 'high_neck',
    name: 'High Neck Designer',
    neckType: 'High Collar',
    backType: 'Keyhole',
    sleeveType: 'Full Sleeve',
    imageUrl: '/placeholder.svg',
  },
];
