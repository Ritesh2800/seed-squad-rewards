import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "./ui/badge-custom";
import { useLanguage } from "@/contexts/language-context";
import { 
  Wheat, 
  Apple, 
  Carrot, 
  Leaf, 
  MapPin,
  Ruler,
  CheckCircle
} from "lucide-react";

const crops = [
  { id: 'wheat', name: 'Wheat', icon: Wheat, season: 'Rabi' },
  { id: 'rice', name: 'Rice', icon: Leaf, season: 'Kharif' },
  { id: 'cotton', name: 'Cotton', icon: Leaf, season: 'Kharif' },
  { id: 'sugarcane', name: 'Sugarcane', icon: Leaf, season: 'Year-round' },
  { id: 'banana', name: 'Banana', icon: Apple, season: 'Year-round' },
  { id: 'tomato', name: 'Tomato', icon: Carrot, season: 'Rabi' },
  { id: 'onion', name: 'Onion', icon: Carrot, season: 'Rabi' },
  { id: 'maize', name: 'Maize', icon: Wheat, season: 'Kharif' }
];

interface CropSetupProps {
  onSetupComplete: (data: { crops: string[], farmSize: string, location: string }) => void;
}

export const CropSetup = ({ onSetupComplete }: CropSetupProps) => {
  const { t } = useLanguage();
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [farmSize, setFarmSize] = useState('');
  const [location, setLocation] = useState('');

  const toggleCrop = (cropId: string) => {
    setSelectedCrops(prev => 
      prev.includes(cropId) 
        ? prev.filter(id => id !== cropId)
        : [...prev, cropId]
    );
  };

  const handleSubmit = () => {
    if (selectedCrops.length > 0 && farmSize && location) {
      onSetupComplete({ crops: selectedCrops, farmSize, location });
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Setup Your Farm Profile</h1>
          <p className="text-muted-foreground">Tell us about your farm to get personalized quests and recommendations</p>
        </div>

        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              Select Your Crops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {crops.map((crop) => {
                const Icon = crop.icon;
                const isSelected = selectedCrops.includes(crop.id);
                return (
                  <div
                    key={crop.id}
                    onClick={() => toggleCrop(crop.id)}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? 'border-primary bg-primary/10 shadow-elegant' 
                        : 'border-border hover:border-primary/50 hover:shadow-card'
                    }`}
                  >
                    {isSelected && (
                      <CheckCircle className="absolute top-2 right-2 w-5 h-5 text-primary" />
                    )}
                    <div className="text-center">
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                      <p className={`font-medium ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                        {crop.name}
                      </p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {crop.season}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-primary" />
                Farm Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="farmSize">Farm Size (in acres)</Label>
                  <Input
                    id="farmSize"
                    type="number"
                    placeholder="e.g., 5.5"
                    value={farmSize}
                    onChange={(e) => setFarmSize(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="location">District, State</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Nashik, Maharashtra"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleSubmit}
            disabled={selectedCrops.length === 0 || !farmSize || !location}
            className="px-8"
          >
            Complete Setup & Get Personalized Quests
          </Button>
        </div>
      </div>
    </div>
  );
};