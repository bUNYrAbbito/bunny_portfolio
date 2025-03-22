import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ButtonHover } from "./ui/button-hover";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-gradient">
          Prashant Singh
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium link-underline">
            Home
          </a>
          <a href="#skills" className="text-sm font-medium link-underline">
            Skills
          </a>
          <a href="#education" className="text-sm font-medium link-underline">
            Education
          </a>
          <a href="#projects" className="text-sm font-medium link-underline">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium link-underline">
            Contact
          </a>
          <a 
            href="https://drive.usercontent.google.com/u/0/uc?id=1m35yaoFqCwLbfdl04EiCrFG7KZh-PbaN&export=download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonHover variant="gradient" size="sm">
              Resume
            </ButtonHover>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <a
            href="#home"
            className="text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a 
            href="https://drive.usercontent.google.com/u/0/uc?id=1m35yaoFqCwLbfdl04EiCrFG7KZh-PbaN&export=download"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <ButtonHover variant="gradient" size="lg" className="w-full">
              Resume
            </ButtonHover>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
