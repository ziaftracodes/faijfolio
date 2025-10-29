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
      line1: "Building",
      line2: "Digital Solutions",
    },
    description: "Full-stack developer crafting modern web applications with clean code and exceptional user experiences",
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
    title: "Featured Work",
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
    description: "Passionate software developer with expertise in building scalable web applications. I specialize in modern JavaScript frameworks and have a keen eye for creating intuitive user experiences.",
    highlights: [
      "5+ years of experience in web development",
      "Expertise in React, Node.js, and TypeScript",
      "Strong focus on performance and accessibility",
      "Open source contributor",
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
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
      },
      {
        name: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Agile"],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description: "Have a project in mind? Let's work together to build something great.",
    email: "hello@example.com",
    social: [
      { platform: "GitHub", url: "https://github.com/yourusername", icon: "Github" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "Linkedin" },
      { platform: "Twitter", url: "https://twitter.com/yourusername", icon: "Twitter" },
    ],
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "your.email@example.com",
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
    copyright: "© 2024 All rights reserved",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/yourusername" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
      { platform: "Twitter", url: "https://twitter.com/yourusername" },
    ],
  },
};
