import { useState } from "react";
import LoginForm from "@/components/LoginForm";

interface LoginPageProps {
  onLogin: (userType: "user" | "admin", userData: any) => void;
  initialType?: "user" | "admin";
}

export default function LoginPage({ onLogin, initialType = "user" }: LoginPageProps) {
  const [loginType, setLoginType] = useState<"user" | "admin">(initialType);

  const handleLogin = (credentials: any) => {
    onLogin(credentials.type, credentials);
  };

  const handleSwitchType = () => {
    setLoginType(loginType === "user" ? "admin" : "user");
  };

  return (
    <LoginForm 
      type={loginType}
      onLogin={handleLogin}
      onSwitchType={handleSwitchType}
    />
  );
}