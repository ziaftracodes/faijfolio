// Portfolio Content Configuration  
// Edit this file to update all text, images, links, and content across the website  
  
export const portfolioContent = {  
  // Personal Information  
  personal: {  
    name: "Faij Un-Navi Khan",  
    role: "Software Developer",  
    tagline: "Full-stack developer crafting modern web applications with clean code and exceptional user experiences",  
      
    // Photos - Update these paths to your actual images  
    photos: {  
      light: "/1761737527474~2.jpg", // Photo for light mode  
      dark: "/1761734804016~2.jpg",  // Photo for dark mode  
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
    badge: "Recent Projects",
    title: "Featured Work",  
    description: "Explore my latest projects showcasing innovation, creativity, and technical excellence",  
    projects: [  
      {  
        title: "Cosmic Library ",  
        description: "Next-generation Library .",  
        image: "/cosmiclibrary.jpg",  
        tags: ["React", "AI/ML", "TypeScript"],  
        link: "https://cosmiclibrary.vercel.app",  
      },  
      {  
        title: "Custom Cursors ",  
        description: "A gallery for Cursors .",  
        image: "/customcursor.jpg",  
        tags: ["Web3", "Vue.js", "D3.js"],  
        link: "https://customcursors.vercel.app",  
      },  
      {  
        title: "The 99Showroom",  
        description: "Not a store but an Idea.",  
        image: "/99showroom.jpg",  
        tags: ["IoT", "React Native", "Node.js"],  
        link: "https://99showroom.vercel.app/",  
      },  
      {  
        title: "Skin Budyy",  
        description: "A Dermatologist at your Hand.",  
        image: "/skinbuddy.jpg",  
        tags: ["Next.js", "Stripe", "AR"],  
        link: "https://skinbuddy.vercel.app/",  
      },  
      {  
        title: "Quick Edits ",  
        descrition: "Edit Quick with buttons ",  
        image: "quickedits.jpg",  
        tags: ["React", "Health API", "PWA"],  
        link: "https://quick-edits.vercel.app",  
      },  
      {  
        title: "Sponsor me",  
        description: "Collaborative workspace for Micro Influencers and Micro Brands.",  
        image: "/sponsorme.jpg",  
        tags: ["WebRTC", "Canvas", "Socket.io"],  
        link: "https://sponsor-me.vercel.app",  
      },  
    ],  
  },  
  
  // About Section  
  about: {  
    badge: "About Me",
    title: "Faij Un Navi Khan",  
    cards: [
      {
        icon: "Code2",
        title: "A Clean Code",
        description: "Writing maintainable, scalable, & efficient code that stands the test of time.",
      },
      {
        icon: "Lightbulb",
        title: "Innovation",
        description: "Constantly exploring new technologies and approaches to solve complex problems.",
      },
      {
        icon: "Rocket",
        title: "Fast Delivery",
        description: "Delivering high-quality projects on time with agile methodologies and best practices.",
      },
    ],
    bio: "I'm a passionate Front End Web Dev with expertise in building modern web applications. My focus is on creating seamless user experiences while maintaining robust, scalable architectures. I love turning complex problems into simple, elegant solutions.",
  },  
  
  // Skills Section  
  skills: {  
    badge: "Tech Stack",
    title: "Skills & Technologies",  
    description: "Technical expertise and tools I work with",  
    categories: [  
      {  
        name: "Frontend",  
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],  
      },  
      {  
        name: "Backend",  
        skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs"],  
      },  
      {  
        name: "Tools & Cloud",  
        skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],  
      },  
      {  
        name: "Expertise",  
        skills: ["UI/UX Design", "Web Performance", "System Architecture", "API Design", "Testing"],  
      },  
    ],  
  },  
  
  // Request Work Section  
  requestWork: {  
    title: "Let's Build Something Amazing",  
    description: "Available for freelance projects and full-time opportunities",  
    offerings: [
      "Full-stack web applications",
      "Responsive UI/UX design",
      "API development & integration",
      "Performance optimization",
      "Technical consulting",
    ],
    stats: [
      {
        label: "Response Time",
        value: "Within 24 hours",
        variant: "primary",
      },
      {
        label: "Availability",
        value: "Open for projects",
        variant: "secondary",
      },
    ],
    ctaButton: "Request Quote",  
    ctaEmail: "ziaftra.codes@gmail.com",  
  },  
  
  // Contact Section  
  contact: {  
    badge: "Let's Connect",
    title: "Get In Touch",  
    description: "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",  
    email: "ziaftra.codes@gmail.com",  
    emailButtonText: "Send Email",
    social: [  
      { platform: "GitHub", url: "https://github.com/ziaftracodes", icon: "Github" },  
      { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "Linkedin" },  
      { platform: "Instagram", url: "https://instagram.com/fayz.khn", icon: "Instagram" },  
    ],  
  },  
  
  // Footer  
  footer: {  
    copyright: "© 2025 All rights reserved",  
    socialLinks: [  
      { platform: "GitHub", url: "https://github.com/ziaftracodes" },  
      { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername" },  
      { platform: "Instagram", url: "https://instagram.com/fayz.khn" },  
    ],  
  },  
};
