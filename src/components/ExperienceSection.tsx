import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink, Building2, Award, Users, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    role: "Student Ambassador",
    company: "Microsoft",
    location: "Remote",
    type: "Current",
    period: "2025 – Present",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
    logo: "M",
    points: [
      "Conducted an Azure Fundamentals session for juniors, showcasing strong English communication skills",
      "Supported peers using Azure, GitHub, and VS Code",
      "Actively promoted Microsoft technologies and tools within the campus community",
    ],
    skills: ["Azure", "GitHub", "VS Code", "Public Speaking"],
  },
  {
    role: "Virtual Intern",
    company: "Infosys Springboard",
    location: "Remote",
    type: "Internship",
    period: "Aug 2025 – Oct 2025",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-600",
    logo: "I",
    points: [
      "Built a Smart E-Waste Management web app using Spring Boot and MySQL",
      "Implemented REST APIs for waste tracking and scheduling, improving efficiency by 35%",
      "Collaborated with cross-state team members to deliver a working prototype in 8 weeks",
    ],
    skills: ["Spring Boot", "MySQL", "REST APIs", "Team Collaboration"],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeading 
            title="Experience & Internships" 
            subtitle="Professional journey and hands-on learning"
          />

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-primary/30 rounded-full" />
              
              {experiences.map((exp, index) => (
                <div key={index} className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot with logo */}
                  <div className={`absolute left-2 md:left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center z-10 shadow-lg ring-4 ring-background`}>
                    <span className="text-white font-bold text-lg">{exp.logo}</span>
                  </div>

                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right md:mr-auto" : "md:pl-16 md:ml-auto"} md:w-[calc(50%-2rem)]`}>
                    <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
                      {/* Gradient top bar */}
                      <div className={`h-1 w-full bg-gradient-to-r ${exp.color}`} />
                      
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs font-semibold bg-gradient-to-r ${exp.color} text-white border-none`}
                          >
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </div>
                        </div>
                        
                        {/* Role & Company */}
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className={`flex items-center gap-1 text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-xs">• {exp.location}</span>
                        </div>
                        
                        {/* Points */}
                        <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {exp.points.map((point, j) => (
                            <li key={j} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                              <CheckCircle2 className={`h-4 w-4 text-primary shrink-0 mt-0.5 ${index % 2 === 0 ? "md:order-2" : ""}`} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Skills */}
                        <div className={`flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          {exp.skills.map((skill) => (
                            <Badge 
                              key={skill}
                              variant="outline" 
                              className="text-xs bg-primary/5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Summary Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { value: "2+", label: "Years Experience", icon: Briefcase },
                { value: "2", label: "Organizations", icon: Building2 },
                { value: "5+", label: "Skills Gained", icon: Code2 },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
                  >
                    <Icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
