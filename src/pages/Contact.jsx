import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from "react-i18next"; 

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      info: 'Mohammed Zouhir Ouaâd',
      color: 'bg-blue-500/90 text-white',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      info: 'github.com/ouaadzouhair',
      color: 'bg-gray-300 text-black'
    },
    {
      name: 'Phone',
      icon: <FaPhone className="text-2xl" />,
      info: '+212763835972',
      color: 'bg-green-500 text-white'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-2xl" />,
      info: 'ouaadzouhair11@gmail.com',
      color: 'bg-red-500 text-white'
    }
  ];

  return (
    <div className="page min-h-screen text-gray-200 font-tech p-4 pt-9 md:p-9">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 mt-14 mb-7 gap-8">
        
        {/* Contact Form */}
        <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-highlight shadow-lg shadow-highlight/20 transition-all duration-500 hover:shadow-highlight/40">
          <h2 className="text-3xl font-cyber text-highlight mb-6 text-center">
            {t("contact.letsConnect")}
          </h2>

          <form
            action={`https://formsubmit.co/${email}`}
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="block text-base font-tech mb-2">
                {t("contact.fullName")}
              </label>
              <input
                type="text"
                id="fullname"
                name="name"
                required
                className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 
                           focus:border-highlight focus:ring-1 focus:ring-highlight outline-none 
                           transition-all duration-300"
                placeholder={t("contact.placeholder.name")}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base font-tech mb-2">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 
                           focus:border-highlight focus:ring-1 focus:ring-highlight outline-none 
                           transition-all duration-300"
                placeholder={t("contact.placeholder.email")}
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-base font-tech mb-2">
                {t("contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 
                           focus:border-highlight focus:ring-1 focus:ring-highlight outline-none 
                           transition-all duration-300"
                placeholder={t("contact.placeholder.subject")}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-base font-tech mb-2">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 
                           focus:border-highlight focus:ring-1 focus:ring-highlight outline-none 
                           transition-all duration-300 resize-none"
                placeholder={t("contact.placeholder.message")}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-highlight/20 hover:bg-highlight/30 text-highlight 
                         border border-highlight py-3 px-6 transition-all duration-300 font-tech"
            >
              {t("contact.sendMessage")}
            </button>
          </form>
        </section>

        {/* Social & Availability */}
        <section className="space-y-8">
          <div className="bg-black/30 backdrop-blur-lg p-6 border-2 border-primary shadow-lg shadow-primary/20 transition-all duration-500 hover:shadow-primary/40">
            <h2 className="text-3xl font-cyber text-primary mb-6 text-center">
              {t("contact.connectWithMe")}
            </h2>
            {/* <div className="grid grid-cols-2 gap-2 md:gap-6">
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center p-4 bg-dark-700/30 rounded 
                             transition-all duration-300 hover:scale-105"
                >
                  {social.icon}
                  <span className="mt-2 text-sm font-cyber">{social.name}</span>

                  <div className={`absolute -top-6 mb-2 px-2 py-1 text-base md:text-lg ${social.color} 
                                  rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                                  transition-all duration-300 pointer-events-none`}>
                    {social.info}
                    <div className={`absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-2 h-2 ${social.color} rotate-45`}></div>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="grid grid-cols-2 gap-2 md:gap-6">
              {socialLinks.map((social, index) => {
                const iconContent = (
                  <div
                    className="group relative flex flex-col items-center p-4 bg-dark-700/30 rounded 
                              transition-all duration-300 hover:scale-105"
                  >
                    {social.icon}
                    <span className="mt-2 text-sm font-cyber">{social.name}</span>

                    {/* Tooltip (Desktop only) */}
                    {!isMobileOrTablet && (
                      <div
                        className={`absolute -top-6 mb-2 px-2 py-1 text-base md:text-lg ${social.color} 
                                    rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                                    transition-all duration-300 pointer-events-none`}
                      >
                        {social.info}
                        <div
                          className={`absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-2 h-2 ${social.color} rotate-45`}
                        ></div>
                      </div>
                    )}
                  </div>
                );

                // Wrap in <a> for mobile/tablet
                if (isMobileOrTablet) {
                  let link = "#";
                  if (social.name === "LinkedIn") link = "https://www.linkedin.com/in/ouaadzouhair";
                  if (social.name === "GitHub") link = "https://github.com/ouaadzouhair";
                  if (social.name === "Phone") link = "tel:+212763835972";
                  if (social.name === "Email") link = "mailto:ouaadzouhair11@gmail.com";

                  return (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {iconContent}
                    </a>
                  );
                }

                // Otherwise, just return the regular icon (PC)
                return <div key={index}>{iconContent}</div>;
              })}
            </div>

          </div>
{/* 
          <div className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20 transition-all duration-500 hover:shadow-secondary/40">
            <h2 className="text-3xl font-cyber text-secondary mb-6 text-center">
              {t("contact.availability")}
            </h2>
            <div className="space-y-4 text-center">
              <p className="text-gray-300">{t("contact.availableFreelance")}</p>
              <p className="text-gray-300">{t("contact.openFullTime")}</p>
              <p className="text-gray-300">{t("contact.responseTime")}</p>
            </div>
          </div> */}
{/* 
          <div className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20 font-mono text-center">
            <h2 className="text-3xl font-cyber text-secondary mb-4">FREELANCE MODE</h2>
            <div className="bg-dark-800/60 p-4 rounded-lg text-left border border-secondary/30 text-gray-300 leading-relaxed">
              <p><span className="text-secondary">> status:</span> online ✅</p>
              <p><span className="text-secondary">> looking_for:</span> freelance & remote contracts 🌐</p>
              <p><span className="text-secondary">> timezone:</span> UTC+1 (Morocco)</p>
              <p><span className="text-secondary">> response_time:</span> within 12 hours</p>
            </div>
          </div> */}

          <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20 transition-all duration-500 hover:shadow-secondary/40 text-center">
            <h2 className="text-3xl font-cyber text-secondary mb-6">
              CURRENT STATUS
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="flex justify-center items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span>Available for Freelance Projects</span>
              </p>
              <p>🚀 Open to exciting web development opportunities</p>
              <p>💬 Usually replies within <span className="text-secondary">a few hours</span></p>
            </div>
          </section>
{/* 
          <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20 text-center">
            <h2 className="text-3xl font-cyber text-secondary mb-4">WORK WITH ME</h2>
            <p className="text-gray-300 mb-4">
              I’m currently <span className="text-secondary font-semibold">available for freelance and remote web development</span> projects.
            </p>
            <button className="bg-secondary/20 border border-secondary px-6 py-3 text-secondary font-tech hover:bg-secondary/30 transition-all duration-300">
              Let’s Collaborate 🚀
            </button>
          </section> 
*/}



        </section>
      </div>
    </div>
  );
};

export default Contact;
