'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose',
      description: 'Choose your moment and select an editorial template that aligns with your style.',
    },
    {
      number: '02',
      title: 'Personalize',
      description: 'Add your unique story, photo gallery, event schedules, maps, and music track.',
    },
    {
      number: '03',
      title: 'Preview',
      description: 'See how your invitation comes together seamlessly across mobile and tablet viewports.',
    },
    {
      number: '04',
      title: 'Publish',
      description: 'Share your finished digital moment effortlessly with custom links for family & guests.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-36 bg-[#EFE9E0]/50 border-y border-[#D8D0C5]/60 relative">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E2C3A]">
            Simple Editorial Process
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#242326]">
            From idea to invitation.
          </h2>
          <p className="text-base sm:text-lg text-[#625D59]">
            Four deliberate steps to transform your story into an unforgettable digital celebration.
          </p>
        </div>

        {/* 4 Steps Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-[#F7F3EC] rounded-[16px] border border-[#D8D0C5] flex flex-col justify-between space-y-6 relative group hover:border-[#6E2C3A] transition-colors"
            >
              <div className="space-y-4">
                <span className="font-serif text-5xl font-light text-[#6E2C3A]/70 group-hover:text-[#6E2C3A] transition-colors">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#242326]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#625D59] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Line Indicator */}
              <div className="w-12 h-0.5 bg-[#D8D0C5] group-hover:bg-[#6E2C3A] transition-all group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
