import React, { useContext } from 'react';
import PlayersContext from './PlayersContext';

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

export const MissionControls = ({ index, player}) => {
    const { players, setPlayers } = useContext(PlayersContext);
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
    return (
      <>
        {/* Controles para agregar misiones */}
        <div className="mt-4 flex flex-wrap items-center justify-center space-x-2">
          <h4 className="text-lg font-bold">Misiones:</h4>
          <div className='space-x-2'>
            <button onClick={() => agregarMision(index, 'S')} className="bg-red-600 text-white px-3 py-1 rounded-md">S</button>
            <button onClick={() => agregarMision(index, 'A')} className="bg-orange-500 text-white px-3 py-1 rounded-md">A</button>
            <button onClick={() => agregarMision(index, 'B')} className="bg-yellow-500 text-white px-3 py-1 rounded-md">B</button>
            <button onClick={() => agregarMision(index, 'C')} className="bg-green-600 text-white px-3 py-1 rounded-md">C</button>
          </div>
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
      </>
    );
  };

export default MissionControls;