import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Shield, 
  Users, 
  Eye, 
  BarChart3, 
  Zap, 
  TrendingUp,
  CheckCircle,
  Lock,
  Globe,
  CreditCard,
  Brain,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Building,
  ShoppingCart,
  Banknote,
  FileText,
  Star
} from "lucide-react";

interface LandingPageProps {
  onNavigateToLogin: (type: "user" | "admin") => void;
}

export default function LandingPage({ onNavigateToLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Giftnix AI
            </span>
            <div className="text-xs text-gray-500 font-medium">Fraud Detection System</div>
          </div>
        </div>
        
        <div className="flex space-x-8 text-gray-700">
          <a href="#features" className="hover:text-blue-600 transition-colors font-medium scroll-smooth">Features</a>
          <a href="#use-cases" className="hover:text-blue-600 transition-colors font-medium scroll-smooth">Use Cases</a>
          <a href="#about" className="hover:text-blue-600 transition-colors font-medium scroll-smooth">About</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors font-medium scroll-smooth">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Advanced AI
              </span>
              <br />
              <span className="text-gray-900">
                Fraud Detection
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Protect your financial ecosystem with cutting-edge artificial intelligence. Our enterprise-grade fraud detection system delivers real-time protection with industry-leading accuracy.
            </p>

            <div className="flex space-x-4">
              <Button 
                onClick={() => onNavigateToLogin("user")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold text-lg flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>User Portal</span>
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigateToLogin("admin")}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 font-semibold text-lg flex items-center space-x-2"
              >
                <Shield className="w-5 h-5" />
                <span>Admin Dashboard</span>
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Access your secure portal to purchase gift cards and manage transactions
            </p>

            <Button 
              onClick={() => onNavigateToLogin("user")}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 font-medium"
            >
              Access User Portal
            </Button>
          </div>

          {/* Right Side - Credit Card Visualization */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-96 h-64 perspective-1000">
              {/* Credit Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                {/* Card Background with Circuit Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/30 rounded-2xl"></div>
                
                {/* Digital Lines/Circuits */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-8 left-8 w-32 h-px bg-blue-400"></div>
                  <div className="absolute top-8 left-8 w-px h-16 bg-blue-400"></div>
                  <div className="absolute top-24 left-8 w-20 h-px bg-blue-400"></div>
                  <div className="absolute bottom-16 right-8 w-24 h-px bg-indigo-400"></div>
                  <div className="absolute bottom-16 right-8 w-px h-12 bg-indigo-400"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  {/* Top Section */}
                  <div className="flex justify-between items-start">
                    <div className="text-xs font-medium opacity-75">CARD TYPE</div>
                    <div className="text-xs font-medium opacity-75">BANK NAME</div>
                  </div>

                  {/* Middle Section - Chip and Numbers */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center text-xs font-bold text-black">
                        EMV
                      </div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white/40 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-2xl font-mono tracking-wider">
                      1234 5678 9012 3456
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex justify-between items-end text-sm">
                    <div>
                      <div className="text-xs opacity-75">CARDHOLDER NAME</div>
                      <div className="font-medium">JOHN DOE</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-75">VALID THRU</div>
                      <div className="font-medium">12/28</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl transform rotate-12 scale-110 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              Powerful Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Leading AI Fraud Detection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of features provides unmatched protection against fraud while ensuring seamless user experience and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-time Detection */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Real-time Monitoring</h3>
                <p className="text-gray-600">
                  Continuous transaction analysis with instant fraud detection and prevention in under 50ms response time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Machine Learning</Badge>
                  <Badge variant="secondary" className="text-xs">Real-time</Badge>
                </div>
              </CardContent>
            </Card>

            {/* AI Analytics */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI-Powered Analytics</h3>
                <p className="text-gray-600">
                  Advanced neural networks analyze behavioral patterns and transaction anomalies with 99.8% accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Neural Networks</Badge>
                  <Badge variant="secondary" className="text-xs">Pattern Recognition</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Secure Infrastructure */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Bank-Grade Security</h3>
                <p className="text-gray-600">
                  Military-grade encryption and SOC 2 compliance ensuring maximum data protection and privacy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">AES-256</Badge>
                  <Badge variant="secondary" className="text-xs">SOC 2</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Dynamic Risk Assessment</h3>
                <p className="text-gray-600">
                  Adaptive risk scoring with customizable thresholds and intelligent decision-making algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Risk Scoring</Badge>
                  <Badge variant="secondary" className="text-xs">Adaptive</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Global Coverage */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Global Coverage</h3>
                <p className="text-gray-600">
                  Worldwide fraud protection with regional compliance and localized fraud pattern recognition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Global</Badge>
                  <Badge variant="secondary" className="text-xs">Compliance</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Advanced Reporting</h3>
                <p className="text-gray-600">
                  Comprehensive dashboards with real-time metrics, customizable reports, and actionable insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Dashboards</Badge>
                  <Badge variant="secondary" className="text-xs">Analytics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 px-4 py-2">
              Industry Applications
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From e-commerce to banking, our AI fraud detection system adapts to various industry needs, providing specialized protection for different business models.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce & Retail</h3>
                  <p className="text-gray-600">
                    Protect online transactions, prevent account takeovers, and detect fraudulent purchases in real-time. Reduce chargebacks by up to 80% while maintaining smooth checkout experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Banknote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Services</h3>
                  <p className="text-gray-600">
                    Secure banking transactions, credit card processing, and loan applications. Comply with PCI DSS and banking regulations while detecting sophisticated financial fraud patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gift Card Marketplaces</h3>
                  <p className="text-gray-600">
                    Specialized protection for gift card transactions, preventing card fraud, reseller scams, and stolen card usage. Monitor gift card ecosystem health in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-gray-900">Fraud Prevention Stats</h4>
                  <Badge className="bg-green-100 text-green-800">Live Data</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Transactions Analyzed</span>
                    <span className="font-bold text-blue-600">2.4M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fraud Prevented</span>
                    <span className="font-bold text-green-600">$12.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">False Positives</span>
                    <span className="font-bold text-orange-600">&lt;0.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-bold text-purple-600">47ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.8%</div>
              <div className="text-gray-600">Detection Accuracy</div>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">
              About Giftnix AI
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading the Future of Fraud Detection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded by cybersecurity experts and AI researchers, Giftnix AI is dedicated to creating the most advanced fraud detection solutions that protect businesses and consumers worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize advanced fraud protection by making enterprise-grade AI security accessible to businesses of all sizes. We believe that every transaction should be secure, every user should be protected, and every business should have access to the best fraud detection technology available.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation First</h4>
                    <p className="text-gray-600">Constantly pushing the boundaries of AI and machine learning in fraud detection.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Obsessed</h4>
                    <p className="text-gray-600">Every feature we build is designed with our customers' success and security in mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparency & Trust</h4>
                    <p className="text-gray-600">Building trust through transparent processes, explainable AI, and open communication.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">2018</div>
                    <div className="text-gray-600 text-sm">Founded</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                    <div className="text-gray-600 text-sm">Team Members</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">Global</div>
                    <div className="text-gray-600 text-sm">Presence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team combines decades of experience in cybersecurity, artificial intelligence, and financial technology to deliver industry-leading fraud protection solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. John Smith</h4>
              <p className="text-blue-600 font-medium mb-2">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">Former CISO at Fortune 500 fintech companies with 15+ years in cybersecurity.</p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">AL</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Anna Lee</h4>
              <p className="text-green-600 font-medium mb-2">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">AI researcher with PhD in Machine Learning, former Google AI engineer.</p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">MJ</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Michael Johnson</h4>
              <p className="text-purple-600 font-medium mb-2">VP of Engineering</p>
              <p className="text-gray-600 text-sm">Scaling expert with background in building mission-critical financial systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact our experts to learn how Giftnix AI can protect your transactions and prevent fraud. Get a personalized demo and security assessment for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Available 24/7 for enterprise clients</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                      <p className="text-gray-600">support@giftnixai.com</p>
                      <p className="text-sm text-gray-500">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Headquarters</h4>
                      <p className="text-gray-600">123 Innovation Drive</p>
                      <p className="text-gray-600">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      onClick={() => onNavigateToLogin("user")}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Start Free Trial
                    </Button>
                    <Button 
                      onClick={() => onNavigateToLogin("admin")}
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="john.doe@company.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input 
                    placeholder="Your Company Inc."
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help you?
                  </label>
                  <Textarea 
                    placeholder="Tell us about your fraud detection needs, transaction volume, and any specific requirements..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Giftnix AI</span>
                  <div className="text-sm text-gray-400">Fraud Detection System</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Leading the future of fraud detection with AI-powered security solutions. 
                Protecting businesses and consumers worldwide with enterprise-grade technology.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <span className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SOC 2 Certified</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Enterprise Ready</span>
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fraud Detection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Risk Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transaction Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">24/7 Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Giftnix AI. All rights reserved. Powered by advanced machine learning.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
