import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function LinkedInIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.46 1.46 0 0 0-1.45-1.45 1.46 1.46 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45m1.37 9.74v-8.37H5.09v8.37h2.74z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function TikTokIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.54c0 1.8-.46 3.66-1.45 5.17-1.39 2.1-3.79 3.42-6.33 3.42-2.32 0-4.57-1.09-6-2.92-1.77-2.23-2.22-5.32-1.13-7.98 1.14-2.8 3.86-4.66 6.88-4.71.6 0 1.19.06 1.78.18v4.18c-.46-.14-.94-.22-1.42-.2-1.57.06-3.04.99-3.73 2.39-.77 1.56-.47 3.51.72 4.75 1.05 1.09 2.75 1.48 4.2.97 1.25-.43 2.08-1.61 2.15-2.94V.02z" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-6 h-6", size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function LavenderSprigIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M32 58C32 40 33 24 35 6"
        stroke="#7A9A80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M32 48C28 46 22 47 20 49C24 51 28 50 32 48Z"
        fill="#8FAF95"
      />
      <path
        d="M33 42C37 40 43 41 45 43C41 45 37 44 33 42Z"
        fill="#8FAF95"
      />
      <path
        d="M32.5 34C28 32 23 33 21 35C25 37 29 36 32.5 34Z"
        fill="#8FAF95"
      />
      <path
        d="M33.5 28C38 26 43 27 45 29C41 31 37 30 33.5 28Z"
        fill="#8FAF95"
      />
      {/* Lavender florets */}
      <circle cx="34" cy="22" r="3.5" fill="#A881D8" />
      <circle cx="37" cy="19" r="3" fill="#BFA2E6" />
      <circle cx="31" cy="18" r="3.2" fill="#9565C8" />
      <circle cx="35" cy="14" r="3.2" fill="#A881D8" />
      <circle cx="38" cy="12" r="2.8" fill="#BFA2E6" />
      <circle cx="32" cy="11" r="2.8" fill="#9565C8" />
      <circle cx="35" cy="7" r="2.5" fill="#804EB6" />
    </svg>
  );
}

export function FlowerPetalOrnament({ className = "w-8 h-8 text-purple-400" }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 3C22 10 26 14 33 16C26 18 22 22 20 29C18 22 14 18 7 16C14 14 18 10 20 3Z" opacity="0.85" />
      <circle cx="20" cy="16" r="2" fill="#FFF" />
    </svg>
  );
}
