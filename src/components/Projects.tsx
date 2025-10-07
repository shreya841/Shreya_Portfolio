import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "eCommerce Platform with Razorpay",
      description: "A full-stack eCommerce platform with secure payment integration, cart management, and order tracking. Features JWT authentication and optimized API performance.",
      tech: ["React", "Django REST", "JWT", "Razorpay", "Axios"],
      github: "https://github.com/shreya841/final-django.git",
      highlights: [
        "Secure payment flow with Razorpay integration",
        "JWT-based authentication system",
        "Optimized API and database performance",
        "Smooth UX with React Router",
      ],
    },
    {
      title: "AI-Powered Interview Assistant",
      description: "An intelligent interview platform where candidates upload resumes, answer AI-generated questions with timers, and receive automated scoring with detailed summaries.",
      tech: ["React", "Redux", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
      github: "https://github.com/shreya841/resume-to-chat-ai.git",
      highlights: [
        "AI-driven Q&A generation system",
        "Real-time candidate performance tracking",
        "Interviewer dashboard with analytics",
        "Session persistence and restore functionality",
      ],
    },
    {
      title: "Temperature Tracker",
      description: "A clean, modern weather application that provides real-time temperature data for any city worldwide. Features an intuitive interface and lightning-fast performance.",
      tech: ["React JS", "Vite", "Tailwind CSS", "OpenWeather API"],
      github: "https://github.com/shreya841/temperature-tracker",
      live: "#",
      highlights: [
        "Real-time weather data integration",
        "Simple and responsive UI design",
        "Lightweight and fast performance",
        "Support for cities worldwide",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-card border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 mt-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full hover:bg-primary/10 transition-all duration-300">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full gradient-primary shadow-glow hover:scale-105 transition-all duration-300">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
