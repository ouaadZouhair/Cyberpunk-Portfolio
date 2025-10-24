import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiGit, SiPhp, SiExpress, SiWordpress, SiBootstrap, SiCanva , SiTypescript} from 'react-icons/si';
import { IoLogoLaravel } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import axios from 'axios';

const AboutPage = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const githubUsername = 'ouaadZouhair';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profile, repos] = await Promise.all([
          axios.get(`https://api.github.com/users/${githubUsername}`),
          axios.get(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)
        ]);

        // Calculate total stars and total contributions (from repo count)
        const totalStars = repos.data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        setGithubData({
          profile: profile.data,
          repos: repos.data,
          stats: {
            totalRepos: profile.data.public_repos,
            totalStars,
            followers: profile.data.followers,
            following: profile.data.following
          }
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
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, level: 3 },
    { name: 'PHP', icon: <SiPhp className="text-indigo-600" />, level: 4 },
    { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 4 },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" />, level: 4 },
    { name: 'Bootstrap', icon: <SiBootstrap  className="text-purple-700" />, level: 4 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 3 },
    { name: 'Express.js', icon: <SiExpress className="text-white" />, level: 3 },
    { name: 'Laravel', icon: <IoLogoLaravel className="text-red-500" />, level: 3 },
    { name: 'MySql', icon: <GrMysql className="text-blue-800" />, level: 4 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 4 },
    { name: 'Wordpress', icon: <SiWordpress  className="text-gray-500" />, level: 3 },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" />, level: 2 },
    { name: 'Git', icon: <SiGit className="text-red-400" />, level: 4 },
    { name: 'Canva', icon: <SiCanva   className="text-sky-400" />, level: 5 },
  ];

  return (
    <div className="page min-h-screen text-gray-200 font-tech p-4 pt-9 md:p-9">

      {/*  Description and GitHub Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 mb-7">
        {/* Developer Profile */}
        <div className="lg:col-span-2">
          <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-highlight shadow-lg shadow-highlight/20 h-full">
            <h2 className="text-3xl font-cyber  text-center text-highlight mb-4">
              {t('about.title')}
            </h2>
            <div className="space-y-4 text-lg ">
              <p>
                <span className="text-secondary text-2xl text-justify">#</span> {t('about.intro')}
              </p>
               <p>
                <span className="text-secondary text-2xl text-justify">#</span> {t('about.education')}
              </p>
              
              <p>
                <span className="text-secondary text-2xl text-justify">#</span> {t('about.philosophy')}
              </p>
             
            </div>
          </section>

          
        </div>

       
        <div className="hidden lg:block space-y-8 lg:grid-cols-1">
            <div className="relative group">
              <img
                src="/avatar_zouhair.png"
                alt="Mohammed Zouhair Ouaad avatar"
                className="w-full h-auto  object-cover border-2 border-primary shadow-[0_0_30px_#00ffff]/50 transition-transform duration-500"
              />
            </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto">
        <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20">
          <h2 className="text-3xl font-cyber text-center text-secondary mb-6">
            {t('skills')}
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