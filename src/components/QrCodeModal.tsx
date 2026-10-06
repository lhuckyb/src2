import React, { useState } from 'react';
import { X, Download, Share2, Copy, Check, ExternalLink } from 'lucide-react';
import { SOCIAL_PROFILES, USER_INFO } from '../data/profiles';
import { LavenderSprigIcon } from './SocialIcons';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QrCodeModal({ isOpen, onClose }: QrCodeModalProps) {
  const [selectedTarget, setSelectedTarget] = useState<'all' | string>('all');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getTargetUrl = () => {
    if (selectedTarget === 'all') {
      return window.location.href;
    }
    const profile = SOCIAL_PROFILES.find(p => p.id === selectedTarget);
    return profile ? profile.url : window.location.href;
  };

  const getTargetTitle = () => {
    if (selectedTarget === 'all') {
      return 'Official Social Hub';
    }
    const profile = SOCIAL_PROFILES.find(p => p.id === selectedTarget);
    return profile ? profile.name : 'Social Hub';
  };

  const currentUrl = getTargetUrl();
  // Safe QR API URL for crisp SVG/PNG rendering
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&color=4a287a&bgcolor=fbf9fe&margin=1&data=${encodeURIComponent(currentUrl)}`;

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-sm w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-purple-200 text-center space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-purple-50 transition-colors"
          aria-label="Close QR modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Floral Header */}
        <div className="flex items-center justify-center gap-1.5 text-purple-700 text-xs font-semibold uppercase tracking-wider">
          <LavenderSprigIcon className="w-4 h-4" />
          <span>Quick Scan & Connect</span>
        </div>

        <h3 className="text-xl font-serif-elegant font-bold text-slate-900">
          Scan with Mobile Camera
        </h3>

        <p className="text-xs text-slate-600">
          Point your phone camera at the QR code to instantly open {getTargetTitle()}.
        </p>

        {/* Platform Selector Tabs */}
        <div className="flex items-center justify-center gap-1 p-1 bg-purple-50/80 rounded-xl border border-purple-200/60 text-xs overflow-x-auto">
          <button
            onClick={() => setSelectedTarget('all')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
              selectedTarget === 'all'
                ? 'bg-purple-700 text-white shadow-sm'
                : 'text-purple-900 hover:bg-purple-100/70'
            }`}
          >
            All Links
          </button>
          {SOCIAL_PROFILES.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedTarget(p.id)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedTarget === p.id
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-purple-900 hover:bg-purple-100/70'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* QR Code Frame */}
        <div className="relative mx-auto w-64 h-64 p-3 rounded-2xl bg-gradient-to-b from-purple-50 to-[#F9F5FD] border-2 border-purple-200/90 shadow-inner flex items-center justify-center">
          <img
            src={qrImageUrl}
            alt={`QR code for ${getTargetTitle()}`}
            className="w-full h-full object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />

          {/* Central Logo Stamp */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-white border-2 border-purple-400 flex items-center justify-center shadow-md">
              <span className="font-serif-elegant font-bold text-purple-900 text-sm">
                MD
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={handleCopyUrl}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-semibold transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <a
            href={qrImageUrl}
            download={`michelle-dora-${selectedTarget}-qr.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold shadow-md transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save QR</span>
          </a>
        </div>
      </div>
    </div>
  );
}
