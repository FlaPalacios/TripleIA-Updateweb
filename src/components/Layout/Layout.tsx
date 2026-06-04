import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from '../UI/WhatsAppButton';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};
