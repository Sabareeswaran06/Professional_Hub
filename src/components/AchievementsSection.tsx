import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Star, Sparkles, Crown, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const achievements = [
  {
    title: "Paper Presentation Winner",
    description: "Awarded 2nd Prize for Paper Presentation at Dr. NGPIT.",
    icon: Trophy,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-500",
    year: "2026",
    badge: "Runner Up",
  },
  {
    title: "BlueGrid Smart Water App",
    description: "Second Prize for BlueGrid Smart Water Management Web App at NOVA 2K25, Jai Shriram Engineering College.",
    icon: Award,
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    year: "2025",
    badge: "2nd Place",
  },
  {
    title: "Academic Excellence",
    description: "Best Academic Record Award (Hostel Day 2025), First Rank Holder in Academics (2024–2025), Best Library Utilization Award (2024–2025).",
    icon: Crown,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    year: "2024–2025",
    badge: "Top Performer",
  },
  {
    title: "Hackathon Achievement",
    description: "Active hackathon participant with proven ability to build innovative solutions under pressure.",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    year: "2024–2026",
    badge: "Achiever",
  },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeading 
            title="Achievements & Recognition" 
            subtitle="Notable accomplishments from hackathons, academics, and competitions"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className={`group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient top bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className={`h-14 w-14 rounded-2xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-7 w-7 ${item.iconColor}`} />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs font-semibold bg-gradient-to-r ${item.color} text-white border-none`}
                      >
                        {item.badge}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg mb-2 leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Stats Row */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "4+", label: "Awards Won" },
              { value: "8.88", label: "CGPA" },
              { value: "2024-26", label: "Achievement Period" },
            ].map((stat) => (
              <div 
                key={stat.label}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
