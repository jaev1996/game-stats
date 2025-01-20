// src/components/StatsJugador.js
import React, { useState } from 'react';
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


const clanes = ['Kaguya', 'Uzumaki', 'Hyuga', 'Power', 'Senju', 'Uchiha'];
const clanImages = {
  Kaguya: kaguyaImage,
  Uzumaki: uzumakiImage,
  Hyuga: hyugaImage,
  Power: powerImage,
  Senju: senjuImage,
  Uchiha: uchihaImage
  };

const StatsJugador = ({ jugadores }) => {
  const [vida, setVida] = useState(0);
  const [capacidadVida, setCapacidadVida] = useState('-200'); // Estado como cadena
  const [nivelesElementos, setNivelesElementos] = useState({});
  const [cantidad, setCantidad] = useState(0); // Nuevo estado para la cantidad específica
  const [dano, setDano] = useState(0);
  const [evasion, setEvasion] = useState(0);
  const [armadura, setArmadura] = useState(0);
  const [ojos, setOjos] = useState(2);
  const [brazos, setBrazos] = useState(2);
  const [sharinganLvl, setSharinganLvl] = useState(0);
  const [selectedClanes, setSelectedClanes] = useState([]); // Estado para los clanes seleccionados
  
  
  const [players, setPlayers] = useState(jugadores);
  const handleVidaChange = (change) => {
    setVida((prevVida) => Math.min(Math.max(prevVida + change, capacidadVida), 200));
  }

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index][field] = value;
    setPlayers(newPlayers);
  };

  const handleIncrement = () => handleVidaChange(5);
  const handleDecrement = () => handleVidaChange(-5);
  const handleIncrementSpecific = () => handleVidaChange(parseInt(cantidad, 10));
  const handleDecrementSpecific = () => handleVidaChange(-parseInt(cantidad, 10));


  const handleElementoChange = (event) => {
    const newElemento = event.target.value;
    setNivelesElementos({
      ...nivelesElementos,
      [newElemento]: nivelesElementos[newElemento] || 1
    });
  };

  const incrementarNivel = (elemento) => {
    setNivelesElementos({
      ...nivelesElementos,
      [elemento]: (nivelesElementos[elemento] || 1) + 1
    });
  };

  const eliminarElemento = (elemento) => {
    const updatedElementos = { ...nivelesElementos };
    delete updatedElementos[elemento];
    setNivelesElementos(updatedElementos);
  };

  const handleClanChange = (event) => {
    const newClan = event.target.value;
    if (newClan && !selectedClanes.includes(newClan)) {
      setSelectedClanes([...selectedClanes, newClan]);
    }
  };

  const eliminarClan = (clan) => {
    setSelectedClanes(selectedClanes.filter(c => c !== clan));
  };

  return (
    <>

    <h1 className="text-2xl font-bold mb-4">Estadísticas del Juego</h1> 
    <ContadorPasos />
    <div className='flex flex-row justify-center'>
      <ModalMisiones name="Cazar Bestias" />
      <ModalMisiones name="Ejecucion Ninjas" />
      <ModalMisiones name="Pasos en Conjunto" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   

    {players.map((player, index) => (
      <div className="p-4 border rounded-lg shadow-md bg-white" key={index}>
        <h3 className='text-xl font-bold'>{player.name}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
            value={evasion}
            onChange={(e) => handlePlayerChange(index, 'evasion', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
          Armor⛑: <input
            id="armadura"
            type="text"
            value={armadura}
            onChange={(e) => handlePlayerChange(index, 'armadura', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        
        <div>
          Ojos  👁: <input
            id="ojos"
            type="number"
            value={ojos}
            onChange={(e) => handlePlayerChange(index, 'ojos', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        
        <div>
          Brazos🦾:<input
            id="brazos"
            type="text"
            value={brazos}
            onChange={(e) => handlePlayerChange(index, 'brazos', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
        </div>
        <div>
        Shar.<img src={tomoeImage} alt="3-tomoe" className="inline-block w-6 h-6 mr-2" /><input
            id="sharinganLvl"
            type="number"
            value={sharinganLvl}
            onChange={(e) => handlePlayerChange(index, 'sharinganLvl', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
          Vida💗:  
          <input 
            type="text" 
            value={capacidadVida} 
            onChange={(e) => handlePlayerChange(index, 'capvida', e.target.value)} // No convertimos aquí
            className="w-2/4 pl-3 pr-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
        </div>

      </div>
     
      <div className='flex flex-wrap justify-center align-center'>
        <select
            id="clan-select"
            onChange={handleClanChange}
            className="w-30 pl-3 pr-5 text-xs focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mt-1 ml-2"
            >
            <option value="">Kekkei Genkai</option>
            {clanes.map((clan) => (
              <option key={clan} value={clan}>
                {clan}
              </option>
            ))}
        </select>
          {selectedClanes.map((clan) => (
            <div key={clan} className="text-xs mt-2">
              <img
                src={clanImages[clan]}
                alt={clan}
                className="w-6 h-6 mx-2"
                onClick={() => eliminarClan(clan)}
                />
            </div>
          ))}
      </div>
      <div className='flex justify-center align-center'>

      <select
        id="elemento-select"
        onChange={handleElementoChange}
        className="mt-1 w-30 pl-3 pr-5 text-xs focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-2 ml-2"
        >
        <option value="">Elementos</option>
        {Object.keys(elementos).map((key) => (
          <option className="text-xs" key={key} value={key}>
            {elementos[key]} {key}
          </option>
        ))}
      </select>
      </div>
      <div className="flex flex-wrap justify-center align-center">
        {Object.keys(nivelesElementos).map((key) => (
          <Elemento
            key={key}
            elemento={elementos[key]}
            nivel={nivelesElementos[key]}
            onIncrement={() => incrementarNivel(key)}
            onDelete={() => eliminarElemento(key)}
          />
        ))}
      </div>

      <BarraDeVida vida={vida} capacidadVida={parseInt(capacidadVida, 10)} onIncrement={handleIncrement} onDecrement={handleDecrement} />

      <div className="mt-4 flex items-center justify-center space-x-4">
        <input
          id="cantidad"
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="mt-1 block w-20 pl-2 py-2 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
        <button
          onClick={handleIncrementSpecific}
          className="bg-green-500 text-white px-3 py-1 rounded-md"
          >
          💚
        </button>
        <button
          onClick={handleDecrementSpecific}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          🔪
        </button>
      </div>
      </div>
    ))}
    </div>
    </>
  );
};

export default StatsJugador;
