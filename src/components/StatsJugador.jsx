// src/components/StatsJugador.js
import React, { useState } from 'react';
import { elementos } from '../data/elementos';
import Elemento from './Elemento';
import BarraDeVida from './BarraDeVida';
import tomoeImage from '../assets/3-tomoe.png';

const clanes = ['Kaguya', 'Uzumaki', 'Hyuga', 'Power', 'Senju', 'Uchiha'];


const StatsJugador = ({ jugador }) => {
  const [vida, setVida] = useState(jugador.vida);
  const [capacidadVida, setCapacidadVida] = useState('-200'); // Estado como cadena
  const [nivelesElementos, setNivelesElementos] = useState(jugador.elementos || {});
  const [cantidad, setCantidad] = useState(0); // Nuevo estado para la cantidad específica
  const [name, setName] = useState(jugador.name);
  const [dano, setDano] = useState(jugador.dano);
  const [evasion, setEvasion] = useState(jugador.evasion);
  const [armadura, setArmadura] = useState(jugador.armor);
  const [ojos, setOjos] = useState(2);
  const [brazos, setBrazos] = useState(2);
  const [sharinganLvl, setSharinganLvl] = useState(0);
  const [selectedClanes, setSelectedClanes] = useState([]); // Estado para los clanes seleccionados

  const handleVidaChange = (change) => {
    setVida((prevVida) => Math.min(Math.max(prevVida + change, capacidadVida), 200));
  }

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
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          Daño💥: <input
            id="dano"
            type="text"
            value={dano}
            onChange={(e) => setDano(e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
          Evasión💨: <input
            id="evasion"
            type="text"
            value={evasion}
            onChange={(e) => setEvasion(e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
          Armor⛑: <input
            id="armadura"
            type="text"
            value={armadura}
            onChange={(e) => setArmadura(e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
        </div>
        <div>
          Cap.Vida💗:  
          <input 
            type="text" 
            value={capacidadVida} 
            onChange={(e) => setCapacidadVida(e.target.value)} // No convertimos aquí
            className="w-20 pl-3 pr-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
        </div>
        <div>
          Ojos👁: <input
            id="ojos"
            type="number"
            value={ojos}
            onChange={(e) => setOjos(e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
        </div>
        
        <div>
          Brazos🦾:<input
            id="brazos"
            type="text"
            value={brazos}
            onChange={(e) => setBrazos(e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
          />
        </div>
        <div>
        Sharingan:<img src={tomoeImage} alt="3-tomoe" className="inline-block w-6 h-6 mr-2" /><input
            id="sharinganLvl"
            type="number"
            value={sharinganLvl}
            onChange={(e) => setSharinganLvl(e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
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
            <div key={clan} className="text-xl">
              <input
                type="text"
                value={clan}
                readOnly
                className="w-16 pl-2 py-1 mx-2 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
              />
              <button
                onClick={() => eliminarClan(clan)}
                className="bg-white-500 text-white mt-1 rounded-md"
              >
              ❌
              </button>
            </div>
          ))}
      </div>


      <p>
        <div className="flex flex-wrap">
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
      </p>

      <label htmlFor="elemento-select" className="block mt-2 w-1/4">
        Agregar un elemento:
      </label>

      <select
        id="elemento-select"
        onChange={handleElementoChange}
        className="mt-1 block w-1/4 pl-3 pr-10 py-2 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-2 ml-2"
      >
        <option value="">Selecciona uno</option>
        {Object.keys(elementos).map((key) => (
          <option key={key} value={key}>
            {elementos[key]} {key}
          </option>
        ))}
      </select>

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
          Sanar
        </button>
        <button
          onClick={handleDecrementSpecific}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Dañar
        </button>
      </div>
    </div>
  );
};

export default StatsJugador;
