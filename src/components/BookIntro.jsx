import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BookIntro() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="book-intro" className="bg-gradient1 min-h-screen text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-full md:pr-8 mb-4 md:mb-0" data-aos="fade-right">
          <img
            src="./six-of-crows.jpg" // Replace with your book cover image path
            alt="Book Cover"
            className="w-1/2 mt-8 rounded-2xl shadow-lg" // Adjust the size here
          />
        </div>
        <div className="md:w-3/4 bg-black p-3 pt-20 pb-20 rounded-3xl text-center" data-aos = "fade-left">
          <h2 className="text-7xl font-comforter font-semibold">
            <span className="text-green-300 font-comforter">1 )</span> Introduction
          </h2>
          <p className="text-gray-100 leading-loose">
            - Romance
            <br />
            - Thievery
            <br />
            - Vengeance
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookIntro;
