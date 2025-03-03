import { useContext } from "react";
import PlayersContext from "./PlayersContext";

const getGradientColor = (vida) => { 
if (vida >= 100) { 
    return `linear-gradient(to right, green ${vida / 4}%, aquamarine 100%)`; 
}else if (vida >= -50) { 
    return `linear-gradient(to right, yellow ${vida / 4}%, green 100%)`; 
} else { 
    return `linear-gradient(to right, red ${-vida / 2}%, yellow 100%)`; 
} };

const BarraDeVida = ({ index, player, handlePlayerChange }) => {
  const { players, setPlayers } = useContext(PlayersContext);
  const handleVidaChange = (index, change) => {
    const newPlayers = [...players];
    newPlayers[index].vida = Math.min(Math.max(newPlayers[index].vida + change, newPlayers[index].capvida), 200);
    setPlayers(newPlayers);
  };

  const handleIncrement = (index, cantidad) => {
    const value = parseInt(cantidad, 10);
    if (!isNaN(value)) {
      handleVidaChange(index, value);
    }
  };
  
  const handleDecrement = (index, cantidad) => {
    const value = parseInt(cantidad, 10);
    if (!isNaN(value)) {
      handleVidaChange(index, -value);
    }
  };  
  const porcentajeVida = ((player.vida - parseInt(player.capvida, 10)) / (200 - parseInt(player.capvida, 10))) * 100;
  return (
    <>
    <div className="w-full bg-gray-300 rounded-full h-6">
      <div className="h-6 rounded-full" style={{ width: `${porcentajeVida}%`, background: getGradientColor(player.vida)}}></div>
    </div>
    <div>
        <span className="right-0 top-0 text-xl p-1">❤{player.vida}</span>
        <div className="flex items-center justify-center space-x-2">
          <button onClick={() => handleDecrement(index, 5)} className="bg-red-500 text-white px-3 py-1 rounded-md" > -5 </button> 
          <button onClick={() => handleIncrement(index, 5)} className="bg-green-500 text-white px-3 py-1 rounded-md" > +5</button> 
        </div>
    </div>
    <div className="mt-2 flex flex-wrap items-center justify-center space-x-2">
      <input
        id="cantidad"
        type="number"
        value={player.cantidad || 0}
        onChange={(e) => handlePlayerChange(index, 'cantidad', e.target.value)}
        className="mt-1 block w-20 pl-1 py-2 text-base focus:ring-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
        />
      <div className='space-x-2'>
      <button
        onClick={() => handleIncrement(index, player.cantidad)}
        className="bg-green-500 text-white px-3 py-1 rounded-md"
        >
        💚
      </button>
      <button
        onClick={() => handleDecrement(index, player.cantidad)}
        className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
        ⚔
      </button>
      </div>
    </div>
    </>

  );
};

export default BarraDeVida;
