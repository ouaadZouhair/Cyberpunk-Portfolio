import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMysql, SiGit, SiPhp, SiExpress } from 'react-icons/si';
import { IoLogoLaravel } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";

const AboutPage = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  const githubUsername = 'ouaadZouhair';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profile, repos] = await Promise.all([
          axios.get(`https://api.github.com/users/${githubUsername}`),
          axios.get(`https://api.github.com/users/${githubUsername}/repos`)
        ]);

        setGithubData({
          profile: profile.data,
          repos: repos.data
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [githubUsername]);

  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 4 },
    { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 4 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 3 },
    { name: 'Express.js', icon: <SiExpress className="text-white" />, level: 3 },
    { name: 'PHP', icon: <SiPhp className="text-blue-600" />, level: 4 },
    { name: 'MySql', icon: <GrMysql className="text-pink-400" />, level: 4 },
    { name: 'Laravel', icon: <IoLogoLaravel className="text-red-500" />, level: 3 },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" />, level: 5 },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" />, level: 3 },
    { name: 'Git', icon: <SiGit className="text-red-400" />, level: 4 },
  ];

  return (
    <div className="min-h-screen text-gray-200 font-tech p-6">
      {/* Glitchy Title */}
      <div className="mt-14 mb-7">
        <h1
          className="cyber-glitch text-5xl md:text-6xl font-tech mb-4 text-center"
          data-text="<About_Me/>"
        >
          <span className="inline-block">&lt;</span>About_Me<span className="inline-block animate-neon-flicker">/&gt;</span>
        </h1>
      </div>

      {/* First Row - Description and GitHub Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Developer Profile */}
        <div className="lg:col-span-2">
          <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-highlight shadow-lg shadow-highlight/20 h-full">
            <h2 className="text-3xl font-cyber text-highlight mb-4">
              FULL-STACK DEVELOPER
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                <span className="text-secondary"></span> Greetings, netrunner. I'm a full-stack developer specializing in creating high-performance web applications with cutting-edge technologies.
              </p>
              <p>
                <span className="text-secondary"></span> With expertise spanning from front-end interfaces to back-end systems, I architect digital solutions that push boundaries and deliver exceptional user experiences.
              </p>
              <p>
                <span className="text-secondary"></span> My code is clean, efficient, and secure - optimized for performance across all platforms. I thrive in challenging environments that require creative problem-solving.
              </p>
              <p>
                <span className="text-secondary"></span> When not immersed in code, I contribute to open-source projects and stay ahead of the curve by constantly learning new frameworks and paradigms.
              </p>
            </div>
          </section>

          
        </div>

        {/* GitHub Analytics */}
        <div className="space-y-8 lg:grid-cols-1">
          <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-primary shadow-lg shadow-primary/20 ">
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                <p className="mt-2">LOADING_DATA...</p>
              </div>
            ) : githubData ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={githubData.profile.avatar_url}
                    alt="GitHub Avatar"
                    className="w-24 h-24 border-2 border-primary rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-cyber">{githubData.profile.name || githubUsername}</h3>
                    <a
                      href={githubData.profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-highlight hover:underline"
                    >
                      @{githubUsername}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                DATA_UNAVAILABLE
              </div>
            )}
          </section>

          <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-primary shadow-lg shadow-primary/20 h-80">
            
          </section>

        </div>
      </div>

      {/* Second Row - Skills Section (Full Width) */}
      <div className="max-w-6xl mx-auto">
        <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20">
          <h2 className="text-3xl font-cyber text-secondary mb-6">
            SKILL_MATRIX
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-3 bg-dark-700/50 rounded-lg hover:bg-secondary/10 transition-all duration-300">
                <div className="text-4xl mb-2">
                  {skill.icon}
                </div>
                <span className="font-cyber text-sm mb-1">{skill.name}</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${i < skill.level ? 'bg-secondary border border-secondary' : 'bg-secondary/10'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;