export interface TemplateItem {
  id: string;
  name: string;
  style: 'Editorial' | 'Minimal' | 'Romantic' | 'Modern';
  tagline: string;
  description: string;
  previewImage: string;
  galleryImages: string[];
  features: string[];
  isFeatured?: boolean;
}

export const TEMPLATE_ITEMS: TemplateItem[] = [
  {
    id: 'editorial-nocturne',
    name: 'The Editorial',
    style: 'Editorial',
    tagline: 'High typography & timeless magazine aesthetics',
    description: 'Designed for couples who appreciate bold serif typography, generous whitespace, and magazine-style layout hierarchy.',
    previewImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    ],
    features: ['Large Cormorant Serif Story Grid', 'Clean Event Schedule Accordion', 'Embedded Music Player', 'Interactive Digital Gift Drawer'],
    isFeatured: true,
  },
  {
    id: 'minimal-serenity',
    name: 'The Minimal',
    style: 'Minimal',
    tagline: 'Quiet elegance & intentional simplicity',
    description: 'Subtle lines, warm neutral surfaces, and pristine spacing that let your love story and photography take center stage.',
    previewImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    ],
    features: ['Minimalist Card Framing', 'Monochrome & Burgundy Accents', 'Direct One-Tap Maps Navigation', 'Instant RSVP Modal'],
  },
  {
    id: 'romantic-bloom',
    name: 'The Romantic',
    style: 'Romantic',
    tagline: 'Warm burgundy tones & intimate storytelling',
    description: 'Enriched with subtle organic curves, warm lighting, and emotional storytelling sections that capture every tender moment.',
    previewImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    ],
    features: ['Interactive Memory Timeline', 'Lightbox Photo Gallery', 'Live Event Countdown Timer', 'QRIS Digital Gift Support'],
  },
  {
    id: 'modern-arch',
    name: 'The Modern',
    style: 'Modern',
    tagline: 'Architectural composition & contemporary warmth',
    description: 'Clean geometry meets soft neutral editorial layout, built for couples wanting a contemporary yet lasting digital invitation.',
    previewImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    ],
    features: ['Dual Hero Viewport Option', 'Compact Mobile Tab Bar', 'Automated Calendar Add (.ics)', 'Guest Wishes & Digital Guestbook Preview'],
  },
];
