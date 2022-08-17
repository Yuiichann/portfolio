import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
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

  const initParticle = async (engine: Engine): Promise<void> => {
    await loadStarsPreset(engine);
  };
  const optionsParticle = {
    preset: 'stars',
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div>
      <Particles options={optionsParticle} init={initParticle} className="relative -z-50" />
      <Header setActive={setIsActiveMenu} />
      <Banner />
      <About />
      <Skills />
      <Project />

      <NavMobile isActive={isActiveMenu} setActive={setIsActiveMenu} />
    </div>
  );
};

export default App;
