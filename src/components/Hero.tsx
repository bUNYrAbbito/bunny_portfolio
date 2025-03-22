
import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ButtonHover } from "./ui/button-hover";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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
  }, []);

  const handleScrollDown = () => {
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 px-4 md:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background to-background opacity-90"></div>
        <div className="absolute top-20 right-0 w-3/4 h-3/4 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-3/4 h-1/2 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground/80 text-sm font-medium reveal">
              Full Stack Developer
            </div>
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight reveal"
            >
              Hi, I'm <span className="text-gradient">Prasant Singh</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl reveal delay-200">
              A fresher with a BTech degree in full stack development, proficient in both front-end and back-end technologies, creating intuitive, high-performance web applications.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal delay-300">
              <ButtonHover variant="gradient" size="lg" onClick={handleContactClick}>
                Get in Touch
              </ButtonHover>
              <ButtonHover variant="outline" size="lg" onClick={handleProjectsClick}>
                View Projects
              </ButtonHover>
            </div>

            <div className="flex flex-col gap-3 pt-4 reveal delay-400">
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin size={18} />
                <span>Aligarh, Uttar Pradesh (202001)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Phone size={18} />
                <span>7017043831</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Mail size={18} />
                <span>Singhbunny116@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2 reveal delay-500">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 animate-pulse-subtle"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-300 to-purple-400 opacity-20 animate-pulse-subtle" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-200 to-purple-300 opacity-20 animate-pulse-subtle" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full border-4 border-white/20 glass-card animate-fade-in">
                <img
                  src="/lovable-uploads/eb62906b-0ea1-4daa-bbf6-c7abf26a5bc1.png"
                  alt="Prasant Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-foreground/70 hover:text-foreground transition-colors animate-float"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
