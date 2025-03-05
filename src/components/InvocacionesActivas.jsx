import { useContext } from 'react';
import PlayersContext from './PlayersContext';

const InvocacionesActivas = ({ player, index }) => {
  const { players, setPlayers } = useContext(PlayersContext);

  const handleRemoveInvo = (invoName) => {
    const newPlayers = [...players];
    if (player.inv) {
      newPlayers[index].inv = player.inv.filter(invo => invo.nombre !== invoName);
      setPlayers(newPlayers);
      console.log("Esta invocación ha sido removida: ", invoName);
    }
  };

  if (!player.inv || player.inv.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-2 mb-2">
      {player.inv.map((invo, invoIndex) => (
        <div key={invoIndex} className="p-1 border rounded-lg shadow-lg bg-white text-sm relative">
          <label className="text-center font-bold cursor-pointer" onClick={() => handleRemoveInvo(invo.nombre)}>{invo.nombre} ✖</label>
          <p>❤: {invo.vida}</p>
          <p>💥: {invo.ataque}</p>
          <p>⛑: {invo.armadura}</p>
          <p>💨: {invo.evasion}</p>
        </div>
      ))}
    </div>
  );
};

export default InvocacionesActivas;