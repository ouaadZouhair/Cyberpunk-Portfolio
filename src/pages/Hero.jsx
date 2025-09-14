import { IoIosCode } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";




const Hero = () => {
    const {t} = useTranslation()

    const handleContactClick = () => {
        // Navigate to Contact page (index 3)
        window.dispatchEvent(new CustomEvent('navigateToPage', { detail: 3 }));
    };

    const handleProjectsClick = () => {
        // Navigate to Projects page (index 2)
        window.dispatchEvent(new CustomEvent('navigateToPage', { detail: 2 }));
    };

    useEffect(() => {
        const dots = document.getElementById('dots');
        const text = document.getElementById('loading-text');
        const line = document.getElementById('loading-line');

        if (!dots || !text || !line) return;

        let count = 0;
        const interval = setInterval(() => {
            count = (count + 1) % 4;
            dots.textContent = '.'.repeat(count);
        }, 400);

        setTimeout(() => {
            clearInterval(interval);
            text.textContent = 'Portfolio loaded successfully!';
            text.classList.remove('text-yellow-400');
            text.classList.add('text-white');
            line.classList.remove('text-yellow-400');
            line.classList.add('text-white');
            line.style.borderRightColor = '#ffffff';
        }, 3000);
    }, []);


    return (
        <section className='page min-h-screen flex items-center relative overflow-hidden pt-16'>

            <div className="container mx-auto px-4 z-0 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="space-y-6">
                            <div className='font-tech'>
                                <p className="text-primary text-lg mb-2 font-tech">
                                    <span className="inline-block">&lt;</span>{t('hero.hello')}<span className="inline-block animate-neon-flicker">/&gt;</span>
                                </p>
                                <h1 className="cyber-glitch text-4xl sm:text-5xl md:text-6xl font-cyber font-bold tracking-tighter mb-4" data-text={t('hero.title')}>
                                    {t('hero.title')}
                                </h1>
                                <h2 className="text-xl sm:text-2xl text-gray/80">
                                    <span className="text-primary">{t('hero.subtitle.design')}</span> • <span className="text-secondary">{t('hero.subtitle.code')}</span> • <span className="text-highlight">{t('hero.subtitle.create')}</span>
                                </h2>
                            </div>

                            <p className="text-gray/80 max-w-md md:text-lg border-l-2 font-tech border-primary/50 pl-4 py-2">
                                {t('hero.description')}
                            
                            </p>

                            <div className="flex flex-wrap gap-1 md:gap-4 pt-4">
                                <button onClick={handleContactClick} className="text-sm w-full relative cursor-pointer inline-flex items-center justify-center px-3 py-1 md:px-4 md:py-2 overflow-hidden font-cyber font-bold text-dark bg-primary border-2 border-primary transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,231,0.5)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                                    {t('hero.connect')}
                                    <IoIosCode className="ml-2" size={26} />
                                </button>
                                <button onClick={handleProjectsClick} className="text-sm w-full relative cursor-pointer inline-flex items-center justify-center px-4 py-2 overflow-hidden font-cyber font-bold text-primary bg-transparent border-2 border-primary transform transition-all duration-300 ease-out hover:bg-primary/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,231,0.5)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                                    {t('hero.view_projects')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 w-full mx-auto lg:order-2">
                        <div className="flex items-center justify-center relative">                        
                            <p className="flex items-center justify-between gap-2 rounded-full border-2 border-[#00FF41] text-white text-sm md:text-md bg-black/60 font-tech font-semibold absolute top-1 right-0 md:right-45 lg:right-25 p-2.5 animate-bounce">
                            <span className="w-3.5 h-3.5 bg-[#00FF41] rounded-full animate-pulse [animation-duration:0.5s]"></span>
                                {t("hero.online")}
                            </p>

                            <img
                            src="/me3.webp"
                            alt="Glitched Avatar"
                            loading="lazy"
                            className="rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
                            />
                        </div>
                     </div>



                </div>
            </div>
        </section>
    )
}

export default Hero