'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, MapPin, Calendar, Gift, Music, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobilePhoneFrame: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'gallery' | 'event' | 'rsvp' | 'gift'>('story');
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const [copiedBank, setCopiedBank] = useState(false);

  const handleCopyBank = () => {
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] aspect-[9/18.5] bg-[#242326] rounded-[40px] p-2.5 shadow-2xl border-4 border-[#D8D0C5]/40 select-none">
      {/* Outer Phone Shell Notch & Speaker */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-[#242326] rounded-b-xl z-30 flex items-center justify-center gap-2">
        <div className="w-10 h-1 bg-[#625D59]/50 rounded-full" />
        <div className="w-2 h-2 bg-[#151417] rounded-full border border-[#625D59]/30" />
      </div>

      {/* Screen Viewport */}
      <div className="relative w-full h-full bg-[#F7F3EC] rounded-[30px] overflow-hidden flex flex-col font-sans border border-[#D8D0C5]/50 text-[#242326]">
        {/* Status Bar */}
        <div className="pt-2 px-5 pb-1 flex justify-between items-center text-[10px] text-[#625D59] font-medium z-20">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-3.5 h-2 border border-[#625D59] rounded-sm relative p-0.5">
              <div className="w-full h-full bg-[#625D59]" />
            </div>
          </div>
        </div>

        {/* Floating Music Audio Player Badge */}
        <div className="absolute top-8 right-2.5 z-30">
          <button
            onClick={() => setMusicPlaying(!musicPlaying)}
            className={`flex items-center gap-1.5 text-[9px] px-2.5 py-1 rounded-full shadow-md backdrop-blur-md transition-all ${
              musicPlaying
                ? 'bg-[#6E2C3A] text-[#F7F3EC]'
                : 'bg-[#242326]/80 text-[#F7F3EC]'
            }`}
          >
            <Music className={`w-3 h-3 ${musicPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
            <span>{musicPlaying ? 'Playing ♪' : 'Muted'}</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-10 text-left">
          {/* Header Banner */}
          <div className="relative h-52 w-full">
            <Image
              src="/images/hero/wedding-hero.jpg"
              alt="Raden & Alyssa"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242326]/90 via-[#242326]/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-center text-[#F7F3EC]">
              <span className="text-[9px] tracking-[0.2em] uppercase font-light text-[#EFE9E0]">
                The Wedding Of
              </span>
              <h4 className="font-serif text-2xl font-normal leading-tight text-[#F7F3EC]">
                Raden &amp; Alyssa
              </h4>
              <p className="text-[9px] text-[#EFE9E0]/80 font-light mt-0.5">
                Saturday, 24 October 2026
              </p>
            </div>
          </div>

          {/* Tab Navigation Pill Inside Viewport */}
          <div className="px-2 py-1.5 bg-[#EFE9E0]/80 backdrop-blur border-b border-[#D8D0C5]/40 flex justify-between gap-1 text-[9px] sticky top-0 z-10">
            {(['story', 'gallery', 'event', 'rsvp', 'gift'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-1 rounded-md capitalize font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-[#6E2C3A] text-[#F7F3EC] shadow-sm'
                    : 'text-[#625D59] hover:text-[#242326]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Panels */}
          <div className="p-3.5 space-y-3 text-xs text-[#242326]">
            <AnimatePresence mode="wait">
              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-2.5"
                >
                  <div className="text-center space-y-0.5">
                    <span className="text-[8px] uppercase tracking-widest text-[#6E2C3A] font-semibold">
                      Our Journey
                    </span>
                    <h5 className="font-serif text-base font-medium text-[#242326]">
                      &ldquo;Two Hearts, One Chapter&rdquo;
                    </h5>
                  </div>
                  <p className="text-[10px] leading-relaxed text-[#625D59] text-center italic">
                    &ldquo;From a quiet coffee shop conversation to promising a lifetime together. We invite you to celebrate our new beginning.&rdquo;
                  </p>

                  <div className="bg-[#EFE9E0] p-2.5 rounded-xl border border-[#D8D0C5] text-center space-y-1">
                    <div className="text-[8px] text-[#625D59] font-medium uppercase tracking-wider">
                      Countdown to Celebration
                    </div>
                    <div className="flex justify-center gap-2.5 text-center">
                      <div>
                        <span className="font-serif text-sm font-bold text-[#6E2C3A]">35</span>
                        <div className="text-[7px] text-[#625D59]">Days</div>
                      </div>
                      <span className="font-serif text-sm text-[#D8D0C5]">:</span>
                      <div>
                        <span className="font-serif text-sm font-bold text-[#6E2C3A]">14</span>
                        <div className="text-[7px] text-[#625D59]">Hours</div>
                      </div>
                      <span className="font-serif text-sm text-[#D8D0C5]">:</span>
                      <div>
                        <span className="font-serif text-sm font-bold text-[#6E2C3A]">28</span>
                        <div className="text-[7px] text-[#625D59]">Mins</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-2"
                >
                  <div className="text-center mb-1">
                    <h5 className="font-serif text-sm font-medium">Pre-Wedding Gallery</h5>
                    <p className="text-[8px] text-[#625D59]">Moments captured in Kyoto &amp; Bali</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="relative h-20 rounded-lg overflow-hidden">
                      <Image src="/images/templates/template-minimal.jpg" alt="Gallery 1" fill className="object-cover" />
                    </div>
                    <div className="relative h-20 rounded-lg overflow-hidden">
                      <Image src="/images/templates/template-romantic.jpg" alt="Gallery 2" fill className="object-cover" />
                    </div>
                    <div className="relative h-20 col-span-2 rounded-lg overflow-hidden">
                      <Image src="/images/templates/template-modern.jpg" alt="Gallery 3" fill className="object-cover" />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'event' && (
                <motion.div
                  key="event"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-2.5"
                >
                  <div className="bg-[#EFE9E0] p-2.5 rounded-xl border border-[#D8D0C5] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#6E2C3A]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-serif font-medium text-xs">Akad Nikah</span>
                    </div>
                    <p className="text-[9px] text-[#625D59]">08:00 – 10:00 WIB</p>
                    <p className="text-[9px] text-[#242326] font-medium">The Glass House, Plataran Hutan Kota</p>
                  </div>

                  <div className="bg-[#EFE9E0] p-2.5 rounded-xl border border-[#D8D0C5] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#6E2C3A]">
                      <Heart className="w-3.5 h-3.5" />
                      <span className="font-serif font-medium text-xs">Wedding Reception</span>
                    </div>
                    <p className="text-[9px] text-[#625D59]">11:00 – 14:00 WIB</p>
                    <p className="text-[9px] text-[#242326] font-medium">Grand Ballroom Plataran</p>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-1.5 bg-[#242326] text-[#F7F3EC] rounded-lg text-[9px] font-medium hover:bg-[#6E2C3A] transition-colors"
                  >
                    <MapPin className="w-3 h-3" />
                    Open Google Maps
                  </a>
                </motion.div>
              )}

              {activeTab === 'rsvp' && (
                <motion.div
                  key="rsvp"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-2.5"
                >
                  <div className="text-center">
                    <h5 className="font-serif text-sm font-medium">RSVP Confirmation</h5>
                    <p className="text-[8px] text-[#625D59]">Kindly confirm your attendance</p>
                  </div>

                  {rsvpSubmitted ? (
                    <div className="bg-[#EFE9E0] p-3 rounded-xl border border-[#6E2C3A]/30 text-center space-y-1">
                      <CheckCircle2 className="w-5 h-5 text-[#6E2C3A] mx-auto" />
                      <p className="text-[10px] font-medium text-[#6E2C3A]">Thank you for confirming!</p>
                      <p className="text-[8px] text-[#625D59]">We look forward to celebrating with you.</p>
                      <button
                        onClick={() => setRsvpSubmitted(false)}
                        className="text-[8px] underline text-[#625D59] hover:text-[#6E2C3A]"
                      >
                        Edit RSVP
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1.5 text-[9px]">
                      <div>
                        <label className="block text-[#625D59] mb-0.5">Your Name</label>
                        <input
                          type="text"
                          defaultValue="Ananda Putri"
                          className="w-full px-2 py-1 rounded-md border border-[#D8D0C5] bg-[#F7F3EC] focus:outline-none focus:border-[#6E2C3A]"
                        />
                      </div>
                      <div>
                        <label className="block text-[#625D59] mb-0.5">Guests</label>
                        <select
                          value={guestCount}
                          onChange={(e) => setGuestCount(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded-md border border-[#D8D0C5] bg-[#F7F3EC] focus:outline-none focus:border-[#6E2C3A]"
                        >
                          <option value={1}>1 Guest</option>
                          <option value={2}>2 Guests</option>
                        </select>
                      </div>
                      <button
                        onClick={() => setRsvpSubmitted(true)}
                        className="w-full py-1.5 bg-[#6E2C3A] text-[#F7F3EC] rounded-md font-medium shadow-sm hover:bg-[#58232E] transition-colors mt-1"
                      >
                        Confirm Attendance
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'gift' && (
                <motion.div
                  key="gift"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="space-y-2.5"
                >
                  <div className="text-center">
                    <Gift className="w-4 h-4 text-[#6E2C3A] mx-auto mb-0.5" />
                    <h5 className="font-serif text-sm font-medium">Digital Wedding Gift</h5>
                    <p className="text-[8px] text-[#625D59]">Your blessing means everything to us</p>
                  </div>

                  <div className="bg-[#EFE9E0] p-2.5 rounded-xl border border-[#D8D0C5] space-y-1.5 text-center">
                    <span className="text-[8px] text-[#625D59] uppercase tracking-wider font-semibold">Bank BCA</span>
                    <p className="font-serif text-xs font-bold text-[#242326]">8830 1928 44</p>
                    <p className="text-[8px] text-[#625D59]">a.n. Raden &amp; Alyssa</p>
                    <button
                      onClick={handleCopyBank}
                      className="w-full py-1 bg-[#242326] text-[#F7F3EC] rounded-md text-[8px] font-medium hover:bg-[#6E2C3A] transition-colors"
                    >
                      {copiedBank ? 'Account Copied ✓' : 'Copy Account Number'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Home Indicator */}
        <div className="h-4 w-full flex items-center justify-center bg-[#F7F3EC] z-20">
          <div className="w-20 h-1 bg-[#242326]/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
