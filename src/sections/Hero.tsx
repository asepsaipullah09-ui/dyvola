'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobilePhoneFrame } from '@/components/mockup/MobilePhoneFrame';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 bg-[#F7F3EC] overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column — Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* 1. Small Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E0] border border-[#D8D0C5] text-xs font-medium text-[#625D59]">
              <Sparkles className="w-3.5 h-3.5 text-[#6E2C3A]" />
              <span className="tracking-wide">Digital Moments Platform</span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#242326]">
              Your moments,<br />
              <span className="italic font-light text-[#6E2C3A]">made lasting.</span>
            </h1>

            {/* 3. Description Copy */}
            <p className="text-base sm:text-lg font-normal text-[#625D59] max-w-xl leading-relaxed">
              Create a beautiful digital experience around the moments that matter most. Designed around your unique story.
            </p>

            {/* 4 & 5. Action Buttons (Primary CTA -> Secondary CTA) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a href="#templates">
                <Button variant="burgundy" size="lg" isPill className="w-full sm:w-auto text-sm sm:text-base px-7 py-3">
                  <span>Create Your Moment</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="#templates">
                <Button variant="outline" size="lg" isPill className="w-full sm:w-auto text-sm sm:text-base px-7 py-3">
                  <span>Explore Templates</span>
                </Button>
              </a>
            </div>

            {/* Micro Stats Row */}
            <div className="pt-4 border-t border-[#D8D0C5]/60 flex items-center gap-6 text-xs text-[#625D59]">
              <div>
                <span className="font-serif text-lg font-medium text-[#242326]">100%</span>
                <p className="text-[11px]">Personalized Story</p>
              </div>
              <div className="h-6 w-px bg-[#D8D0C5]" />
              <div>
                <span className="font-serif text-lg font-medium text-[#242326]">Instant</span>
                <p className="text-[11px]">Digital Guest RSVP</p>
              </div>
              <div className="h-6 w-px bg-[#D8D0C5]" />
              <div>
                <span className="font-serif text-lg font-medium text-[#6E2C3A]">Forever</span>
                <p className="text-[11px]">Lasting Memories</p>
              </div>
            </div>
          </motion.div>

          {/* 6. Visual Device Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative pt-4 lg:pt-0"
          >
            {/* Soft Warm Neutral Card Frame (No heavy burgundy glow) */}
            <div className="absolute -inset-3 bg-[#EFE9E0]/70 rounded-[44px] border border-[#D8D0C5]/60 -z-10" />
            <MobilePhoneFrame />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
