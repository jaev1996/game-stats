// src/components/PlayerStats.js
import React, {useState} from 'react';
const elementos = { Agua: "🌊x1", Rayo: "⚡x1", Viento: "💨x1", Fuego: "🔥x1", Tierra: "🌍x1", Taijutsu: "👊x1",Todos: "🌊x1🌍x1💨x1⚡x1🔥x1👊x1" };

const StatsJugador = ({ jugador }) => {
  const [elemento, setElemento] = useState(jugador.elemento);
  const handleElementoChange = (event) => { setElemento(event.target.value); };
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{jugador.name}</h2>
      <p>Daño💥: {jugador.dano} // Evasion💨: {jugador.evasion} // Armor⛑: {jugador.armor}</p>
      <p>Elemento: <input type="text" name="" id="" value={elementos[elemento]}/></p> 
      <label htmlFor="elemento-select" className="block mt-2 w-1/4"> Agregar un elemento: </label> 
        <select 
        id="elemento-select" 
        value={elemento} 
        onChange={handleElementoChange} 
        className="mt-1 block w-1/4 pl-3 pr-10 py-2 text-base focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-2 ml-2"
        >  
          <option value="">Selecciona uno</option> 
          {Object.keys(elementos).map((key) => ( 
            <option key={key} value={key}> {elementos[key]} {key} 
            </option> ))}
        </select>
    </div>
  );
};

export default StatsJugador;
