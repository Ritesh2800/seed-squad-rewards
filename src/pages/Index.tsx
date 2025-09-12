import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { Dashboard } from "@/components/dashboard";
import { Leaderboard } from "@/components/leaderboard";
import { Navigation } from "@/components/navigation";
import { Community } from "@/components/community";
import { SettingsPage } from "@/components/settings";
import { ProfilePage } from "@/components/profile";
import { RewardsPage } from "@/components/rewards";
import { CropSetup } from "@/components/crop-setup";
import { QuestsPage } from "@/components/quests";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard' | 'leaderboard' | 'community' | 'settings' | 'profile' | 'rewards' | 'setup' | 'quests'>('home');
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const handleSetupComplete = (data: { crops: string[], farmSize: string, location: string }) => {
    setIsSetupComplete(true);
    setCurrentView('dashboard');
    // In a real app, you would save this data to the backend
    console.log('Farm setup completed:', data);
  };

  const handleStartJourney = () => {
    if (!isSetupComplete) {
      setCurrentView('setup');
    } else {
      setCurrentView('dashboard');
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'setup':
        return <CropSetup onSetupComplete={handleSetupComplete} />;
      case 'dashboard':
        return <Dashboard />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'community':
        return <Community />;
      case 'settings':
        return <SettingsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'rewards':
        return <RewardsPage />;
      case 'quests':
        return <QuestsPage />;
      default:
        return <HeroSection onStart={handleStartJourney} onViewLeaderboard={() => setCurrentView('leaderboard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      {renderCurrentView()}
    </div>
  );
};

export default Index;