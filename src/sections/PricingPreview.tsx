'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PRICING_TIERS } from '@/data/pricing';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const PricingPreview: React.FC = () => {
  return (
    <section id="pricing" className="py-24 lg:py-36 bg-[#EFE9E0]/40 border-t border-[#D8D0C5]/60 relative">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E2C3A]">
            Transparent Investment
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#242326]">
            Simple pricing for your special day.
          </h2>
          <p className="text-base sm:text-lg text-[#625D59]">
            Select the plan that fits your wedding celebration. All plans include mobile responsiveness and instant sharing.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-[20px] p-8 flex flex-col justify-between space-y-8 relative transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-[#F7F3EC] border-2 border-[#6E2C3A] shadow-xl md:-translate-y-2'
                  : 'bg-[#F7F3EC]/80 border border-[#D8D0C5] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Top Badge for Popular Tier */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="burgundy" className="shadow-md">
                    <Sparkles className="w-3 h-3 mr-1 inline" />
                    Most Popular Choice
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-medium text-[#242326] mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#625D59] leading-relaxed">
                    {tier.subtitle}
                  </p>
                </div>

                <div className="py-2 border-y border-[#D8D0C5]/60">
                  <span className="font-serif text-4xl font-semibold text-[#242326]">
                    {tier.price}
                  </span>
                  <span className="text-xs text-[#625D59] block mt-1">
                    One-time package payment
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6E2C3A]">
                    Package Features:
                  </span>
                  <ul className="space-y-2.5 text-xs text-[#242326]">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <div className="p-0.5 rounded-full bg-[#6E2C3A]/10 text-[#6E2C3A] mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <a href="#templates" className="block pt-4">
                <Button
                  variant={tier.isPopular ? 'burgundy' : 'outline'}
                  size="md"
                  isPill
                  className="w-full"
                >
                  <span>{tier.ctaText}</span>
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Provisional Note */}
        <p className="text-center text-xs text-[#625D59] italic mt-12">
          * Package options and pricing are provisional UI content for Phase 1. Final rates subject to feature selection.
        </p>
      </Container>
    </section>
  );
};
