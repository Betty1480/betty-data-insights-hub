
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <p className="text-primary font-medium mb-4">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Betty Saitoti
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-gradient">
                Data Analyst & Scientist
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              Detail-oriented data scientist with expertise in analysis and quantitative problem-solving, 
              dedicated to driving company growth through data-driven insights.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button className="rounded-full" size="lg">
                View My Work
              </Button>
              <Button variant="outline" className="rounded-full" size="lg">
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/Betty1480"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/betty-saitoti/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:saitotibetty99@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-slide-up">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-white shadow-xl border-8 border-white dark:border-gray-800">
                <img 
                  src="/lovable-uploads/57461cd7-64be-4545-85f2-14ebed9751e5.png" 
                  alt="Betty Saitoti - Data Analyst" 
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>
              
              {/* Stats Pill */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-6 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg">
                  <div className="text-center">
                    <p className="text-primary font-bold text-2xl">10+</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
                  </div>
                  <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
                  <div className="text-center">
                    <p className="text-primary font-bold text-2xl">2+</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-pulse">
          <p className="text-sm text-gray-600 mb-1">Scroll Down</p>
          <ChevronDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
