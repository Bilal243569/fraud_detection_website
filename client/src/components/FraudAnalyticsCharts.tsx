import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, PieChart as PieChartIcon, BarChart3 } from "lucide-react";

interface FraudAnalyticsChartsProps {
  userType?: "user" | "admin";
}

export default function FraudAnalyticsCharts({ userType = "admin" }: FraudAnalyticsChartsProps) {
  // Mock data - todo: remove mock functionality
  const fraudVsLegitimate = [
    { name: "Legitimate", value: 98.2, count: 12624, color: "hsl(var(--chart-2))" },
    { name: "Fraudulent", value: 1.8, count: 223, color: "hsl(var(--destructive))" }
  ];

  const monthlyTrends = [
    { month: "Jan", fraud: 15, legitimate: 1200, accuracy: 99.1 },
    { month: "Feb", fraud: 22, legitimate: 1450, accuracy: 98.8 },
    { month: "Mar", fraud: 18, legitimate: 1380, accuracy: 99.3 },
    { month: "Apr", fraud: 12, legitimate: 1520, accuracy: 99.6 },
    { month: "May", fraud: 28, legitimate: 1650, accuracy: 98.9 },
    { month: "Jun", fraud: 23, legitimate: 1580, accuracy: 99.2 }
  ];

  const userTransactionData = [
    { month: "Jan", purchases: 2, amount: 45 },
    { month: "Feb", purchases: 1, amount: 25 },
    { month: "Mar", purchases: 3, amount: 75 },
    { month: "Apr", purchases: 2, amount: 50 },
    { month: "May", purchases: 4, amount: 95 },
    { month: "Jun", purchases: 3, amount: 70 }
  ];

  const transactionTypes = [
    { type: "Credit Card", count: 8945, percentage: 69.6 },
    { type: "Online Transfer", count: 2134, percentage: 16.6 },
    { type: "Mobile Payment", count: 1245, percentage: 9.7 },
    { type: "Wire Transfer", count: 523, percentage: 4.1 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}
              {entry.name === "accuracy" && "%"}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (userType === "user") {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              My Purchase History
            </CardTitle>
            <CardDescription>Gift card purchases over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userTransactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="purchases" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Spending Trends
            </CardTitle>
            <CardDescription>Monthly spending on gift cards</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userTransactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--chart-2))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* First Row - Pie Chart and Detection Accuracy */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5 text-primary" />
              Fraud vs Legitimate Transactions
            </CardTitle>
            <CardDescription>Distribution of transaction types this month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fraudVsLegitimate}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {fraudVsLegitimate.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="mt-4 space-y-2">
              {fraudVsLegitimate.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium" data-testid={`chart-value-${item.name.toLowerCase()}`}>
                    {item.count.toLocaleString()} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Detection Accuracy Trends
            </CardTitle>
            <CardDescription>Model accuracy over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[98, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Second Row - Bar Chart and Transaction Types */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Monthly Fraud Detection
            </CardTitle>
            <CardDescription>Fraud cases detected per month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="fraud" fill="hsl(var(--destructive))" />
                <Bar dataKey="legitimate" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transaction Types</CardTitle>
            <CardDescription>Distribution by payment method</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactionTypes.map((type, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium" data-testid={`transaction-type-${index}`}>
                      {type.type}
                    </span>
                    <span className="text-sm text-muted-foreground" data-testid={`transaction-count-${index}`}>
                      {type.count.toLocaleString()} ({type.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${type.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}