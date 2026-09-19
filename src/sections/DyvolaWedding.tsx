'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { Heart, Camera, Calendar, Clock, MapPin, CheckCircle, Gift, Share2 } from 'lucide-react';

export const DyvolaWedding: React.FC = () => {
  const highlights = [
    {
      icon: Heart,
      title: 'Personal Story',
      description: 'Share your journey, meeting moments, and love narrative in an intimate editorial flow.',
    },
    {
      icon: Camera,
      title: 'Beautiful Gallery',
      description: 'Showcase your pre-wedding photography with high-res lightbox grids and warm transitions.',
    },
    {
      icon: Calendar,
      title: 'Event Details',
      description: 'Clear schedules for Akad Nikah, Holy Matrimony, and Reception with automated calendar reminders.',
    },
    {
      icon: Clock,
      title: 'Live Countdown',
      description: 'Build anticipation with a real-time countdown timer tailored down to the exact minute.',
    },
    {
      icon: MapPin,
      title: 'Interactive Maps',
      description: 'One-click venue navigation with Google Maps & Waze integration for all your guests.',
    },
    {
      icon: CheckCircle,
      title: 'Instant RSVP',
      description: 'Effortless guest confirmation and dietary/attendance tracking directly from mobile.',
    },
    {
      icon: Gift,
      title: 'Digital Gift',
      description: 'Elegant cash gifts via bank transfer and QRIS protocol, integrated with utmost respect.',
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Personalized guest links for WhatsApp, email, and social messaging with custom previews.',
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#EFE9E0]/40 border-t border-[#D8D0C5]/60 relative overflow-hidden">
      <Container size="xl">
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E2C3A]">
              Flagship Experience
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#242326]">
              A wedding invitation that<br />
              <span className="italic font-light text-[#6E2C3A]">feels like you.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-base text-[#625D59] leading-relaxed max-w-sm ml-auto">
              Every detail is meticulously crafted to convey warmth, elegance, and effortless guest engagement.
            </p>
          </div>
        </div>

        {/* Feature Grid with Central Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Highlights 1-4 */}
          <div className="lg:col-span-4 space-y-6">
            {highlights.slice(0, 4).map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 bg-[#F7F3EC] rounded-[14px] border border-[#D8D0C5]/70 shadow-sm hover:border-[#6E2C3A]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#EFE9E0] text-[#6E2C3A] rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-[#242326] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#625D59] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Visual Art Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative h-[480px] sm:h-[540px] rounded-[24px] overflow-hidden border border-[#D8D0C5] shadow-xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
              alt="DYVOLA Wedding Experience"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242326]/90 via-[#242326]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-center text-[#F7F3EC]">
              <span className="text-xs tracking-widest uppercase text-[#EFE9E0]/80">
                Editorial Composition
              </span>
              <h4 className="font-serif text-2xl font-normal mt-1">
                &ldquo;Designed around your story.&rdquo;
              </h4>
            </div>
          </motion.div>

          {/* Highlights 5-8 */}
          <div className="lg:col-span-4 space-y-6">
            {highlights.slice(4, 8).map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 bg-[#F7F3EC] rounded-[14px] border border-[#D8D0C5]/70 shadow-sm hover:border-[#6E2C3A]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#EFE9E0] text-[#6E2C3A] rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-[#242326] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#625D59] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
