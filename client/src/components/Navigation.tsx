import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Home, 
  Shield, 
  BarChart3, 
  CreditCard, 
  Gift, 
  Users, 
  Mail, 
  LogOut, 
  Menu,
  HelpCircle,
  Settings
} from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface NavigationProps {
  userType: "user" | "admin";
  currentSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
  userName?: string;
}

export default function Navigation({ 
  userType, 
  currentSection, 
  onSectionChange, 
  onLogout, 
  userName = "User" 
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const adminNavItems: NavigationItem[] = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "fraud-detection", label: "Fraud Detection", icon: Shield, badge: "AI" },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "users", label: "User Management", icon: Users },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  const userNavItems: NavigationItem[] = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "marketplace", label: "Gift Cards", icon: Gift },
    { id: "my-purchases", label: "My Purchases", icon: CreditCard },
    { id: "security", label: "Security", icon: Shield },
    { id: "support", label: "Support", icon: HelpCircle },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  const navItems = userType === "admin" ? adminNavItems : userNavItems;

  const NavItem = ({ item, mobile = false }: { item: NavigationItem; mobile?: boolean }) => {
    const Icon = item.icon;
    const isActive = currentSection === item.id;
    
    return (
      <Button
        variant="ghost"
        className={`w-full justify-start gap-3 ${mobile ? "py-3" : ""} ${
          isActive 
            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600" 
            : "hover:bg-blue-50 hover:text-blue-600"
        }`}
        onClick={() => {
          onSectionChange(item.id);
          if (mobile) setIsMobileMenuOpen(false);
        }}
        data-testid={`nav-${item.id}`}
      >
        <Icon className="h-4 w-4" />
        <span>{item.label}</span>
        {item.badge && (
          <Badge 
            variant="secondary" 
            className={`ml-auto text-xs ${
              isActive 
                ? "bg-white/20 text-white" 
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {item.badge}
          </Badge>
        )}
      </Button>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-card border-r border-border">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-border">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Giftnix AI
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              {userType === "admin" ? "ADMIN PORTAL" : "USER PORTAL"}
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-border space-y-2">
          <div className="flex items-center gap-3 p-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">
                {userName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" data-testid="user-name">
                {userName}
              </p>
              <p className="text-xs text-muted-foreground">
                {userType === "admin" ? "Administrator" : "Customer"}
              </p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={onLogout}
            data-testid="button-logout"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <h1 className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Giftnix AI
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">
              {userName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Giftnix AI
                  </h2>
                  <p className="text-xs text-gray-500 font-medium">
                    {userType === "admin" ? "ADMIN PORTAL" : "USER PORTAL"}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {navItems.map((item) => (
                  <NavItem key={item.id} item={item} mobile />
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center gap-3 p-2 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {userName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-muted-foreground">
                      {userType === "admin" ? "Administrator" : "Customer"}
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
                  onClick={() => {
                    onLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  data-testid="button-mobile-logout"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}