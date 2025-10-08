"use client"
import { Menu, X, Wallet } from 'lucide-react';
import { useState } from 'react';
interface NavbarProps {
  onViewChange?: (view: string) => void;
  currentView?: string;
}
export default function Navbar({ onViewChange, currentView = 'home' }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Home', view: 'home' },
        { name: 'Converter', view: 'converter' },
        { name: 'Trade', view: 'trade' },
        { name: 'Contact', view: 'contact' },
    ];
    const handleNavigation = (view: string) => {
        if (onViewChange) {
            onViewChange(view);
        }
        setIsMenuOpen(false);
        
        window.scrollTo(0, 0);
    };
    const isActive = (view: string) => currentView === view;
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <button 
                            onClick={() => handleNavigation('home')}
                            className="flex items-center space-x-2"
                        >
                            <span className="text-white font-bold text-xl cursor-pointer">BlockBasor</span>
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavigation(link.view)}
                                className={`text-white duration-200${
                                    isActive(link.view)  
                                    ? 'text-white font-semi  hover:text-black cursor-pointer' 
                                    : 'text-white hover:text-black cursor-pointer'
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button 
                            onClick={() => handleNavigation('')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer duration-200 shadow-lg ${
                                isActive('')
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            }`}
                        >
                            <span>Sign in</span>
                        </button>
                        <button 
                            onClick={() => handleNavigation('')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer duration-200 shadow-lg ${
                                isActive('')
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            }`}
                        >
                            <span>Register</span>
                        </button>
                        <button 
                            onClick={() => handleNavigation('dash')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer duration-200 shadow-lg ${
                                isActive('')
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            }`}
                        >
                            <span>Dash</span>
                        </button>
                        {/* <button 
                            onClick={() => handleNavigation('wallet')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer duration-200 shadow-lg ${
                                isActive('wallet')
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            }`}
                        >
                            <Wallet size={18} />
                            <span>Connect Wallet</span>
                        </button> */}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-300 hover:text-white"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-4 py-3 space-y-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavigation(link.view)}
                                className={`block w-full text-left transition-colors duration-200 ${
                                    isActive(link.view)
                                    ? 'text-white font-semibold'
                                    : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button 
                            onClick={() => handleNavigation('wallet')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full justify-center ${
                                isActive('wallet')
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            }`}
                        >
                            <Wallet size={18} />
                            <span>Connect Wallet</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}