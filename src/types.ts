export type ProjectCategory = 'all' | 'video' | 'visuals' | 'commercial' | 'social' | 'copywriting';

export interface Project {
  id: string;
  title: string;
  titleUrdu: string;
  client: string;
  category: 'video' | 'visuals' | 'commercial' | 'social' | 'copywriting';
  description: string;
  descriptionUrdu: string;
  tools: string[];
  metrics: {
    highlight: string;
    highlightUrdu: string;
    turnaround: string;
    views?: string;
  };
  thumbnailUrl: string;
  artworkType: 'perfume' | 'supercar' | 'cyberpunk' | 'beverage' | 'fashion' | 'concept';
  promptSnippet: string;
  completionDate: string;
  featured: boolean;
  clientFeedback?: {
    quote: string;
    quoteUrdu: string;
    clientName: string;
    clientCompany: string;
  };
}

export type Language = 'ur' | 'en';

export interface ContactFormData {
  clientName: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
