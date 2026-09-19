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
    previewImage: '/images/templates/template-editorial.jpg',
    galleryImages: [
      '/images/templates/template-editorial.jpg',
      '/images/hero/wedding-hero.jpg',
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
    previewImage: '/images/templates/template-minimal.jpg',
    galleryImages: [
      '/images/templates/template-minimal.jpg',
      '/images/moments/anniversary-moment.jpg',
    ],
    features: ['Minimalist Card Framing', 'Monochrome & Burgundy Accents', 'Direct One-Tap Maps Navigation', 'Instant RSVP Modal'],
  },
  {
    id: 'romantic-bloom',
    name: 'The Romantic',
    style: 'Romantic',
    tagline: 'Warm burgundy tones & intimate storytelling',
    description: 'Enriched with subtle organic curves, warm lighting, and emotional storytelling sections that capture every tender moment.',
    previewImage: '/images/templates/template-romantic.jpg',
    galleryImages: [
      '/images/templates/template-romantic.jpg',
      '/images/templates/template-modern.jpg',
    ],
    features: ['Interactive Memory Timeline', 'Lightbox Photo Gallery', 'Live Event Countdown Timer', 'QRIS Digital Gift Support'],
  },
  {
    id: 'modern-arch',
    name: 'The Modern',
    style: 'Modern',
    tagline: 'Architectural composition & contemporary warmth',
    description: 'Clean geometry meets soft neutral editorial layout, built for couples wanting a contemporary yet lasting digital invitation.',
    previewImage: '/images/templates/template-modern.jpg',
    galleryImages: [
      '/images/templates/template-modern.jpg',
      '/images/hero/wedding-hero.jpg',
    ],
    features: ['Dual Hero Viewport Option', 'Compact Mobile Tab Bar', 'Automated Calendar Add (.ics)', 'Guest Wishes & Digital Guestbook Preview'],
  },
];
