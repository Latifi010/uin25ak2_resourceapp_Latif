import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/html" className="Mainpage-b">HTML</Link>
        <Link to="/css" className="Mainpage-b">CSS</Link>
        <Link to="/javascript" className="Mainpage-b">JavaScript</Link>
        <Link to="/react" className="Mainpage-b">React</Link>
        <Link to="/sanity" className="Mainpage-b">Sanity and Headless CMS</Link>
      </nav>
    </header>
  );
};

export default Nav;
