export interface MomentCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  status: 'available' | 'coming_soon';
  image: string;
  tag: string;
}

export const MOMENT_CATEGORIES: MomentCategory[] = [
  {
    id: 'wedding',
    name: 'DYVOLA Wedding',
    subtitle: 'Digital Wedding Invitation Experience',
    description: 'A personal digital wedding invitation experience designed around your unique love story.',
    status: 'available',
    tag: 'Available Now',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'birthday',
    name: 'Birthday',
    subtitle: 'Personal Milestone Celebration',
    description: 'Elegant digital invitations for birthdays, intimate dinners, and milestone celebrations.',
    status: 'coming_soon',
    tag: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'graduation',
    name: 'Graduation',
    subtitle: 'Academic & Career Achievements',
    description: 'Share your academic milestones and graduation festivities with friends and family.',
    status: 'coming_soon',
    tag: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    subtitle: 'Love & Partnership Milestones',
    description: 'Commemorate years of love, marriage, and shared memories with a digital tribute.',
    status: 'coming_soon',
    tag: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
  },
];
