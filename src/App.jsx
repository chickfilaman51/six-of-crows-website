import React, { useState } from 'react';
import './index.css';
import TitlePage from './components/TitlePage.jsx';
import BookIntro from './components/BookIntro';
import Essential from './components/Essential';
import Connection from './components/Connection';
import Navbar from './components/Navbar';
import PrototypeCanvas from './components/ThreeModelViewer';

function App() {


  return (
    <div className="bg-cover bg-center min-h-screen">
      <Navbar />
      <TitlePage />
      <BookIntro />
      <Essential />
      <Connection />
      <PrototypeCanvas/>
    </div>
  );
}

export default App;
