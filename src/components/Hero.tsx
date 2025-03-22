import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ButtonHover } from "./ui/button-hover";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Mark as loaded after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
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

    // Mouse move effect for the profile image
    const handleMouseMove = (e: MouseEvent) => {
      const profileWrapper = document.querySelector('.profile-wrapper');
      if (!profileWrapper) return;
      
      const { clientX, clientY } = e;
      const rect = profileWrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center (normalized to -1 to 1)
      const moveX = (clientX - centerX) / (window.innerWidth / 2) * 10;
      const moveY = (clientY - centerY) / (window.innerHeight / 2) * 10;
      
      // Apply transform with subtle movement based on mouse position
      profileWrapper.setAttribute('style', `transform: perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(10px)`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
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
        <div className="absolute top-20 right-0 w-3/4 h-3/4 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-0 left-20 w-3/4 h-1/2 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDuration: '7s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className={`max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground/80 text-sm font-medium reveal animate-fade-in">
              <span className="animate-text-gradient">Full Stack Developer</span>
            </div>
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight reveal animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              Hi, I'm <span className="text-gradient relative">
                Prasant Singh
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 animate-width-expand"></span>
              </span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl reveal animate-fade-in" style={{ animationDelay: '400ms' }}>
              A fresher with a BTech degree in full stack development, proficient in both front-end and back-end technologies, creating intuitive, high-performance web applications.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal animate-fade-in" style={{ animationDelay: '600ms' }}>
              <ButtonHover variant="gradient" size="lg" onClick={handleContactClick} className="transform hover:scale-105 transition-transform">
                Get in Touch
              </ButtonHover>
              <ButtonHover variant="outline" size="lg" onClick={handleProjectsClick} className="transform hover:scale-105 transition-transform">
                View Projects
              </ButtonHover>
            </div>

            <div className="flex flex-col gap-3 pt-4 reveal animate-fade-in" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group">
                <div className="relative overflow-hidden rounded-full p-1 bg-secondary/50 transform group-hover:scale-110 transition-transform">
                  <MapPin size={16} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span>Noida, Uttar Pradesh (201301)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group">
                <div className="relative overflow-hidden rounded-full p-1 bg-secondary/50 transform group-hover:scale-110 transition-transform">
                  <Phone size={16} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span>7017043831</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group">
                <div className="relative overflow-hidden rounded-full p-1 bg-secondary/50 transform group-hover:scale-110 transition-transform">
                  <Mail size={16} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span>Singhbunny116@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2 reveal animate-fade-in" style={{ animationDelay: '1000ms' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-all transform hover:scale-125"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-all transform hover:scale-125"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="profile-wrapper transition-transform duration-300" style={{ transformStyle: 'preserve-3d' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20 animate-pulse-subtle"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 opacity-20 animate-pulse-subtle" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-200 to-purple-300 opacity-20 animate-pulse-subtle" style={{ animationDelay: '0.6s' }}></div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
                <div className="absolute top-[10%] left-[50%] w-10 h-10 rounded-full bg-indigo-400/20 dark:bg-indigo-500/20"></div>
                <div className="absolute bottom-[10%] left-[50%] w-8 h-8 rounded-full bg-purple-400/20 dark:bg-purple-500/20"></div>
              </div>
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute top-[50%] left-[10%] w-6 h-6 rounded-full bg-green-400/20 dark:bg-green-500/20"></div>
                <div className="absolute top-[50%] right-[10%] w-12 h-12 rounded-full bg-yellow-400/20 dark:bg-yellow-500/20"></div>
              </div>
              
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
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-foreground/70 hover:text-foreground transition-colors animate-float"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
