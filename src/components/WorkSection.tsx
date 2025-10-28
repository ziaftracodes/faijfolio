import { WorkCard } from "./WorkCard";

const works = [
  {
    title: "AI Design Platform",
    description: "Next-generation design tool powered by artificial intelligence, enabling creators to bring their visions to life with unprecedented ease.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    link: "https://example.com/project1",
    tags: ["React", "AI/ML", "TypeScript"],
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking and analytics platform with advanced charting and portfolio management capabilities.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    link: "https://example.com/project2",
    tags: ["Web3", "Vue.js", "D3.js"],
  },
  {
    title: "Smart Home App",
    description: "IoT-powered home automation system with seamless device integration and intelligent energy management.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    link: "https://example.com/project3",
    tags: ["IoT", "React Native", "Node.js"],
  },
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with AR try-on features and personalized recommendations powered by machine learning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://example.com/project4",
    tags: ["Next.js", "Stripe", "AR"],
  },
  {
    title: "Fitness Tracker",
    description: "Comprehensive health and wellness platform with AI-powered coaching and community features.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    link: "https://example.com/project5",
    tags: ["React", "Health API", "PWA"],
  },
  {
    title: "Creative Studio",
    description: "Collaborative workspace for designers and developers with real-time editing and version control.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    link: "https://example.com/project6",
    tags: ["WebRTC", "Canvas", "Socket.io"],
  },
];

export const WorkSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card/40 backdrop-blur-xl border border-secondary/20 text-secondary text-sm font-medium mb-4">
            Recent Projects
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing innovation, creativity, and technical excellence
          </p>
        </div>
        
        {/* Work grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
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
