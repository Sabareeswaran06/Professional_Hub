import { useEffect, useState, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, Send, Code2, Cpu, Database, Globe, Layers, Terminal, Braces, Workflow, Sparkles, Binary } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ROLES = [
  "Software Engineer",
  "Hackathon Achiever",
  "Student Ambassador @ Microsoft",
  "Full Stack Developer",
  "Problem Solver",
];

const HeroSection = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const [displayedRole, setDisplayedRole] = useState("");
  const fullName = "Sabareeswaran S";
  const nameIndexRef = useRef(0);
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  // Simple typing animation for name
  useEffect(() => {
    const interval = setInterval(() => {
      if (nameIndexRef.current < fullName.length) {
        nameIndexRef.current += 1;
        setDisplayedName(fullName.slice(0, nameIndexRef.current));
      } else {
        clearInterval(interval);
        setNameComplete(true);
      }
    }, 150); // Slower: 150ms per character

    return () => clearInterval(interval);
  }, [fullName]);

  // Simple typing animation for roles with pause
  useEffect(() => {
    if (!nameComplete) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    
    const tick = () => {
      const currentRole = ROLES[roleIndexRef.current];
      
      if (!isDeletingRef.current) {
        // Typing phase
        if (charIndexRef.current < currentRole.length) {
          charIndexRef.current += 1;
          setDisplayedRole(currentRole.slice(0, charIndexRef.current));
          timeoutId = setTimeout(tick, 80); // Type speed
        } else {
          // Pause before deleting (1.5 seconds)
          timeoutId = setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, 1500);
        }
      } else {
        // Deleting phase
        if (charIndexRef.current > 0) {
          charIndexRef.current -= 1;
          setDisplayedRole(currentRole.slice(0, charIndexRef.current));
          timeoutId = setTimeout(tick, 40); // Delete speed (faster)
        } else {
          // Move to next role
          isDeletingRef.current = false;
          roleIndexRef.current = (roleIndexRef.current + 1) % ROLES.length;
          timeoutId = setTimeout(tick, 500); // Pause before next role
        }
      }
    };

    timeoutId = setTimeout(tick, 500);

    return () => clearTimeout(timeoutId);
  }, [nameComplete]);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid-slate-100/[0.03] bg-[bottom_1px_center] dark:bg-grid-slate-700/[0.05]" />
      
      {/* Floating Tech Icons - Left Side */}
      <div className="absolute left-4 md:left-12 top-1/4 flex flex-col gap-6 opacity-20 dark:opacity-15">
        <div className="animate-float-slow hover:opacity-60 transition-opacity duration-300">
          <Code2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </div>
        <div className="animate-float-medium ml-8 hover:opacity-60 transition-opacity duration-300">
          <Cpu className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
        </div>
        <div className="animate-float-fast hover:opacity-60 transition-opacity duration-300">
          <Database className="w-7 h-7 md:w-9 md:h-9 text-accent" />
        </div>
        <div className="animate-float-slow ml-6 hover:opacity-60 transition-opacity duration-300">
          <Terminal className="w-5 h-5 md:w-7 md:h-7 text-orange-500" />
        </div>
      </div>
      
      {/* Floating Tech Icons - Right Side */}
      <div className="absolute right-4 md:right-12 top-1/3 flex flex-col gap-6 opacity-20 dark:opacity-15">
        <div className="animate-float-medium hover:opacity-60 transition-opacity duration-300">
          <Globe className="w-7 h-7 md:w-9 md:h-9 text-blue-500" />
        </div>
        <div className="animate-float-fast -ml-4 hover:opacity-60 transition-opacity duration-300">
          <Layers className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />
        </div>
        <div className="animate-float-slow hover:opacity-60 transition-opacity duration-300">
          <Braces className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />
        </div>
        <div className="animate-float-medium ml-4 hover:opacity-60 transition-opacity duration-300">
          <Workflow className="w-5 h-5 md:w-7 md:h-7 text-indigo-500" />
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute left-1/4 bottom-1/4 opacity-15 dark:opacity-10 animate-pulse-slow">
        <Binary className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute right-1/4 top-1/5 opacity-15 dark:opacity-10 animate-pulse-slow delay-1000">
        <Sparkles className="w-10 h-10 text-purple-500" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-primary via-purple-500 to-accent rounded-full blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            <Avatar className="h-40 w-40 md:h-48 md:w-48 border-4 border-background/80 shadow-2xl relative ring-4 ring-primary/20">
              <AvatarImage src="/profile_img.jpeg" alt="Sabareeswaran S" />
              <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
                SS
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-display leading-[1.1] transition-opacity duration-300">
              <span className="inline-block min-w-[1ch]">{displayedName || "\u00A0"}</span>
              <span className="inline-block w-[3px] h-[0.85em] bg-gradient-to-b from-primary to-accent ml-1 align-middle animate-pulse" />
            </h1>
            
            <div className="h-14 md:h-16 flex items-center justify-center overflow-hidden">
              <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent bg-[length:200%_auto] animate-gradient font-semibold min-h-[1.5em]">
                  {displayedRole || "\u00A0"}
                </span>
                <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Dynamic software engineer and hackathon achiever with strong academic performance, proven leadership abilities, and effective communication skills—eager to contribute to innovative and challenging projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all" asChild>
              <a href="#projects">Explore Work</a>
            </Button>
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-400 hover:via-orange-400 hover:to-red-400 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all" asChild>
              <a href="/resume.pdf" download="Sabareeswaran_S_Resume.pdf" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/sabareeswaran06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white hover:text-white shadow-lg shadow-gray-900/30 hover:shadow-xl hover:shadow-gray-900/50 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/sabareeswaran-s16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-[#0077B5] to-[#005885] hover:from-[#0088cc] hover:to-[#006699] text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/50 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sabareeswaran1676@gmail.com"
              className="p-3 rounded-full bg-gradient-to-br from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity [animation-duration:1.8s]">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </div>
    </section>
  );
};

export default HeroSection;
