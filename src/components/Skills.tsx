import { portfolioContent } from "@/config/content";

export const Skills = () => {

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <div className="inline-block px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-xl border border-secondary/20 text-secondary text-sm font-medium">
            {portfolioContent.skills.badge}
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              {portfolioContent.skills.title}
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {portfolioContent.skills.categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="p-10 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full animate-glow" />
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                    
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 20px hsl(199 89% 48% / 0.2)' }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
