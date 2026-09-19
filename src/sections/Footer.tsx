'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { DyvolaLogo } from '@/components/logo/DyvolaLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151417] text-[#F7F3EC] border-t border-[#242326] py-16 lg:py-20 relative">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#242326]">
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <DyvolaLogo variant="primary-stacked" width={180} height={100} priority />
            </Link>
            <p className="text-sm text-[#D8D0C5]/80 max-w-sm font-light leading-relaxed">
              DYVOLA is a Digital Moments Platform dedicated to elevating life&apos;s greatest celebrations into lasting digital memories.
            </p>
            <div className="text-xs text-[#6E2C3A] font-medium tracking-wide uppercase">
              Your Moments, Made Lasting.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-medium text-[#F7F3EC]">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-[#D8D0C5]/70">
              <li>
                <a href="#wedding" className="hover:text-[#F7F3EC] transition-colors">
                  DYVOLA Wedding
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-[#F7F3EC] transition-colors">
                  Template Showcase
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#F7F3EC] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#F7F3EC] transition-colors">
                  Pricing Preview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F7F3EC] transition-colors">
                  About DYVOLA
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-medium text-[#F7F3EC]">Connect</h4>
            <p className="text-xs text-[#D8D0C5]/70 leading-relaxed">
              Follow our digital storytelling updates across social media platforms.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#242326] text-[#D8D0C5] hover:text-[#F7F3EC] hover:bg-[#6E2C3A] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* TikTok SVG */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#242326] text-[#D8D0C5] hover:text-[#F7F3EC] hover:bg-[#6E2C3A] transition-all"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.31 2.56.02 1.25.75 2.42 1.86 2.97 1.05.51 2.34.46 3.32-.14.77-.47 1.26-1.34 1.3-2.24.03-3.47.01-6.94.02-10.41z"/>
                </svg>
              </a>
              {/* WhatsApp SVG */}
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#242326] text-[#D8D0C5] hover:text-[#F7F3EC] hover:bg-[#6E2C3A] transition-all"
                aria-label="WhatsApp Concierge"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.137 4.153 4.175-1.096z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8D0C5]/50 gap-4">
          <p>© 2026 DYVOLA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#D8D0C5]">Privacy Policy</span>
            <span className="hover:text-[#D8D0C5]">Terms of Service</span>
            <span className="hover:text-[#D8D0C5]">Brand Guidelines</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
