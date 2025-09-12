import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge-custom";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/language-context";
import { 
  Target,
  MapPin,
  Clock,
  Coins,
  Droplets,
  Leaf,
  Sun,
  Zap,
  Settings,
  Award
} from "lucide-react";

const cropOptions = [
  "Rice", "Wheat", "Cotton", "Sugarcane", "Banana", "Tomato", 
  "Potato", "Onion", "Maize", "Soybean", "Groundnut", "Turmeric"
];

interface Quest {
  id: number;
  title: string;
  description: string;
  progress: number;
  reward: number;
  difficulty: "easy" | "medium" | "hard";
  timeLeft: string;
  icon: any;
  cropSpecific: string;
  category: "water" | "soil" | "pest" | "organic";
}

export const QuestsPage = () => {
  const { t } = useLanguage();
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [farmSize, setFarmSize] = useState("");
  const [location, setLocation] = useState("");
  const [showPreferences, setShowPreferences] = useState(false);

  // Personalized quests based on user preferences
  const personalizedQuests: Quest[] = [
    {
      id: 1,
      title: selectedCrops.includes("Banana") ? "Banana Field Mulching Challenge" : "Crop Mulching Challenge",
      description: selectedCrops.includes("Banana") 
        ? `Complete 3 weeks of mulching on your ${farmSize} acre banana plantation for optimal moisture retention`
        : `Implement mulching techniques across your ${farmSize} acre farm for better water retention`,
      progress: 65,
      reward: 250,
      difficulty: "medium" as const,
      timeLeft: "3 days",
      icon: Droplets,
      cropSpecific: selectedCrops.includes("Banana") ? "banana" : "general",
      category: "water"
    },
    {
      id: 2,
      title: selectedCrops.includes("Cotton") ? "Bio-Pesticide Transition for Cotton" : "Organic Pest Control Challenge",
      description: selectedCrops.includes("Cotton")
        ? `Switch to bio-pesticides for your cotton crop this season - perfect for your ${farmSize} acre farm`
        : `Implement organic pest control methods across your selected crops this season`,
      progress: 25,
      reward: 350,
      difficulty: "easy" as const,
      timeLeft: "1 week",
      icon: Leaf,
      cropSpecific: selectedCrops.includes("Cotton") ? "cotton" : "general",
      category: "pest"
    },
    {
      id: 3,
      title: selectedCrops.includes("Wheat") ? "Companion Planting: Wheat Fields" : "Companion Planting Challenge",
      description: selectedCrops.includes("Wheat")
        ? `Plant nitrogen-fixing legumes alongside wheat in 2 acres of your ${farmSize} acre farm`
        : `Implement companion planting techniques to improve soil health and crop yield`,
      progress: 0,
      reward: 300,
      difficulty: "medium" as const,
      timeLeft: "2 weeks",
      icon: Target,
      cropSpecific: selectedCrops.includes("Wheat") ? "wheat" : "general",
      category: "soil"
    },
    {
      id: 4,
      title: `Smart Irrigation for ${farmSize || 'Your'} Acres`,
      description: `Install drip irrigation system optimized for your ${farmSize} acre farm and crop mix`,
      progress: 10,
      reward: 500,
      difficulty: "hard" as const,
      timeLeft: "3 weeks",
      icon: Droplets,
      cropSpecific: "all",
      category: "water"
    }
  ];

  const handleCropToggle = (crop: string) => {
    setSelectedCrops(prev => 
      prev.includes(crop) 
        ? prev.filter(c => c !== crop)
        : [...prev, crop]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'success';
      case 'medium': return 'default';
      case 'hard': return 'warning';
      default: return 'default';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'water': return Droplets;
      case 'soil': return Leaf;
      case 'pest': return Zap;
      case 'organic': return Sun;
      default: return Target;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{t('personalizedQuests')}</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {t('questsDescription')}
            </p>
          </div>
          
          <Button
            onClick={() => setShowPreferences(!showPreferences)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            {t('updatePreferences')}
          </Button>
        </div>

        {/* Preferences Panel */}
        {showPreferences && (
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Farm Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Crop Selection */}
              <div>
                <Label className="text-base font-medium">{t('selectCrops')}</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                  {cropOptions.map((crop) => (
                    <Button
                      key={crop}
                      variant={selectedCrops.includes(crop) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCropToggle(crop)}
                      className="justify-start"
                    >
                      {crop}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Farm Size & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="farmSize">{t('farmSize')}</Label>
                  <Input
                    id="farmSize"
                    type="number"
                    placeholder="5.5"
                    value={farmSize}
                    onChange={(e) => setFarmSize(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="location">{t('location')}</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nashik">Nashik, Maharashtra</SelectItem>
                      <SelectItem value="pune">Pune, Maharashtra</SelectItem>
                      <SelectItem value="mumbai">Mumbai, Maharashtra</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Selected Preferences Summary */}
        {(selectedCrops.length > 0 || farmSize || location) && (
          <Card className="bg-gradient-success text-white border-0 shadow-glow">
            <CardContent className="p-4">
              <div className="flex flex-wrap items-center gap-4">
                {selectedCrops.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    <span className="text-sm">
                      Crops: {selectedCrops.join(", ")}
                    </span>
                  </div>
                )}
                {farmSize && (
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Size: {farmSize} acres</span>
                  </div>
                )}
                {location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{location}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Personalized Quests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {personalizedQuests.map((quest) => {
            const Icon = quest.icon;
            const CategoryIcon = getCategoryIcon(quest.category);
            
            return (
              <Card key={quest.id} className="border border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">{quest.title}</h3>
                        <p className="text-sm text-muted-foreground">{quest.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant={getDifficultyColor(quest.difficulty) as any}>
                        {t(quest.difficulty)}
                      </Badge>
                      <CategoryIcon className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t('questProgress')}</span>
                      <span className="font-medium">{quest.progress}%</span>
                    </div>
                    <Progress value={quest.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {quest.timeLeft}
                      </span>
                      <span className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-warning" />
                        {quest.reward} pts
                      </span>
                    </div>
                    <Button size="sm" variant={quest.progress > 0 ? "default" : "outline"}>
                      {quest.progress > 0 ? t('continueQuest') : t('startQuest')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Progress */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-warning" />
              Quest Achievement Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { name: "Water Conservation", completed: 8, total: 10, color: "text-accent" },
                { name: "Soil Health", completed: 5, total: 8, color: "text-success" },
                { name: "Pest Management", completed: 3, total: 6, color: "text-warning" },
                { name: "Organic Farming", completed: 2, total: 5, color: "text-primary" }
              ].map((achievement, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-muted/20">
                  <div className={`text-2xl font-bold ${achievement.color}`}>
                    {achievement.completed}/{achievement.total}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{achievement.name}</p>
                  <Progress 
                    value={(achievement.completed / achievement.total) * 100} 
                    className="h-1 mt-2" 
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};