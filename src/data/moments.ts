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
    image: '/images/moments/wedding-moment.jpg',
  },
  {
    id: 'birthday',
    name: 'Birthday',
    subtitle: 'Personal Milestone Celebration',
    description: 'Elegant digital invitations for birthdays, intimate dinners, and milestone celebrations.',
    status: 'coming_soon',
    tag: 'Coming Soon',
    image: '/images/moments/birthday-moment.jpg',
  },
  {
    id: 'graduation',
    name: 'Graduation',
    subtitle: 'Academic & Career Achievements',
    description: 'Share your academic milestones and graduation festivities with friends and family.',
    status: 'coming_soon',
    tag: 'Coming Soon',
    image: '/images/moments/graduation-moment.jpg',
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    subtitle: 'Love & Partnership Milestones',
    description: 'Commemorate years of love, marriage, and shared memories with a digital tribute.',
    status: 'coming_soon',
    tag: 'Coming Soon',
    image: '/images/moments/anniversary-moment.jpg',
  },
];
