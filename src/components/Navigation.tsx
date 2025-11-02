import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { portfolioContent } from "@/config/contentstoedit";

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/60 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            {portfolioContent.navigation.brand}
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {portfolioContent.navigation.links.map((link, index) => (
              <button
                key={index}
                onClick={() => link.href === "#home" 
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : scrollToSection(link.href.replace("#", ""))
                }
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="bg-card/40 backdrop-blur-xl border-border hover:bg-card/60 rounded-lg"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-primary" />
                ) : (
                  <Moon className="h-5 w-5 text-primary" />
                )}
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
