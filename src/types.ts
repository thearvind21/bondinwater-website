export interface WorldItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  services: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  caption: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  helper: string;
  caption: string;
  image: string;
  alt: string;
}
