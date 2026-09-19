'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobilePhoneFrame } from '@/components/mockup/MobilePhoneFrame';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 lg:pb-32 overflow-hidden bg-[#F7F3EC]">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E2C3A]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column — Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Small Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E0] border border-[#D8D0C5] text-xs font-medium text-[#625D59]">
              <Sparkles className="w-3.5 h-3.5 text-[#6E2C3A]" />
              <span className="tracking-wide">Digital Moments Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#242326]">
              Your moments,<br />
              <span className="italic font-light text-[#6E2C3A]">made lasting.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl font-normal text-[#625D59] max-w-xl leading-relaxed">
              Create a beautiful digital experience around the moments that matter most. Designed around your unique story.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="#templates">
                <Button variant="burgundy" size="lg" isPill className="w-full sm:w-auto">
                  <span>Create Your Moment</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="#templates">
                <Button variant="outline" size="lg" isPill className="w-full sm:w-auto">
                  <span>Explore Templates</span>
                </Button>
              </a>
            </div>

            {/* Social Proof / Stats Badge */}
            <div className="pt-6 border-t border-[#D8D0C5]/60 flex items-center gap-8 text-xs text-[#625D59]">
              <div>
                <span className="font-serif text-xl font-medium text-[#242326]">100%</span>
                <p className="text-[11px]">Personalized Experience</p>
              </div>
              <div className="h-8 w-px bg-[#D8D0C5]" />
              <div>
                <span className="font-serif text-xl font-medium text-[#242326]">Instant</span>
                <p className="text-[11px]">Digital RSVP &amp; Map Sharing</p>
              </div>
              <div className="h-8 w-px bg-[#D8D0C5]" />
              <div>
                <span className="font-serif text-xl font-medium text-[#6E2C3A]">Forever</span>
                <p className="text-[11px]">Lasting Memories</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Device Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Subtle Editorial Frame Card Backdrop */}
            <div className="absolute -inset-4 bg-[#EFE9E0]/60 rounded-[48px] -rotate-2 border border-[#D8D0C5]/50 -z-10" />
            <MobilePhoneFrame />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
