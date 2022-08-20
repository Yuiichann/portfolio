import React from 'react';
import { FaRegSmileWink, FaRegKissWinkHeart } from 'react-icons/fa';
import { CgArrowRightO } from 'react-icons/cg';

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

        <div className="mt-8 flex flex-col lg:flex-row">
          <ul className="flex flex-col space-y-2 lg:flex-1">
            <li className="flex items-center justify-start space-x-4">
              <div>
                <CgArrowRightO className='text-red-400' />
              </div>
              <span>Phone: (+84) 977 439 801</span>
            </li>
            <li className="flex items-center justify-start space-x-4">
              <div>
                <CgArrowRightO className='text-red-400' />
              </div>
              <span>Birthday: 06/12/2001</span>
            </li>
            <li className="flex items-center justify-start space-x-4">
              <div>
                <CgArrowRightO className='text-red-400' />
              </div>
              <p className="">Study: Industrial University of Ho Chi Minh city.</p>
            </li>
          </ul>

          <ul className="flex flex-col space-y-2 mt-2 lg:mt-0 lg:flex-1 lg:border-l lg:pl-2">
            <li className="flex items-center justify-start space-x-4">
              <div>
                <CgArrowRightO className='text-red-400' />
              </div>
              <span>Location: Go Vap District, TP. Ho Chi Minh.</span>
            </li>

            <li className="flex items-center justify-start space-x-4">
              <div>
                <CgArrowRightO className='text-red-400' />
              </div>
              <span>Interest: Anime, Manga, Light Novel, Watch Movies, Code, ...</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
