import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Project from './components/Project';
import Skills from './components/Skills';

const App = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const scrollToSkill = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header
        setActive={setIsActiveMenu}
        onScroll={{ scrollToSkill, scrollToAbout, scrollToProject }}
      />
      <Banner />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div>
        <Contact />
      </div>

      <Footer />

      <NavMobile
        isActive={isActiveMenu}
        setActive={setIsActiveMenu}
        onScroll={{ scrollToSkill, scrollToAbout, scrollToProject }}
      />
    </div>
  );
};

export default App;
