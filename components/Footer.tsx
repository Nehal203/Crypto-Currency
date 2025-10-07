"use client"
import { Twitter, Linkedin, MessageCircle, Send, Link, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        QuickLink: ['Home', 'Trade', 'Contact'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    };
    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-white font-bold text-xl">BlockBasor</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            The all-in-one platform for managing and tracking <br /> your cryptocurrency portfolio across multiple blockchains.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
                            >
                                <Facebook className="text-slate-400 group-hover:text-purple-400 transition-colors" size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
                            >
                                <Instagram className="text-slate-400 group-hover:text-purple-400 transition-colors" size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
                            >
                                <MessageCircle className="text-slate-400 group-hover:text-purple-400 transition-colors" size={18} />
                            </a>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-white font-semibold mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-slate-400 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} BlockBasor. All Rights Reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                FAQs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
