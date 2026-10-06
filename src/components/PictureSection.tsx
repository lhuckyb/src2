import React, { useState } from 'react';
import { 
  Maximize2, 
  Download, 
  X,
  Flower2
} from 'lucide-react';
import { USER_INFO } from '../data/profiles';

interface PictureSectionProps {
  currentPhoto: string;
}

export function PictureSection({ currentPhoto }: PictureSectionProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center max-w-sm sm:max-w-md mx-auto">
      {/* Featured Portrait Frame */}
      <div className="relative group w-full">
        
        {/* Lavender Floral Glow */}
        <div className="absolute -inset-2.5 rounded-[2.5rem] bg-gradient-to-tr from-purple-400 via-pink-300 to-indigo-300 opacity-40 blur-lg group-hover:opacity-65 transition duration-700" />

        {/* Picture Container Card */}
        <div className="relative rounded-[2rem] overflow-hidden bg-white p-2.5 sm:p-3 border-2 border-purple-200/90 shadow-xl shadow-purple-900/10">
          
          {/* The Picture */}
          <div 
            className="relative aspect-[3/4] w-full rounded-[1.5rem] overflow-hidden bg-purple-100 cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          >
            <img
              src={currentPhoto}
              alt="Michelle Dora Osae-Poku official portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle bottom vignette */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

            {/* Corner Decorative Flower */}
            <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-purple-100 pointer-events-none">
              <Flower2 className="w-4 h-4 text-purple-200" />
            </div>

            {/* Floating Fullscreen Action Button on Image */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white transition-all transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                title="View fullscreen"
                aria-label="View fullscreen photo"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-purple-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] w-full">
              <img
                src={currentPhoto}
                alt="Michelle Dora Osae-Poku fullscreen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 bg-white flex items-center justify-between gap-4">
              <div>
                <h4 className="font-serif-elegant text-xl font-bold text-slate-900">
                  {USER_INFO.fullName}
                </h4>
                <p className="text-xs text-purple-700 font-medium">
                  SRC Vice President · UPSA
                </p>
              </div>

              <a
                href={currentPhoto}
                download="michelle-dora-portrait.jpg"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Image</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
