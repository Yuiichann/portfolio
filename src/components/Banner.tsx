import React from 'react';
import BannerImg from '../assets/img/header-img.svg';
import ProfileImg from '../assets/img/profile.png';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const initParticle = async (engine: Engine): Promise<void> => {
    await loadStarsPreset(engine);
  };
  const optionsParticle = {
    preset: 'stars',
  };

  return (
    <section className="pb-6 pt-48 lg:pb-12 lg:pt-50 h-screen">
      <Particles options={optionsParticle} init={initParticle} className="relative -z-50" />

      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center lg:flex-row">
          {/* Info Banner */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:flex-1">
            <div className="max-w-[130px] lg:max-w-[200px] mb-2 rounded-full overflow-hidden border-2 lg:self-center">
              <img src={ProfileImg} alt="img-profile" />
            </div>

            <div className="p-3 border my-8 text-xl font-bold bg-gradient-to-r from-[#392BA1] to-[#A952C3] lg:self-center">
              <h3>Welcome to my Portfolio</h3>
            </div>

            <h2 className="text-3xl lg:self-start lg:mb-2">I'm</h2>
            <div className="text-[22px] lg:text-3xl">
              <TypeAnimation
                sequence={[
                  '',
                  500,
                  'Tran Duy Binh.',
                  1500,
                  '',
                  100,
                  'A Front End Developer!',
                  1500,
                ]}
                repeat={Infinity}
                wrapper="h2"
                className=""
              />
            </div>
          </div>

          {/* Banner Image */}
          <div className="hidden animate-bounce-slow lg:flex lg:flex-1 justify-center items-center">
            <img src={BannerImg} alt="banner" className="max-w-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
