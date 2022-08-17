import React from 'react';
import { FaRegSmileWink, FaRegKissWinkHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section className="section bg-[#333333]">
      <div className="container mx-auto" data-aos="fade-right">
        <div className="my-2">
          <h1 className="text-underline text-3xl font-bold">About</h1>
        </div>

        <div className="mt-5">
          <p className="text-lg font-normal text-center">
            Hi, My name is Tran Duy Binh and I'm a Frontend Developer
            <FaRegSmileWink className="inline-flex ml-3" />
          </p>

          <p className="font-normal text-lg text-center mt-5">
            I love developing a beautiful website and design UI. I hope you enjoy the products I
            have developed
            <FaRegKissWinkHeart className="inline-flex ml-3" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
