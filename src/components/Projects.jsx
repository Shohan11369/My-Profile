import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, TailwindCSS, and MUI.",
    link: "#",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page using React and TailwindCSS.",
    link: "#",
  },
  {
    title: "JavaScript App",
    description: "A small web app project showcasing frontend skills.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 px-6 mb-6">
      <h2 className="text-3xl font-bold text-center mb-10"> Shohan Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-md">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" className="mb-4">
                {project.description}
              </Typography>
              <Button size="small" href={project.link}>
                View Project
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
