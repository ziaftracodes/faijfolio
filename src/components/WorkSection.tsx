import { portfolioContent } from "@/config/contentstoedit";
import { ExternalLink } from "lucide-react";

export const WorkSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card/40 backdrop-blur-xl border border-secondary/20 text-secondary text-sm font-medium mb-4">
            {portfolioContent.work.badge}
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              {portfolioContent.work.title}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {portfolioContent.work.description}
          </p>
        </div>
        
        {/* Work grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioContent.work.projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,193,255,0.3)]"
              >
                {/* Image container with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* External link icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Glass border effect */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};
