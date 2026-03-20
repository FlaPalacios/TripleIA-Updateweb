import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '@/config/content';

import logoWhite from '@/assets/LOGO_header.svg';
import logoColor from '@/assets/LOGO_global.svg';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="flex items-center">
                            <img
                                src={isScrolled ? logoColor : logoWhite}
                                alt="TRIPLE IA CONSULTORES"
                                className="h-56 w-auto max-w-[256px] object-contain"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {content.navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-200 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${isScrolled ? 'text-primary' : 'text-white'} hover:bg-opacity-20 hover:bg-gray-200 focus:outline-none`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {content.navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
