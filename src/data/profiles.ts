import portraitImage from '../assets/images/michelle_dora_official.jpg';
import bannerImage from '../assets/images/floral_banner_1791302136350.jpg';
import gardenImage from '../assets/images/lavender_garden_1791302147857.jpg';

export interface SocialProfile {
  id: string;
  name: string;
  handle: string;
  url: string;
  rawUrl: string;
  displayUrl: string;
  category: string;
  description: string;
  buttonLabel: string;
  accentColor: string;
  badgeBg: string;
  gradient: string;
  borderHover: string;
  iconName: 'linkedin' | 'instagram' | 'tiktok' | 'facebook';
  metricsLabel?: string;
}

export const USER_INFO = {
  fullName: "Michelle Dora Osae-Poku",
  title: "SRC Vice President",
  office: "SRC Vice President · UPSA",
  university: "University of Professional Studies, Accra",
  subtitle: "Leader · Student Executive · Creative Strategist",
  bio: "Welcome to my official digital hub. Connecting student leadership, corporate vision, and community across professional milestones and creative storytelling.",
  location: "Accra, Ghana · Global & Connected",
  email: "connect@michelledora.com",
  defaultPortrait: portraitImage,
  bannerImage: bannerImage,
  gardenImage: gardenImage,
};

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Michelle Dora Osae-Poku",
    url: "https://www.linkedin.com/in/michelle-dora-osae-poku-09a9912bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    rawUrl: "https://www.linkedin.com/in/michelle-dora-osae-poku-09a9912bb",
    displayUrl: "linkedin.com/in/michelle-dora-osae-poku",
    category: "Professional Network",
    description: "Career insights, industry leadership, achievements, and corporate networking.",
    buttonLabel: "Connect on LinkedIn",
    accentColor: "#0A66C2",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    borderHover: "hover:border-blue-400",
    iconName: "linkedin",
    metricsLabel: "Professional Profile",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@her_excellency74",
    url: "https://www.instagram.com/her_excellency74?igsh=OW90cnBtMGsza3hm&utm_source=qr",
    rawUrl: "https://www.instagram.com/her_excellency74",
    displayUrl: "instagram.com/her_excellency74",
    category: "Visual Stories & Lifestyle",
    description: "Curated lifestyle moments, fashion, travel reels, and daily inspiration.",
    buttonLabel: "Follow on Instagram",
    accentColor: "#E1306C",
    badgeBg: "bg-pink-50 text-pink-700 border-pink-200",
    gradient: "from-amber-500 via-rose-500 to-purple-600",
    borderHover: "hover:border-rose-400",
    iconName: "instagram",
    metricsLabel: "Daily Stories & Reels",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@her_excellency74",
    url: "https://www.tiktok.com/@her_excellency74?_r=1&_t=ZS-98owdMuA2aW",
    rawUrl: "https://www.tiktok.com/@her_excellency74",
    displayUrl: "tiktok.com/@her_excellency74",
    category: "Creative Video & Trends",
    description: "Engaging short-form videos, trending lifestyle content, and creative highlights.",
    buttonLabel: "Watch on TikTok",
    accentColor: "#000000",
    badgeBg: "bg-slate-100 text-slate-900 border-slate-300",
    gradient: "from-teal-400 via-slate-900 to-rose-500",
    borderHover: "hover:border-violet-500",
    iconName: "tiktok",
    metricsLabel: "Short Videos & Trends",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "Michelle Dora Osae-Poku",
    url: "https://www.facebook.com/share/1BsyV4mGWc/?mibextid=wwXIfr",
    rawUrl: "https://www.facebook.com/share/1BsyV4mGWc/",
    displayUrl: "facebook.com/michelledora",
    category: "Community & Updates",
    description: "Personal thoughts, community discussions, family milestones, and public shares.",
    buttonLabel: "Join on Facebook",
    accentColor: "#1877F2",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    borderHover: "hover:border-indigo-400",
    iconName: "facebook",
    metricsLabel: "Community & Friends",
  },
];
