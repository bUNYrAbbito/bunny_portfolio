
import { useEffect, useState } from "react";
import { Eye, Github, ExternalLink, Code, ShoppingCart } from "lucide-react";
import { ButtonHover } from "./ui/button-hover";

type ProjectType = "web" | "frontend" | "fullstack" | "all";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: ("web" | "frontend" | "fullstack")[];
  liveUrl: string;
  repoUrl: string;
};

const projectsData: Project[] = [
  {
    title: "Avira E-commerce Site",
    description: "An online marketplace where users can sell their used electronic gadgets like mobile phones, tablets, smartwatches, laptops, and video game consoles to professional buyers.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "MongoDB", "Express", "Node.js", "MERN Stack"],
    type: ["web", "fullstack"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Health Challenge Tracker",
    description: "Frontend development project during internship at The Spark Foundation. A web application built with Angular to track health challenges and fitness goals.",
    image: "https://images.unsplash.com/photo-1579722037781-2164322efc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tags: ["Angular", "TypeScript", "CSS", "HTML", "Frontend"],
    type: ["web", "frontend"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "BasketballPlayerCard Component",
    description: "A robust React component created during internship at The Spark Foundation, showcasing basketball player information in an interactive card format.",
    image: "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "JavaScript", "CSS", "Frontend", "Component Design"],
    type: ["web", "frontend"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with modern web technologies to showcase my projects, skills, and professional information.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    tags: ["React", "Tailwind CSS", "Responsive Design", "Animation", "Frontend"],
    type: ["web", "frontend"],
    liveUrl: "https://prashant-singh.onrender.com/",
    repoUrl: "#",
  },
];

const Projects = () => {
  const [selectedType, setSelectedType] = useState<ProjectType>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  
  useEffect(() => {
    if (selectedType === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.type.includes(selectedType as any))
      );
    }
  }, [selectedType]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="section-padding bg-gradient-to-t from-background to-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground/80 text-sm font-medium reveal">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight reveal delay-100">
            Recent <span className="text-gradient">Projects</span>
          </h3>
          <p className="max-w-2xl mx-auto text-foreground/70 reveal delay-200">
            Explore my latest projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>
        
        {/* Project Type Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-12 reveal delay-300">
          {(["all", "frontend", "fullstack", "web"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === type
                  ? "bg-primary text-white"
                  : "bg-secondary/70 text-foreground/70 hover:bg-secondary"
              }`}
            >
              {type === "all" ? "All Projects" : `${type.charAt(0).toUpperCase() + type.slice(1)} Projects`}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="reveal card-hover rounded-xl overflow-hidden glass-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="h-48 overflow-hidden img-hover-zoom">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                      aria-label="View live site"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                      aria-label="View code"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-secondary/70 text-foreground/70 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal delay-400">
          <ButtonHover variant="outline" size="lg" as="a" href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </ButtonHover>
        </div>
      </div>
    </section>
  );
};

export default Projects;
