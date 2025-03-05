import { useState, useContext } from 'react';
import PlayersContext from './PlayersContext';

const bijus = [
  { name: '1)Shukaku', stats: { armadura: 5, dano: 10, capvida: -30, evasion: 10, elemento: "Tierra" } },
  { name: '2)Matatabi', stats: { armadura: 5, dano: 15, capvida: -30, evasion: 10, elemento: "Taijutsu" } },
  { name: '3)Isobu', stats: { armadura: 10, dano: 15, capvida: -35, evasion: 10, elemento: "Agua" } },
  { name: '4)Son Goku', stats: { armadura: 10, dano: 15, capvida: -35, evasion: 10, elemento: "Fuego" } },
  { name: '5)Kokuo', stats: { armadura: 10, dano: 15, capvida: -35, evasion: 20 } },
  { name: '6)Saiken', stats: { armadura: 15, dano: 20, capvida: -35, evasion: 15 } },
  { name: '7)Chomei', stats: { armadura: 20, dano: 20, capvida: -40, evasion: 15, elemento: "Viento" } },
  { name: '8)Gyuki', stats: { armadura: 20, dano: 25, capvida: -40, evasion: 15, elemento: "Rayo" } },
  { name: '9)Kurama', stats: { armadura: 20, dano: 25, capvida: -45, evasion: 20, sharinganLvl: 1 } },
];

const AddBiju = ({ index, player, handlePlayerChange }) => {
  const [selectedBiju, setSelectedBiju] = useState('');
  const { players, setPlayers } = useContext(PlayersContext);

  const handleBijuChange = (event) => {
    const bijuName = event.target.value;
    const biju = bijus.find(b => b.name === bijuName);
    if (biju) {
      setSelectedBiju(bijuName);
      Object.keys(biju.stats).forEach(stat => {
        handlePlayerChange(index, stat, player[stat] + biju.stats[stat]);
      });
      if (biju.stats.elemento) {
        const newPlayers = [...players];
        if (!newPlayers[index].nivelesElementos) {
          newPlayers[index].nivelesElementos = {};
        }
        newPlayers[index].nivelesElementos[biju.stats.elemento] = (newPlayers[index].nivelesElementos[biju.stats.elemento] || 0) + 1;
        setPlayers(newPlayers);
      }
    }
  };

  const handleBreadcrumbClick = () => {
    const biju = bijus.find(b => b.name === selectedBiju);
    if (biju) {
      Object.keys(biju.stats).forEach(stat => {
        handlePlayerChange(index, stat, player[stat] - biju.stats[stat]);
      });
      if (biju.stats.elemento) {
        const newPlayers = [...players];
        newPlayers[index].nivelesElementos[biju.stats.elemento] -= 1;
        if (newPlayers[index].nivelesElementos[biju.stats.elemento] === 0) {
          delete newPlayers[index].nivelesElementos[biju.stats.elemento];
        }
        setPlayers(newPlayers);
      }
    }
    setSelectedBiju('');
  };

  return (
    <div className="relative flex items-center">
      {!selectedBiju ? (
        <>
          <button className="bg-gray-700 shadow-lg shadow-gray-700/50 text-white px-2 py-1 rounded-md">
            Bijūs
          </button>
          <select
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleBijuChange}
            value={selectedBiju}
          >
            <option value="">Select Bijū</option>
            {bijus.map(biju => (
              <option key={biju.name} value={biju.name}>
                {biju.name}
              </option>
            ))}
          </select>
        </>
      ) : (
        <span
          className="ml-2 text-gray-700 font-semibold cursor-pointer"
          onClick={handleBreadcrumbClick}
        >
          {selectedBiju + ' ❌'}
        </span>
      )}
    </div>
  );
};

export default AddBiju;