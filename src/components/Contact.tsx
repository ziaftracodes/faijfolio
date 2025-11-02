import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/config/contentstoedit";

const iconMap = {
  Github,
  Linkedin,
  Instagram,
};

export const Contact = () => {

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-xl border border-accent/20 text-accent text-sm font-medium">
            {portfolioContent.contact.badge}
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {portfolioContent.contact.title}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {portfolioContent.contact.description}
          </p>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-10 py-7 rounded-xl group"
            asChild
          >
            <a href={`mailto:${portfolioContent.contact.email}`}>
              <Mail className="mr-2 group-hover:scale-110 transition-transform" />
              {portfolioContent.contact.emailButtonText}
            </a>
          </Button>
        </div>
        
        <div className="mt-20 flex justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {portfolioContent.contact.social.map((social, index) => {
            const IconComponent = iconMap[social.icon as keyof typeof iconMap];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
                aria-label={social.platform}
              >
                <IconComponent className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
