import { useState } from 'react';
import Navigation from '../Navigation';

export default function NavigationExample() {
  const [currentSection, setCurrentSection] = useState("dashboard");
  const [userType, setUserType] = useState<"user" | "admin">("admin");

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleSectionChange = (section: string) => {
    console.log('Section changed to:', section);
    setCurrentSection(section);
  };

  return (
    <div className="h-screen">
      <div className="mb-4 p-4 bg-muted">
        <button 
          onClick={() => setUserType(userType === "admin" ? "user" : "admin")}
          className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded"
        >
          Switch to {userType === "admin" ? "User" : "Admin"} View
        </button>
      </div>
      
      <Navigation
        userType={userType}
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        onLogout={handleLogout}
        userName={userType === "admin" ? "Admin User" : "John Doe"}
      />
      
      <div className="lg:ml-64 p-6">
        <h2 className="text-xl font-semibold">Current Section: {currentSection}</h2>
        <p className="text-muted-foreground">Content for {currentSection} would appear here</p>
      </div>
    </div>
  );
}