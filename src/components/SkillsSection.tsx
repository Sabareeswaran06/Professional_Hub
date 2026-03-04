import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Layers, Wrench, Lightbulb, Star, Sparkles, Zap, Target } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    skills: [
      { name: "React", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    skills: [
      { name: "Leadership", level: 88 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 92 },
      { name: "Team Collaboration", level: 95 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeading 
            title="Skills & Expertise" 
            subtitle="Technologies and competencies I've mastered"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((cat, index) => (
              <Card 
                key={cat.title} 
                className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`h-14 w-14 rounded-2xl ${cat.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <cat.icon className={`h-7 w-7 ${cat.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg font-bold bg-gradient-to-r {cat.color} bg-clip-text text-transparent">
                    {cat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000 ease-out`}
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Featured Skills Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["React", "Node.js", "Java", "Git", "Problem Solving", "Leadership"].map((skill) => (
              <Badge 
                key={skill}
                className="px-4 py-2 text-sm bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 text-foreground border-none transition-all duration-300 hover:scale-105"
              >
                <Star className="w-3 h-3 mr-1 text-primary" />
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
