// src/components/StatsJugador.js
import React, { useState } from 'react';
import { elementos } from '../data/elementos';
import Elemento from './Elemento';
import BarraDeVida from './BarraDeVida';

const StatsJugador = ({ jugador }) => {
  const [vida, setVida] = useState(jugador.vida);
  const [nivelesElementos, setNivelesElementos] = useState(jugador.elementos || {});

  const handleIncrement = () =>{
    setVida(vida + 5);
  }
  const handleDecrement = () =>{
    setVida(vida - 5);
  }
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

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{jugador.name}</h2>
      <p>Daño💥: {jugador.dano} // Evasión💨: {jugador.evasion} // Armor⛑: {jugador.armor}</p>
      
      <p>
        Elementos:
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

      <BarraDeVida vida={vida} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export default StatsJugador;
