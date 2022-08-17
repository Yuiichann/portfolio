import React from 'react';
import SlideSkill from './SlideSkill';

const Skills = () => {
  return (
    <section className="section bg-[#444444]">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="my-2">
          <h1 className="text-3xl font-bold text-underline">Skills</h1>
        </div>

        <SlideSkill />
      </div>
    </section>
  );
};

export default Skills;
