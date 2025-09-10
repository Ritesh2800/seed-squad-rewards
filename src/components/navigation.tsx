import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge-custom";
import { 
  Home, 
  LayoutDashboard, 
  Trophy, 
  Users, 
  Settings,
  Bell,
  Coins
} from "lucide-react";

interface NavigationProps {
  currentView: 'home' | 'dashboard' | 'leaderboard';
  onViewChange: (view: 'home' | 'dashboard' | 'leaderboard') => void;
}

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
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
              Home
            </Button>
            
            <Button
              variant={currentView === 'dashboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('dashboard')}
              className="flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Button>
            
            <Button
              variant={currentView === 'leaderboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('leaderboard')}
              className="flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Leaderboard
            </Button>

            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Community
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
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
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>

            {/* User Profile */}
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
              U
            </div>
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

          <Button variant="ghost" size="sm" className="flex-1">
            <Users className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};