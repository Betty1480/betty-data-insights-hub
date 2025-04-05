
import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient">Betty Saitoti</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Data Analyst & Data Science Enthusiast
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Betty1480"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/betty-saitoti/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:saitotibetty99@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span className="text-gray-600 dark:text-gray-300">saitotibetty99@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-gray-600 dark:text-gray-300">Nakuru, Kenya</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Betty Saitoti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
