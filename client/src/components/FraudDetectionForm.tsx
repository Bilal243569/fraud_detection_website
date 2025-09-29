import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, DollarSign, MapPin, Calendar, CreditCard } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface FraudPrediction {
  result: "Fraud" | "Not Fraud";
  confidence: number;
  reason: string;
}

export default function FraudDetectionForm() {
  const [formData, setFormData] = useState({
    amount: "",
    age: "",
    transactionType: "",
    location: "",
    hour: ""
  });

  const [prediction, setPrediction] = useState<FraudPrediction | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const transactionTypes = [
    "Credit Card Purchase",
    "Online Transfer",
    "ATM Withdrawal",
    "Mobile Payment",
    "Wire Transfer",
    "Gift Card Purchase"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    const amount = parseFloat(formData.amount);
    const age = parseInt(formData.age);
    
    if (!formData.amount.trim()) {
      newErrors.amount = "Transaction amount is required";
    } else if (amount < 0) {
      newErrors.amount = "Invalid transaction amount";
    }
    
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (age < 0) {
      newErrors.age = "Age cannot be negative";
    } else if (age > 90) {
      newErrors.age = "Age limit crossed";
    }
    
    if (!formData.transactionType) {
      newErrors.transactionType = "Transaction type is required";
    }
    
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fraud detection logic - todo: remove mock functionality
  const detectFraud = (amount: number, age: number, type: string, location: string): FraudPrediction => {
    let score = 0;
    let reasons = [];

    // High amount for young user
    if (amount > 5000 && age < 20) {
      score += 40;
      reasons.push("Suspicious high amount for young user");
    }

    // Very high transaction amount
    if (amount > 10000) {
      score += 30;
      reasons.push("Unusually high transaction amount");
    }

    // Suspicious transaction types
    if (type === "Wire Transfer" && amount > 1000) {
      score += 25;
      reasons.push("High-value wire transfer");
    }

    // International transactions
    if (location.toLowerCase().includes("international") || location.toLowerCase().includes("foreign")) {
      score += 20;
      reasons.push("International transaction");
    }

    // Late night transactions
    const hour = parseInt(formData.hour || "12");
    if ((hour >= 23 || hour <= 5) && amount > 500) {
      score += 15;
      reasons.push("Late night high-value transaction");
    }

    // Multiple small transactions (simulation)
    if (amount < 100 && Math.random() > 0.8) {
      score += 10;
      reasons.push("Pattern suspicious for card testing");
    }

    const isFraud = score >= 50;
    const confidence = Math.min(95, Math.max(60, score + Math.random() * 20));

    return {
      result: isFraud ? "Fraud" : "Not Fraud",
      confidence: Math.round(confidence),
      reason: isFraud ? reasons.join(", ") : "Transaction appears legitimate"
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsAnalyzing(true);
    setPrediction(null);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    const amount = parseFloat(formData.amount);
    const age = parseInt(formData.age);
    
    const result = detectFraud(amount, age, formData.transactionType, formData.location);
    setPrediction(result);
    setIsAnalyzing(false);

    console.log("Fraud detection result:", result);
  };

  const resetForm = () => {
    setFormData({
      amount: "",
      age: "",
      transactionType: "",
      location: "",
      hour: ""
    });
    setPrediction(null);
    setErrors({});
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          Fraud Detection Demo
        </CardTitle>
        <CardDescription>
          Enter transaction details to analyze fraud probability using our AI model
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Transaction Amount ($)
              </Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                data-testid="input-amount"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className={errors.amount ? "border-destructive" : ""}
              />
              {errors.amount && (
                <p className="text-sm text-destructive" data-testid="error-amount">
                  {errors.amount}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Customer Age</Label>
              <Input
                id="age"
                type="number"
                data-testid="input-age"
                placeholder="25"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className={errors.age ? "border-destructive" : ""}
              />
              {errors.age && (
                <p className="text-sm text-destructive" data-testid="error-age">
                  {errors.age}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Transaction Type</Label>
            <Select 
              value={formData.transactionType} 
              onValueChange={(value) => setFormData({ ...formData, transactionType: value })}
            >
              <SelectTrigger data-testid="select-transaction-type" className={errors.transactionType ? "border-destructive" : ""}>
                <SelectValue placeholder="Select transaction type" />
              </SelectTrigger>
              <SelectContent>
                {transactionTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.transactionType && (
              <p className="text-sm text-destructive" data-testid="error-transaction-type">
                {errors.transactionType}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <Input
                id="location"
                data-testid="input-location"
                placeholder="New York, USA"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className={errors.location ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
              />
              {errors.location && (
                <p className="text-sm text-destructive" data-testid="error-location">
                  {errors.location}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="hour" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Transaction Hour (0-23)
              </Label>
              <Input
                id="hour"
                type="number"
                min="0"
                max="23"
                data-testid="input-hour"
                placeholder="14"
                value={formData.hour}
                onChange={(e) => setFormData({ ...formData, hour: e.target.value })}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              type="submit" 
              disabled={isAnalyzing}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold disabled:opacity-50"
              data-testid="button-analyze"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Transaction"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={resetForm}
              data-testid="button-reset"
            >
              Reset
            </Button>
          </div>
        </form>

        {isAnalyzing && (
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
              <span className="text-sm text-muted-foreground">Processing transaction...</span>
            </div>
            <Progress value={66} className="w-full" />
          </div>
        )}

        {prediction && !isAnalyzing && (
          <div className="mt-6 p-4 rounded-lg border" data-testid="prediction-result">
            <div className="flex items-center gap-3 mb-3">
              {prediction.result === "Fraud" ? (
                <AlertTriangle className="h-5 w-5 text-destructive" />
              ) : (
                <CheckCircle className="h-5 w-5 text-chart-2" />
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold" data-testid="prediction-text">
                    Prediction: {prediction.result}
                  </span>
                  <Badge 
                    variant={prediction.result === "Fraud" ? "destructive" : "secondary"}
                    className={prediction.result === "Not Fraud" ? "bg-chart-2 text-primary-foreground" : ""}
                    data-testid="prediction-badge"
                  >
                    {prediction.confidence}% confidence
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1" data-testid="prediction-reason">
                  {prediction.reason}
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Confidence Score</span>
                <span data-testid="confidence-score">{prediction.confidence}%</span>
              </div>
              <Progress value={prediction.confidence} className="w-full" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}