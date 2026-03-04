import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, School, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";

const education = [
  {
    degree: "B.E Computer Science and Engineering",
    school: "Jai Shriram Engineering College",
    location: "Tiruppur, Tamil Nadu",
    period: "2023 – 2027",
    status: "Pursuing",
    details: "CGPA: 8.88 / 10",
    gpa: "8.88 / 10",
    icon: GraduationCap,
    color: "from-primary to-purple-600",
    highlights: ["First Rank Holder", "Best Library Utilization"],
  },
  {
    degree: "Higher Secondary Education (HSC)",
    school: "Government Higher Secondary School",
    location: "Tiruppur, Tamil Nadu",
    period: "2022 – 2023",
    status: "Completed",
    details: "PCM with Computer Science",
    gpa: "83%",
    icon: School,
    color: "from-accent to-teal-600",
    highlights: ["Computer Science", "PCM Stream"],
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeading 
            title="Education Journey" 
            subtitle="Academic background and qualifications"
          />

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/30 rounded-full" />
              
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <div key={index} className="relative mb-8 last:mb-0">
                    {/* Timeline dot */}
                    <div className={`absolute left-6 md:left-10 w-5 h-5 rounded-full bg-gradient-to-r ${edu.color} ring-4 ring-background z-10`} />
                    
                    <Card className="ml-16 md:ml-20 border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      {/* Gradient top bar */}
                      <div className={`h-1 w-full bg-gradient-to-r ${edu.color}`} />
                      
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          {/* Icon */}
                          <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            {/* Header */}
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge 
                                variant="secondary"
                                className={`text-xs font-semibold bg-gradient-to-r ${edu.color} text-white border-none`}
                              >
                                {edu.status}
                              </Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="w-3.5 h-3.5" />
                                {edu.period}
                              </div>
                            </div>
                            
                            {/* Degree */}
                            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                              {edu.degree}
                            </h3>
                            
                            {/* School */}
                            <div className="flex items-center gap-1 text-muted-foreground mb-3">
                              <MapPin className="w-4 h-4" />
                              <span className="font-medium">{edu.school}</span>
                              <span className="text-xs">• {edu.location}</span>
                            </div>
                            
                            {/* Highlights */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {edu.highlights.map((highlight) => (
                                <Badge 
                                  key={highlight}
                                  variant="outline" 
                                  className="text-xs"
                                >
                                  <Award className="w-3 h-3 mr-1 text-amber-500" />
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                            
                            {/* GPA/Details */}
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                              <BookOpen className="w-5 h-5 text-primary" />
                              <span className="text-sm">
                                <span className="font-semibold">{edu.details}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
            
            {/* Current Learning */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">Continuous Learning</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently expanding knowledge in advanced React patterns, cloud computing, 
                and system design. Passionate about staying updated with the latest technologies 
                and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
