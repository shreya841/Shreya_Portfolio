import { Card, CardContent } from "./ui/card";
import { Code2, Database, Palette } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: Database,
      title: "Backend Expertise",
      description: "Proficient in Python, Django, and Node.js for robust APIs",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful, responsive interfaces with React",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enthusiastic Full Stack Developer from Bhopal, India
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-card border-border/50 animate-fade-in-up">
            <CardContent className="p-6 sm:p-8">
              <p className="text-foreground/90 leading-relaxed text-lg">
                I'm an enthusiastic and detail-oriented Full Stack Developer with strong proficiency in 
                <span className="font-semibold text-primary"> Python and Django</span> for backend development, 
                along with working knowledge of <span className="font-semibold text-secondary">Node.js and JavaScript</span> technologies. 
                I excel at creating responsive, user-friendly interfaces using 
                <span className="font-semibold text-accent"> React, HTML, and CSS</span>, and have experience working with MySQL databases.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg mt-4">
                With a strong understanding of OOP principles, clean code practices, and teamwork, 
                I'm eager to contribute to impactful web applications and continuously grow as a developer.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-card border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
