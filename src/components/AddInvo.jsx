import { useState, useContext } from 'react';
import PlayersContext from './PlayersContext';
import { invocaciones } from '../data/invocaciones';

const AddInvo = ({ index, player}) => {
  const [selectedInvo, setSelectedInvo] = useState('');
  const { players, setPlayers } = useContext(PlayersContext);

  const handleInvoChange = (event) => {
    const invoName = event.target.value;
    const invo = invocaciones.find(i => i.nombre === invoName);
    if (invo) {
      setSelectedInvo(invoName);
      const newPlayers = [...players];
      if (!newPlayers[index].inv) {
        newPlayers[index].inv = [];
      }
      newPlayers[index].inv.push(invo);
      setPlayers(newPlayers);
      console.log("Esta invocación ha sido añadida: ", newPlayers[index].inv);
    }
    event.target.value = '';
  };

  const availableInvocaciones = invocaciones.filter(
    invo => !player.inv || !player.inv.some(pInvo => pInvo.nombre === invo.nombre)
  );

  return (
    <div className="relative flex items-center">
      <button className="bg-gray-700 shadow-lg shadow-gray-700/50 text-white px-2 py-1 rounded-md">
        Invoc.
      </button>
      <select
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleInvoChange}
        value={selectedInvo}
      >
        <option value="">Select Invocación</option>
        {availableInvocaciones.map(invo => (
          <option key={invo.nombre} value={invo.nombre}>
            {invo.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddInvo;