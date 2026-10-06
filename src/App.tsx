/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  USER_INFO, 
  SOCIAL_PROFILES 
} from './data/profiles';
import { FloralBackground } from './components/FloralBackground';
import { SocialCard } from './components/SocialCard';
import { PictureSection } from './components/PictureSection';
import { QrCodeModal } from './components/QrCodeModal';
import { 
  LinkedInIcon, 
  InstagramIcon, 
  TikTokIcon, 
  FacebookIcon, 
  LavenderSprigIcon,
  FlowerPetalOrnament
} from './components/SocialIcons';
import { 
  Sparkles, 
  ExternalLink, 
  Award
} from 'lucide-react';

export default function App() {
  const currentPhoto = USER_INFO.defaultPortrait;
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isQrOpen, setIsQrOpen] = useState(false);

  const filteredProfiles = activeFilter === 'all'
    ? SOCIAL_PROFILES
    : SOCIAL_PROFILES.filter(p => p.id === activeFilter);

  return (
    <div className="relative min-h-screen text-[#311E43] font-sans antialiased selection:bg-purple-200 selection:text-purple-900 pb-24 sm:pb-16">
      {/* Delicate Floral Background Wash & Animated Petals */}
      <FloralBackground />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        
        {/* 1. NAME ON TOP OF THE IMAGE */}
        <header className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-elegant font-bold bg-gradient-to-r from-[#7B4BAE] via-[#955FD4] to-[#7B4BAE] bg-clip-text text-transparent tracking-tight leading-tight drop-shadow-xs">
            {USER_INFO.fullName}
          </h1>
        </header>

        {/* 2. FEATURED PORTRAIT IMAGE */}
        <div className="mb-6 sm:mb-8 text-center">
          <PictureSection currentPhoto={currentPhoto} />
        </div>

        {/* 3. UNDER THE IMAGE: COOL UPSA SRC TAG */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex flex-col items-center justify-center gap-1.5 pt-1">
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-purple-100/90 via-white to-indigo-100/90 border-2 border-purple-300/80 shadow-md shadow-purple-950/5 text-purple-950 group hover:border-purple-400 transition-colors">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <Award className="w-4 h-4 text-purple-700 shrink-0" />
              <span className="font-bold text-sm sm:text-base tracking-tight text-purple-950">
                SRC Vice President · UPSA
              </span>
              <span className="hidden sm:inline text-xs text-purple-700 font-medium border-l border-purple-200 pl-2.5">
                University of Professional Studies, Accra
              </span>
            </div>
            <span className="sm:hidden text-xs text-purple-700 font-medium">
              University of Professional Studies, Accra
            </span>
          </div>
        </div>

        {/* 4. SOCIAL MEDIA HUB PROFILES & DIRECT LINK BUTTONS */}
        <section className="space-y-6 mb-12 sm:mb-16" aria-labelledby="social-channels-heading">
          {/* Section Title & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-purple-200/60">
            <div>
              <h2 id="social-channels-heading" className="text-2xl sm:text-3xl font-serif-elegant font-bold text-slate-900 tracking-tight">
                Official Social Profiles
              </h2>
              <p className="text-xs sm:text-sm text-purple-900/70 mt-0.5">
                Direct access to Michelle's 4 verified accounts across networks.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Segmented Filter Control */}
              <div className="flex items-center gap-1 p-1 bg-purple-100/60 rounded-xl border border-purple-200/60 text-xs">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    activeFilter === 'all'
                      ? 'bg-white text-purple-900 shadow-xs'
                      : 'text-purple-700 hover:text-purple-950'
                  }`}
                >
                  All ({SOCIAL_PROFILES.length})
                </button>
                {SOCIAL_PROFILES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveFilter(p.id)}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      activeFilter === p.id
                        ? 'bg-white text-purple-900 shadow-xs'
                        : 'text-purple-700 hover:text-purple-950'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {filteredProfiles.map((profile, index) => (
              <SocialCard
                key={profile.id}
                profile={profile}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* 5. PILLARS & ENGAGEMENT CARDS */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-1.5 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-1">
              <FlowerPetalOrnament className="w-4 h-4 text-purple-400" />
              <span>Digital Presence Pillars</span>
              <FlowerPetalOrnament className="w-4 h-4 text-purple-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-elegant font-bold text-slate-900">
              Where to Connect for What
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Professional */}
            <div className="rounded-2xl bg-white/90 border border-purple-200/80 p-5 shadow-xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200/80">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-slate-900 text-base">
                Professional & Leadership
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect on LinkedIn for career initiatives, enterprise collaboration, professional milestones, and leadership panels.
              </p>
              <a
                href={SOCIAL_PROFILES[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors pt-1"
              >
                <span>Visit LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Card 2: Creative & Lifestyle */}
            <div className="rounded-2xl bg-white/90 border border-purple-200/80 p-5 shadow-xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-rose-600 flex items-center justify-center border border-pink-200/80">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-slate-900 text-base">
                Visual Stories & Reels
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experience daily aesthetic moments, fashion, travel, and inspiring reels via Instagram and TikTok (@her_excellency74).
              </p>
              <a
                href={SOCIAL_PROFILES[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-800 transition-colors pt-1"
              >
                <span>Visit Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Card 3: Community & Conversation */}
            <div className="rounded-2xl bg-white/90 border border-purple-200/80 p-5 shadow-xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200/80">
                <FacebookIcon className="w-5 h-5 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-slate-900 text-base">
                Community & Life
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Join our Facebook community for public reflections, shared celebrations, student initiatives, and heartfelt interactions.
              </p>
              <a
                href={SOCIAL_PROFILES[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors pt-1"
              >
                <span>Visit Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* 6. FOOTER */}
        <footer className="pt-8 pb-12 border-t border-purple-200/70 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-purple-700">
            <LavenderSprigIcon className="w-6 h-6" />
            <span className="font-serif-elegant font-bold text-lg text-purple-950">
              Michelle Dora Osae-Poku
            </span>
            <LavenderSprigIcon className="w-6 h-6 transform -scale-x-100" />
          </div>

          <div className="text-[11px] text-purple-900/50 pt-1">
            © {new Date().getFullYear()} Michelle Dora Osae-Poku · SRC Vice President, UPSA. All rights reserved.
          </div>
        </footer>

      </div>

      {/* Mobile Sticky Bottom Quick-Access Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-purple-200/90 px-4 py-2.5 shadow-lg flex items-center justify-around">
        <a
          href={SOCIAL_PROFILES[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-[#0A66C2] p-1.5 focus:outline-none"
          aria-label="Open LinkedIn"
        >
          <LinkedInIcon className="w-5 h-5" />
          <span className="text-[10px] font-medium text-slate-700">LinkedIn</span>
        </a>

        <a
          href={SOCIAL_PROFILES[1].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-[#E1306C] p-1.5 focus:outline-none"
          aria-label="Open Instagram"
        >
          <InstagramIcon className="w-5 h-5" />
          <span className="text-[10px] font-medium text-slate-700">Instagram</span>
        </a>

        <a
          href={SOCIAL_PROFILES[2].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-black p-1.5 focus:outline-none"
          aria-label="Open TikTok"
        >
          <TikTokIcon className="w-5 h-5" />
          <span className="text-[10px] font-medium text-slate-700">TikTok</span>
        </a>

        <a
          href={SOCIAL_PROFILES[3].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-[#1877F2] p-1.5 focus:outline-none"
          aria-label="Open Facebook"
        >
          <FacebookIcon className="w-5 h-5" />
          <span className="text-[10px] font-medium text-slate-700">Facebook</span>
        </a>

        <button
          onClick={() => setIsQrOpen(true)}
          className="flex flex-col items-center gap-0.5 text-purple-700 p-1.5 focus:outline-none"
          aria-label="Open QR code"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>
          <span className="text-[10px] font-medium text-slate-700">QR / Share</span>
        </button>
      </div>

      {/* Modals */}
      <QrCodeModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
      />
    </div>
  );
}
