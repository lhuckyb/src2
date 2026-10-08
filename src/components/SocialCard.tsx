import React, { useState } from 'react';
import { SocialProfile } from '../data/profiles';
import { 
  LinkedInIcon, 
  InstagramIcon, 
  TikTokIcon, 
  FacebookIcon,
  WhatsAppIcon,
  SnapchatIcon
} from './SocialIcons';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  UserPlus, 
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

interface SocialCardProps {
  profile: SocialProfile;
  index: number;
}

export function SocialCard({ profile, index }: SocialCardProps) {
  const [copied, setCopied] = useState(false);
  const [justClickedFollow, setJustClickedFollow] = useState(false);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(profile.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleFollowClick = () => {
    setJustClickedFollow(true);
    setTimeout(() => setJustClickedFollow(false), 3500);
  };

  const renderIcon = () => {
    switch (profile.iconName) {
      case 'whatsapp':
        return <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />;
      case 'tiktok':
        return <TikTokIcon className="w-6 h-6 text-slate-900" />;
      case 'snapchat':
        return (
          <div className="w-6 h-6 rounded-md bg-[#FFFC00] flex items-center justify-center p-0.5 shadow-2xs border border-yellow-300">
            <SnapchatIcon className="w-4.5 h-4.5 text-black" />
          </div>
        );
      case 'linkedin':
        return <LinkedInIcon className="w-6 h-6 text-[#0A66C2]" />;
      case 'instagram':
        return <InstagramIcon className="w-6 h-6 text-[#E1306C]" />;
      case 'facebook':
        return <FacebookIcon className="w-6 h-6 text-[#1877F2]" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
    }
  };

  const getPlatformGlow = () => {
    switch (profile.iconName) {
      case 'whatsapp':
        return 'hover:border-emerald-300 hover:shadow-[0_12px_36px_rgba(37,211,102,0.18)]';
      case 'tiktok':
        return 'hover:border-purple-300 hover:shadow-[0_12px_36px_rgba(30,10,50,0.18)]';
      case 'snapchat':
        return 'hover:border-amber-300 hover:shadow-[0_12px_36px_rgba(255,220,0,0.22)]';
      case 'linkedin':
        return 'hover:border-blue-300 hover:shadow-[0_12px_36px_rgba(10,102,194,0.16)]';
      case 'instagram':
        return 'hover:border-pink-300 hover:shadow-[0_12px_36px_rgba(225,48,108,0.18)]';
      case 'facebook':
        return 'hover:border-indigo-300 hover:shadow-[0_12px_36px_rgba(24,119,242,0.16)]';
      default:
        return 'hover:border-purple-300';
    }
  };

  const getButtonBg = () => {
    switch (profile.iconName) {
      case 'whatsapp':
        return 'bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white shadow-md shadow-emerald-600/25 ring-emerald-300/30';
      case 'tiktok':
        return 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 hover:bg-black text-white shadow-md shadow-black/25 ring-purple-300/30 border border-slate-700/40';
      case 'snapchat':
        return 'bg-gradient-to-r from-[#FFFC00] via-[#FFEB3B] to-[#FDD835] hover:brightness-95 text-slate-950 font-extrabold shadow-md shadow-amber-400/30 ring-amber-300/30 border border-yellow-300';
      case 'linkedin':
        return 'bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#0957a5] hover:to-[#006296] text-white shadow-md shadow-blue-600/25 ring-blue-300/30';
      case 'instagram':
        return 'bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-95 text-white shadow-md shadow-pink-600/25 ring-pink-300/30';
      case 'facebook':
        return 'bg-gradient-to-r from-[#1877F2] to-[#0C63D4] hover:from-[#1464cc] hover:to-[#0a52b2] text-white shadow-md shadow-indigo-600/25 ring-indigo-300/30';
      default:
        return 'bg-purple-600 text-white';
    }
  };

  const getTagBadge = () => {
    switch (profile.iconName) {
      case 'whatsapp':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
      case 'tiktok':
        return 'bg-purple-50 text-purple-900 border-purple-200/80';
      case 'snapchat':
        return 'bg-amber-50 text-amber-900 border-amber-200/80';
      case 'linkedin':
        return 'bg-blue-50 text-blue-800 border-blue-200/80';
      case 'instagram':
        return 'bg-pink-50 text-pink-800 border-pink-200/80';
      case 'facebook':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200/80';
      default:
        return 'bg-purple-50 text-purple-800 border-purple-200';
    }
  };

  return (
    <div
      className={`group relative rounded-3xl bg-white/95 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 ease-out border border-purple-100 shadow-sm ${getPlatformGlow()} hover:-translate-y-1`}
    >
      {/* Top Accent Gradient Bar */}
      <div 
        className={`absolute top-0 left-8 right-8 h-1 rounded-t-full bg-gradient-to-r ${profile.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} 
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left Side: Avatar/Icon + Account Details */}
        <div className="flex items-start gap-4">
          <div className="relative shrink-0 p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF7FD] to-[#F1E8FC] border border-purple-200/70 shadow-xs group-hover:scale-105 transition-transform duration-300">
            {renderIcon()}
            {/* Active notification indicator */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600" />
            </span>
          </div>

          <div className="space-y-1.5 min-w-0">
            {/* Platform name & Verified Cue */}
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif-elegant text-xl font-bold text-slate-900 tracking-tight">
                {profile.name}
              </h3>
              
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-purple-600 shrink-0" />
                <span className="text-purple-800">Verified</span>
              </div>

              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${getTagBadge()}`}>
                {profile.followBadge}
              </span>
            </div>

            {/* Handle & Sub-cue */}
            <p className="text-xs sm:text-sm font-semibold text-purple-950/90 tracking-tight">
              {profile.handle}
            </p>

            {/* Psychological Reason to Follow */}
            <p className="text-xs text-slate-600 max-w-lg leading-relaxed pt-0.5">
              {profile.description}
            </p>
          </div>
        </div>

        {/* Right Side: Psychological Follow Me CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 pt-2 md:pt-0">
          {/* Quick Copy Link Utility */}
          <button
            onClick={handleCopyLink}
            type="button"
            title="Copy direct profile link"
            className="hidden sm:flex items-center justify-center h-12 w-12 rounded-2xl bg-purple-50/80 hover:bg-purple-100 text-purple-800 border border-purple-200/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 shrink-0"
            aria-label={`Copy link for ${profile.name}`}
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {/* Primary High-Intent "Follow Me" Button */}
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFollowClick}
            className={`group/btn relative inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 ring-2 ring-transparent active:scale-[0.98] ${getButtonBg()}`}
            title={`Tap to follow Michelle on ${profile.name}`}
          >
            <UserPlus className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover/btn:scale-110" />
            <span>{profile.followActionLabel}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 opacity-80 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Psychological Follow Intent Feedback Toast */}
      {justClickedFollow && (
        <div className="mt-3 p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 font-medium flex items-center justify-between gap-2 animate-fade-in">
          <span className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Opening {profile.name} — Remember to tap <strong>Follow</strong> on her profile!
          </span>
          <ExternalLink className="w-3.5 h-3.5 text-purple-600 shrink-0" />
        </div>
      )}

      {/* Copy Notification Toast */}
      {copied && (
        <div className="mt-2 text-xs text-emerald-700 font-medium flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 animate-fade-in">
          <Check className="w-3.5 h-3.5" />
          Direct profile link copied to clipboard!
        </div>
      )}
    </div>
  );
}
