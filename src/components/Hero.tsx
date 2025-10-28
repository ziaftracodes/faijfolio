import { ArrowRight, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-28">
      {/* Animated mesh background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-card/60 backdrop-blur-xl border border-primary/20 text-primary text-sm font-medium">
              💻 Software Developer
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Building</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Full-stack developer crafting modern web applications with clean code and exceptional user experiences
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-8 py-6 rounded-xl group"
                asChild
              >
                <a href="#work">
                  <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform" />
                  View My Work
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-card/40 backdrop-blur-xl border-primary/30 hover:bg-card/60 hover:border-primary/50 px-8 py-6 rounded-xl"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right side - Photo and CTAs */}
          <div className="flex flex-col items-center space-y-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {/* Photo placeholder with glass effect */}
            <div className="relative group">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center overflow-hidden">
                {/* Placeholder for photo */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <User className="w-32 h-32 text-primary/40" />
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
              <Button 
                variant="outline"
                className="bg-card/40 backdrop-blur-xl border-primary/30 hover:bg-card/60 hover:border-primary/50 rounded-xl"
                asChild
              >
                <a href="#about">
                  <User className="mr-2 w-4 h-4" />
                  About Me
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="bg-card/40 backdrop-blur-xl border-secondary/30 hover:bg-card/60 hover:border-secondary/50 rounded-xl"
                asChild
              >
                <a href="#skills">
                  Skills
                </a>
              </Button>
            </div>
          </div>
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
