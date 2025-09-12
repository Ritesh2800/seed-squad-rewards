import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge-custom";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "@/contexts/language-context";
import { 
  Home, 
  LayoutDashboard, 
  Trophy, 
  Users, 
  Settings,
  Bell,
  Coins,
  Gift,
  Target
} from "lucide-react";

interface NavigationProps {
  currentView: 'home' | 'dashboard' | 'leaderboard' | 'community' | 'settings' | 'profile' | 'rewards' | 'setup' | 'quests';
  onViewChange: (view: 'home' | 'dashboard' | 'leaderboard' | 'community' | 'settings' | 'profile' | 'rewards' | 'setup' | 'quests') => void;
}

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const { t } = useLanguage();
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-success">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">FarmQuest</h1>
              <p className="text-xs text-muted-foreground">Sustainable Agriculture Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant={currentView === 'home' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('home')}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              {t('home')}
            </Button>
            
            <Button
              variant={currentView === 'dashboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('dashboard')}
              className="flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              {t('dashboard')}
            </Button>
            
            <Button
              variant={currentView === 'leaderboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('leaderboard')}
              className="flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              {t('leaderboard')}
            </Button>

            <Button 
              variant={currentView === 'community' ? 'default' : 'ghost'} 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => onViewChange('community')}
            >
              <Users className="w-4 h-4" />
              {t('community')}
            </Button>

            <Button
              variant={currentView === 'quests' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('quests')}
              className="flex items-center gap-2"
            >
              <Target className="w-4 h-4" />
              {t('quests')}
            </Button>

            <Button
              variant={currentView === 'rewards' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('rewards')}
              className="flex items-center gap-2"
            >
              <Gift className="w-4 h-4" />
              {t('rewards')}
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs">
                3
              </Badge>
            </Button>

            {/* Points Display */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-success text-white">
              <Coins className="w-4 h-4" />
              <span className="text-sm font-semibold">2,450</span>
            </div>

            {/* Settings */}
            <Button variant="ghost" size="sm" onClick={() => onViewChange('settings')} aria-label={t('settings')}>
              <Settings className="w-4 h-4" />
            </Button>

            {/* User Profile */}
            <button 
              type="button"
              onClick={() => onViewChange('profile')}
              className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm hover:shadow-card transition"
              aria-label={t('profile')}
            >
              U
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-4 p-2 bg-muted rounded-lg">
          <Button
            variant={currentView === 'home' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('home')}
            className="flex-1"
          >
            <Home className="w-4 h-4" />
          </Button>
          
          <Button
            variant={currentView === 'dashboard' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('dashboard')}
            className="flex-1"
          >
            <LayoutDashboard className="w-4 h-4" />
          </Button>
          
          <Button
            variant={currentView === 'leaderboard' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('leaderboard')}
            className="flex-1"
          >
            <Trophy className="w-4 h-4" />
          </Button>

          <Button variant={currentView === 'community' ? 'default' : 'ghost'} size="sm" className="flex-1" onClick={() => onViewChange('community')}>
            <Users className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};