import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { useTranslation } from "react-i18next"; 
import AnimatedBtn from "../Components/AnimatedBtn";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { t } = useTranslation();

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject) {
      setStep(2);
    } else {
      alert("Please fill all fields first!");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "email") setEmail(e.target.value);
  };


  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      info: 'Mohammed Zouhir Ouaâd',
      color: 'bg-blue-500/90 text-white',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram  className="text-2xl" />,
      info: 'zouhairouaad1',
      color: 'bg-fuchsia-600/90 text-white',
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
    <div className="page  text-gray-200 font-tech p-4 pt-9 md:p-9">
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

            {step === 1 && (
              <>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullname" className="block text-base font-tech mb-2">
                    {t("contact.fullName")}
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 
                               focus:border-highlight focus:ring-1 focus:ring-highlight outline-none 
                               transition-all duration-300"
                    placeholder={t("contact.placeholder.subject")}
                  />
                </div>

                <AnimatedBtn
                  text="Next"
                  type="button"
                  onClick={handleNext}
                  className="text-lg font-digital w-full md:text-xl relative cursor-pointer inline-flex items-center justify-center px-5 py-1 md:px-4 md:py-2 overflow-hidden font-bold text-dark bg-highlight border-2 border-highlight transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-highlight focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50"
                  textColor="text-black"
                />
              </>
            )}

            {step === 2 && (
              <>
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-base font-tech mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    required
                    className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 
                               focus:border-highlight focus:ring-1 focus:ring-highlight outline-none 
                               transition-all duration-300 resize-none"
                    placeholder={t("contact.placeholder.message")}
                  />
                </div>

                <AnimatedBtn
                  text={t("contact.sendMessage")}
                  submit={true}
                  className="text-lg font-digital w-full md:text-xl relative cursor-pointer inline-flex items-center justify-center px-5 py-1 md:px-4 md:py-2 overflow-hidden font-bold text-dark bg-highlight border-2 border-highlight transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-highlight focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50"
                  textColor="text-black"
                />
              </>
            )}
          </form>
        </section>

        {/* Social & Availability */}
        <section className="space-y-8">
          <div className="bg-black/30 backdrop-blur-lg py-6 border-2 border-primary shadow-lg shadow-primary/20 transition-all duration-500 hover:shadow-primary/40">
            <h2 className="text-3xl font-cyber text-primary mb-6 text-center">
              {t("contact.connectWithMe")}
            </h2>
            
            <div className="flex justify-around mx-auto w-full items-center gap-2 md:gap-3">
              {socialLinks.map((social, index) => {
                const iconContent = (
                  <div
                    className="group relative flex flex-col items-center p-4 bg-dark-700/30 rounded
                              transition-all duration-300 hover:scale-105"
                  >
                    {social.icon}
                    <span className="mt-2 text-lg font-tech">{social.name}</span>

                    {/* Tooltip (Desktop only) */}
                    {!isMobileOrTablet && (
                      <div
                        className={`absolute bottom-full mb-3 px-3 py-1 text-sm md:text-base
                                    ${social.color} rounded-md shadow-lg
                                    opacity-0 scale-95 max-w-xl
                                    group-hover:opacity-100 group-hover:scale-100
                                    transition-all duration-200 pointer-events-none`}
                      >
                        {social.info}

                        {/* Arrow */}
                        <div
                          className={`absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 ${social.color} rotate-45`}
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

                return <div key={index}>{iconContent}</div>;
              })}
            </div>

          </div>


          <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20 transition-all duration-500 hover:shadow-secondary/40 text-center">
            <h2 className="text-3xl font-cyber text-secondary mb-6">
              {t("contact.currentStatus")}
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="flex justify-center items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span>{t("contact.availableFreelance")}</span>
              </p>
              <p>🚀 {t("contact.openFullTime")}</p>
              <p>💬 {t("contact.responseTime")}</p>
            </div>
          </section>

     




        </section>
      </div>
    </div>
  );
};

export default Contact;
