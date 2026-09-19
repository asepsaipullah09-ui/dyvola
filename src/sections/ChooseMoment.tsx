'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { MOMENT_CATEGORIES } from '@/data/moments';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export const ChooseMoment: React.FC = () => {
  return (
    <section id="wedding" className="py-24 lg:py-32 bg-[#F7F3EC] relative">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E2C3A]">
            Digital Moments Platform
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#242326]">
            Choose your moment.
          </h2>
          <p className="text-base sm:text-lg text-[#625D59]">
            DYVOLA expands across life&apos;s greatest celebrations, beginning with our flagship digital wedding invitation experience.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOMENT_CATEGORIES.map((category, index) => {
            const isAvailable = category.status === 'available';
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-[16px] overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isAvailable
                    ? 'bg-[#EFE9E0] border-[#6E2C3A]/40 shadow-sm hover:shadow-xl hover:-translate-y-1'
                    : 'bg-[#EFE9E0]/40 border-[#D8D0C5]/60 opacity-80'
                }`}
              >
                {/* Category Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-[#D8D0C5]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isAvailable ? 'group-hover:scale-105' : 'grayscale contrast-75'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242326]/70 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant={isAvailable ? 'burgundy' : 'muted'}>
                      {category.tag}
                    </Badge>
                  </div>
                </div>

                {/* Category Copy Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#242326] mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[#6E2C3A] font-medium mb-3">
                      {category.subtitle}
                    </p>
                    <p className="text-sm text-[#625D59] leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    {isAvailable ? (
                      <a
                        href="#templates"
                        className="inline-flex items-center text-sm font-medium text-[#6E2C3A] hover:text-[#58232E] transition-colors gap-1.5 group/link"
                      >
                        <span>Explore Digital Wedding</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-xs font-medium text-[#625D59]/70 gap-1.5">
                        <Lock className="w-3.5 h-3.5" />
                        <span>In Development</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Future Roadmap Micro Banner */}
        <div className="mt-16 p-6 rounded-[12px] bg-[#EFE9E0]/60 border border-[#D8D0C5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#625D59]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6E2C3A]" />
            <span className="font-medium text-[#242326]">Future Platform Horizons:</span>
            <span>Aqiqah, Khitanan, Corporate Events &amp; Digital Gifts</span>
          </div>
          <span className="italic">Crafted with editorial care for every stage of life.</span>
        </div>
      </Container>
    </section>
  );
};
