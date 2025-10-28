export const SectionTransition = () => {
  return (
    <div className="relative h-32 w-full overflow-hidden">
      {/* Gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated line */}
      <div className="absolute top-1/2 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/2 w-1 h-1 bg-primary/30 rounded-full animate-float" />
        <div className="absolute left-2/3 top-1/3 w-1 h-1 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute left-1/2 top-2/3 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  );
};
