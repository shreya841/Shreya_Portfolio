import { Card, CardContent } from "./ui/card";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shreyadwivedi477@gmail.com",
      link: "mailto:shreyadwivedi477@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhopal, India",
      link: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shreya841",
      link: "https://github.com/shreya841",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shreyadwivedii",
      link: "https://linkedin.com/in/shreyadwivedii",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div className="p-3 rounded-lg gradient-primary">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors duration-200 break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-center space-y-4">
                  <p className="text-foreground/90">
                    Want to collaborate or have a project in mind?
                  </p>
                  <a href="mailto:shreyadwivedi477@gmail.com">
                    <Button className="gradient-primary shadow-glow hover:scale-105 transition-all duration-300">
                      <Mail className="mr-2 h-4 w-4" />
                      Send me an email
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
