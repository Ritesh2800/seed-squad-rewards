import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { Dashboard } from "@/components/dashboard";
import { Leaderboard } from "@/components/leaderboard";
import { Navigation } from "@/components/navigation";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard' | 'leaderboard'>('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return <HeroSection />;
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