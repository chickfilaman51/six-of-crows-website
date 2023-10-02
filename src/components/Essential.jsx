import React from 'react';

function Essential() {
  return (
    <div id="essential" className="bg-gradient2 min-h-screen text-white py-16 flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 bg-black p-3 pt-20 pb-20 rounded-3xl text-center" data-aos="fade-right">
          <h2 className="text-7xl font-comforter font-semibold">
            <span className='text-green-300 font-comforter'>2 )</span> Essential Question
          </h2>
          <p className="text-gray-100 leading-loose">
            Question: What role do other people play in constructing the main character's identity?
            <br/>
            <br/>
            - Kaz
            <br/>
            - Inez
            <br/>
            - Pekka
            <br/>
            - The Crows
          </p>
        </div>
        <div className="md:w-2/3 mb-4 md:mb-0 ml-20" data-aos="fade-left">
          <img
            src="six-of-crows-website/src/assets/essential.png" // Replace with your image path
            alt="Essential Image"
            className="w-3/4 mt-8 rounded-2xl shadow-lg" // Adjust the size here
          />
        </div>
      </div>
    </div>
  );
}

export default Essential;
