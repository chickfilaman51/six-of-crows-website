import React from 'react';

function Connection() {
  return (
    <div id="connection" className="bg-gradient3 min-h-screen text-white py-16 flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3" data-aos="fade-right">
          <img
            src="src/assets/link.png" // Replace with your image path
            alt="link"
            className="w-3/4 mt-8 rounded-2xl shadow-lg" // Adjust the size here
          />
        </div>
        
        <div className="md:w-2/3 text-center bg-black pt-20 pb-20 rounded-2xl mr-20" data-aos="fade-left">
          <h2 className="text-7xl font-comforter font-semibold">
            <span className='text-green-300 font-comforter'>3 )</span> Connection To Text
          </h2>
          <p className="text-lg mt-4">
            - A Christmas Carol
            <br/>
            - Love
            <br/>
            - Main Character softened up
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Connection;
