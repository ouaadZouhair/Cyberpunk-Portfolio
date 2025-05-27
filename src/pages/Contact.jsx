import { useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [email, setEmail] = useState('')

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
        <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-highlight shadow-lg shadow-highlight/20">
          <h2 className="text-3xl font-cyber text-highlight mb-6 text-center">LET'S CONNECT</h2>

          <form
            action={`https://formsubmit.co/${email}`}
            method="POST"
            className="space-y-4"
          >
            {/* Optional Config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

            <div>
              <label htmlFor="fullname" className="block text-base font-tech mb-2">FULL NAME</label>
              <input
                type="text"
                id="fullname"
                name="name"
                required
                className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-tech mb-2">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-base font-tech mb-2">SUBJECT</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all"
                placeholder="What's your subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-tech mb-2">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full bg-dark-700/50 border border-highlight/50 rounded-lg p-3 text-gray-200 focus:border-highlight focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-highlight/20 hover:bg-highlight/30 text-highlight border border-highlight py-3 px-6 transition-all duration-300 font-tech"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>

        {/* Social Links and Info */}
        <section className="space-y-8">
          <div className="bg-black/30 backdrop-blur-lg p-6 border-2 border-primary shadow-lg shadow-primary/20">
            <h2 className="text-3xl font-cyber text-primary mb-6 text-center">CONNECT WITH ME</h2>
            <div className="grid grid-cols-2 gap-2 md:gap-6">
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center p-4 bg-dark-700/30 rounded transition-all duration-300 hover:scale-105"
                >
                  {social.icon}
                  <span className="mt-2 text-sm font-cyber">{social.name}</span>

                  {/* Tooltip */}
                  <div className={`absolute -top-6 mb-2 px-2 py-1 text-base md:text-lg ${social.color} rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none`}>
                    {social.info}
                    <div className={`absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-2 h-2 ${social.color} rotate-45`}></div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20">
            <h2 className="text-3xl font-cyber text-secondary mb-6 text-center">AVAILABILITY</h2>
            <div className="space-y-4 text-center">
              <p className="text-gray-300">Available for freelance work</p>
              <p className="text-gray-300">Open to full-time opportunities</p>
              <p className="text-gray-300">Response time: Within 24 hours</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
