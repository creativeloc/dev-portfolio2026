import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Pyramid,
  Server,
  Smartphone,
  Terminal
} from "lucide-react"

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6"

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Students Taught", value: "1000+" }
]

export const highlights = [
  { icon: MapPin, text: "Based in San Francisco, CA" },
  { icon: Briefcase, text: "Open for freelance work" },
  { icon: GraduationCap, text: "CS Graduate from Stanford" },
  { icon: Coffee, text: "Powered by coffee & curiosity" }
]

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame"
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest."
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!"
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!"
  }
]

export const contactInfo = [
  {
    icon: Mail,
    label: "eMail",
    value: "hello@johndoe.dev",
    href: "mailto:hello@johndoe.dev"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#"
  }
]

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" }
]

export const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise SaaS products. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Node.js", "AWS", "TypeScript"]
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple web applications. Collaborated with design team to implement responsive UIs.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
  },
  {
    type: "education",
    title: "Master of Computer Science",
    company: "Stanford University",
    period: "2018 - 2020",
    description:
      "Specialized in distributed systems and machine learning. Thesis on scalable microservices architecture.",
    technologies: ["Research", "AI/ML", "Distributed Systems"]
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "WebAgency Co.",
    period: "2018 - 2020",
    description:
      "Developed client websites and e-commerce platforms. Gained experience in agile methodologies.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"]
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "UC Berkeley",
    period: "2014 - 2018",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"]
  }
]

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
]

export const projects = [
  {
    title: "eCommerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    image: "/images/p2.jpg",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "AI Content Generator",
    description:
      "GPT-powered content creation platform for marketers with templates and workflow automation.",
    image: "/images/p3.jpg",
    techStack: ["React", "Python", "OpenAI", "FastAPI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing platform with virtual tours, mortgage calculator, and agent booking system.",
    image: "/images/p4.jpg",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Maps API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Fitness Tracker",
    description:
      "Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.",
    image: "/images/p5.jpg",
    techStack: ["React Native", "Firebase", "Node.js", "Charts"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Learning Management App",
    description:
      "Educational platform with video streaming, quizzes, progress tracking, and certificates.",
    image: "/images/p6.jpg",
    techStack: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
]

export const skillCategories = [
  {
    title: "FrontEnd Developer",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Flexbox", icon: Palette },
      { name: "CSS Grid", icon: Palette },
      { name: "React Native", icon: Smartphone },
      { name: "SASS/SCSS", icon: Smartphone },
      { name: "BEM", icon: Smartphone },
      { name: "Redux ToolKot", icon: Smartphone },
      { name: "Context API", icon: Smartphone },
      { name: "Array functions", icon: Smartphone },
      { name: "JavaScript", icon: Smartphone },
      { name: "HTML/CSS", icon: Smartphone },
      { name: "CSS Animations", icon: Smartphone },
      { name: "GSAP", icon: Smartphone },
      { name: "Animations", icon: Smartphone },
      { name: "ES6+", icon: Layout },
      { name: "Responsive", icon: Layout },
      { name: "Media Queries", icon: Layout }
    ]
  },
  {
    title: "BackEnd Developer",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "NoSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "Prisma", icon: Pyramid },
      { name: "Mongoose", icon: Database },
      { name: "Strapi", icon: Cloud },
      { name: "Fetch/Axios", icon: Cloud },
      { name: "REST APIs", icon: Cloud },
      { name: "CRUD", icon: Cloud }
    ]
  },
  {
    title: "WordPress Developer",
    skills: [
      { name: "Gutenberg", icon: Server },
      { name: "Elementor Pro", icon: Server },
      { name: "PHP", icon: Server },
      { name: "Plugins", icon: Server },
      { name: "Themes", icon: Server },
      { name: "Headless CMS", icon: Layers },
      { name: "Contentful", icon: Layers },
      { name: "Custom PT", icon: Database },
      { name: "Advanced CF", icon: Database },
      { name: "WP_Query", icon: Database },
      { name: "Action Hooks", icon: Database },
      { name: "Filter Hooks", icon: Database },
      { name: "WooCommerce", icon: Cpu },
      { name: "SEO/Yoast", icon: Cpu },
      { name: "FSE", icon: Cpu },
      { name: "WP MultiSites", icon: Cloud }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "Sketch", icon: Palette },
      { name: "Adobe XD", icon: Palette },
      { name: "WCAG", icon: Palette },
      { name: "ADA", icon: Palette },
      { name: "Agile Method", icon: Palette },
      { name: "CI/CD", icon: Cpu },
      { name: "VS Code", icon: Cpu },
      { name: "WS Storm", icon: Cpu },
      { name: "Clerk", icon: Cpu },
      { name: "NextAuth", icon: Cpu },
      { name: "Shadcn UI", icon: Cpu },
      { name: "Framer Motion", icon: Cpu },
      { name: "Vercel", icon: Cpu },
      { name: "Netlify", icon: Cpu },
      { name: "JWT", icon: Cpu },
      { name: "JWT", icon: Cpu },
      { name: "ESLint", icon: Cpu }
    ]
  }
]
