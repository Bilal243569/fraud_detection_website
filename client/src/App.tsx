import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "login" | "dashboard">("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"user" | "admin">("user");
  const [userData, setUserData] = useState<any>(null);

  const handleNavigateToLogin = (type: "user" | "admin") => {
    setUserType(type);
    setCurrentPage("login");
  };

  const handleLogin = (type: "user" | "admin", data: any) => {
    setUserType(type);
    setUserData(data);
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
    console.log(`${type} logged in:`, data);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType("user");
    setUserData(null);
    setCurrentPage("landing");
    console.log("User logged out");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {currentPage === "landing" && (
          <LandingPage onNavigateToLogin={handleNavigateToLogin} />
        )}
        {currentPage === "login" && (
          <LoginPage onLogin={handleLogin} initialType={userType} />
        )}
        {currentPage === "dashboard" && (
          <DashboardPage 
            userType={userType}
            userData={userData}
            onLogout={handleLogout}
          />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
