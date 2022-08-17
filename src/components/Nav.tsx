import React from 'react';

const Nav = () => {
  return (
    <div>
      <ul className="hidden md:flex justify-center items-center space-x-8">
        <li className="nav-link">
          <a href="#">Skills</a>
        </li>
        <li className="nav-link">
          <a href="#">About</a>
        </li>
        <li className="nav-link">
          <a href="#">Projects</a>
        </li>
        <li className="nav-link">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
