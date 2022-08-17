import React, { useEffect, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: Props) => {
  const [navFixed, setNavFixed] = useState(false);
  const { setActive } = props;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`py-6 transition-all fixed w-full bg-[#000]/70 z-10 border-b ${
        navFixed ? 'border-red-400' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="max-w-[100px] lg:max-w-[120px] cursor-pointer hover:opacity-80 select-none">
            <img src={Logo} alt="logo" />
          </div>

          {/* Menu Laptop */}
          <Nav />

          {/* Menu on Mobile */}
          <div className="md:hidden" onClick={() => setActive(true)}>
            <RiMenu3Fill className="text-4xl cursor-pointer font-extrabold" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
