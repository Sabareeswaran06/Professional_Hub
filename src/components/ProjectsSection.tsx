import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "BlueGrid Web Application",
    description:
      "Built a full-stack app for community water issue reporting with real-time dashboards. Managed updates, scheduling, residents, panchayat officers, technicians, and water flow controllers—reducing resolution time by 40%.",
    tech: ["React", "Node.js", "PostgreSQL", "Netlify", "Railway", "Neon"],
    image: "/projects/bluegrid.jpeg",
  },
  {
    title: "College Asset Management",
    description:
      "Developed a web system to manage, track, and report college assets with real-time updates and easy alteration. Integrated Node.js with PostgreSQL—reducing manual record keeping and improving staff efficiency by 45%.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
    image: "/projects/college-asset.jpeg",
  },
  {
    title: "Smart E-Waste Management",
    description:
      "Built during Infosys Springboard Virtual Internship using Spring Boot and MySQL. Developed REST APIs for waste tracking and scheduling—improving efficiency by 35%.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    image: "/projects/ewaste.jpeg",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeading title="Projects" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <Card key={i} className="group overflow-hidden border-none shadow-none bg-transparent hover:bg-muted/50 transition-all duration-500 rounded-3xl">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted group-hover:shadow-2xl transition-all duration-500">
                    {/* Project Image */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={e => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* Fallback gradient when image doesn't exist */}
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl font-bold text-primary">{project.title.charAt(0)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Add: public{project.image}</p>
                      </div>
                    </div>
                    {/* Hover overlay with logo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <span className="text-sm font-semibold text-foreground">{project.title}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{project.title}</h3>
                      <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 bg-muted px-2.5 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
