'use client';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Research from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Research />
      <Contact />
      <Footer/>
    </>
  );
}
