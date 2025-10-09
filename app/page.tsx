'use client';
import { useState } from 'react';
import Contact from "@/components/Contact";
import Converter from "@/components/Converter";
import CryptoDashboard from "@/components/CryptoDashboard";
import CryptoTicker from "@/components/CryptoTicker";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Wallet from "@/components/Wallet";
import Dashboard from '@/components/Dashboard';
import Dash from '@/components/Dashboard';
export default function Home() {
  const [currentView, setCurrentView] = useState('home');
  const renderContent = () => {
    switch (currentView) {
      case 'wallet':
        return <Wallet />;
      case 'converter':
        return <Converter />;
      case 'trade':
        return <CryptoDashboard />;
      case 'contact':
        return <Contact />;
      case 'dashboard':
        return <Dashboard/>;
      
      case 'home':
      default:
        return (
          <>
            <Hero />
            <CryptoTicker />
            <Converter />
            <CryptoDashboard />
            <Contact />
          </>
        );
    }
  };
  return (
    <>
      <Navbar onViewChange={setCurrentView} currentView={currentView} />
      <main className="pt-16">
        {renderContent()}
      </main>
      <Footer />
    </>
  );
}