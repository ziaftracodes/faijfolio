import { ArrowRight, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { portfolioContent } from "@/config/contentstoedit";
import { ParallaxSection } from "./ParallaxSection";

export const Hero = () => {
  const { theme } = useTheme();
  const photoSrc = theme === "dark" ? portfolioContent.personal.photos.dark : portfolioContent.personal.photos.light;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-28 grainy-gradient">
      {/* Animated mesh background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Floating orbs with depth */}
      <ParallaxSection speed={0.3}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      </ParallaxSection>
      <ParallaxSection speed={0.5}>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
      </ParallaxSection>
      <ParallaxSection speed={0.4}>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
      </ParallaxSection>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <ParallaxSection speed={0.2}>
            <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-card/60 backdrop-blur-xl border border-primary/20 text-primary text-sm font-medium">
              {portfolioContent.hero.badge}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight transition-all duration-300 hover:scale-105">
                <span className="text-foreground">{portfolioContent.hero.title.line1}</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {portfolioContent.hero.title.line2}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl hover:text-foreground transition-colors duration-300">
                {portfolioContent.hero.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {portfolioContent.hero.ctas.map((cta, index) => {
                const Icon = cta.icon === "ArrowRight" ? ArrowRight : Mail;
                return (
                  <Button 
                    key={index}
                    size="lg" 
                    className={index === 0 
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 px-8 py-6 rounded-xl group"
                      : "bg-card/40 backdrop-blur-xl border-primary/30 hover:bg-card/60 hover:border-primary/50 px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300"
                    }
                    variant={index === 0 ? "default" : "outline"}
                    asChild
                  >
                    <a href={cta.href}>
                      <Icon className={index === 0 ? "mr-2 group-hover:translate-x-1 transition-transform" : "mr-2"} />
                      {cta.label}
                    </a>
                  </Button>
                );
              })}
            </div>
            </div>
          </ParallaxSection>
          
          {/* Right side - Photo and CTAs */}
          <ParallaxSection speed={0.15}>
            <div className="flex flex-col items-center space-y-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {/* Photo placeholder with glass effect */}
            <div className="relative group">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-accent/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,193,255,0.4)]">
                {/* Profile Photo */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={photoSrc} 
                    alt={portfolioContent.personal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>
                
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'var(--glow-blue)' }} />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
            
            {/* Quick action buttons below photo */}
            <div className="flex gap-4">
              {portfolioContent.hero.quickActions.map((action, index) => {
                const Icon = action.icon === "User" ? User : null;
                return (
                  <Button 
                    key={index}
                    variant="outline"
                    className={`bg-card/40 backdrop-blur-xl ${
                      index === 0 
                        ? "border-primary/30 hover:bg-card/60 hover:border-primary/50 hover:scale-110" 
                        : "border-accent/30 hover:bg-card/60 hover:border-accent/50 hover:scale-110"
                    } rounded-xl transition-all duration-300`}
                    asChild
                  >
                    <a href={action.href}>
                      {Icon && <Icon className="mr-2 w-4 h-4" />}
                      {action.label}
                    </a>
                  </Button>
                );
              })}
            </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};
