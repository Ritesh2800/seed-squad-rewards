import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge-custom";
import { ProgressRing } from "./ui/progress-ring";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/language-context";
import { 
  Droplets, 
  Leaf, 
  Sun, 
  TrendingUp, 
  Users, 
  Trophy, 
  Target,
  MapPin,
  Clock,
  Coins
} from "lucide-react";

const mockMissions = [
  {
    id: 1,
    title: "Water Conservation Challenge",
    description: "Implement drip irrigation to save 20% water this week",
    progress: 65,
    reward: 150,
    type: "water",
    difficulty: "medium",
    timeLeft: "3 days",
    icon: Droplets
  },
  {
    id: 2,
    title: "Companion Planting Mission",
    description: "Plant 2 rows of nitrogen-fixing crops alongside wheat",
    progress: 25,
    reward: 200,
    type: "soil",
    difficulty: "easy",
    timeLeft: "1 week",
    icon: Leaf
  },
  {
    id: 3,
    title: "Solar Integration Project",
    description: "Install solar-powered monitoring system",
    progress: 0,
    reward: 500,
    type: "energy",
    difficulty: "hard",
    timeLeft: "2 weeks",
    icon: Sun
  }
];

const achievements = [
  { name: "Water Warrior", description: "Saved 1000L water", earned: true },
  { name: "Soil Guardian", description: "Improved soil health", earned: true },
  { name: "Green Pioneer", description: "First organic harvest", earned: false },
  { name: "Community Leader", description: "Led 5 group challenges", earned: false }
];

export const Dashboard = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{t('welcomeBack')}</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nashik District, Maharashtra
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Card className="bg-gradient-success text-white border-0 shadow-glow">
              <CardContent className="p-4 flex items-center gap-3">
                <Coins className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">{t('greenPoints')}</p>
                  <p className="text-2xl font-bold">2,450</p>
                </div>
              </CardContent>
            </Card>
            
            <ProgressRing progress={75} size={80} className="text-primary">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Level</p>
                <p className="text-lg font-bold text-primary">7</p>
              </div>
            </ProgressRing>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('activeMissions')}</p>
                  <p className="text-3xl font-bold text-primary">3</p>
                </div>
                <Target className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('completionRate')}</p>
                  <p className="text-3xl font-bold text-success">89%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('clanRank')}</p>
                  <p className="text-3xl font-bold text-accent">#12</p>
                </div>
                <Users className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('achievements')}</p>
                  <p className="text-3xl font-bold text-warning">8</p>
                </div>
                <Trophy className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Missions */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Active Missions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockMissions.map((mission) => {
                  const Icon = mission.icon;
                  return (
                    <Card key={mission.id} className="border border-border hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-card-foreground">{mission.title}</h3>
                              <p className="text-sm text-muted-foreground">{mission.description}</p>
                            </div>
                          </div>
                          <Badge variant={mission.difficulty === 'hard' ? 'warning' : mission.difficulty === 'medium' ? 'default' : 'success'}>
                            {mission.difficulty}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{mission.progress}%</span>
                          </div>
                          <Progress value={mission.progress} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {mission.timeLeft}
                            </span>
                            <span className="flex items-center gap-1">
                              <Coins className="w-4 h-4 text-warning" />
                              {mission.reward} pts
                            </span>
                          </div>
                          <Button size="sm" variant={mission.progress > 0 ? "default" : "outline"}>
                            {mission.progress > 0 ? "Continue" : "Start"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-warning" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`p-2 rounded-full ${achievement.earned ? 'bg-success/20' : 'bg-muted'}`}>
                        <Trophy className={`w-4 h-4 ${achievement.earned ? 'text-success' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium text-sm ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {achievement.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned && <Badge variant="achievement" className="text-xs">Earned</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-success text-white border-0 shadow-glow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Weekly Challenge</h3>
                <p className="text-sm opacity-90 mb-4">Join your clan to plant 1000 trees this week!</p>
                <Button variant="secondary" size="sm" className="w-full">
                  Join Challenge
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};