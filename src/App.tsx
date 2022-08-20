import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Project from './components/Project';
import Skills from './components/Skills';

const App = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const [scrollNav, setScrollNav] = useState<object | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div>
      <Header setActive={setIsActiveMenu} scrollNav={scrollNav} />
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

      <NavMobile isActive={isActiveMenu} setActive={setIsActiveMenu} />
    </div>
  );
};

export default App;
