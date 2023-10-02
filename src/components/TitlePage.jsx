// TitlePage.jsx
import React, { useRef } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function TitlePage() {
  const bookIntroRef = useRef(null);

  const scrollToBookIntro = () => {
    if (bookIntroRef.current) {
      bookIntroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id = "title-page" className="flex flex-col justify-center items-center text-white min-h-screen top-0" style={{
      backgroundImage: 'url("./ketterdam.jpeg")',
      backgroundSize: 'cover', // Set background size to cover
      backgroundRepeat: 'no-repeat', // Prevent image repetition
      backgroundPosition: 'center', // Center the background image
    }}>
      <h1 className="text-9xl font-comforter font-bold" data-aos="fade-down">Six of Crows</h1>
      <p className="mt-10 font-cursive text-xl">
        6 Crows. 6 Stories. 1 Heist. 
      </p>
      <ScrollLink to="book-intro" spy={true} smooth={true} offset={0} duration={500}>
        <button
          className="mt-8 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
          onClick={scrollToBookIntro}
        >
          Get Started
        </button>
      </ScrollLink>
    </div>
  );
}

export default TitlePage;
