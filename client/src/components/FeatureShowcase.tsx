import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Lock, 
  Clock, 
  CheckCircle, 
  Brain, 
  Globe 
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
  badge?: string;
}

interface FeatureShowcaseProps {
  variant?: "features" | "use-cases";
}

export default function FeatureShowcase({ variant = "features" }: FeatureShowcaseProps) {
  const features: Feature[] = [
    {
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms with 99.8% accuracy rate and continuous model improvement",
      icon: Brain,
      badge: "AI",
      benefits: [
        "Neural network analysis",
        "Real-time learning",
        "Pattern recognition"
      ]
    },
    {
      title: "Real-Time Processing",
      description: "Instant fraud analysis with sub-50ms response time for immediate threat detection",
      icon: Zap,
      badge: "FAST",
      benefits: [
        "Millisecond response",
        "24/7 monitoring",
        "Instant notifications"
      ]
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with military-level encryption and compliance standards",
      icon: Lock,
      badge: "SECURE",
      benefits: [
        "AES-256 encryption",
        "SOC 2 compliant",
        "Zero data breaches"
      ]
    },
    {
      title: "Smart Analytics",
      description: "Comprehensive insights and reporting with predictive analytics and trend analysis",
      icon: BarChart3,
      badge: "INSIGHTS",
      benefits: [
        "Live dashboards",
        "Predictive models",
        "Custom reporting"
      ]
    }
  ];

  const useCases: Feature[] = [
    {
      title: "Banking",
      description: "Protect customer accounts from unauthorized transactions and identity theft",
      icon: Shield,
      benefits: [
        "Account protection",
        "Transaction monitoring",
        "Risk assessment"
      ]
    },
    {
      title: "E-commerce",
      description: "Secure online shopping experiences with real-time fraud prevention",
      icon: Globe,
      benefits: [
        "Checkout protection",
        "Seller verification",
        "Chargeback prevention"
      ]
    },
    {
      title: "Digital Wallets",
      description: "Enhanced security for mobile payments and digital currency transactions",
      icon: Lock,
      benefits: [
        "Mobile security",
        "Biometric verification",
        "Transaction limits"
      ]
    },
    {
      title: "Payment Processors",
      description: "Comprehensive fraud detection for high-volume payment processing",
      icon: Clock,
      benefits: [
        "High throughput",
        "Scalable solutions",
        "Regulatory compliance"
      ]
    }
  ];

  const items = variant === "features" ? features : useCases;
  const title = variant === "features" ? "Platform Features" : "Use Cases";
  const subtitle = variant === "features" 
    ? "Advanced capabilities that make fraud detection seamless and effective"
    : "Industries and applications where our fraud detection system excels";

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <FeatureCard key={index} feature={item} />
        ))}
      </div>
    </div>
  );
}

interface FeatureCardProps {
  feature: Feature;
}

function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <Card className="hover:shadow-xl transition-all duration-300 group h-full border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-white" />
          </div>
          {feature.badge && (
            <Badge className="bg-blue-100 text-blue-800 text-xs font-semibold">
              {feature.badge}
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-xl font-bold text-gray-900 mb-2" data-testid={`feature-title-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
          {feature.title}
        </CardTitle>
        
        <CardDescription className="text-gray-600 leading-relaxed" data-testid={`feature-description-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
          {feature.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {feature.benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-sm"
              data-testid={`feature-benefit-${feature.title.toLowerCase().replace(/\s+/g, '-')}-${index}`}
            >
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}