import { Code2, Lightbulb, Rocket } from "lucide-react";
import { portfolioContent } from "@/config/contentstoedit";

const iconMap = {
  Code2,
  Lightbulb,
  Rocket,
};

export const About = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="inline-block px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-xl border border-primary/20 text-primary text-sm font-medium">
            {portfolioContent.about.badge}
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {portfolioContent.about.title}
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {portfolioContent.about.cards.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group relative p-10 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_0_40px_rgba(59,193,255,0.3)] animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'var(--glow-blue)' }} />
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 p-10 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/20 animate-fade-in hover:border-primary/30 hover:shadow-[0_0_40px_rgba(59,193,255,0.2)] transition-all duration-500 hover:scale-[1.02]">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center hover:text-foreground transition-colors duration-300">
            {portfolioContent.about.bio}
          </p>
        </div>
      </div>
    </section>
  );
};
