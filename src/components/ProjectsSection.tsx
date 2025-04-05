
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Data Analysis Portfolio Projects",
      description: "Collection of data analysis projects showcasing skills in Python, SQL, visualization, and machine learning",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      skills: ["Python", "SQL", "Data Visualization"],
      githubLink: "https://github.com/Betty1480",
      liveLink: "https://believed-roadrunner-a2f.notion.site/BETTY-SAITOTI-2a5359d6acaf47209ab86338b258851f"
    },
    {
      title: "Network Performance Dashboard",
      description: "Real-time visualization of network performance metrics for monitoring and troubleshooting",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      skills: ["Power BI", "Data Integration", "Network Monitoring"],
      githubLink: "https://github.com/Betty1480",
      liveLink: "#"
    },
    {
      title: "Predictive Maintenance Model",
      description: "Machine learning model to predict equipment failures before they occur, reducing downtime",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      skills: ["Python", "Machine Learning", "Time Series Analysis"],
      githubLink: "https://github.com/Betty1480",
      liveLink: "#"
    },
    {
      title: "ETL Pipeline for Data Integration",
      description: "Automated ETL workflow for extracting, transforming, and loading data from multiple sources",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      skills: ["SQL", "Python", "ETL", "Database Design"],
      githubLink: "https://github.com/Betty1480",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my data science and analysis portfolio showcasing expertise in visualization, 
            machine learning, and data-driven solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                
                <Button
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <a href="https://github.com/Betty1480" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
