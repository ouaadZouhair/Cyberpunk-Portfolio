import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <header className='fixed top-0 left-0 w-full bg-black/10 font-cyber backdrop-blur-md border-b border-primary/60 z-10'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex justify-between items-center py-4'>
                    <div className='flex items-center'>
                        <a href='#hero' className='text-2xl font-bold text-primary'>ZOUHAIR<span className='text-secondary'>::</span>OD</a>
                    </div>

                    <nav className='hidden md:flex space-x-8'>
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray text-lg font-tech hover:text-primary transform transition-colors duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com" className="text-gray hover:text-primary transition-colors duration-300" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" className="text-gray hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray hover:text-primary transition-colors duration-300" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar