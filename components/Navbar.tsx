"use client";
import { Wallet } from "lucide-react";
export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Trade', href: '#trade' },
        { name: 'Contact', href: '#contact' },
    ]
    return (

        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#home" className="flex items-center space-x-2">
                            <span className="text-black font-bold text-xl">BlockBasor</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-black hover:text-slate-300 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="flex items-center space-x-2 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50">
                            <Wallet size={18} />
                            <span>Connect Wallet</span>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}