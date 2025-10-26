import bloodlinesData from '@/data/bloodlines.json';

export type Bloodline = {
  id: string;
  name: string;
  description: string;
  representative_color: string;
  analysis: Record<string, any>; 
  offspring: Record<string, any>[];
};

type Bloodlines = Record<string, Omit<Bloodline, 'id'>>;

export const getBloodlines = (): Bloodline[] => {
  const bloodlines: Bloodlines = bloodlinesData;
  return Object.entries(bloodlines).map(([id, data]) => ({
    id,
    ...data,
  }));
};
