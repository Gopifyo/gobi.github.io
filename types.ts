
export interface Publication {
  title: string;
  journal: string;
  year: number;
  highlight?: string;
  doi?: string;
  link?: string;
}

export interface Patent {
  title: string;
  status: string;
  description?: string;
  year?: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: 'AI' | 'Mobile' | 'BioTech';
  link?: string;
}

export interface MediaItem {
  title: string;
  source: string;
  date: string;
  link: string;
  type: 'Press Release' | 'Feature' | 'Article' | 'Interview';
  imageUrl?: string;
  description?: string;
  content?: string;
  pdfPages?: {
    pageNumber: number;
    content: string;
    image?: string;
    imageCaption?: string;
    profileImage?: string;
    layout: 'cover' | 'full-image' | 'text-columns' | 'text-standard';
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Lab' | 'Conference' | 'Tech' | 'Personal';
  imageUrl: string;
  description?: string;
}
