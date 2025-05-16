import { ArrowDown, Code } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {


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
        <section className='min-h-screen flex items-center relative overflow-hidden pt-16'>
            <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300ffe7' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
            <div
                className="absolute z-0 w-80 h-80 rounded-full blur-[100px] bg-primary/30 animate-pulse duration-1000"
                style={{ top: '10%', right: '10%' }}
            ></div>
            <div
                className="absolute z-0 w-80 h-80 rounded-full blur-[100px] bg-secondary/30 animate-pulse delay-1000 duration-500"
                style={{ bottom: '10%', left: '10%' }}
            ></div>

            <div className="container mx-auto px-4 z-0 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <div className="space-y-6">
                            <div className='font-tech'>
                                <p className="text-primary text-lg mb-2 font-tech">
                                    <span className="inline-block animate-neon-flicker">&lt;</span>Hello_World<span className="inline-block animate-neon-flicker">/&gt;</span>
                                </p>
                                <h1 className="cyber-glitch text-4xl sm:text-5xl md:text-7xl font-cyber font-bold tracking-tighter mb-4" data-text="Web Developer">
                                    Web Developer
                                </h1>
                                <h2 className="text-xl sm:text-2xl text-gray/80">
                                    <span className="text-primary">Design</span> • <span className="text-secondary">Code</span> • <span className="text-highlight">Create</span>
                                </h2>
                            </div>

                            <p className="text-gray/80 max-w-md border-l-2 font-tech border-primary/50 pl-4 py-2">
                                Building next-level digital experiences with clean code and cutting-edge design.
                                Turning complex problems into elegant solutions.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="#contact" className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-cyber font-bold text-dark bg-primary border-2 border-primary transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,231,0.5)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50;">
                                    Connect
                                    <Code className="ml-2" size={18} />
                                </a>
                                <a href="#projects" className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-cyber font-bold text-primary bg-transparent border-2 border-primary transform 
           transition-all duration-300 ease-out hover:bg-primary/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,231,0.5)] 
           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50;">
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 w-full mx-auto md:order-2">
                        <div className="flex items-center justify-center relative">

                            <p className='text-white text-xl bg-highlight/95 font-tech font-semibold absolute top-[5%] left-[10%] pr-2 pl-1 py-1 typing max-w-[20ch]' style={{ animationDuration: '4s' }}>
                                I'm Zouhair Ouaad
                            </p>
                            <p className='text-white text-xl bg-highlight/95 font-tech font-semibold absolute bottom-[10%] right-[0%] pr-2 pl-1 py-1 typing max-w-[25ch] delay-1000' style={{ animationDuration: '3s' }}>
                                Full Stack Developer
                            </p>
                            <p className='text-white text-xl bg-highlight/95 font-tech font-semibold absolute bottom-[30%] left-0 pr-2 pl-1 py-1 typing max-w-[20ch] delay-2000' style={{ animationDuration: '4s' }}>
                                Web development
                            </p>
                            <p className='text-white text-xl bg-highlight/95 font-tech font-semibold absolute bottom-[50%] right-[10%] pr-2 pl-1 py-1 typing max-w-[10ch] delay-3000' style={{ animationDuration: '1s' }}>
                                UI/UX
                            </p>
                            <p className='text-white text-xl bg-highlight/95 font-tech font-semibold absolute -bottom-5 right-[60%] pr-2 pl-1 py-1 typing max-w-[6ch] delay-4000' style={{ animationDuration: '1s' }}>
                                IT
                            </p>
                            <p className='text-white text-xl bg-highlight/95 font-tech font-semibold absolute -top-5 right-[30%] pr-2 pl-1 py-1 typing max-w-[10ch] delay-5000' style={{ animationDuration: '3s' }}>
                                Coding
                            </p>

                            <img
                                src="/me3.jpg"
                                alt="Glitched Avatar"
                                className="rounded-full w-[450px] h-[450px]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero