import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge-custom";
import { Button } from "@/components/ui/button";
import { 
  CloudRain, 
  Sun, 
  Wind, 
  AlertTriangle, 
  Thermometer,
  Droplets,
  Eye,
  Clock
} from "lucide-react";

const weatherAlerts = [
  {
    id: 1,
    type: "severe",
    title: "Heavy Rainfall Alert",
    description: "Heavy rainfall expected in next 48 hours. Ensure proper drainage for cotton fields.",
    impact: "High risk of waterlogging",
    action: "Check drainage systems, harvest ready crops",
    timeLeft: "2 hours",
    icon: CloudRain,
    color: "destructive"
  },
  {
    id: 2,
    type: "moderate",
    title: "Temperature Rise Warning",
    description: "Temperature expected to rise above 40°C for next 5 days.",
    impact: "Heat stress on crops",
    action: "Increase irrigation frequency, provide shade",
    timeLeft: "6 hours",
    icon: Thermometer,
    color: "warning"
  },
  {
    id: 3,
    type: "info",
    title: "Favorable Weather",
    description: "Ideal conditions for spraying pesticides in morning hours.",
    impact: "Optimal for crop protection",
    action: "Schedule pesticide application",
    timeLeft: "12 hours",
    icon: Sun,
    color: "success"
  }
];

const currentWeather = {
  temperature: "32°C",
  humidity: "68%",
  windSpeed: "12 km/h",
  visibility: "8 km",
  condition: "Partly Cloudy"
};

export const WeatherAlerts = () => {
  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <Card className="bg-gradient-card border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-warning" />
            Current Weather - Nashik District
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Thermometer className="w-6 h-6 text-warning mx-auto mb-1" />
              <p className="text-sm text-muted-foreground">Temperature</p>
              <p className="font-bold text-foreground">{currentWeather.temperature}</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Droplets className="w-6 h-6 text-accent mx-auto mb-1" />
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="font-bold text-foreground">{currentWeather.humidity}</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Wind className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-sm text-muted-foreground">Wind Speed</p>
              <p className="font-bold text-foreground">{currentWeather.windSpeed}</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Eye className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
              <p className="text-sm text-muted-foreground">Visibility</p>
              <p className="font-bold text-foreground">{currentWeather.visibility}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Alerts */}
      <Card className="bg-gradient-card border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Weather Alerts & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {weatherAlerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <Card key={alert.id} className={`border-l-4 ${
                alert.type === 'severe' ? 'border-l-destructive' :
                alert.type === 'moderate' ? 'border-l-warning' :
                'border-l-success'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        alert.type === 'severe' ? 'bg-destructive/10' :
                        alert.type === 'moderate' ? 'bg-warning/10' :
                        'bg-success/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          alert.type === 'severe' ? 'text-destructive' :
                          alert.type === 'moderate' ? 'text-warning' :
                          'text-success'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{alert.title}</h3>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                      </div>
                    </div>
                    <Badge variant={alert.color as any}>
                      {alert.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-muted-foreground">Impact:</span>
                      <span className="text-foreground">{alert.impact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-muted-foreground">Action:</span>
                      <span className="text-foreground">{alert.action}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      Expected in {alert.timeLeft}
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};