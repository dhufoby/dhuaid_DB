
export interface SubMenuItem {
  name: string;
  id: string;
}

export interface NavItem {
  name: string;
  id: string;
  subMenus?: SubMenuItem[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'Intensive Camp' | 'Bundled Course';
}

export interface DigitalBadge {
  id: string;
  title: string;
  course: string;
  imageUrl: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
