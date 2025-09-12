import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'mr' | 'ml';

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
    quests: 'Quests',
    rewards: 'Rewards',
    
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
    yourProfile: 'Your Profile',
    viewProfile: 'View Profile',
    
    // Profile
    referEarn: 'Refer & Earn',
    referralSystem: 'Referral System',
    inviteFarmers: 'Invite farmers to join FarmQuest',
    pointsPerReferral: '500 points per referral',
    bonusPoints: '+ 100 bonus points for each friend\'s first quest completion',
    referralCode: 'Your Referral Code',
    friendsReferred: 'Friends Referred',
    pointsEarned: 'Points Earned',
    shareReferral: 'Share Referral Link',
    
    // Quests
    personalizedQuests: 'Personalized Quests',
    questsDescription: 'Tailored challenges based on your crops, location, and farm size',
    selectCrops: 'Select Your Crops',
    farmSize: 'Farm Size (in acres)',
    location: 'Location',
    updatePreferences: 'Update Preferences',
    startQuest: 'Start Quest',
    continueQuest: 'Continue Quest',
    questProgress: 'Quest Progress',
    timeRemaining: 'Time Remaining',
    questReward: 'Reward',
    difficulty: 'Difficulty',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    
    // Languages
    english: 'English',
    hindi: 'हिंदी',
    marathi: 'मराठी',
    malayalam: 'മലയാളം',
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
    quests: 'क्वेस्ट',
    rewards: 'पुरस्कार',
    
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
    yourProfile: 'आपकी प्रोफ़ाइल',
    viewProfile: 'प्रोफ़ाइल देखें',
    
    // Profile
    referEarn: 'रेफर करें और कमाएं',
    referralSystem: 'रेफरल सिस्टम',
    inviteFarmers: 'किसानों को फार्मक्वेस्ट में शामिल होने के लिए आमंत्रित करें',
    pointsPerReferral: 'प्रति रेफरल 500 अंक',
    bonusPoints: '+ प्रत्येक मित्र के पहले क्वेस्ट पूर्ण करने पर 100 बोनस अंक',
    referralCode: 'आपका रेफरल कोड',
    friendsReferred: 'रेफर किए गए मित्र',
    pointsEarned: 'कमाए गए अंक',
    shareReferral: 'रेफरल लिंक साझा करें',
    
    // Quests
    personalizedQuests: 'व्यक्तिगत क्वेस्ट',
    questsDescription: 'आपकी फसलों, स्थान और खेत के आकार के आधार पर अनुकूलित चुनौतियां',
    selectCrops: 'अपनी फसलें चुनें',
    farmSize: 'खेत का आकार (एकड़ में)',
    location: 'स्थान',
    updatePreferences: 'प्राथमिकताएं अपडेट करें',
    startQuest: 'क्वेस्ट शुरू करें',
    continueQuest: 'क्वेस्ट जारी रखें',
    questProgress: 'क्वेस्ट प्रगति',
    timeRemaining: 'समय शेष',
    questReward: 'पुरस्कार',
    difficulty: 'कठिनाई',
    easy: 'आसान',
    medium: 'मध्यम',
    hard: 'कठिन',
    
    // Languages
    english: 'English',
    hindi: 'हिंदी',
    marathi: 'मराठी',
    malayalam: 'മലയാളം',
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
    quests: 'क्वेस्ट',
    rewards: 'बक्षिसे',
    
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
    yourProfile: 'तुमची प्रोफाइल',
    viewProfile: 'प्रोफाइल पहा',
    
    // Profile
    referEarn: 'रेफर करा आणि कमवा',
    referralSystem: 'रेफरल सिस्टम',
    inviteFarmers: 'शेतकऱ्यांना फार्मक्वेस्टमध्ये सामील होण्यासाठी आमंत्रित करा',
    pointsPerReferral: 'प्रती रेफरल 500 गुण',
    bonusPoints: '+ प्रत्येक मित्राच्या पहिल्या क्वेस्ट पूर्ण केल्यावर 100 बोनस गुण',
    referralCode: 'तुमचा रेफरल कोड',
    friendsReferred: 'रेफर केलेले मित्र',
    pointsEarned: 'कमावलेले गुण',
    shareReferral: 'रेफरल लिंक शेअर करा',
    
    // Quests
    personalizedQuests: 'वैयक्तिक क्वेस्ट',
    questsDescription: 'तुमच्या पिकांवर, ठिकाणावर आणि शेताच्या आकारावर आधारित तयार केलेली आव्हाने',
    selectCrops: 'तुमची पिके निवडा',
    farmSize: 'शेताचा आकार (एकरांमध्ये)',
    location: 'ठिकाण',
    updatePreferences: 'प्राधान्ये अपडेट करा',
    startQuest: 'क्वेस्ट सुरू करा',
    continueQuest: 'क्वेस्ट सुरू ठेवा',
    questProgress: 'क्वेस्ट प्रगती',
    timeRemaining: 'उरलेला वेळ',
    questReward: 'बक्षीस',
    difficulty: 'अडचण',
    easy: 'सोपे',
    medium: 'मध्यम',
    hard: 'कठीण',
    
    // Languages
    english: 'English',
    hindi: 'हिंदी',
    marathi: 'मराठी',
    malayalam: 'മലയാളം',
    selectLanguage: 'भाषा निवडा',
  },
  ml: {
    // Navigation
    home: 'ഹോം',
    dashboard: 'ഡാഷ്ബോർഡ്',
    leaderboard: 'ലീഡർബോർഡ്',
    community: 'കമ്മ്യൂണിറ്റി',
    settings: 'സെറ്റിംഗുകൾ',
    profile: 'പ്രൊഫൈൽ',
    quests: 'ക്വസ്റ്റ്',
    rewards: 'റിവാർഡുകൾ',
    
    // Hero Section
    revolutionizing: '🌱 കൃഷിയിൽ വിപ്ലവം',
    farmquest: 'ഫാർംക്വസ്റ്റ്',
    tagline: 'ഗെയിമിഫൈഡ് സസ്റ്റൈനബിൾ അഗ്രികൾച്ചർ പ്ലാറ്റ്ഫോം',
    heroDescription: 'AI-നയിക്കുന്ന മിഷനുകൾ, കമ്മ്യൂണിറ്റി ചാലഞ്ചുകൾ, യഥാർത്ഥ റിവാർഡുകൾ എന്നിവയിലൂടെ കൃഷിയെ പരിവർത്തനം ചെയ്യുക. സുസ്ഥിര ഭാവി നിർമ്മിക്കുന്ന ആയിരക്കണക്കിന് കർഷകരോട് ചേരുക.',
    startJourney: 'നിങ്ങളുടെ യാത്ര ആരംഭിക്കുക',
    viewLeaderboard: 'ലീഡർബോർഡ് കാണുക',
    
    // Features
    aiMissions: 'AI-നയിക്കുന്ന മിഷനുകൾ',
    aiMissionsDesc: 'നിങ്ങളുടെ ഭൂമിയും വിളകളും അടിസ്ഥാനമാക്കിയുള്ള വ്യക്തിഗത വെല്ലുവിളികൾ',
    communityClans: 'കമ്മ്യൂണിറ്റി ഗ്രൂപ്പുകൾ',
    communityClansDesc: 'കൂട്ടായ സ്വാധീനത്തിനായി സഹ കർഷകരുമായി ചേർന്ന് പ്രവർത്തിക്കുക',
    realRewards: 'യഥാർത്ഥ റിവാർഡുകൾ',
    realRewardsDesc: 'ഇളവുകൾ, സബ്സിഡികൾ, പ്രീമിയം മാർക്കറ്റ് ആക്സസ് എന്നിവ നേടുക',
    
    // Dashboard
    welcomeBack: 'തിരിച്ചുവന്നതിന് സ്വാഗതം, കർഷകൻ!',
    greenPoints: 'ഗ്രീൻ പോയിന്റുകൾ',
    activeMissions: 'സജീവ മിഷനുകൾ',
    completionRate: 'പൂർത്തീകരണ നിരക്ക്',
    clanRank: 'ഗ്രൂപ്പ് റാങ്ക്',
    achievements: 'നേട്ടങ്ങൾ',
    yourProfile: 'നിങ്ങളുടെ പ്രൊഫൈൽ',
    viewProfile: 'പ്രൊഫൈൽ കാണുക',
    
    // Profile
    referEarn: 'റെഫർ ചെയ്ത് സമ്പാദിക്കുക',
    referralSystem: 'റെഫറൽ സിസ്റ്റം',
    inviteFarmers: 'കർഷകരെ ഫാർംക്വസ്റ്റിൽ ചേരാൻ ക്ഷണിക്കുക',
    pointsPerReferral: 'ഒരു റെഫറലിന് 500 പോയിന്റുകൾ',
    bonusPoints: '+ ഓരോ സുഹൃത്തിന്റെയും ആദ്യ ക്വസ്റ്റ് പൂർത്തീകരണത്തിന് 100 ബോനസ് പോയിന്റുകൾ',
    referralCode: 'നിങ്ങളുടെ റെഫറൽ കോഡ്',
    friendsReferred: 'റെഫർ ചെയ്ത സുഹൃത്തുകൾ',
    pointsEarned: 'സമ്പാദിച്ച പോയിന്റുകൾ',
    shareReferral: 'റെഫറൽ ലിങ്ക് പങ്കിടുക',
    
    // Quests
    personalizedQuests: 'വ്യക്തിഗത ക്വസ്റ്റുകൾ',
    questsDescription: 'നിങ്ങളുടെ വിളകൾ, സ്ഥലം, ഫാം വലുപ്പം എന്നിവ അടിസ്ഥാനമാക്കിയുള്ള വെല്ലുവിളികൾ',
    selectCrops: 'നിങ്ങളുടെ വിളകൾ തിരഞ്ഞെടുക്കുക',
    farmSize: 'ഫാം വലുപ്പം (ഏക്കറിൽ)',
    location: 'സ്ഥലം',
    updatePreferences: 'മുൻഗണനകൾ അപ്ഡേറ്റ് ചെയ്യുക',
    startQuest: 'ക്വസ്റ്റ് ആരംഭിക്കുക',
    continueQuest: 'ക്വസ്റ്റ് തുടരുക',
    questProgress: 'ക്വസ്റ്റ് പുരോഗതി',
    timeRemaining: 'ശേഷിക്കുന്ന സമയം',
    questReward: 'റിവാർഡ്',
    difficulty: 'ബുദ്ധിമുട്ട്',
    easy: 'എളുപ്പം',
    medium: 'മീഡിയം',
    hard: 'ബുദ്ധിമുട്ടുള്ളത്',
    
    // Languages
    english: 'English',
    hindi: 'हिंदी',
    marathi: 'मराठी',
    malayalam: 'മലയാളം',
    selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
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