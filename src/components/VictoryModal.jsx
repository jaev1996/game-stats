import React from 'react';

const VictoryModal = ({ show, onClose, players, victoryPlayer, onNewGame, onRestartGame }) => {
    if (!show) {
      return null;
    }

  // Calcular los puntajes de los jugadores
  const calculateScore = (player) => {
    return player.misiones.reduce((total, mision) => {
      switch (mision) {
        case 'C':
          return total + 1;
        case 'B':
          return total + 2;
        case 'A':
          return total + 3;
        case 'S':
          return total + 5;
        default:
          return total;
      }
    }, 0);
  };

  // Ordenar los jugadores por puntaje
  const sortedPlayers = [...players].sort((a, b) => calculateScore(b) - calculateScore(a));

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/4 bg-opacity-80">
        <h2 className="text-2xl font-bold mb-4">¡Victoria!</h2>
        <p className="mb-4">{victoryPlayer.name} ha ganado la partida.</p>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Jugador</th>
              <th className="px-4 py-2">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player, index) => (
              <tr key={index} className={player.name === victoryPlayer.name ? 'font-bold' : ''}>
                <td className="border px-4 py-2">{player.name === victoryPlayer.name ? '👑'+player.name : player.name}</td>
                <td className="border px-4 py-2">{calculateScore(player)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onNewGame}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Nueva Partida
          </button>
          <button
            onClick={onRestartGame}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Reiniciar Partida
          </button>
        </div>
      </div>
    </div>
  );
};

export default VictoryModal;