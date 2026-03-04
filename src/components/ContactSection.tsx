import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send, MapPin, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sabareeswaran1676@gmail.com",
    href: "mailto:sabareeswaran1676@gmail.com",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tamil Nadu, India",
    href: "#",
    color: "from-blue-500 to-cyan-500",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sabareeswaran06",
    username: "@sabareeswaran06",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sabareeswaran-s16",
    username: "sabareeswaran-s16",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRRuBaHV2TVo7ys5ezjvmUkLacvzEl_Gyhs-4FXwYrAYHCKJ132M7lpQwgUOZ_514AFA/exec";
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          timestamp: new Date().toISOString(),
        }),
      });
      
      if (!response.ok) throw new Error("Failed to send");

      toast({ 
        title: "Message sent!", 
        description: "Thank you for reaching out. I'll get back to you soon." 
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ 
        title: "Error sending message", 
        description: "Please try again or email me directly.",
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeading title="Get in Touch" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 -mt-6">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
          </p>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Contact Info
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <a
                      key={i}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-xl bg-background/50 hover:bg-background transition-all group"
                    >
                      <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium truncate">{info.value}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50">
                <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center gap-2 p-3 rounded-xl bg-background hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 border border-border/50 hover:border-primary/30 transition-all group"
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-xs font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-3 border-none shadow-xl bg-gradient-to-br from-card to-muted/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-xl">Send a Message</h3>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Send className="h-4 w-4 text-white" />
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Your Name</label>
                      <Input
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-11 bg-background/50 border-border/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">Your Email</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 bg-background/50 border-border/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Your Message</label>
                    <Textarea
                      placeholder="Tell me about your project or just say hi..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all text-base font-medium disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
