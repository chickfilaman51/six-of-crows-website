import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-green-900 p-4 sticky top-0 z-10">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-3"> {/* Left side */}
      <img
        src="src/assets/crow.png"
        alt="Crow Logo"
        className="max-h-16"
      />
      <div className="text-white text-xl font-semibold">Six of Crows</div>
    </div>
    <ul className="flex text-white font-bold text-xl space-x-8"> {/* Right side */}
      <li>
        <button onClick={() => scrollToSection('title-page')}>Home</button>
      </li>
      <li>
        <button onClick={() => scrollToSection('book-intro')}>Book Intro</button>
      </li>
      <li>
        <button onClick={() => scrollToSection('essential')}>Essential Question</button>
      </li>
      <li>
        <button onClick={() => scrollToSection('connection')}>Connection</button>
      </li>
      <li>
        <button onClick={() => scrollToSection('3d-model')}>3D Model</button>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
