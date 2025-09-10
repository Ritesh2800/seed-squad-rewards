import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge-custom";
import { MapPin, Trophy, Coins } from "lucide-react";

export const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">U</div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Your Profile</h1>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="w-4 h-4" /> Your Location</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <Coins className="w-6 h-6 text-warning mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Green Points</p>
              <p className="text-2xl font-bold text-primary">2,450</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Badges</p>
              <p className="text-2xl font-bold text-accent">8</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">Clan</p>
              <p className="text-2xl font-bold text-foreground">Green Warriors</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {['Water Warrior', 'Soil Guardian', 'Organic Pioneer'].map((b) => (
              <Badge key={b} variant="achievement">{b}</Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};