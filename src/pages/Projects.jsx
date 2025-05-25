import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

const Projects = () => {
  const [expandedTech, setExpandedTech] = useState(null);

  const toggleTechnologies = (index) => {
    setExpandedTech(expandedTech === index ? null : index);
  };

  const renderTechnologies = (technologies, index, isHighlight = true) => {
    const colorClass = isHighlight ? 'highlight' : 'secondary';
    const displayTech = expandedTech === index ? technologies : technologies.slice(0, 4);
    const hasMoreTech = technologies.length > 4;

    return (
      <div className="flex flex-wrap gap-2 items-center">
        {displayTech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className={`text-xs px-2 py-1 rounded-full bg-${colorClass}/20 text-${colorClass} border border-${colorClass}/20`}
          >
            {tech}
          </span>
        ))}
        {hasMoreTech && expandedTech !== index && (
          <button
            onClick={() => toggleTechnologies(index)}
            className={`text-xs px-2 py-1 rounded-full bg-${colorClass}/20 text-${colorClass} border border-${colorClass}/20 hover:bg-${colorClass} hover:text-black transition-colors duration-300 cursor-pointer`}
          >
            <BsThreeDots className="text-xl" />
          </button>
        )}
      </div>
    );
  };

  const projects = [
    {
      title: "Epic7ata Store",
      description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory management, and order processing capabilities.",
      image: "/projectsImg/Ecommerce.jpg", // Add your project images to public folder
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "React-router", "Redux",'Axios', "React-Form", "Chart.js"],
      githubLink: "https://github.com/ouaadZouhair/epic7ataShop",
      liveLink: null,
      featured: true
    },
    {
      title: "Bankist Dashboard",
      description: "A full-stack social media application with real-time chat, post sharing, and user authentication features.",
      image: "/projectsImg/bankistDashbord.jpg",
      technologies: ["HTML", "CSS", 'JavaScript'],
      githubLink: "https://github.com/ouaadZouhair/bankist-client-darshboard",
      liveLink: "https://backist-client.netlify.app/",
      featured: false
    },
    {
      title: "Bankist Landing page",
      description: "A collaborative task management tool with drag-and-drop functionality, team assignments, and progress tracking.",
      image: "/projectsImg/bankist.jpg",
      technologies: ["HTML", "CSS", 'JavaScript'],
      githubLink: "https://github.com/ouaadZouhair/bankist",
      liveLink: "https://bankist10.netlify.app/",
      featured: false
    },
    {
      title: "Topico Store - Front-end",
      description: "A collaborative task management tool with drag-and-drop functionality, team assignments, and progress tracking.",
      image: "/projectsImg/ecommerceProject.jpg",
      technologies: ["HTML", "CSS", 'JavaScript'],
      githubLink: "https://github.com/ouaadZouhair/topico/tree/master",
      liveLink: "https://ecotopico.netlify.app/",
      featured: false
    },

    {
      title: "Forkify - Front-end",
      description: "A collaborative task management tool with drag-and-drop functionality, team assignments, and progress tracking.",
      image: "/projectsImg/forkify.jpg",
      technologies: ["HTML", "CSS", 'JavaScript'],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: null,
      featured: false
    },

    {
      title: "Zouhair Portfolio - Front-end",
      description: "A collaborative task management tool with drag-and-drop functionality, team assignments, and progress tracking.",
      image: "/projectsImg/Portfolio.png",
      technologies: ["HTML", "CSS", 'JavaScript', 'Tailwind Css'],
      githubLink: "https://github.com/ouaadZouhair/ZouhairOD",
      liveLink: "https://zouhairod.netlify.app/",
      featured: false
    },
    
  ];

  return (
    <div className="page min-h-screen text-gray-200 font-tech p-9">

      {/* Featured Projects */}
      <div className="max-w-6xl mx-auto mt-14 mb-7">
        <h2 className="text-3xl font-cyber text-highlight mb-8 text-center">FEATURED WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-lg border-2 border-highlight/20 rounded-lg overflow-hidden hover:border-highlight/80 hover:shadow-lg hover:shadow-highlight/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-highlight/40 rounded-full hover:bg-highlight/70 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-highlight/40 rounded-full hover:bg-highlight/70 transition-colors ${!project.liveLink ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-cyber text-highlight mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                {renderTechnologies(project.technologies, index)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-cyber text-secondary mb-8 text-center">OTHER PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-lg border-2 border-secondary/20 rounded-lg overflow-hidden hover:border-secondary hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary/40 rounded-full hover:bg-secondary/70 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-secondary/40 rounded-full hover:bg-secondary/70 transition-colors ${!project.liveLink ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-cyber text-secondary mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                {renderTechnologies(project.technologies, index + projects.filter(p => p.featured).length, false)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;