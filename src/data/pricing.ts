export interface PricingTier {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Rp49.000',
    subtitle: 'Essential digital invitation for intimate celebrations',
    features: [
      'Choose from Standard Templates',
      'Personal Love Story Section',
      'Up to 15 High-Res Photo Gallery',
      'Google Maps Venue Navigation',
      'Basic RSVP Guest Tracker',
      '3 Months Active Hosting',
    ],
    ctaText: 'Choose Basic',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'Rp99.000 – Rp149.000',
    subtitle: 'The complete digital story experience for your big day',
    isPopular: true,
    features: [
      'Access to All Premium Templates',
      'Interactive Story & Love Timeline',
      'Unlimited High-Res Gallery & Lightbox',
      'Background Audio & Music Player',
      'Digital Gift (QRIS & Direct Bank Transfer)',
      'Advanced RSVP & Guest Wishbook',
      '1 Year Active Hosting',
    ],
    ctaText: 'Choose Premium',
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'Rp299.000+',
    subtitle: 'Tailor-made editorial digital experience with bespoke design',
    features: [
      'Custom Bespoke Layout & Typography',
      'Dedicated Custom Domain (yournames.com)',
      'Concierge Content Entry & Design Support',
      'Priority Speed Optimization',
      'VIP Dedicated Support Agent',
      'Lifetime Hosting & Archival Access',
    ],
    ctaText: 'Request Custom',
  },
];
