import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge-custom";
import { Button } from "@/components/ui/button";
import { MapPin, Trophy, Coins, Users, Share2, Copy } from "lucide-react";
export const ProfilePage = () => {
  return <div className="min-h-screen bg-background p-6">
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
            <CardContent className="p-6 text-center bg-lime-50 rounded-xl">
              <Coins className="w-6 h-6 text-warning mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Green Points</p>
              <p className="text-2xl font-bold text-primary">2,450</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6 text-center rounded-xl bg-cyan-50">
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
            {['Water Warrior', 'Soil Guardian', 'Organic Pioneer'].map(b => <Badge key={b} variant="achievement">{b}</Badge>)}
          </CardContent>
        </Card>

        {/* Referral System */}
        <Card className="bg-gradient-success text-white border-0 shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Refer & Earn
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-sm opacity-90 mb-2">Invite farmers to join FarmQuest</p>
              <p className="text-2xl font-bold">500 points per referral</p>
              <p className="text-sm opacity-75">+ 100 bonus points for each friend's first quest completion</p>
            </div>
            
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-sm opacity-90 mb-2">Your Referral Code</p>
              <div className="flex items-center gap-2">
                <code className="bg-white/20 px-3 py-1 rounded text-sm font-mono flex-1">FARM-USER-2024</code>
                <Button variant="secondary" size="sm">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm opacity-75">Friends Referred</p>
              </div>
              <div>
                <p className="text-2xl font-bold">7,200</p>
                <p className="text-sm opacity-75">Points Earned</p>
              </div>
            </div>

            <Button variant="secondary" className="w-full">
              <Share2 className="w-4 h-4 mr-2" />
              Share Referral Link
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>;
};