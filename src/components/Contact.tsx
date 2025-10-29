import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/fayz.khn" },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card/60 backdrop-blur-xl border border-accent/20 text-accent text-sm font-medium">
            Let's Connect
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-xl group"
            asChild
          >
            <a href="mailto:ziaftra.codes@gmail.com">
              <Mail className="mr-2 group-hover:scale-110 transition-transform" />
              Send Email
            </a>
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
