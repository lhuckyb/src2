import React, { useState } from 'react';
import { SocialProfile } from '../data/profiles';
import { 
  LinkedInIcon, 
  InstagramIcon, 
  TikTokIcon, 
  FacebookIcon 
} from './SocialIcons';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Share2, 
  Sparkles 
} from 'lucide-react';

interface SocialCardProps {
  profile: SocialProfile;
  index: number;
}

export function SocialCard({ profile, index }: SocialCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(profile.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderIcon = () => {
    switch (profile.iconName) {
      case 'linkedin':
        return <LinkedInIcon className="w-6 h-6 text-[#0A66C2]" />;
      case 'instagram':
        return <InstagramIcon className="w-6 h-6 text-[#E1306C]" />;
      case 'tiktok':
        return <TikTokIcon className="w-6 h-6 text-[#000000]" />;
      case 'facebook':
        return <FacebookIcon className="w-6 h-6 text-[#1877F2]" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
    }
  };

  const getPlatformGlow = () => {
    switch (profile.iconName) {
      case 'linkedin':
        return 'group-hover:shadow-[0_12px_32px_rgba(10,102,194,0.18)] border-blue-100/80';
      case 'instagram':
        return 'group-hover:shadow-[0_12px_32px_rgba(225,48,108,0.18)] border-pink-100/80';
      case 'tiktok':
        return 'group-hover:shadow-[0_12px_32px_rgba(100,50,150,0.22)] border-purple-100/80';
      case 'facebook':
        return 'group-hover:shadow-[0_12px_32px_rgba(24,119,242,0.18)] border-indigo-100/80';
    }
  };

  const getButtonBg = () => {
    switch (profile.iconName) {
      case 'linkedin':
        return 'bg-[#0A66C2] hover:bg-[#084e96] text-white shadow-blue-200';
      case 'instagram':
        return 'bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white shadow-rose-200';
      case 'tiktok':
        return 'bg-slate-900 hover:bg-black text-white shadow-purple-200';
      case 'facebook':
        return 'bg-[#1877F2] hover:bg-[#1464cc] text-white shadow-indigo-200';
    }
  };

  return (
    <div
      className={`group relative rounded-2xl bg-white/90 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 ease-out border ${getPlatformGlow()} shadow-sm hover:-translate-y-1`}
    >
      {/* Decorative Lavender Top Accent Line */}
      <div className="absolute top-0 left-6 right-6 h-1 rounded-t-full bg-gradient-to-r from-purple-200 via-purple-300 to-pink-200 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left info: Icon & Profile details */}
        <div className="flex items-start gap-4">
          <div className="relative shrink-0 p-3 rounded-2xl bg-gradient-to-br from-[#F5F0FC] to-[#ECE3FA] border border-purple-200/60 shadow-inner group-hover:scale-105 transition-transform duration-300">
            {renderIcon()}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-slate-900 text-lg tracking-tight">
                {profile.name}
              </h3>
              <span className="text-xs text-purple-700/80 font-medium">
                · {profile.category}
              </span>
            </div>

            <p className="text-sm font-medium text-purple-950/80 tracking-normal flex items-center gap-1.5">
              <span>{profile.handle}</span>
            </p>

            <p className="text-xs text-slate-500 max-w-md pt-0.5 leading-relaxed">
              {profile.description}
            </p>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto pt-2 sm:pt-0 shrink-0">
          {/* Quick Copy Link Button */}
          <button
            onClick={handleCopyLink}
            type="button"
            title="Copy direct profile link"
            className="flex items-center justify-center h-11 w-11 rounded-xl bg-purple-50/80 hover:bg-purple-100/90 text-purple-800 border border-purple-200/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label={`Copy link for ${profile.name}`}
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600 animate-scale-in" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {/* Primary Direct Link Button */}
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl font-medium text-sm transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${getButtonBg()}`}
          >
            <span>{profile.buttonLabel}</span>
            <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Copy Notification Toastlet */}
      {copied && (
        <div className="absolute right-4 bottom-2 text-xs text-emerald-700 font-medium flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 animate-fade-in">
          <Check className="w-3 h-3" />
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}
