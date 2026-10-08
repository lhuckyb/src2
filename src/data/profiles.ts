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
  followActionLabel: string;
  followBadge: string;
  accentColor: string;
  badgeBg: string;
  gradient: string;
  borderHover: string;
  iconName: 'whatsapp' | 'tiktok' | 'snapchat' | 'linkedin' | 'instagram' | 'facebook';
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
    id: "whatsapp",
    name: "WhatsApp",
    handle: "Michelle Dora Osae-Poku",
    url: "https://wa.me/message/4D5ZFTNK7NKVH1",
    rawUrl: "https://wa.me/message/4D5ZFTNK7NKVH1",
    displayUrl: "wa.me/message/4D5ZFTNK7NKVH1",
    category: "Direct Messaging",
    description: "Direct message Michelle on WhatsApp for official inquiries, executive scheduling, and student coordination.",
    buttonLabel: "+ Chat on WhatsApp",
    followActionLabel: "+ Chat with Me",
    followBadge: "Direct Message",
    accentColor: "#25D366",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    borderHover: "hover:border-emerald-400",
    iconName: "whatsapp",
    metricsLabel: "Direct Line",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@her_excellency74",
    url: "https://www.tiktok.com/@her_excellency74?_r=1&_t=ZS-98owdMuA2aW",
    rawUrl: "https://www.tiktok.com/@her_excellency74",
    displayUrl: "tiktok.com/@her_excellency74",
    category: "Creative Video & Trends",
    description: "Follow for campus highlights, student executive moments, and inspiring video trends.",
    buttonLabel: "+ Follow on TikTok",
    followActionLabel: "+ Follow Me",
    followBadge: "Short Videos",
    accentColor: "#000000",
    badgeBg: "bg-slate-100 text-slate-900 border-slate-300",
    gradient: "from-teal-400 via-slate-900 to-rose-500",
    borderHover: "hover:border-violet-500",
    iconName: "tiktok",
    metricsLabel: "Short Videos & Trends",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    handle: "@her_excellency74",
    url: "https://snapchat.com/t/9jZxank0",
    rawUrl: "https://snapchat.com/t/9jZxank0",
    displayUrl: "snapchat.com/t/9jZxank0",
    category: "Daily Snaps & Stories",
    description: "Add on Snapchat for candid behind-the-scenes moments, daily student leadership snaps, and quick updates.",
    buttonLabel: "+ Add on Snap",
    followActionLabel: "+ Add on Snap",
    followBadge: "Daily Snaps",
    accentColor: "#FFFC00",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
    gradient: "from-yellow-400 via-amber-400 to-yellow-500",
    borderHover: "hover:border-yellow-400",
    iconName: "snapchat",
    metricsLabel: "Behind the Scenes",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Michelle Dora Osae-Poku",
    url: "https://www.linkedin.com/in/michelle-dora-osae-poku-09a9912bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    rawUrl: "https://www.linkedin.com/in/michelle-dora-osae-poku-09a9912bb",
    displayUrl: "linkedin.com/in/michelle-dora-osae-poku",
    category: "Professional Network",
    description: "Connect to follow student leadership initiatives, corporate insights, and executive milestones.",
    buttonLabel: "Connect with Me",
    followActionLabel: "+ Connect with Me",
    followBadge: "Executive Network",
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
    description: "Follow for exclusive daily lifestyle moments, campus leadership reels, and stories.",
    buttonLabel: "+ Follow on Instagram",
    followActionLabel: "+ Follow Me",
    followBadge: "Official Account",
    accentColor: "#E1306C",
    badgeBg: "bg-pink-50 text-pink-700 border-pink-200",
    gradient: "from-amber-500 via-rose-500 to-purple-600",
    borderHover: "hover:border-rose-400",
    iconName: "instagram",
    metricsLabel: "Daily Stories & Reels",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "Michelle Dora Osae-Poku",
    url: "https://www.facebook.com/share/1BsyV4mGWc/?mibextid=wwXIfr",
    rawUrl: "https://www.facebook.com/share/1BsyV4mGWc/",
    displayUrl: "facebook.com/michelledora",
    category: "Community & Updates",
    description: "Follow for official university announcements, student community updates, and engagements.",
    buttonLabel: "+ Follow on Facebook",
    followActionLabel: "+ Follow Me",
    followBadge: "Campus Community",
    accentColor: "#1877F2",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    borderHover: "hover:border-indigo-400",
    iconName: "facebook",
    metricsLabel: "Community & Friends",
  },
];
