import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  const workExperience = {
    title: "FullStack Python Django Developer",
    company: "Cybrom Technology Limited, Bhopal",
    period: "Jan 2024 - Jul 2024",
    achievements: [
      "Built & deployed 3 dynamic web applications, improving user engagement by 20%",
      "Collaborated in a 5-member agile team to deliver mobile-first UI solutions",
      "Optimized 5+ APIs for 30% faster response time through performance tuning",
    ],
  };

  const education = [
    {
      degree: "B.Tech in Computer Science & IT",
      institution: "SIRT, Bhopal",
      period: "Expected Jul 2026",
    },
    {
      degree: "Higher Secondary Education",
      institution: "MP Board",
      period: "Mar 2022",
    },
  ];

  const certifications = [
    "Development - Deloitte Job Simulation",
    "Frontend Development - Oneroadmap",
    "C++ Training - Cybrom PVT LTD",
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Work Experience */}
          <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg gradient-primary">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{workExperience.title}</CardTitle>
                  <p className="text-lg font-medium text-primary">{workExperience.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{workExperience.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {workExperience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-foreground/90">
                    <span className="text-primary mr-3 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg gradient-secondary">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4 py-2">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg gradient-accent">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-background hover:bg-accent/20 transition-colors duration-200"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
