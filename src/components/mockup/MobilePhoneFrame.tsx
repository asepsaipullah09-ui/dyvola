'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, MapPin, Calendar, Gift, Music, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
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
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] aspect-[9/18.5] bg-[#242326] rounded-[42px] p-3 shadow-2xl border-4 border-[#D8D0C5]/40 select-none">
      {/* Outer Phone Shell Notch & Speaker */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-[#242326] rounded-b-2xl z-30 flex items-center justify-center gap-2">
        <div className="w-12 h-1.5 bg-[#625D59]/40 rounded-full" />
        <div className="w-2.5 h-2.5 bg-[#151417] rounded-full border border-[#625D59]/30" />
      </div>

      {/* Screen Viewport */}
      <div className="relative w-full h-full bg-[#F7F3EC] rounded-[32px] overflow-hidden flex flex-col font-sans border border-[#D8D0C5]/50 text-[#242326]">
        {/* Status Bar */}
        <div className="pt-2 px-6 pb-1 flex justify-between items-center text-[10px] text-[#625D59] font-medium z-20">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-3.5 h-2 border border-[#625D59] rounded-sm relative p-0.5">
              <div className="w-full h-full bg-[#625D59]" />
            </div>
          </div>
        </div>

        {/* Floating Music Audio Player Badge */}
        <div className="absolute top-9 right-3 z-30">
          <button
            onClick={() => setMusicPlaying(!musicPlaying)}
            className={`flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full shadow-md backdrop-blur-md transition-all ${
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
        <div className="flex-1 overflow-y-auto no-scrollbar pb-14 text-left">
          {/* Header Banner */}
          <div className="relative h-56 w-full">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
              alt="Raden & Alyssa"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242326]/90 via-[#242326]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-center text-[#F7F3EC]">
              <span className="text-[10px] tracking-[0.25em] uppercase font-light text-[#EFE9E0]">
                The Wedding Of
              </span>
              <h4 className="font-serif text-2xl font-normal leading-tight text-[#F7F3EC]">
                Raden &amp; Alyssa
              </h4>
              <p className="text-[10px] text-[#EFE9E0]/80 font-light mt-0.5">
                Saturday, 24 October 2026
              </p>
            </div>
          </div>

          {/* Tab Navigation Pill Inside Viewport */}
          <div className="px-3 py-2 bg-[#EFE9E0]/70 backdrop-blur border-b border-[#D8D0C5]/40 flex justify-between gap-1 text-[10px] sticky top-0 z-10">
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
          <div className="p-4 space-y-4 text-xs text-[#242326]">
            <AnimatePresence mode="wait">
              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="space-y-3"
                >
                  <div className="text-center space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#6E2C3A] font-semibold">
                      Our Journey
                    </span>
                    <h5 className="font-serif text-lg font-medium text-[#242326]">
                      &ldquo;Two Hearts, One Chapter&rdquo;
                    </h5>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#625D59] text-center italic">
                    &ldquo;From a quiet coffee shop conversation to promising a lifetime together. We invite you to celebrate our new beginning.&rdquo;
                  </p>
                  
                  {/* Countdown Badge */}
                  <div className="bg-[#EFE9E0] p-3 rounded-xl border border-[#D8D0C5] text-center space-y-1">
                    <div className="text-[9px] text-[#625D59] font-medium uppercase tracking-wider">
                      Countdown to Celebration
                    </div>
                    <div className="flex justify-center gap-3 text-center">
                      <div>
                        <span className="font-serif text-base font-bold text-[#6E2C3A]">35</span>
                        <div className="text-[8px] text-[#625D59]">Days</div>
                      </div>
                      <span className="font-serif text-base text-[#D8D0C5]">:</span>
                      <div>
                        <span className="font-serif text-base font-bold text-[#6E2C3A]">14</span>
                        <div className="text-[8px] text-[#625D59]">Hours</div>
                      </div>
                      <span className="font-serif text-base text-[#D8D0C5]">:</span>
                      <div>
                        <span className="font-serif text-base font-bold text-[#6E2C3A]">28</span>
                        <div className="text-[8px] text-[#625D59]">Mins</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="space-y-2"
                >
                  <div className="text-center mb-2">
                    <h5 className="font-serif text-base font-medium">Pre-Wedding Gallery</h5>
                    <p className="text-[9px] text-[#625D59]">Moments captured in Kyoto & Bali</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="relative h-24 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80"
                        alt="Gallery 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-24 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80"
                        alt="Gallery 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-24 col-span-2 rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80"
                        alt="Gallery 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'event' && (
                <motion.div
                  key="event"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="space-y-3"
                >
                  <div className="bg-[#EFE9E0] p-3 rounded-xl border border-[#D8D0C5] space-y-2">
                    <div className="flex items-center gap-2 text-[#6E2C3A]">
                      <Calendar className="w-4 h-4" />
                      <span className="font-serif font-medium text-sm">Akad Nikah</span>
                    </div>
                    <p className="text-[10px] text-[#625D59]">08:00 – 10:00 WIB</p>
                    <p className="text-[10px] text-[#242326] font-medium">The Glass House, Plataran Hutan Kota, Jakarta</p>
                  </div>

                  <div className="bg-[#EFE9E0] p-3 rounded-xl border border-[#D8D0C5] space-y-2">
                    <div className="flex items-center gap-2 text-[#6E2C3A]">
                      <Heart className="w-4 h-4" />
                      <span className="font-serif font-medium text-sm">Wedding Reception</span>
                    </div>
                    <p className="text-[10px] text-[#625D59]">11:00 – 14:00 WIB</p>
                    <p className="text-[10px] text-[#242326] font-medium">Grand Ballroom Plataran</p>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 bg-[#242326] text-[#F7F3EC] rounded-lg text-[10px] font-medium hover:bg-[#6E2C3A] transition-colors"
                  >
                    <MapPin className="w-3 h-3" />
                    Open Google Maps
                  </a>
                </motion.div>
              )}

              {activeTab === 'rsvp' && (
                <motion.div
                  key="rsvp"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="space-y-3"
                >
                  <div className="text-center">
                    <h5 className="font-serif text-base font-medium">RSVP Confirmation</h5>
                    <p className="text-[9px] text-[#625D59]">Kindly confirm your attendance</p>
                  </div>

                  {rsvpSubmitted ? (
                    <div className="bg-[#EFE9E0] p-4 rounded-xl border border-[#6E2C3A]/30 text-center space-y-2">
                      <CheckCircle2 className="w-6 h-6 text-[#6E2C3A] mx-auto" />
                      <p className="text-[11px] font-medium text-[#6E2C3A]">Thank you for confirming!</p>
                      <p className="text-[9px] text-[#625D59]">We look forward to celebrating with you.</p>
                      <button
                        onClick={() => setRsvpSubmitted(false)}
                        className="text-[9px] underline text-[#625D59] hover:text-[#6E2C3A]"
                      >
                        Edit RSVP
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2 text-[10px]">
                      <div>
                        <label className="block text-[#625D59] mb-0.5">Your Name</label>
                        <input
                          type="text"
                          defaultValue="Ananda Putri"
                          className="w-full px-2.5 py-1.5 rounded-lg border border-[#D8D0C5] bg-[#F7F3EC] focus:outline-none focus:border-[#6E2C3A]"
                        />
                      </div>
                      <div>
                        <label className="block text-[#625D59] mb-0.5">Number of Guests</label>
                        <select
                          value={guestCount}
                          onChange={(e) => setGuestCount(Number(e.target.value))}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-[#D8D0C5] bg-[#F7F3EC] focus:outline-none focus:border-[#6E2C3A]"
                        >
                          <option value={1}>1 Guest</option>
                          <option value={2}>2 Guests</option>
                          <option value={3}>3 Guests</option>
                        </select>
                      </div>
                      <button
                        onClick={() => setRsvpSubmitted(true)}
                        className="w-full py-2 bg-[#6E2C3A] text-[#F7F3EC] rounded-lg font-medium shadow-sm hover:bg-[#58232E] transition-colors mt-1"
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
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="space-y-3"
                >
                  <div className="text-center">
                    <Gift className="w-5 h-5 text-[#6E2C3A] mx-auto mb-1" />
                    <h5 className="font-serif text-base font-medium">Digital Wedding Gift</h5>
                    <p className="text-[9px] text-[#625D59]">Your blessing means everything to us</p>
                  </div>

                  <div className="bg-[#EFE9E0] p-3 rounded-xl border border-[#D8D0C5] space-y-2 text-center">
                    <span className="text-[9px] text-[#625D59] uppercase tracking-wider font-semibold">Bank BCA</span>
                    <p className="font-serif text-sm font-bold text-[#242326]">8830 1928 44</p>
                    <p className="text-[9px] text-[#625D59]">a.n. Raden &amp; Alyssa</p>
                    <button
                      onClick={handleCopyBank}
                      className="w-full py-1.5 bg-[#242326] text-[#F7F3EC] rounded-md text-[9px] font-medium hover:bg-[#6E2C3A] transition-colors"
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
        <div className="h-5 w-full flex items-center justify-center bg-[#F7F3EC] z-20">
          <div className="w-24 h-1 bg-[#242326]/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
