import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashboardStats from "@/components/DashboardStats";
import FraudDetectionForm from "@/components/FraudDetectionForm";
import FraudAnalyticsCharts from "@/components/FraudAnalyticsCharts";
import GiftCardMarketplace from "@/components/GiftCardMarketplace";
import FeatureShowcase from "@/components/FeatureShowcase";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

interface DashboardPageProps {
  userType: "user" | "admin";
  userData: any;
  onLogout: () => void;
}

export default function DashboardPage({ userType, userData, onLogout }: DashboardPageProps) {
  const [currentSection, setCurrentSection] = useState("dashboard");

  const handlePurchase = (card: any, amount: number) => {
    console.log(`Purchase processed: ${card.name} for $${amount}`);
  };

  const renderContent = () => {
    switch (currentSection) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {userType === "admin" ? "Admin Dashboard" : "Welcome Back"}
              </h1>
              <p className="text-muted-foreground mb-6">
                {userType === "admin" 
                  ? "Monitor fraud detection system performance and manage security"
                  : "Manage your account and purchase gift cards securely"
                }
              </p>
            </div>
            
            <DashboardStats userType={userType} />
            
            {userType === "admin" && (
              <>
                <div className="grid gap-6 lg:grid-cols-2">
                  <FraudDetectionForm />
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Quick Actions</h3>
                    <FeatureShowcase variant="features" />
                  </div>
                </div>
              </>
            )}
            
            {userType === "user" && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold">Featured Gift Cards</h3>
                <GiftCardMarketplace onPurchase={handlePurchase} />
              </div>
            )}
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                Comprehensive fraud detection analytics and insights
              </p>
            </div>
            <FraudAnalyticsCharts userType={userType} />
          </div>
        );

      case "fraud-detection":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Fraud Detection</h1>
              <p className="text-muted-foreground">
                Analyze transactions for potential fraud using our AI model
              </p>
            </div>
            <div className="max-w-4xl">
              <FraudDetectionForm />
            </div>
          </div>
        );

      case "marketplace":
      case "my-purchases":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {currentSection === "marketplace" ? "Gift Card Marketplace" : "My Purchases"}
              </h1>
              <p className="text-muted-foreground">
                {currentSection === "marketplace" 
                  ? "Browse and purchase gift cards from your favorite brands"
                  : "View your transaction history and purchased gift cards"
                }
              </p>
            </div>
            <GiftCardMarketplace onPurchase={handlePurchase} />
          </div>
        );

      case "transactions":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Transaction Management</h1>
              <p className="text-muted-foreground">
                Monitor and analyze all platform transactions
              </p>
            </div>
            <FraudAnalyticsCharts userType={userType} />
          </div>
        );

      case "users":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">User Management</h1>
              <p className="text-muted-foreground">
                Manage user accounts and security settings
              </p>
            </div>
            <TeamSection />
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Security Center</h1>
              <p className="text-muted-foreground">
                Your account security status and fraud protection settings
              </p>
            </div>
            <FeatureShowcase variant="features" />
          </div>
        );

      case "reports":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
              <p className="text-muted-foreground">
                Generate comprehensive reports on fraud detection performance
              </p>
            </div>
            <FraudAnalyticsCharts userType={userType} />
          </div>
        );

      case "team":
        return (
          <div className="space-y-6">
            <TeamSection />
          </div>
        );

      case "support":
        return (
          <div className="space-y-6">
            <ContactSection />
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account preferences and security settings
              </p>
            </div>
            <FeatureShowcase variant="use-cases" />
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
              <p className="text-muted-foreground">
                The requested section could not be found.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation
        userType={userType}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        onLogout={onLogout}
        userName={userData?.name || "User"}
      />
      
      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-6 pb-20 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-40 left-20 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            {renderContent()}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}