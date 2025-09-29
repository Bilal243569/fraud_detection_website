import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Star, Gift, Search, Filter } from "lucide-react";

interface GiftCard {
  id: string;
  name: string;
  category: string;
  denomination: number[];
  rating: number;
  discount?: number;
  image: string;
  description: string;
}

interface GiftCardMarketplaceProps {
  onPurchase?: (card: GiftCard, amount: number) => void;
}

export default function GiftCardMarketplace({ onPurchase }: GiftCardMarketplaceProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<Array<{ card: GiftCard; amount: number; quantity: number }>>([]);

  // Mock data - todo: remove mock functionality
  const giftCards: GiftCard[] = [
    {
      id: "netflix",
      name: "Netflix",
      category: "Entertainment",
      denomination: [25, 50, 100],
      rating: 4.9,
      image: "🎬",
      description: "Stream unlimited movies and TV shows"
    },
    {
      id: "amazon",
      name: "Amazon",
      category: "Shopping",
      denomination: [10, 25, 50, 100, 200],
      rating: 4.8,
      discount: 5,
      image: "📦",
      description: "Shop millions of products online"
    },
    {
      id: "spotify",
      name: "Spotify Premium",
      category: "Entertainment",
      denomination: [10, 30, 60],
      rating: 4.7,
      image: "🎵",
      description: "Music streaming without ads"
    },
    {
      id: "foodpanda",
      name: "Foodpanda",
      category: "Food & Beverage",
      denomination: [15, 25, 50],
      rating: 4.5,
      image: "🍔",
      description: "Food delivery from your favorite restaurants"
    },
    {
      id: "googleplay",
      name: "Google Play",
      category: "Gaming",
      denomination: [10, 25, 50, 100],
      rating: 4.6,
      image: "🎮",
      description: "Apps, games, movies, and more"
    },
    {
      id: "itunes",
      name: "iTunes",
      category: "Entertainment",
      denomination: [15, 25, 50, 100],
      rating: 4.4,
      image: "🍎",
      description: "Music, movies, and apps"
    },
    {
      id: "steam",
      name: "Steam",
      category: "Gaming",
      denomination: [20, 50, 100],
      rating: 4.8,
      image: "🎯",
      description: "PC gaming platform"
    },
    {
      id: "sephora",
      name: "Sephora",
      category: "Beauty",
      denomination: [25, 50, 100],
      rating: 4.6,
      image: "💄",
      description: "Beauty and cosmetics"
    }
  ];

  const categories = ["all", "Entertainment", "Shopping", "Gaming", "Food & Beverage", "Beauty"];

  const filteredCards = giftCards.filter(card => {
    const matchesCategory = selectedCategory === "all" || card.category === selectedCategory;
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (card: GiftCard, amount: number) => {
    const existingItem = cart.find(item => item.card.id === card.id && item.amount === amount);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.card.id === card.id && item.amount === amount
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { card, amount, quantity: 1 }]);
    }

    console.log(`Added ${card.name} $${amount} to cart`);
    onPurchase?.(card, amount);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            Gift Card Marketplace
          </h2>
          <p className="text-muted-foreground mt-1">
            Purchase gift cards from your favorite brands
          </p>
        </div>
        
        <Button variant="outline" className="flex items-center gap-2" data-testid="button-cart">
          <ShoppingCart className="h-4 w-4" />
          Cart ({getTotalItems()})
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search gift cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            data-testid="input-search"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]" data-testid="select-category">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Gift Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCards.map((card) => (
          <GiftCardItem
            key={card.id}
            card={card}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground" data-testid="no-results">
            No gift cards found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}

interface GiftCardItemProps {
  card: GiftCard;
  onAddToCart: (card: GiftCard, amount: number) => void;
}

function GiftCardItem({ card, onAddToCart }: GiftCardItemProps) {
  const [selectedAmount, setSelectedAmount] = useState(card.denomination[0]);

  return (
    <Card className="hover-elevate group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="text-4xl mb-2" data-testid={`card-icon-${card.id}`}>
            {card.image}
          </div>
          {card.discount && (
            <Badge variant="destructive" className="text-xs">
              -{card.discount}%
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-lg" data-testid={`card-title-${card.id}`}>
          {card.name}
        </CardTitle>
        
        <CardDescription data-testid={`card-description-${card.id}`}>
          {card.description}
        </CardDescription>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm ml-1" data-testid={`card-rating-${card.id}`}>
              {card.rating}
            </span>
          </div>
          <Badge variant="secondary" className="text-xs" data-testid={`card-category-${card.id}`}>
            {card.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div>
          <label className="text-sm font-medium mb-2 block">Amount</label>
          <Select 
            value={selectedAmount.toString()} 
            onValueChange={(value) => setSelectedAmount(parseInt(value))}
          >
            <SelectTrigger data-testid={`select-amount-${card.id}`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {card.denomination.map(amount => (
                <SelectItem key={amount} value={amount.toString()}>
                  ${amount}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          onClick={() => onAddToCart(card, selectedAmount)}
          className="w-full"
          data-testid={`button-add-to-cart-${card.id}`}
        >
          Add to Cart - ${selectedAmount}
        </Button>
      </CardContent>
    </Card>
  );
}