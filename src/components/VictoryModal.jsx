import {useContext} from 'react';
import PlayersContext from './PlayersContext';

const VictoryModal = ({ show, victoryPlayer, setShowVictory, onNewGame }) => {
  
  const {players, setPlayers} = useContext(PlayersContext);
  
  if (!show) {
      return null;
    }
    const handleNewGame = () => {
      setPlayers([]); // Eliminar los datos de los jugadores
      setShowVictory(false);
      onNewGame(); // Llamar a la función para volver a la configuración del juego
    };
  
    const handleRestartGame = () => {
      const resetPlayers = players.map(player => ({
        name: player.name,
        vida: 0,
        capvida: -200,
        dano: 0,
        evasion: 0,
        armadura: 0,
        ojos: 2,
        brazos: 2,
        elemento: [],
        clan: [],
        inv: [],
        sharinganLvl: 0,
        misiones: [],
        dInv: 0,
        defeatGif: null
      }));
      setPlayers([]); // Eliminar los datos de los jugadores
      setPlayers(resetPlayers);
      setShowVictory(false);
    };

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-opacity-80">
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
            onClick={handleNewGame}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Nueva Partida
          </button>
          <button
            onClick={handleRestartGame}
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
