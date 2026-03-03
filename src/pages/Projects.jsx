import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsThreeDots } from 'react-icons/bs';
import Card from '../Components/Card';

const Projects = () => {
  const [expandedTech, setExpandedTech] = useState(null);
  const {t} = useTranslation()

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
      title: t('projects.0.title'),
      description: t('projects.0.description'),
      image: "/projectsImg/Ecommerce.webp",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "React-router", "Redux",'Axios', "React-Form", "Chart.js"],
      githubLink: "https://github.com/ouaadZouhair/epic7ataShop",
      liveLink: null,
      featured: true
    },
    {
      title: t('projects.1.title'),
      description: t('projects.1.description'),
      image: "/projectsImg/bankistDashbord.webp",
      technologies: ["HTML", "CSS", 'JavaScript'],
      githubLink: "https://github.com/ouaadZouhair/bankist-client-darshboard",
      liveLink: "https://backist-client.netlify.app/",
      featured: true
    },
    {
      title: t('projects.2.title'),
      description: t('projects.2.description'),
      image: "/projectsImg/bankist.webp",
      technologies: ["HTML", "CSS", 'JavaScript'],
      githubLink: "https://github.com/ouaadZouhair/bankist",
      liveLink: "https://bankist10.netlify.app/",
      featured: true
    },
    {
      title: t('projects.3.title'),
      description: t('projects.3.description'),
      image: "/projectsImg/ecommerceProject.webp",
      technologies: ["HTML", "CSS", 'JavaScript'],
      githubLink: "https://github.com/ouaadZouhair/topico/tree/master",
      liveLink: "https://ecotopico.netlify.app/",
      featured: true
    },

    {
      title: t('projects.4.title'),
      description: t('projects.4.description'),
      image: "/projectsImg/forkify.webp",
      technologies: ["HTML", "CSS", 'JavaScript'],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: null,
      featured: true
    },

    {
      title: t('projects.5.title'),
      description: t('projects.5.description'),
      image: "/projectsImg/Portfolio.webp",
      technologies: ["HTML", "CSS", 'JavaScript', 'Tailwind Css'],
      githubLink: "https://github.com/ouaadZouhair/ZouhairOD",
      liveLink: "https://zouhairod.netlify.app/",
      featured: true
    }
    
  ];

  return (
    <section className="page min-h-screen text-gray-200 font-tech p-3 pt-9 md:p-9">

      {/* Featured Projects */}
      <div className="max-w-6xl mx-auto pt-14">
        {/* <h2 className="text-3xl font-cyber text-highlight mb-8 text-center">{t('featured_work')}</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
          {projects.filter(project => project.featured)
                .map((project, index) => (
            <Card project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;