"use client"
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-blue-400 pt-16">
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/bitcoin-blockchain-digital-coin-crypto-currency-concept-background_1017-30307.jpg')] opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Secure & Intuitive <br /> Crytpo Trading
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum eius sint itaque quos, optio mollitia totam officiis autem corporis, quia tempora ipsa fugit aliquam in deserunt nisi harum nam.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#"
                        className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-white px-8 py-4 rounded-xl hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-200 font-semibold text-lg"
                    >
                        <span>Get Started</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#"
                        className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-white px-8 py-4 rounded-xl hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-200 font-semibold text-lg"
                    >
                        <span>Learn More</span>
                    </a>
                </div>
            </div>

        </section>
    );
}
