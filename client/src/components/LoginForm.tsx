import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Lock, User, CreditCard, Calendar, KeyRound, CheckCircle, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LoginFormProps {
  type: "user" | "admin";
  onLogin: (credentials: any) => void;
  onSwitchType: () => void;
}

export default function LoginForm({ type, onLogin, onSwitchType }: LoginFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    password: "",
    humanVerified: false
  });

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (type === "user") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
      if (!formData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";
    }
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.humanVerified) newErrors.humanVerified = "Please verify you are human";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowOtp(true);
      console.log("SMS verification sent");
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "1234") {
      onLogin({ ...formData, type });
      console.log("Login successful");
    } else {
      setErrors({ otp: "Invalid verification code" });
    }
  };

  const isUser = type === "user";

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative z-10">
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Giftnix AI
                </h1>
                <div className="text-xs text-gray-500 font-medium">SECURE INSIGHT</div>
              </div>
            </div>
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold text-gray-900">
                {isUser ? "🔐 Secure Login" : "⚡ Admin Access"}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {isUser ? "Access your protected account with enterprise-grade security" : "Administrative dashboard with advanced security controls"}
              </CardDescription>
              <div className="flex justify-center">
                <Badge className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1">
                  🛡️ Bank-Grade Encryption
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {!showOtp ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {isUser ? "Cardholder Name" : "Admin Name"}
                  </Label>
                  <Input
                    id="name"
                    data-testid="input-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
                  />
                  {errors.name && <p className="text-sm text-destructive" data-testid="error-name">{errors.name}</p>}
                </div>

                {isUser && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        data-testid="input-card-number"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className={errors.cardNumber ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
                      />
                      {errors.cardNumber && <p className="text-sm text-destructive" data-testid="error-card-number">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Expiry (MM/YY)
                        </Label>
                        <Input
                          id="expiryDate"
                          data-testid="input-expiry"
                          placeholder="12/25"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                          className={errors.expiryDate ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
                        />
                        {errors.expiryDate && <p className="text-sm text-destructive" data-testid="error-expiry">{errors.expiryDate}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="flex items-center gap-2">
                          <KeyRound className="h-4 w-4" />
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          data-testid="input-cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          className={errors.cvv ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
                        />
                        {errors.cvv && <p className="text-sm text-destructive" data-testid="error-cvv">{errors.cvv}</p>}
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    data-testid="input-password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={errors.password ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
                  />
                  {errors.password && <p className="text-sm text-destructive" data-testid="error-password">{errors.password}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="humanVerified"
                    data-testid="checkbox-human-verify"
                    checked={formData.humanVerified}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, humanVerified: checked === true })
                    }
                  />
                  <Label htmlFor="humanVerified" className="text-sm">
                    Verify you are a human
                  </Label>
                </div>
                {errors.humanVerified && <p className="text-sm text-destructive" data-testid="error-human-verify">{errors.humanVerified}</p>}

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold" data-testid="button-login">
                  Login
                </Button>

                <div className="text-center">
                  <Button variant="ghost" onClick={onSwitchType} data-testid="button-switch-type">
                    Switch to {isUser ? "Admin" : "User"} Login
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground">
                    A verification code has been sent to your number. Enter it to proceed.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="otp">Verification Code</Label>
                  <Input
                    id="otp"
                    data-testid="input-otp"
                    placeholder="1234"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className={errors.otp ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
                  />
                  {errors.otp && <p className="text-sm text-destructive" data-testid="error-otp">{errors.otp}</p>}
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold" data-testid="button-verify-otp">
                  Verify Code
                </Button>
                
                <Button 
                  variant="ghost" 
                  onClick={() => setShowOtp(false)} 
                  className="w-full"
                  data-testid="button-back-to-login"
                >
                  Back to Login
                </Button>
              </form>
            )}

            <div className="mt-6 p-4 bg-muted rounded-md">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>This is a simulation. No real banking data is stored.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Enhanced Branding */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 items-center justify-center p-12 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="absolute top-20 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-white/10 rounded-full"></div>
        </div>

        <div className="text-center text-white relative z-10 max-w-md">
          <div className="mb-8">
            <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Shield className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Advanced Fraud
              <br />
              <span className="text-blue-200">Detection System</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Enterprise-grade AI security protecting millions of transactions worldwide
            </p>
          </div>

          {/* Feature highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-blue-100">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Real-time threat detection</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-100">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Military-grade encryption</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-100">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Sub-second response time</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">99.8%</div>
              <div className="text-xs text-blue-200">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">&lt;50ms</div>
              <div className="text-xs text-blue-200">Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-blue-200">Protection</div>
            </div>
          </div>

          <div className="mt-8 text-xs text-blue-200">
            🏆 Trusted by 10,000+ businesses worldwide
          </div>
        </div>
      </div>
    </div>
  );
}