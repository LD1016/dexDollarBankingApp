import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
} from '../components/AboutSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import DiscoverSection from '../components/DiscoverSection';
import SignUpSection from '../components/SignUpSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...homeObjectOne} />
      <DiscoverSection {...homeObjectTwo} />
      <Services />
      <SignUpSection {...homeObjectThree} />
      <Footer />
    </>
  );
};

export default Home;
