import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RequestWork = () => {
  const offerings = [
    "Full-stack web applications",
    "Responsive UI/UX design",
    "API development & integration",
    "Performance optimization",
    "Technical consulting",
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="p-12 rounded-3xl bg-card/40 backdrop-blur-xl border border-primary/20 shadow-2xl">
          <div className="text-center mb-12 space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">What I Offer</h3>
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">{offering}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col justify-center space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="text-sm text-primary font-medium mb-2">Response Time</div>
                <div className="text-2xl font-bold text-foreground">Within 24 hours</div>
              </div>
              
              <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
                <div className="text-sm text-secondary font-medium mb-2">Availability</div>
                <div className="text-2xl font-bold text-foreground">Open for projects</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-12 py-6 rounded-xl"
              asChild
            >
              <a href="mailto:your.email@example.com">
                Request Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
