export interface Program {
  id: string;
  title: string;
  age: string;
  timing: string;
  ratio: string;
  tagline: string;
  description: string;
  highlights: string[];
  color: string;
  badgeColor: string;
  iconName: string;
  image: string;
}

export interface DayStep {
  id: number;
  time: string;
  title: string;
  tag: string;
  description: string;
  activity: string;
  icon: string;
  image: string;
  funFact: string;
}

export interface DevelopmentalPillar {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  activities: string[];
  color: string;
  badgeBg: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  program: string;
  reviewDate: string;
  rating: number;
  quote: string;
  avatar: string;
  badge?: string;
  hasVideo?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'outdoor' | 'activities' | 'events';
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
