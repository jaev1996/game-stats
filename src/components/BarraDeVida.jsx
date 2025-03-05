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

const BarraDeVida = ({ index, player }) => {
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
          <button onClick={() => handleDecrement(index, 20)} className="bg-red-600 hover:shadow-lg hover:shadow-red-600/50 text-white px-1 py-1 rounded-sm" > -20 </button> 
          <button onClick={() => handleDecrement(index, 10)} className="bg-red-600 hover:shadow-lg hover:shadow-red-600/50 text-white px-1 py-1 rounded-sm" > -10 </button> 
          <button onClick={() => handleDecrement(index, 5)} className="bg-red-600 hover:shadow-lg hover:shadow-red-600/50 text-white px-2 py-1 rounded-sm" > -5 </button> 
          <button onClick={() => handleIncrement(index, 5)} className="bg-green-600 hover:shadow-lg hover:shadow-green-600/50 text-white px-2 py-1 rounded-sm" > +5</button> 
          <button onClick={() => handleIncrement(index, 10)} className="bg-green-600 hover:shadow-lg hover:shadow-green-600/50 text-white px-1 py-1 rounded-sm" > +10</button> 
          <button onClick={() => handleIncrement(index, 20)} className="bg-green-600 hover:shadow-lg hover:shadow-green-600/50 text-white px-1 py-1 rounded-sm" > +20</button> 
        </div>
    </div>
    </>

  );
};

export default BarraDeVida;
