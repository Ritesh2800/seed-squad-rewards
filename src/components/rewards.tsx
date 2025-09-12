import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge-custom";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/language-context";
import { 
  ShoppingCart, 
  Coins, 
  Package, 
  Truck,
  Star,
  Search,
  Filter,
  Gift,
  Percent
} from "lucide-react";

const categories = [
  { id: 'all', name: 'All Items', icon: Package },
  { id: 'fertilizers', name: 'Fertilizers', icon: Package },
  { id: 'pesticides', name: 'Pesticides', icon: Package },
  { id: 'seeds', name: 'Seeds', icon: Package },
  { id: 'tools', name: 'Tools', icon: Package },
  { id: 'equipment', name: 'Equipment', icon: Truck }
];

const rewardItems = [
  {
    id: 1,
    name: "Organic Compost (50 kg)",
    category: 'fertilizers',
    originalPrice: 1200,
    discountedPrice: 800,
    pointsPrice: 400,
    discount: 33,
    rating: 4.8,
    reviews: 124,
    description: "Premium organic compost for soil enrichment",
    availability: "In Stock",
    delivery: "2-3 days",
    isFree: false
  },
  {
    id: 2,
    name: "Bio-Pesticide Spray (1L)",
    category: 'pesticides',
    originalPrice: 450,
    discountedPrice: 300,
    pointsPrice: 200,
    discount: 25,
    rating: 4.6,
    reviews: 89,
    description: "Eco-friendly pest control solution",
    availability: "Limited Stock",
    delivery: "1-2 days",
    isFree: false
  },
  {
    id: 3,
    name: "Hybrid Wheat Seeds (10 kg)",
    category: 'seeds',
    originalPrice: 800,
    discountedPrice: 0,
    pointsPrice: 600,
    discount: 100,
    rating: 4.9,
    reviews: 156,
    description: "High-yield drought-resistant wheat variety",
    availability: "In Stock",
    delivery: "3-5 days",
    isFree: true
  },
  {
    id: 4,
    name: "Smart Irrigation Timer",
    category: 'equipment',
    originalPrice: 2500,
    discountedPrice: 1800,
    pointsPrice: 1200,
    discount: 28,
    rating: 4.7,
    reviews: 67,
    description: "Automated irrigation system controller",
    availability: "In Stock",
    delivery: "5-7 days",
    isFree: false
  },
  {
    id: 5,
    name: "Soil pH Testing Kit",
    category: 'tools',
    originalPrice: 350,
    discountedPrice: 0,
    pointsPrice: 250,
    discount: 100,
    rating: 4.5,
    reviews: 93,
    description: "Digital soil pH and nutrient tester",
    availability: "In Stock",
    delivery: "2-3 days",
    isFree: true
  },
  {
    id: 6,
    name: "Neem Oil Concentrate (500ml)",
    category: 'pesticides',
    originalPrice: 280,
    discountedPrice: 200,
    pointsPrice: 150,
    discount: 29,
    rating: 4.4,
    reviews: 78,
    description: "Natural pest repellent and fungicide",
    availability: "In Stock",
    delivery: "1-2 days",
    isFree: false
  }
];

export const RewardsPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [userPoints] = useState(2450);

  const filteredItems = rewardItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRedeem = (item: any) => {
    if (userPoints >= item.pointsPrice) {
      // Handle redemption logic
      console.log(`Redeeming ${item.name} for ${item.pointsPrice} points`);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Rewards Marketplace</h1>
            <p className="text-muted-foreground">Redeem your green points for farming supplies and equipment</p>
          </div>
          
          <Card className="bg-gradient-success text-white border-0 shadow-glow">
            <CardContent className="p-4 flex items-center gap-3">
              <Coins className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Available Points</p>
                <p className="text-2xl font-bold">{userPoints.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search for farming supplies..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Reward Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{item.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                  {item.isFree && (
                    <Badge variant="success" className="ml-2">
                      <Gift className="w-3 h-3 mr-1" />
                      FREE
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({item.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-warning" />
                    <span className="text-lg font-bold text-primary">{item.pointsPrice} points</span>
                  </div>
                  
                  {!item.isFree && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground line-through">₹{item.originalPrice}</span>
                      <span className="font-medium text-success">₹{item.discountedPrice}</span>
                      <Badge variant="outline" className="text-xs">
                        <Percent className="w-3 h-3 mr-1" />
                        {item.discount}% OFF
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Availability and Delivery */}
                <div className="flex justify-between text-sm">
                  <span className={`${item.availability === 'In Stock' ? 'text-success' : 'text-warning'}`}>
                    {item.availability}
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Truck className="w-3 h-3" />
                    {item.delivery}
                  </span>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full" 
                  variant={userPoints >= item.pointsPrice ? "default" : "outline"}
                  disabled={userPoints < item.pointsPrice}
                  onClick={() => handleRedeem(item)}
                >
                  {userPoints >= item.pointsPrice ? (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Redeem Now
                    </>
                  ) : (
                    <>
                      <Coins className="w-4 h-4 mr-2" />
                      Need {item.pointsPrice - userPoints} more points
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
};