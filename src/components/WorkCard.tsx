import { ExternalLink } from "lucide-react";

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const WorkCard = ({ title, description, image, link, tags }: WorkCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,193,255,0.3)]"
    >
      {/* Image container with overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
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
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
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
  );
};
