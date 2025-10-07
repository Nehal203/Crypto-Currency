import Contact from "@/components/Contact";
import CryptoDashboard from "@/components/CryptoDashboard";
import CryptoTicker from "@/components/CryptoTicker";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CryptoTicker/>
      <CryptoDashboard/>
      <Contact/>
      <Footer/>
    </>
  );
}
