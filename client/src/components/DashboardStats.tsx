import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Target, Zap, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: string;
  trendDirection?: "up" | "down";
  status?: "good" | "warning" | "critical";
}

function StatCard({ title, value, description, icon: Icon, trend, trendDirection = "up", status = "good" }: StatCardProps) {
  const getTrendColor = () => {
    if (title.includes("Fraud") && trendDirection === "down") return "text-green-600";
    if (title.includes("Fraud") && trendDirection === "up") return "text-red-600";
    return trendDirection === "up" ? "text-green-600" : "text-red-600";
  };

  const getStatusBadge = () => {
    switch (status) {
      case "good":
        return <Badge className="bg-green-100 text-green-800 text-xs">Excellent</Badge>;
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-800 text-xs">Monitor</Badge>;
      case "critical":
        return <Badge className="bg-red-100 text-red-800 text-xs">Alert</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/90 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-sm font-semibold text-gray-700" data-testid={`stat-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </CardTitle>
          {getStatusBadge()}
        </div>
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-3xl font-bold text-gray-900" data-testid={`stat-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {value}
        </div>
        <p className="text-sm text-gray-600" data-testid={`stat-desc-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        {trend && (
          <div className="flex items-center gap-2 mt-3 p-2 bg-gray-50 rounded-lg">
            {trendDirection === "up" ? (
              <ArrowUpRight className="h-4 w-4 text-green-600" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-600" />
            )}
            <span className={`text-sm font-medium ${getTrendColor()}`} data-testid={`stat-trend-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {trend}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface DashboardStatsProps {
  userType?: "user" | "admin";
}

export default function DashboardStats({ userType = "admin" }: DashboardStatsProps) {
  // Mock data - todo: remove mock functionality
  const stats = userType === "admin" ? [
    {
      title: "Total Transactions",
      value: "12,847",
      description: "Analyzed this month",
      icon: Target,
      trend: "+12.5% from last month",
      trendDirection: "up" as const,
      status: "good" as const
    },
    {
      title: "Fraud Detected",
      value: "23",
      description: "Blocked fraudulent attempts",
      icon: Shield,
      trend: "-8.2% from last month",
      trendDirection: "down" as const,
      status: "good" as const
    },
    {
      title: "Detection Accuracy",
      value: "99.8%",
      description: "Current model accuracy",
      icon: TrendingUp,
      trend: "+0.3% improvement",
      trendDirection: "up" as const,
      status: "good" as const
    },
    {
      title: "System Reliability",
      value: "99.9%",
      description: "Uptime this month",
      icon: Zap,
      trend: "100% SLA met",
      trendDirection: "up" as const,
      status: "good" as const
    }
  ] : [
    {
      title: "Gift Cards Purchased",
      value: "8",
      description: "This month",
      icon: Target,
      trend: "+3 from last month",
      trendDirection: "up" as const,
      status: "good" as const
    },
    {
      title: "Total Spent",
      value: "$245",
      description: "On gift cards",
      icon: TrendingUp,
      trend: "+$67 from last month",
      trendDirection: "up" as const,
      status: "good" as const
    },
    {
      title: "Account Security",
      value: "Excellent",
      description: "No fraud detected",
      icon: Shield,
      trend: "All transactions secure",
      trendDirection: "up" as const,
      status: "good" as const
    },
    {
      title: "Rewards Earned",
      value: "156",
      description: "Points this month",
      icon: Zap,
      trend: "+23 points earned",
      trendDirection: "up" as const,
      status: "good" as const
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}