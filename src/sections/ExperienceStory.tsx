'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen, Image as ImageIcon, Calendar, CheckSquare, Gift } from 'lucide-react';

export const ExperienceStory: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: 'story',
      title: 'Love Story Timeline',
      icon: BookOpen,
      tag: 'Storytelling',
      headline: 'Narrate how your paths crossed',
      description: 'Document your first meeting, engagement day, and journey towards the aisle with dedicated editorial milestones and photo memories.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'photos',
      title: 'Pre-Wedding Gallery',
      icon: ImageIcon,
      tag: 'Visual Gallery',
      headline: 'Full-resolution image showcase',
      description: 'Display your engagement photoshoot in Japanese garden or European architectures with zero quality loss and instant lightbox zoom.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'event',
      title: 'Interactive Schedule & Map',
      icon: Calendar,
      tag: 'Event Coordination',
      headline: 'Seamless directions for your guests',
      description: 'Avoid lost guests with instant Google Maps venue triggers, dress code guidelines, and automated calendar reminders.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'rsvp',
      title: 'Smart Guest RSVP',
      icon: CheckSquare,
      tag: 'Guest Management',
      headline: 'Real-time attendance confirmation',
      description: 'Guests can confirm attendance, specify dietary choices, and leave warm blessing wishes directly from their smartphone screen.',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'gift',
      title: 'Respectful Digital Gift',
      icon: Gift,
      tag: 'Digital Well-Wishes',
      headline: 'Seamless cash gifts & QRIS',
      description: 'Allow loved ones who cannot attend in person to send digital monetary blessings securely via bank transfer and QRIS protocol.',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const current = features[activeFeature];

  return (
    <section className="py-24 lg:py-36 bg-[#F7F3EC] relative overflow-hidden">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E2C3A]">
            Rich Interactive Invitation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#242326]">
            Every detail becomes<br />
            <span className="italic font-light text-[#6E2C3A]">part of the story.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#625D59]">
            DYVOLA goes far beyond static webpage cards. It is an immersive digital experience built for modern couples.
          </p>
        </div>

        {/* Feature Interactive Switcher Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column — Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              const isActive = activeFeature === index;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-5 rounded-[14px] border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#EFE9E0] border-[#6E2C3A] shadow-sm'
                      : 'bg-[#F7F3EC] border-[#D8D0C5]/60 hover:bg-[#EFE9E0]/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        isActive ? 'bg-[#6E2C3A] text-[#F7F3EC]' : 'bg-[#EFE9E0] text-[#625D59]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`font-serif text-lg font-medium transition-colors ${
                          isActive ? 'text-[#6E2C3A]' : 'text-[#242326]'
                        }`}
                      >
                        {feat.title}
                      </h3>
                      <p className="text-xs text-[#625D59]">{feat.tag}</p>
                    </div>
                  </div>

                  <Sparkles
                    className={`w-4 h-4 transition-opacity ${
                      isActive ? 'opacity-100 text-[#6E2C3A]' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column — Feature Visual Card Stage */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#EFE9E0] rounded-[24px] border border-[#D8D0C5] overflow-hidden p-6 sm:p-8 space-y-6 shadow-xl"
              >
                {/* Feature Image Frame */}
                <div className="relative h-72 sm:h-96 w-full rounded-[16px] overflow-hidden border border-[#D8D0C5]">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242326]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-[#F7F3EC]">
                    <span className="text-xs font-semibold tracking-widest uppercase text-[#EFE9E0]">
                      {current.tag}
                    </span>
                    <h4 className="font-serif text-2xl font-normal">
                      {current.headline}
                    </h4>
                  </div>
                </div>

                {/* Feature Description Text */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-medium text-[#242326]">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#625D59] leading-relaxed">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
