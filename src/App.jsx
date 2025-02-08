import React from 'react';
import './App.css';
import gif1 from './assets/naruto-sasuke.gif';
import gif2 from './assets/obito-kakashi.gif';
import gif3 from './assets/madara.gif';
import gif4 from './assets/lee.gif';
import GameSetup from './components/GameSetup';

function App() {
  return (
    <div className="relative container mx-auto p-4 min-h-screen">
      <div className="absolute inset-0 grid grid-cols-2 gap-0" style={{ filter: 'blur(5px)' }}>
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${gif1})` }}></div>
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${gif2})` }}></div>
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${gif3})` }}></div>
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${gif4})` }}></div>
      </div>
      <div className="relative z-10">
        <GameSetup />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default App;