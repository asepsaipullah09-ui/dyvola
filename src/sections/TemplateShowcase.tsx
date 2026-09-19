'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { TEMPLATE_ITEMS, TemplateItem } from '@/data/templates';
import { Eye, ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const TemplateShowcase: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Editorial', 'Minimal', 'Romantic', 'Modern'];

  const filteredTemplates = activeFilter === 'All'
    ? TEMPLATE_ITEMS
    : TEMPLATE_ITEMS.filter((t) => t.style === activeFilter);

  return (
    <section id="templates" className="py-24 lg:py-36 bg-[#F7F3EC] relative">
      <Container size="xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E2C3A]">
              Editorial Collections
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#242326]">
              Made to feel like yours.
            </h2>
          </div>

          {/* Style Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#6E2C3A] text-[#F7F3EC] shadow-sm'
                    : 'bg-[#EFE9E0] text-[#625D59] hover:bg-[#D8D0C5]/60 hover:text-[#242326]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTemplates.map((template, idx) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#EFE9E0]/60 rounded-[16px] border border-[#D8D0C5] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#6E2C3A]/50 transition-all duration-300"
            >
              {/* Card Image Preview */}
              <div className="relative h-72 w-full overflow-hidden bg-[#D8D0C5]">
                <Image
                  src={template.previewImage}
                  alt={template.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242326]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="burgundy"
                    size="sm"
                    isPill
                    onClick={() => setSelectedTemplate(template)}
                    className="shadow-lg"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    <span>Quick Preview</span>
                  </Button>
                </div>

                {/* Style Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="surface">{template.style}</Badge>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#242326] mb-1">
                    {template.name}
                  </h3>
                  <p className="text-xs text-[#6E2C3A] font-medium mb-2">
                    {template.tagline}
                  </p>
                  <p className="text-xs text-[#625D59] line-clamp-2 leading-relaxed">
                    {template.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D8D0C5]/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedTemplate(template)}
                    className="text-xs font-semibold text-[#6E2C3A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Template Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-[#625D59] uppercase tracking-wider">
                    Instant Setup
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Template Quick Preview Modal */}
        <Modal
          isOpen={!!selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          title={selectedTemplate ? `${selectedTemplate.name} — ${selectedTemplate.style} Design` : ''}
        >
          {selectedTemplate && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left Column — Gallery Images */}
              <div className="md:col-span-6 space-y-4">
                <div className="relative h-80 rounded-[12px] overflow-hidden border border-[#D8D0C5]">
                  <Image
                    src={selectedTemplate.previewImage}
                    alt={selectedTemplate.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {selectedTemplate.galleryImages.map((img, i) => (
                    <div key={i} className="relative h-32 rounded-lg overflow-hidden border border-[#D8D0C5]">
                      <Image src={img} alt="Gallery item" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column — Details & Features */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-6 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="burgundy">{selectedTemplate.style}</Badge>
                    <span className="text-xs text-[#625D59]">Signature Invitation</span>
                  </div>
                  <h4 className="font-serif text-3xl font-medium text-[#242326] mb-2">
                    {selectedTemplate.name}
                  </h4>
                  <p className="text-sm text-[#625D59] leading-relaxed mb-6">
                    {selectedTemplate.description}
                  </p>

                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6E2C3A]">
                      Included Features:
                    </span>
                    <div className="space-y-2">
                      {selectedTemplate.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-[#242326]">
                          <div className="p-1 rounded-full bg-[#6E2C3A]/10 text-[#6E2C3A]">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D8D0C5] flex items-center gap-4">
                  <Button
                    variant="burgundy"
                    size="md"
                    isPill
                    className="flex-1"
                    onClick={() => {
                      alert(`Selected template: ${selectedTemplate.name}. Editor functionality will launch in Phase 2!`);
                      setSelectedTemplate(null);
                    }}
                  >
                    <span>Use This Template</span>
                    <Sparkles className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
};
