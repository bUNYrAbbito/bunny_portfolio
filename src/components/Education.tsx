
import { useEffect } from "react";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
};

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Indian Institute of Technology",
    location: "Mumbai, India",
    period: "2018 - 2022",
    description: "Graduated with honors, focusing on software engineering, algorithms, and data structures. Participated in coding competitions and developed multiple web applications."
  },
  {
    degree: "M.Tech in Artificial Intelligence",
    institution: "Delhi Technological University",
    location: "Delhi, India",
    period: "2022 - 2024",
    description: "Specialized in machine learning, neural networks, and computer vision with a focus on implementing AI solutions for real-world problems."
  },
  {
    degree: "Advanced Web Development Certification",
    institution: "Udacity",
    location: "Online",
    period: "2019",
    description: "Completed an intensive program covering modern JavaScript frameworks, responsive design, and backend integration."
  },
];

const Education = () => {
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

  return (
    <section id="education" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground/80 text-sm font-medium reveal">
            My Education
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight reveal delay-100">
            Academic <span className="text-gradient">Journey</span>
          </h3>
          <p className="max-w-2xl mx-auto text-foreground/70 reveal delay-200">
            My educational background has provided me with a strong foundation in computer science and continuous learning.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 transform md:translate-x-px"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } reveal`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                  <GraduationCap className="text-white w-4 h-4" />
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 md:pr-12 ${
                  index % 2 === 0 ? "md:pl-12 md:pr-0" : ""
                }`}>
                  <div className="glass-card p-6 rounded-xl card-hover">
                    <h4 className="text-xl font-bold mb-2">{item.degree}</h4>
                    <div className="mb-4">
                      <p className="font-medium text-foreground">{item.institution}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-foreground/70">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 inline" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 inline" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 text-sm">{item.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternate layout */}
                <div className={`hidden md:block md:w-1/2 ${
                  index % 2 === 0 ? "" : "md:pr-12"
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
