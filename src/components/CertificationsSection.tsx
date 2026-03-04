import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink, X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const certifications = [
  {
    name: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    date: "",
    link: "#",
    image: "/certificates/java-foundation.jpeg",
  },
  {
    name: "Cloud Computing (Elite)",
    issuer: "NPTEL",
    date: "",
    link: "#",
    image: "/certificates/cloud-computing.jpeg",
  },
  {
    name: "Ethical Hacking (Elite)",
    issuer: "NPTEL",
    date: "",
    link: "#",
    image: "/certificates/ethical-hacking.jpeg",
  },
  {
    name: "Blockchain and its Applications",
    issuer: "NPTEL",
    date: "",
    link: "#",
    image: "/certificates/blockchain.jpeg",
  },
  {
    name: "GenAI Study Jams 2024",
    issuer: "Google Developer Groups",
    date: "2024",
    link: "#",
    image: "/certificates/genai-study-jams.jpeg",
  },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeading title="Certifications" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-card">
                <CardContent className="p-0">
                  {/* Certificate Image */}
                  <div 
                    className="relative h-48 bg-muted overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    {/* Fallback when image doesn't exist */}
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                      <div className="text-center">
                        <Award className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">Add image to public{cert.image}</p>
                      </div>
                    </div>
                    {/* Zoom overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-background/90 rounded-full p-2 shadow-lg">
                        <ZoomIn className="h-5 w-5 text-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="p-4 text-center">
                    <h3 className="font-semibold mb-1 text-sm md:text-base">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
                    <div className="flex items-center justify-center gap-3">
                      <button 
                        onClick={() => setSelectedImage(cert.image)}
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <ZoomIn className="h-3 w-3" /> View
                      </button>
                      {cert.link && cert.link !== "#" && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
                          Verify <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
