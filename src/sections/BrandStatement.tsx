'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { DyvolaLogo } from '@/components/logo/DyvolaLogo';
import { motion } from 'framer-motion';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#EFE9E0]/50 border-y border-[#D8D0C5]/60 relative overflow-hidden">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-10"
        >
          {/* Centered Brand Emblem */}
          <div className="flex justify-center">
            <DyvolaLogo variant="symbol" width={48} height={48} />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#242326]">
            More than an invitation.<br />
            <span className="italic font-light text-[#6E2C3A]">It&apos;s your story.</span>
          </h2>

          {/* Narrative Body */}
          <p className="text-lg sm:text-xl font-normal text-[#625D59] max-w-2xl mx-auto leading-relaxed">
            DYVOLA gives meaningful moments a place to live, be shared, and remembered.
          </p>

          {/* Indonesian Brand Purpose Quote Box */}
          <div className="max-w-2xl mx-auto p-8 sm:p-10 bg-[#F7F3EC] rounded-[16px] border border-[#D8D0C5] shadow-sm relative">
            <span className="absolute top-4 left-6 text-4xl font-serif text-[#6E2C3A]/30">&ldquo;</span>
            <p className="font-serif text-xl sm:text-2xl italic text-[#242326] leading-relaxed relative z-10">
              DYVOLA hadir untuk membuat momen berharga terasa lebih berarti, mudah dibagikan, dan tetap bisa dikenang.
            </p>
            <span className="block mt-4 text-xs tracking-widest uppercase font-semibold text-[#6E2C3A]">
              DYVOLA Brand Purpose
            </span>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-6 bg-[#F7F3EC]/80 rounded-[12px] border border-[#D8D0C5]/60 space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#6E2C3A] uppercase">01 — Create</span>
              <h3 className="font-serif text-2xl font-medium text-[#242326]">Unique Story</h3>
              <p className="text-sm text-[#625D59] leading-relaxed">
                Every person and every couple has a distinct narrative that deserves bespoke presentation.
              </p>
            </div>

            <div className="p-6 bg-[#F7F3EC]/80 rounded-[12px] border border-[#D8D0C5]/60 space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#6E2C3A] uppercase">02 — Celebrate</span>
              <h3 className="font-serif text-2xl font-medium text-[#242326]">Meaningful Moments</h3>
              <p className="text-sm text-[#625D59] leading-relaxed">
                Life&apos;s greatest milestones deserve a celebration crafted with warmth and elegance.
              </p>
            </div>

            <div className="p-6 bg-[#F7F3EC]/80 rounded-[12px] border border-[#D8D0C5]/60 space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#6E2C3A] uppercase">03 — Remember</span>
              <h3 className="font-serif text-2xl font-medium text-[#242326]">Beyond The Event</h3>
              <p className="text-sm text-[#625D59] leading-relaxed">
                Memories don&apos;t end when the event concludes; your digital invitation becomes a lasting archive.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
