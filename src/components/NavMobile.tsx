import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Scroll } from './Header';

interface Props extends Scroll {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = (props: Props) => {
  const { isActive, setActive, onScroll } = props;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`md:hidden fixed top-0 w-[50vw] z-20 h-full bg-[#333] transition-all ease-in-out border-l ${
        isActive ? 'right-0' : '-right-full'
      }`}
    >
      <div className="absolute top-3 left-3" onClick={() => setActive(false)}>
        <AiOutlineCloseCircle className="text-4xl cursor-pointer" />
      </div>

      <ul className="flex flex-col justify-center items-center h-full">
        <li
          className="text-xl font-bold hover:text-pink-600 transition-all"
          onClick={() => {
            scrollToTop();
            setActive(false);
          }}
        >
          <a className="block px-12 py-4 cursor-pointer">Home</a>
        </li>
        <li
          className="text-xl font-bold hover:text-pink-600 transition-all"
          onClick={() => {
            onScroll.scrollToAbout();
            setActive(false);
          }}
        >
          <a className="block px-12 py-4 cursor-pointer">About</a>
        </li>
        <li
          className="text-xl font-bold hover:text-pink-600 transition-all"
          onClick={() => {
            onScroll.scrollToSkill();
            setActive(false);
          }}
        >
          <a className="block px-12 py-4 cursor-pointer">Skills</a>
        </li>
        <li
          className="text-xl font-bold hover:text-pink-600 transition-all"
          onClick={() => {
            onScroll.scrollToProject();
            setActive(false);
          }}
        >
          <a className="block px-12 py-4 cursor-pointer">Projects</a>
        </li>
        <li className="text-xl font-bold hover:text-pink-600 transition-all">
          <a className="block px-12 py-4 cursor-pointer">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
