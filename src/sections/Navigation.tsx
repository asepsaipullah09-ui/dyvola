'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { DyvolaLogo } from '@/components/logo/DyvolaLogo';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Wedding', href: '#wedding' },
    { name: 'Templates', href: '#templates' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3EC]/90 backdrop-blur-md border-b border-[#D8D0C5]/60 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="inline-flex items-center group">
          <DyvolaLogo variant="horizontal" width={140} height={36} priority />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#625D59]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#6E2C3A] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm font-medium text-[#242326] hover:text-[#6E2C3A] transition-colors">
            Login
          </button>
          <a href="#templates">
            <Button variant="burgundy" size="md" isPill>
              <span>Create Your Moment</span>
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#242326] hover:text-[#6E2C3A] rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F7F3EC] border-b border-[#D8D0C5] px-6 py-6 space-y-5 shadow-lg"
          >
            <div className="flex flex-col gap-4 text-base font-medium text-[#242326]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 border-b border-[#D8D0C5]/40 hover:text-[#6E2C3A] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 border border-[#D8D0C5] text-[#242326] font-medium rounded-lg text-sm"
              >
                Login
              </button>
              <a href="#templates" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="burgundy" size="md" className="w-full" isPill>
                  <span>Create Your Moment</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
