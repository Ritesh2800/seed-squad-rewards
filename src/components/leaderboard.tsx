import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge-custom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Users, TrendingUp, Crown } from "lucide-react";

const topFarmers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Nashik, Maharashtra",
    points: 4850,
    rank: 1,
    avatar: "RK",
    achievements: 15,
    completionRate: 95,
    specialty: "Water Conservation"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    points: 4620,
    rank: 2,
    avatar: "PS",
    achievements: 12,
    completionRate: 92,
    specialty: "Organic Farming"
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Surat, Gujarat",
    points: 4450,
    rank: 3,
    avatar: "AP",
    achievements: 11,
    completionRate: 89,
    specialty: "Soil Health"
  },
  {
    id: 4,
    name: "Sunita Reddy",
    location: "Hyderabad, Telangana",
    points: 4200,
    rank: 4,
    avatar: "SR",
    achievements: 10,
    completionRate: 87,
    specialty: "Sustainable Energy"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    points: 3980,
    rank: 5,
    avatar: "VS",
    achievements: 9,
    completionRate: 84,
    specialty: "Climate Adaptation"
  }
];

const clans = [
  {
    id: 1,
    name: "Green Warriors",
    members: 45,
    totalPoints: 68500,
    rank: 1,
    region: "Maharashtra",
    challenges: 23
  },
  {
    id: 2,
    name: "Soil Guardians",
    members: 38,
    totalPoints: 62300,
    rank: 2,
    region: "Gujarat",
    challenges: 19
  },
  {
    id: 3,
    name: "Water Savers",
    members: 52,
    totalPoints: 59800,
    rank: 3,
    region: "Karnataka",
    challenges: 21
  },
  {
    id: 4,
    name: "Organic Champions",
    members: 41,
    totalPoints: 55600,
    rank: 4,
    region: "Punjab",
    challenges: 17
  }
];

export const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("individual");

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-warning" />;
      case 2:
        return <Medal className="w-5 h-5 text-muted-foreground" />;
      case 3:
        return <Award className="w-5 h-5 text-accent" />;
      default:
        return <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
          {rank}
        </span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "border-l-4 border-l-warning bg-gradient-to-r from-warning/10 to-transparent";
      case 2:
        return "border-l-4 border-l-muted-foreground bg-gradient-to-r from-muted/20 to-transparent";
      case 3:
        return "border-l-4 border-l-accent bg-gradient-to-r from-accent/10 to-transparent";
      default:
        return "border-l-4 border-l-border";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Leaderboard</h1>
          <p className="text-muted-foreground">Celebrating our top sustainable farming champions</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="individual" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Individual Farmers
            </TabsTrigger>
            <TabsTrigger value="clans" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Farmer Clans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual" className="space-y-6">
            {/* Top 3 Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {topFarmers.slice(0, 3).map((farmer, index) => (
                <Card key={farmer.id} className={`${getRankColor(farmer.rank)} border-0 shadow-elegant hover:shadow-glow transition-all duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {getRankIcon(farmer.rank)}
                    </div>
                    <Avatar className="w-16 h-16 mx-auto mb-4 border-2 border-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground font-bold text-lg">
                        {farmer.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg text-foreground mb-1">{farmer.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{farmer.location}</p>
                    <div className="text-2xl font-bold text-primary mb-2">{farmer.points.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Green Points</p>
                    <Badge variant="premium" className="mt-3">
                      {farmer.specialty}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Full Rankings */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Full Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topFarmers.map((farmer) => (
                    <div key={farmer.id} className={`p-4 rounded-lg ${getRankColor(farmer.rank)} hover:shadow-card transition-all duration-300`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            {getRankIcon(farmer.rank)}
                            <Avatar className="w-10 h-10">
                              <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                                {farmer.avatar}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{farmer.name}</h4>
                            <p className="text-sm text-muted-foreground">{farmer.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Points</p>
                            <p className="font-bold text-primary">{farmer.points.toLocaleString()}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Success Rate</p>
                            <p className="font-bold text-success">{farmer.completionRate}%</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Badges</p>
                            <p className="font-bold text-warning">{farmer.achievements}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clans" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Top Farmer Clans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clans.map((clan) => (
                    <div key={clan.id} className={`p-6 rounded-lg ${getRankColor(clan.rank)} hover:shadow-card transition-all duration-300`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            {getRankIcon(clan.rank)}
                            <div className="p-3 rounded-lg bg-primary/10">
                              <Users className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-foreground">{clan.name}</h4>
                            <p className="text-sm text-muted-foreground">{clan.region} • {clan.members} members</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-8">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Total Points</p>
                            <p className="font-bold text-primary text-xl">{clan.totalPoints.toLocaleString()}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Challenges</p>
                            <p className="font-bold text-accent text-xl">{clan.challenges}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Clan
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};