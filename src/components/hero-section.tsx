import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge-custom";
import { useLanguage } from "@/contexts/language-context";
import { Leaf, Zap, Users, Trophy, Smartphone, Globe } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

type HeroSectionProps = { onStart?: () => void; onViewLeaderboard?: () => void };

export const HeroSection = ({ onStart, onViewLeaderboard }: HeroSectionProps) => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Leaf className="w-16 h-16 text-success animate-bounce" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Globe className="w-12 h-12 text-accent animate-pulse" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="success" className="mb-6 px-6 py-2 text-sm">
            {t('revolutionizing')}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-success to-accent bg-clip-text text-transparent leading-tight">
            {t('farmquest')}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            {t('tagline')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-success text-white shadow-elegant hover:shadow-glow px-8 py-6 text-lg" onClick={onStart}>
              <Smartphone className="mr-2 h-5 w-5" />
              {t('startJourney')}
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg" onClick={onViewLeaderboard}>
              <Trophy className="mr-2 h-5 w-5" />
              {t('viewLeaderboard')}
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-card p-6 hover:shadow-elegant transition-all duration-300">
              <Zap className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-card-foreground mb-2">{t('aiMissions')}</h3>
              <p className="text-sm text-muted-foreground">{t('aiMissionsDesc')}</p>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-card p-6 hover:shadow-elegant transition-all duration-300">
              <Users className="w-8 h-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-card-foreground mb-2">{t('communityClans')}</h3>
              <p className="text-sm text-muted-foreground">{t('communityClansDesc')}</p>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-card p-6 hover:shadow-elegant transition-all duration-300">
              <Trophy className="w-8 h-8 text-success mb-3 mx-auto" />
              <h3 className="font-semibold text-card-foreground mb-2">{t('realRewards')}</h3>
              <p className="text-sm text-muted-foreground">{t('realRewardsDesc')}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};