import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    leaderboard: 'Leaderboard',
    community: 'Community',
    settings: 'Settings',
    profile: 'Profile',
    
    // Hero Section
    revolutionizing: '🌱 Revolutionizing Agriculture',
    farmquest: 'FarmQuest',
    tagline: 'Gamified Sustainable Agriculture Platform',
    heroDescription: 'Transform farming through AI-powered missions, community challenges, and real-world rewards. Join thousands of farmers building a sustainable future.',
    startJourney: 'Start Your Journey',
    viewLeaderboard: 'View Leaderboard',
    
    // Features
    aiMissions: 'AI-Powered Missions',
    aiMissionsDesc: 'Personalized challenges based on your land and crops',
    communityClans: 'Community Clans',
    communityClansDesc: 'Team up with fellow farmers for collective impact',
    realRewards: 'Real Rewards',
    realRewardsDesc: 'Earn discounts, subsidies, and premium marketplace access',
    
    // Dashboard
    welcomeBack: 'Welcome back, Farmer!',
    greenPoints: 'Green Points',
    activeMissions: 'Active Missions',
    completionRate: 'Completion Rate',
    clanRank: 'Clan Rank',
    achievements: 'Achievements',
    
    // Languages
    english: 'English',
    hindi: 'हिंदी',
    marathi: 'मराठी',
    selectLanguage: 'Select Language',
  },
  hi: {
    // Navigation
    home: 'होम',
    dashboard: 'डैशबोर्ड',
    leaderboard: 'लीडरबोर्ड',
    community: 'समुदाय',
    settings: 'सेटिंग्स',
    profile: 'प्रोफ़ाइल',
    
    // Hero Section
    revolutionizing: '🌱 कृषि में क्रांति',
    farmquest: 'फार्मक्वेस्ट',
    tagline: 'गेमिफाइड सस्टेनेबल एग्रीकल्चर प्लेटफॉर्म',
    heroDescription: 'AI-संचालित मिशन, सामुदायिक चुनौतियों और वास्तविक पुरस्कारों के माध्यम से खेती को बदलें। हजारों किसानों के साथ एक स्थायी भविष्य बनाने में शामिल हों।',
    startJourney: 'अपनी यात्रा शुरू करें',
    viewLeaderboard: 'लीडरबोर्ड देखें',
    
    // Features
    aiMissions: 'AI-संचालित मिशन',
    aiMissionsDesc: 'आपकी भूमि और फसलों के आधार पर व्यक्तिगत चुनौतियां',
    communityClans: 'सामुदायिक समूह',
    communityClansDesc: 'सामूहिक प्रभाव के लिए साथी किसानों के साथ मिलकर काम करें',
    realRewards: 'वास्तविक पुरस्कार',
    realRewardsDesc: 'छूट, सब्सिडी और प्रीमियम बाज़ार पहुंच अर्जित करें',
    
    // Dashboard
    welcomeBack: 'वापसी पर स्वागत है, किसान जी!',
    greenPoints: 'ग्रीन पॉइंट्स',
    activeMissions: 'सक्रिय मिशन',
    completionRate: 'पूर्णता दर',
    clanRank: 'समूह रैंक',
    achievements: 'उपलब्धियां',
    
    // Languages
    english: 'English',
    hindi: 'हिंदी',
    marathi: 'मराठी',
    selectLanguage: 'भाषा चुनें',
  },
  mr: {
    // Navigation
    home: 'मुख्यपृष्ठ',
    dashboard: 'डॅशबोर्ड',
    leaderboard: 'लीडरबोर्ड',
    community: 'समुदाय',
    settings: 'सेटिंग्ज',
    profile: 'प्रोफाइल',
    
    // Hero Section
    revolutionizing: '🌱 शेतीमध्ये क्रांती',
    farmquest: 'फार्मक्वेस्ट',
    tagline: 'गेमिफाइड शाश्वत कृषी प्लॅटफॉर्म',
    heroDescription: 'AI-चालित मिशन, सामुदायिक आव्हाने आणि वास्तविक बक्षिसांद्वारे शेतीचे रूपांतर करा। शाश्वत भविष्य बनवणाऱ्या हजारो शेतकऱ्यांमध्ये सामील व्हा.',
    startJourney: 'तुमचा प्रवास सुरू करा',
    viewLeaderboard: 'लीडरबोर्ड पहा',
    
    // Features
    aiMissions: 'AI-चालित मिशन',
    aiMissionsDesc: 'तुमच्या जमीन आणि पिकांवर आधारित वैयक्तिक आव्हाने',
    communityClans: 'सामुदायिक गट',
    communityClansDesc: 'सामूहिक प्रभावासाठी सहकारी शेतकऱ्यांसोबत काम करा',
    realRewards: 'वास्तविक बक्षिसे',
    realRewardsDesc: 'सूट, अनुदान आणि प्रीमियम मार्केट प्रवेश मिळवा',
    
    // Dashboard
    welcomeBack: 'परत आल्याबद्दल स्वागत, शेतकरी!',
    greenPoints: 'ग्रीन पॉइंट्स',
    activeMissions: 'सक्रिय मिशन',
    completionRate: 'पूर्णता दर',
    clanRank: 'गट रँक',
    achievements: 'उपलब्धी',
    
    // Languages
    english: 'English',
    hindi: 'हिंदी',
    marathi: 'मराठी',
    selectLanguage: 'भाषा निवडा',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};