/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  USER_INFO, 
  SOCIAL_PROFILES 
} from './data/profiles';
import { FloralBackground } from './components/FloralBackground';
import { SocialCard } from './components/SocialCard';
import { PictureSection } from './components/PictureSection';
import { 
  LinkedInIcon, 
  InstagramIcon, 
  TikTokIcon, 
  FacebookIcon,
  WhatsAppIcon,
  SnapchatIcon,
  LavenderSprigIcon
} from './components/SocialIcons';
import { 
  Award
} from 'lucide-react';

export default function App() {
  const currentPhoto = USER_INFO.defaultPortrait;

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
          {/* Section Title */}
          <div className="pb-3 border-b border-purple-200/60">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 uppercase tracking-wider mb-1">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Connect & Follow Michelle</span>
            </div>
            <h2 id="social-channels-heading" className="text-2xl sm:text-3xl font-serif-elegant font-bold text-slate-900 tracking-tight">
              Official Social Profiles
            </h2>
            <p className="text-xs sm:text-sm text-purple-900/70 mt-0.5">
              Tap any profile below to connect and follow Michelle across all 6 verified channels.
            </p>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {SOCIAL_PROFILES.map((profile, index) => (
              <SocialCard
                key={profile.id}
                profile={profile}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* 5. FOOTER */}
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

          {/* Sits at the very bottom right of the page */}
          <div className="flex justify-end pt-3 sm:pt-4 pr-1 sm:pr-2">
            <span 
              className="font-signature text-2xl sm:text-3xl text-purple-900/40 select-none tracking-wide hover:text-purple-900/70 transition-colors"
              title="~Tracy"
            >
              ~Tracy
            </span>
          </div>
        </footer>

      </div>

      {/* Mobile Sticky Bottom Quick-Access Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-purple-200/90 px-2 py-2 shadow-lg flex items-center justify-around overflow-x-auto">
        {SOCIAL_PROFILES.map((p) => {
          const renderBottomIcon = () => {
            switch (p.iconName) {
              case 'whatsapp':
                return <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />;
              case 'tiktok':
                return <TikTokIcon className="w-5 h-5 text-slate-900" />;
              case 'snapchat':
                return (
                  <div className="w-5 h-5 rounded-md bg-[#FFFC00] flex items-center justify-center shadow-2xs border border-yellow-300">
                    <SnapchatIcon className="w-3.5 h-3.5 text-black" />
                  </div>
                );
              case 'linkedin':
                return <LinkedInIcon className="w-5 h-5 text-[#0A66C2]" />;
              case 'instagram':
                return <InstagramIcon className="w-5 h-5 text-[#E1306C]" />;
              case 'facebook':
                return <FacebookIcon className="w-5 h-5 text-[#1877F2]" />;
              default:
                return null;
            }
          };

          return (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-0.5 px-1 py-0.5 focus:outline-none min-w-[46px]"
              aria-label={`Open ${p.name}`}
            >
              {renderBottomIcon()}
              <span className="text-[9px] font-medium text-slate-700 truncate max-w-[48px]">
                {p.id === 'snapchat' ? 'Snap' : p.id === 'instagram' ? 'IG' : p.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
