import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className="bg-[#333333] min-h-0">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center space-y-3 lg:space-x-6">
          <p className="text-center">Developed By Duy Binh a.k.a Yuiichann</p>
          <ul className="flex justify-center items-center space-x-5">
            <li className="text-2xl cursor-pointer hover:text-red-400">
              <AiFillFacebook />
            </li>
            <li className="text-2xl cursor-pointer hover:text-red-400">
              <AiFillGithub />
            </li>
            <li className="text-2xl cursor-pointer hover:text-red-400">
              <AiFillTwitterCircle />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
