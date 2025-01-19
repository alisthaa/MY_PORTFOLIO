import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import React from "react";

export default function About() {
  const projects = [
    { name: "Inventory Management System", link: "https://github.com/alisthaa/Inventory_Management_System" },
    { name: "Environs", link: "https://github.com/alisthaa/Environs" },
    { name: "E-Commerce", link: "https://github.com/alisthaa/Ecommerce_Client" },
    { name: "Kausalyam", link: "https://github.com/mbudhathoki200/Kaushalyam" },
  
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12 mt-3 md:mt-20">
        {/* About Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-400">About Me</h1>
          <p className="mt-4 text-gray-300">
            I'm a passionate developer dedicated to creating impactful projects that solve real-world problems.
          </p>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 uppercase">My Projects</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 hover:bg-gray-700 hover:-translate-y-1 transition-all duration-200 ">
                <CardHeader>
                  <h3 className="text-lg font-medium text-white">{project.name}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Explore the details of this project on GitHub.</p>
                </CardContent>
                <CardFooter>
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full text-blue-500 border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-200"
                  >
                    View on GitHub
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* CV Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 uppercase">My CV</h2>
          <p className="text-gray-300 mb-6">
            Explore my experience and skills in detail by viewing or downloading my CV.
          </p>
          <div className="flex justify-center gap-4">
  <a
    href="/CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-2xl transition-colors duration-200"
  >
    View CV
  </a>
  <a
    href="/CV.pdf"
    download
    className="text-white border border-gray-400 hover:bg-gray-500 px-4 py-2 rounded-2xl transition-colors duration-200"
  >
    Download CV
  </a>
</div>




        </div>
      </div>
    </div>
  );
}
