import React, { useState } from 'react';
import StatsJugador from './StatsJugador';

const GameSetup = () => {
  const [numPlayers, setNumPlayers] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const handleNumPlayersChange = (e) => {
    setNumPlayers(parseInt(e.target.value, 10));
    setPlayerNames(Array(parseInt(e.target.value, 10)).fill(''));
  };

  const handlePlayerNameChange = (index, e) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = e.target.value;
    setPlayerNames(newPlayerNames);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  if (gameStarted) {
    return (
        <StatsJugador playerNames={playerNames} />
    );
  }

  return (
    <div className="game-setup flex flex-col items-center">
      <h3 htmlFor="num-players" className='text-xl'>Indica el Numero de Jugadores</h3>
      <div>
        <input
          type="number"
          id="num-players"
          value={numPlayers}
          onChange={handleNumPlayersChange}
          min="2"
          className="w-20"
        />
      </div>
      {playerNames.map((name, index) => (
        <div key={index}>
          <label htmlFor={`player-name-${index}`}>Player {index + 1} Name:</label>
          <input
            type="text"
            id={`player-name-${index}`}
            value={name}
            onChange={(e) => handlePlayerNameChange(index, e)}
            className="ml-2"
          />
        </div>
      ))}
      <button onClick={startGame} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
        Start Game
      </button>
    </div>
  );
};

export default GameSetup;