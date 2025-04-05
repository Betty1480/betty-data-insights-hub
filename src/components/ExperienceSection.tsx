
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Junior Data Analyst",
      company: "Lish AI Labs",
      period: "Jun 2024 - Present",
      location: "Nakuru, Kenya",
      description: [
        "Analyze data for trends to support strategic decisions and improve business processes",
        "Build Power BI dashboards for real-time KPI tracking and develop custom visualizations",
        "Clean and transform data using Python and SQL, enhancing accuracy through preprocessing",
        "Develop ETL pipelines for data integration and set up SQL databases",
        "Create and optimize predictive models through feature engineering and hyperparameter tuning"
      ],
      skills: ["Python", "Power BI", "SQL", "ETL", "Feature Engineering", "Git"]
    },
    {
      title: "NOC Intern",
      company: "Vilcom Networks Limited",
      period: "Nov 2023",
      location: "Nairobi, Kenya",
      description: [
        "Monitored and troubleshot network performance issues",
        "Responded to alerts, resolved, or escalated incidents promptly",
        "Communicated updates, resolutions, and technical guidance to customers",
        "Logged incidents, maintained detailed service records, and prepared reports",
        "Collaborated with technical teams to optimize network performance"
      ],
      skills: ["Network Monitoring", "Incident Response", "Technical Support", "Documentation"]
    },
    {
      title: "ICT Intern",
      company: "Menengai Oil Refineries",
      period: "May 2022 - Aug 2022",
      location: "Nakuru, Kenya",
      description: [
        "Resolved software issues and implemented effective solutions",
        "Assisted in implementing Microsoft Dynamics ERP systems",
        "Configured VLANs, routers, and switches to optimize network performance",
        "Installed operating systems, software, and drivers",
        "Managed user accounts and monitored computer systems and networks",
        "Automated data processes with Excel"
      ],
      skills: ["ERP Systems", "Network Configuration", "IT Support", "Data Automation"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Kabarak University",
      period: "Sep 2019 - Dec 2023",
      location: "Nakuru, Kenya",
      achievements: "SECOND CLASS UPPER DIVISION"
    },
    {
      degree: "High School Education",
      institution: "Kipsigis Girls High School",
      period: "Jan 2015 - Nov 2018",
      location: "Kericho, Kenya",
      achievements: ""
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in data science, network operations, and IT support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2 text-gradient">Work History</h3>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{exp.period}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm md:text-base">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2 text-gradient">Education</h3>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <p className="text-secondary font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{edu.period}</p>
                        <p className="text-gray-500 text-sm">{edu.location}</p>
                      </div>
                    </div>
                    
                    {edu.achievements && (
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {edu.achievements}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
