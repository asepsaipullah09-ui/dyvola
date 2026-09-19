'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DyvolaLogo } from '@/components/logo/DyvolaLogo';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#242326] text-[#F7F3EC] relative overflow-hidden">
      {/* Background Decorative Subtle Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#F7F3EC]/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#6E2C3A]/20 rounded-full pointer-events-none" />

      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 relative z-10"
        >
          {/* Symbol Emblem */}
          <div className="flex justify-center opacity-90">
            <DyvolaLogo variant="symbol" width={56} height={56} />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Your story deserves a<br />
            <span className="italic font-light text-[#EFE9E0]">beautiful beginning.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#D8D0C5] max-w-xl mx-auto font-light leading-relaxed">
            Begin crafting your digital wedding invitation today. Elegant, personal, and effortlessly shared with the people who matter most.
          </p>

          {/* Primary CTA */}
          <div className="pt-4 flex justify-center">
            <a href="#templates">
              <Button variant="burgundy" size="lg" isPill className="px-10 py-4 shadow-xl text-base">
                <span>Create Your Moment</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </a>
          </div>

          <div className="pt-8 text-xs tracking-widest uppercase text-[#D8D0C5]/60 font-medium">
            Create. Celebrate. Remember.
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
