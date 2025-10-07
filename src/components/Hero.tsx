import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="space-y-6 animate-fade-in-up max-w-5xl mx-auto">
          {/* Photo and Name Section */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Photo */}
            <div className="flex-shrink-0 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 gradient-accent rounded-full blur-3xl opacity-30 animate-float"></div>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                  <img 
                    src={profilePhoto} 
                    alt="Shreya Dwivedi - Full Stack Developer" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-lg text-secondary font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
                Shreya Dwivedi
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground/90">
                Full Stack Developer
              </h2>
            </div>
          </div>
            
          {/* Description and Actions */}
          <p className="text-lg text-muted-foreground max-w-2xl text-center sm:text-left">
            Passionate about creating beautiful, responsive web applications with modern technologies. 
            Specializing in React, Django, and building seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a href="/Shreya_Resume.pdf" download="Shreya_Dwivedi_Resume.pdf">
              <Button className="gradient-primary shadow-glow hover:scale-105 transition-all duration-300">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Button 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 pt-4 justify-center sm:justify-start">
            <a 
              href="https://github.com/shreya841" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/shreyadwivedii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
