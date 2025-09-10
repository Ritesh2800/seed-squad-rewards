import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { Dashboard } from "@/components/dashboard";
import { Leaderboard } from "@/components/leaderboard";
import { Navigation } from "@/components/navigation";
import { Community } from "@/components/community";
import { SettingsPage } from "@/components/settings";
import { ProfilePage } from "@/components/profile";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard' | 'leaderboard' | 'community' | 'settings' | 'profile'>('home');

  const renderCurrentView = () => {
    switch (currentView) {
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
      default:
        return <HeroSection onStart={() => setCurrentView('dashboard')} onViewLeaderboard={() => setCurrentView('leaderboard')} />;
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