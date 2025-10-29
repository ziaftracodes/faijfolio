// Portfolio Content Configuration
// Edit this file to update all text, images, links, and content across the website

export const portfolioContent = {
  // Personal Information
  personal: {
    name: "Faij Un Navi Khan",
    role: "Software Developer",
    tagline: "Full-stack developer crafting modern web applications with clean code and exceptional user experiences",
    
    // Photos - Update these paths to your actual images
    photos: {
      light: "/placeholder.svg", // Photo for light mode
      dark: "/placeholder.svg",  // Photo for dark mode
    },
  },

  // Navigation Links
  navigation: {
    brand: "Portfolio",
    links: [
      { label: "Home", href: "#home" },
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },

  // Hero Section
  hero: {
    badge: "💻 Software Developer",
    title: {
      line1: "Portfolio",
      line2: "Faij Un Navi Khan",
    },
    description: "Front end developer with clean code and exceptional user experiences",
    ctas: [
      { label: "View My Work", href: "#work", icon: "ArrowRight" },
      { label: "Contact Me", href: "#contact", icon: "Mail" },
    ],
    quickActions: [
      { label: "About Me", href: "#about", icon: "User" },
      { label: "Skills", href: "#skills", icon: null },
    ],
  },

  // Work/Projects Section
  work: {
    title: "My Works and Projects",
    description: "Explore my latest projects and technical achievements",
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with real-time inventory management",
        image: "/placeholder.svg",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "https://example.com/project1",
      },
      {
        title: "AI Dashboard",
        description: "Analytics dashboard with machine learning insights",
        image: "/placeholder.svg",
        tags: ["Next.js", "Python", "TensorFlow"],
        link: "https://example.com/project2",
      },
      {
        title: "Mobile App",
        description: "Cross-platform mobile application for social networking",
        image: "/placeholder.svg",
        tags: ["React Native", "Firebase", "Redux"],
        link: "https://example.com/project3",
      },
    ],
  },

  // About Section
  about: {
    title: "About Me",
    description: "Passionate software developer with expertise in building scalable web applications. I specialize in front end web developments and have a vibe coding and prompt enigineering skills I also keen eye for creating intuitive user experiences.",
    highlights: [
      "Bachelors In Computer Science ",
      "Expertise in Html, Css, JS, Vibe Coding ",
      "Strong focus on performance and accessibility",
      "A great Communicator",
    ],
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "50+" },
      { label: "Happy Clients", value: "30+" },
    ],
  },

  // Skills Section
  skills: {
    title: "Skills & Technologies",
    description: "Technical expertise and tools I work with",
    categories: [
      {
        name: "Frontend",
        skills: ["HTML", "CSS", "JS", "VIBE CODING", "VITE"],
      },
      {
        name: "Backend",
        skills: ["work in Progress"],
      },
      {
        name: "Tools & Others",
        skills: ["Git", "OpenAI", "Google AI studio", "VS Code", "Communications"],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description: "Have a project in mind? Let's work together to build something great.",
    email: "ziaftra.codes@gmail.com",
    social: [
      { platform: "GitHub", url: "https://github.com/ziaftracodes", icon: "Github" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "Linkedin" },
       { platform: "Instagram", url: "https://instagram.com/fayz.khn" icon: "Instagram" },
    ],
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "ziaftra.codes@gmail.com",
      messagePlaceholder: "Tell me about your project...",
      submitButton: "Send Message",
    },
  },

  // Request Work Section
  requestWork: {
    title: "Let's Build Something Amazing",
    description: "Looking for a skilled developer for your next project? I'm available for freelance work and collaborations.",
    services: [
      "Web Application Development",
      "UI/UX Design Implementation",
      "API Development & Integration",
      "Technical Consulting",
      "Code Review & Optimization",
    ],
    ctaButton: "Start a Project",
    ctaLink: "#contact",
  },

  // Footer
  footer: {
    copyright: "© 2025 All rights reserved",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/yourusername" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
      { platform: "Instagram", url: "https://instagram.com/fayz.khn" },
    ],
  },
};
