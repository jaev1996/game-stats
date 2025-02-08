// src/components/StatsJugador.js
import React, { useState, useEffect } from 'react';
import { elementos } from '../data/elementos';
import Elemento from './Elemento';
import BarraDeVida from './BarraDeVida';
import tomoeImage from '../assets/3-tomoe.png';
import hyugaImage from '../assets/hyuga.png';
import uchihaImage from '../assets/uchiha.png';
import uzumakiImage from '../assets/uzumaki.png';
import senjuImage from '../assets/senju.png';
import kaguyaImage from '../assets/kaguya.png';
import powerImage from '../assets/poder.png';
import ContadorPasos from './ContadorPasos';
import ModalMisiones from './ModalMisiones';
import PlayerOptions from './PlayerOptions';
import muerte1 from '../assets/death1.gif';
import muerte2 from '../assets/death2.gif';
import muerte3 from '../assets/death3.gif';
import muerte4 from '../assets/death4.gif';
import muerte5 from '../assets/death5.gif';
import muerte6 from '../assets/death6.gif';
import win1 from '../assets/win1.gif';
import win2 from '../assets/win2.gif';
import win3 from '../assets/win3.gif';
import win4 from '../assets/win4.gif';
import win5 from '../assets/win5.gif';
import VictoryModal from './VictoryModal';


const clanes = ['Kaguya', 'Uzumaki', 'Hyuga', 'Power', 'Senju', 'Uchiha'];
const clanImages = {
  Kaguya: kaguyaImage,
  Uzumaki: uzumakiImage,
  Hyuga: hyugaImage,
  Power: powerImage,
  Senju: senjuImage,
  Uchiha: uchihaImage
  };

const StatsJugador = ({ jugadores, onNewGame }) => {

  const [players, setPlayers] = useState(jugadores);
  const [showVictory, setShowVictory] = useState(false);
  const [victoryPlayer, setVictoryPlayer] = useState(null);
  const [victoryGif, setVictoryGif] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  


  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Esto es necesario para algunos navegadores
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleVidaChange = (index, change) => {
    const newPlayers = [...players];
    newPlayers[index].vida = Math.min(Math.max(newPlayers[index].vida + change, newPlayers[index].capvida), 200);
    setPlayers(newPlayers);
  };

  const handleIncrement = (index) => handleVidaChange(index, 5);
  const handleDecrement = (index) => handleVidaChange(index, -5);
  const handleIncrementSpecific = (index, cantidad) => {
    const value = parseInt(cantidad, 10);
    if (!isNaN(value)) {
      handleVidaChange(index, value);
    }
  };
  
  const handleDecrementSpecific = (index, cantidad) => {
    const value = parseInt(cantidad, 10);
    if (!isNaN(value)) {
      handleVidaChange(index, -value);
    }
  };  
  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index][field] = value;
    setPlayers(newPlayers);
  };

  const confirmDeath = (index) => {
    const newPlayers = [...players];
    const defeatGifs = [muerte1, muerte2, muerte3, muerte4, muerte5, muerte6];
    const randomGif = defeatGifs[Math.floor(Math.random() * defeatGifs.length)];
    newPlayers[index].vida = newPlayers[index].capvida;
    newPlayers[index].defeatGif = randomGif;
    setPlayers(newPlayers);
  };

  const confirmRevive = (index) => {
    const newPlayers = [...players];
    newPlayers[index].vida = parseInt(newPlayers[index].capvida) + 5;
    newPlayers[index].defeatGif = null;
    setPlayers(newPlayers);
  };

  const handleOptionSelect = (index, option) => {
    
    if (option === 'Victoria') {
      const winGifs = [win1, win2, win3, win4, win5];
      const randomGif = winGifs[Math.floor(Math.random() * winGifs.length)];
      setVictoryGif(randomGif);
      setVictoryPlayer(players[index]);
      setShowVictory(true);
    }
  };

  const handleNewGame = () => {
    setPlayers([]); // Eliminar los datos de los jugadores
    setShowVictory(false);
    onNewGame(); // Llamar a la función para volver a la configuración del juego
  };

  const handleRestartGame = () => {
    const resetPlayers = players.map(player => ({
      ...player,
      vida: 0,
      capvida: -200,
      dano: 0,
      evasion: 0,
      armadura: 0,
      ojos: 2,
      elemento: [],
      clan: [],
      sharinganLvl: 0,
      misiones: [],
      defeatGif: null
    }));
    setPlayers(resetPlayers);
    setShowVictory(false);
  };

  const handleElementoChange = (index) => (event) => {
    const newElemento = event.target.value;
    const newPlayers = [...players];
    
    if (!newPlayers[index].nivelesElementos) {
      newPlayers[index].nivelesElementos = {};
    }

    if (newElemento === "") {
      return;
    }
  
    if (newElemento === "Todos") {
      Object.keys(elementos).forEach((key) => {
        if (!newPlayers[index].nivelesElementos[key]) {
          newPlayers[index].nivelesElementos[key] = 1;
        }
      });
    } else {
      if (!newPlayers[index].nivelesElementos[newElemento]) {
        newPlayers[index].nivelesElementos[newElemento] = 1;
      }
    }
  
    setPlayers(newPlayers);
  };

  const incrementarNivel = (index, elemento) => {
    const newPlayers = [...players];
    newPlayers[index].nivelesElementos[elemento] = (newPlayers[index].nivelesElementos[elemento] || 1) + 1;
    setPlayers(newPlayers);
  };

  const eliminarElemento = (index, elemento) => {
    const newPlayers = [...players];
    delete newPlayers[index].nivelesElementos[elemento];
    setPlayers(newPlayers);
  };

  const handleClanChange = (index) => (event) => {
    const selectedClan = event.target.value;
    const newPlayers = [...players];
    
    if (newPlayers[index].clan.length >= 2) {
      alert('Un jugador no puede tener más de 2 clanes.');
      return;
    }
  
    if (selectedClan && !newPlayers[index].clan.includes(selectedClan)) {
      newPlayers[index].clan.push(selectedClan);
      setPlayers(newPlayers);
    }
  };

  const eliminarClan = (index, clanToRemove) => {
    const newPlayers = [...players];
    newPlayers[index].clan = newPlayers[index].clan.filter(c => c !== clanToRemove);
    setPlayers(newPlayers);
  };

  const agregarMision = (index, rango) => {
    const newPlayers = [...players];
    newPlayers[index].misiones.push(rango);
    setPlayers(newPlayers);
  };
  const eliminarMision = (index, misionIndex) => {
    const newPlayers = [...players];
    newPlayers[index].misiones.splice(misionIndex, 1);
    setPlayers(newPlayers);
  };

  const getMisionClass = (rango) => {
    switch (rango) {
      case 'C':
        return 'bg-green-600 text-white';
      case 'B':
        return 'bg-yellow-500 text-black';
      case 'A':
        return 'bg-orange-500 text-white';
      case 'S':
        return 'bg-red-600 text-white';
      default:
        return '';
    }
  };

  return (
    <>
    
    <ContadorPasos />
    <div className='flex flex-row justify-center'>
      <ModalMisiones name="Cazar Bestias" />
      <ModalMisiones name="Ejecucion Ninjas" />
      <ModalMisiones name="Pasos en Conjunto" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
   

    {players.map((player, index) => (
      <div className="p-1 border rounded-lg shadow-md bg-white" key={index}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{player.name}</h3>
          <PlayerOptions
                index={index}
                handleOptionSelect={handleOptionSelect}
                confirmDeath={confirmDeath}
                confirmRevive={confirmRevive}
                isDead={player.vida === player.capvida}
              />    
        </div>
        {player.defeatGif ? (
              <img src={player.defeatGif} alt="Derrota" className="w-full h-auto" />
            ) : (
        <>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
        <div>
          Daño💥: <input
            id="dano"
            type="text"
            value={player.dano}
            onChange={(e) => handlePlayerChange(index, 'dano', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
          Evasión💨: <input
            id="evasion"
            type="text"
            value={player.evasion}
            onChange={(e) => handlePlayerChange(index, 'evasion', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
          Armor⛑: <input
            id="armadura"
            type="text"
            value={player.armadura}
            onChange={(e) => handlePlayerChange(index, 'armadura', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        
        <div>
          Ojos  👁: <input
            id="ojos"
            type="number"
            value={player.ojos}
            onChange={(e) => handlePlayerChange(index, 'ojos', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        
        <div>
          Brazos🦾:<input
            id="brazos"
            type="text"
            value={player.brazos}
            onChange={(e) => handlePlayerChange(index, 'brazos', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
        </div>
        <div>
        Shar.<img src={tomoeImage} alt="3-tomoe" className="inline-block w-6 h-6 mr-2" /><input
            id="sharinganLvl"
            type="number"
            value={player.sharinganLvl}
            onChange={(e) => handlePlayerChange(index, 'sharinganLvl', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>

      </div>
      <div className="inline-block align-center mt-1">
          Vida💗:  
          <input 
            type="text" 
            value={player.capvida} 
            onChange={(e) => handlePlayerChange(index, 'capvida', e.target.value)} // No convertimos aquí
            className="ml-2 w-1/4 pl-3 pr-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
      </div>
     
      <div className='flex flex-wrap justify-center align-center'>
        <select
            id="clan-select"
            onChange={handleClanChange(index)}
            className="w-30 pl-3 pr-5 text-xs sm:text-sm rounded-md mt-1 ml-2"
            >
            <option value="">Clanes</option>
            {clanes.map((clan) => (
              <option key={clan} value={clan}>
                {clan}
              </option>
            ))}
        </select>
        {console.log(player.clan)}
        {player.clan.map((clan) => (
          <div key={clan} className="text-xs mt-2">
            <img
              src={clanImages[clan]}
              alt={clan}
              className="max-w-10 max-h-6 cursor-pointer mx-2 object-contain"
              onClick={() => eliminarClan(index, clan)}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center align-center'>
        <select
          id="elemento-select"
          onChange={handleElementoChange(index)}
          className="w-30 pl-3 pr-5 text-xs sm:text-sm rounded-md mt-1 ml-2 mb-2"
        >
          <option value="">Elementos</option>
          {Object.keys(elementos).map((key) => (
            <option className="text-xs" key={key} value={key}>
              {elementos[key]} {key}
            </option>
          ))}
          <option className='text-xs' value="Todos">Todos</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center align-center">
        {player.nivelesElementos && Object.keys(player.nivelesElementos).map((key) => (
          <Elemento
            key={key}
            elemento={elementos[key]}
            nivel={player.nivelesElementos[key]}
            onIncrement={() => incrementarNivel(index, key)}
            onDelete={() => eliminarElemento(index, key)}
          />
        ))}
      </div>
     

      <BarraDeVida vida={player.vida} capacidadVida={parseInt(player.capvida, 10)} onIncrement={() => handleIncrement(index)} onDecrement={() => handleDecrement(index)} />
        <div className="mt-2 flex items-center justify-center space-x-4">
          <input
            id="cantidad"
            type="number"
            value={player.cantidad || 0}
            onChange={(e) => handlePlayerChange(index, 'cantidad', e.target.value)}
            className="mt-1 block w-20 pl-2 py-2 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
          <button
            onClick={() => handleIncrementSpecific(index, player.cantidad)}
            className="bg-green-500 text-white px-3 py-1 rounded-md"
          >
            💚
          </button>
          <button
            onClick={() => handleDecrementSpecific(index, player.cantidad)}
            className="bg-red-500 text-white px-3 py-1 rounded-md"
          >
            🔪
          </button>
        </div>
        </> )}
        {/* Controles para agregar misiones */}
        <div className="mt-4 flex items-center justify-center space-x-4">
        <h4 className="text-lg font-bold">Misiones:</h4>
          <button onClick={() => agregarMision(index, 'S')} className="bg-red-600 text-white px-3 py-1 rounded-md">S</button>
          <button onClick={() => agregarMision(index, 'A')} className="bg-orange-500 text-white px-3 py-1 rounded-md">A</button>
          <button onClick={() => agregarMision(index, 'B')} className="bg-yellow-500 text-white px-3 py-1 rounded-md">B</button>
          <button onClick={() => agregarMision(index, 'C')} className="bg-green-600 text-white px-3 py-1 rounded-md">C</button>
        </div>
        {/* Mostrar misiones */}
        <div className="mt-4">
          <ul className="flex flex-wrap items-center justify-center space-x-2">
            {player.misiones.map((mision, mIndex) => (
              <li
                key={mIndex}
                className={`text-sm mb-1 cursor-pointer ${getMisionClass(mision)} px-2 py-1 rounded-md`}
                onClick={() => eliminarMision(index, mIndex)}
              >
                {mision}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
    </div>
    {showVictory && (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <img src={victoryGif} alt="Victoria" className="w-4/5 h-full" />
        </div>
      )}
      <VictoryModal
        show={showVictory}
        onClose={() => setShowVictory(false)}
        players={players}
        victoryPlayer={victoryPlayer}
        onNewGame={handleNewGame}
        onRestartGame={handleRestartGame}
      />
    </>
  );
};

export default StatsJugador;
