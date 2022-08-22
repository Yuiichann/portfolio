import React from 'react';
import { Scroll } from './Header';

interface Props extends Scroll {}

const Nav = (props: Props) => {
  const { onScroll } = props;
  return (
    <div>
      <ul className="hidden md:flex justify-center items-center space-x-8">
        <li className="nav-link" onClick={() => onScroll.scrollToSkill()}>
          <a>Skills</a>
        </li>
        <li className="nav-link" onClick={() => onScroll.scrollToAbout()}>
          <a>About</a>
        </li>
        <li className="nav-link" onClick={() => onScroll.scrollToProject()}>
          <a>Projects</a>
        </li>
        <li className="nav-link">
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
