import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "TypeScript", "Tailwind CSS", "Redux"],
      color: "gradient-primary",
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "Node.js", "Django REST Framework", "REST APIs"],
      color: "gradient-secondary",
    },
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "C++", "Core Java"],
      color: "gradient-accent",
    },
    {
      title: "Tools & Databases",
      skills: ["Git", "GitHub", "MySQL", "Axios", "Vite", "Vercel"],
      color: "gradient-primary",
    },
    {
      title: "AI & Emerging Tech",
      skills: ["Prompt Engineering", "LLM Integration", "AI-Powered Applications"],
      color: "gradient-secondary",
    },
    {
      title: "Soft Skills",
      skills: ["Teamwork", "Problem Solving", "Clean Code", "Agile Development"],
      color: "gradient-accent",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="shadow-card border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className={`inline-block px-4 py-2 rounded-full ${category.color} font-semibold text-sm text-primary-foreground`}>
                    {category.title}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
