import { Code2, Lightbulb, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card/60 backdrop-blur-xl border border-primary/20 text-primary text-sm font-medium">
            About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Faij Un Navi Khan
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "A Clean Code",
              description: "Writing maintainable, scalable, & efficient code that stands the test of time.",
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Constantly exploring new technologies and approaches to solve complex problems.",
            },
            {
              icon: Rocket,
              title: "Fast Delivery",
              description: "Delivering high-quality projects on time with agile methodologies and best practices.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground">
                {item.description}
              </p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'var(--glow-blue)' }} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/20 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
            I'm a passionate Front End Web Dev with expertise in building modern web applications. 
            My focus is on creating seamless user experiences while maintaining robust, scalable architectures. 
            I love turning complex problems into simple, elegant solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
