
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, PieChart, LineChart } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Python", "SQL", "Power BI", "Data Visualization", "Machine Learning",
    "Statistical Analysis", "Excel", "ETL Pipelines", "Git", "Feature Engineering"
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-950 -z-10"></div>
      
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Detail-oriented data scientist passionate about transforming raw data into actionable insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a dedicated Data Analyst and Data Science enthusiast with expertise in data analysis, 
              visualization, and machine learning. With a Bachelor's degree in Computer Science from 
              Kabarak University, I combine strong technical skills with critical thinking to extract 
              meaningful insights from complex datasets.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              My professional journey includes experience as a Junior Data Analyst at Lish AI Labs where I 
              analyze data trends, build Power BI dashboards, develop ETL pipelines, and create predictive models.
              I am passionate about using data to drive business growth and solve real-world problems.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Database className="text-blue-500" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Data Analysis</h3>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  Transform raw data into actionable insights through comprehensive analysis
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-purple-500 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="text-purple-500" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visualization</h3>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  Create compelling data stories through interactive dashboards and charts
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-green-500 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="text-green-500" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Machine Learning</h3>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  Develop predictive models using statistical methods and machine learning
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-orange-500 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                  <PieChart className="text-orange-500" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">ETL Pipelines</h3>
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  Design and implement efficient data workflows and integration solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
