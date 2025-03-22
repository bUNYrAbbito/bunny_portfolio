import { useEffect, useRef } from "react";
import { Code, Database, Globe, Layout, Smartphone, Trophy, Server, Book, Cloud } from "lucide-react";

type Skill = {
  category: string;
  icon: React.ReactNode;
  items: {
    name: string;
    level: number;
  }[];
};

const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "RESTful APIs", level: 85 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "SQL", level: 80 },
      { name: "NoSQL", level: 75 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Microsoft Azure", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Command Line", level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <Book className="w-6 h-6" />,
    items: [
      { name: "MERN Stack", level: 80 },
      { name: "MEAN Stack", level: 75 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "jQuery", level: 75 },
    ],
  },
  {
    category: "Other Skills",
    icon: <Cloud className="w-6 h-6" />,
    items: [
      { name: "Artificial Intelligence", level: 75 },
      { name: "Web Development", level: 85 },
      { name: "Problem Solving", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Communication", level: 85 },
    ],
  },
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            
            const skillBars = entry.target.querySelectorAll(".skill-bar-fill");
            skillBars.forEach((bar) => {
              bar.classList.add("animate");
            });
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

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground/80 text-sm font-medium reveal">
            What I Do
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight reveal delay-100">
            My <span className="text-gradient">Skills</span>
          </h3>
          <p className="max-w-2xl mx-auto text-foreground/70 reveal delay-200">
            I've developed a range of technical skills allowing me to build complete, responsive web applications with modern technologies.
          </p>
        </div>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass-card rounded-xl p-6 reveal card-hover`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {skillCategory.icon}
                </div>
                <h4 className="text-lg font-semibold">{skillCategory.category}</h4>
              </div>
              
              <div className="space-y-5">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-foreground/70">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="skill-bar-fill h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ "--percent": `${skill.level}%` } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
