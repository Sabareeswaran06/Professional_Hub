import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Heart, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const aboutCards = [
  {
    title: "Who I Am",
    icon: User,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    description: "A passionate Computer Science and Engineering student who enjoys building practical web applications and solving real-world problems with clean, maintainable code.",
  },
  {
    title: "My Goal",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    description: "To contribute to innovative and challenging projects, grow as a software engineer, and deliver solutions that create measurable impact in the tech industry.",
  },
  {
    title: "What I Love",
    icon: Heart,
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10",
    iconColor: "text-red-500",
    description: "Hackathons, building full-stack products, learning new technologies (cloud and GenAI), and leading/mentoring peers through workshops and community sessions.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeading 
            title="About Me" 
            subtitle="Passionate developer, continuous learner, and tech enthusiast"
          />

          {/* About Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {aboutCards.map((card, index) => (
              <Card 
                key={card.title} 
                className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${card.color}`} />
                
                <CardContent className="p-6">
                  <div className={`h-14 w-14 rounded-2xl ${card.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`h-7 w-7 ${card.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Location & Availability */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Tiruppur, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-emerald-600 font-medium">Available for Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
