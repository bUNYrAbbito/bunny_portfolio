
import { useEffect, useRef } from "react";
import { Code, Database, Globe, Layout, Smartphone, Trophy } from "lucide-react";

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
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Django", level: 75 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Webpack", level: 85 },
    ],
  },
  {
    category: "UI/UX Design",
    icon: <Smartphone className="w-6 h-6" />,
    items: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Responsive Design", level: 90 },
      { name: "UI Frameworks", level: 95 },
      { name: "Design Systems", level: 85 },
    ],
  },
  {
    category: "Other Skills",
    icon: <Trophy className="w-6 h-6" />,
    items: [
      { name: "Problem Solving", level: 95 },
      { name: "REST API", level: 90 },
      { name: "GraphQL", level: 80 },
      { name: "Testing", level: 85 },
      { name: "Web Security", level: 85 },
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
            I've cultivated a diverse skill set over years of hands-on experience, allowing me to build complete, scalable web applications from concept to deployment.
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
                        className="skill-bar-fill h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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

// Missing Server icon component
function Server(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}
