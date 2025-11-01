import { WorkCard } from "./WorkCard";
import { portfolioContent } from "@/config/content";

export const WorkSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      
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
          {portfolioContent.work.projects.map((work, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WorkCard {...work} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};
