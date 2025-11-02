import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/config/contentstoedit";

export const RequestWork = () => {

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="p-16 rounded-3xl bg-card/40 backdrop-blur-xl border border-primary/20 shadow-2xl hover:border-primary/40 hover:shadow-[0_0_50px_rgba(59,193,255,0.3)] transition-all duration-500 hover:scale-[1.02]">
          <div className="text-center mb-16 space-y-6 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold transition-all duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {portfolioContent.requestWork.title}
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
              {portfolioContent.requestWork.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-8">What I Offer</h3>
              {portfolioContent.requestWork.offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">{offering}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col justify-center space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {portfolioContent.requestWork.stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`p-8 rounded-2xl border ${
                    stat.variant === 'primary' 
                      ? 'bg-primary/5 border-primary/20' 
                      : 'bg-secondary/5 border-secondary/20'
                  }`}
                >
                  <div className={`text-sm font-medium mb-2 ${
                    stat.variant === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}>
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 text-lg px-12 py-7 rounded-xl"
              asChild
            >
              <a href={`mailto:${portfolioContent.requestWork.ctaEmail}`}>
                {portfolioContent.requestWork.ctaButton}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
