import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge-custom";
import { Users, Megaphone, Video, PlusCircle } from "lucide-react";

const samplePosts = [
  {
    id: 1,
    author: "Priya Sharma",
    title: "How we saved 30% water with drip irrigation",
    content: "We installed low-cost drip lines and scheduled watering using soil moisture readings.",
    tags: ["water", "iot"],
  },
  {
    id: 2,
    author: "Amit Patel",
    title: "Companion planting that boosted my yield",
    content: "Used beans alongside maize – nitrogen fixation improved plant health.",
    tags: ["soil", "organic"],
  },
];

export const Community = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Community</h1>
            <p className="text-muted-foreground">Learn, share, and grow together with fellow farmers</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-success text-white">
              <PlusCircle className="w-4 h-4 mr-2" /> New Post
            </Button>
            <Button variant="outline">
              <Users className="w-4 h-4 mr-2" /> Create Clan
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-primary" /> Latest Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {samplePosts.map((post) => (
                <div key={post.id} className="p-4 rounded-lg border border-border hover:shadow-card transition">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground">{post.title}</h3>
                    <span className="text-xs text-muted-foreground">by {post.author}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{post.content}</p>
                  <div className="flex gap-2">
                    {post.tags.map((t) => (
                      <Badge key={t} variant="outline">#{t}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" /> Trending Clans
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Green Warriors", "Soil Guardians", "Water Savers"].map((clan) => (
                  <div key={clan} className="p-3 rounded-lg border border-border flex items-center justify-between">
                    <div className="font-medium">{clan}</div>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-success text-white border-0 shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5" /> Learn with Videos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90 mb-3 text-sm">Youth creators earn Agri Influencer badges for regional language tutorials.</p>
                <Button variant="secondary" className="w-full">Explore Tutorials</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};