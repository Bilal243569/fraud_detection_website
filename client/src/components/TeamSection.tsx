import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  initials: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export default function TeamSection() {
  // Mock data - todo: remove mock functionality
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead AI Researcher",
      description: "PhD in Machine Learning with 8+ years in fraud detection algorithms",
      skills: ["Machine Learning", "Neural Networks", "Python"],
      initials: "SC",
      email: "sarah.chen@giftnix.ai",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Alex Rodriguez",
      role: "Senior Data Scientist",
      description: "Expert in statistical modeling and real-time analytics",
      skills: ["Data Science", "Statistics", "R"],
      initials: "AR",
      email: "alex.rodriguez@giftnix.ai",
      linkedin: "#"
    },
    {
      name: "Emily Wang",
      role: "Security Engineer",
      description: "Cybersecurity specialist focused on payment system protection",
      skills: ["Cybersecurity", "Encryption", "Java"],
      initials: "EW",
      email: "emily.wang@giftnix.ai",
      github: "#"
    },
    {
      name: "Michael Brooks",
      role: "Full Stack Developer",
      description: "Building scalable web applications for fraud detection systems",
      skills: ["React", "Node.js", "TypeScript"],
      initials: "MB",
      email: "michael.brooks@giftnix.ai",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      description: "Driving product strategy and user experience for fraud prevention",
      skills: ["Product Strategy", "UX Design", "Analytics"],
      initials: "LT",
      email: "lisa.thompson@giftnix.ai",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      description: "Ensuring reliable infrastructure for high-availability fraud detection",
      skills: ["AWS", "Docker", "Kubernetes"],
      initials: "DK",
      email: "david.kim@giftnix.ai",
      github: "#"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dedicated experts in AI, cybersecurity, and fraud prevention working together 
          to protect your transactions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="hover-elevate group">
      <CardHeader className="text-center pb-3">
        <Avatar className="h-20 w-20 mx-auto mb-4">
          <AvatarFallback className="text-lg font-semibold">
            {member.initials}
          </AvatarFallback>
        </Avatar>
        
        <CardTitle className="text-lg" data-testid={`team-member-name-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
          {member.name}
        </CardTitle>
        
        <CardDescription className="font-medium text-primary" data-testid={`team-member-role-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
          {member.role}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground text-center" data-testid={`team-member-description-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
          {member.description}
        </p>
        
        <div className="flex flex-wrap gap-1 justify-center">
          {member.skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs"
              data-testid={`team-member-skill-${member.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-center gap-2">
          {member.email && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              data-testid={`team-member-email-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Mail className="h-4 w-4" />
            </Button>
          )}
          
          {member.linkedin && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              data-testid={`team-member-linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          )}
          
          {member.github && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              data-testid={`team-member-github-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Github className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}