import tomoeImage from '../assets/3-tomoe.png';

const BaseStats = ({ player, index, handlePlayerChange }) => {
    return (
    <>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
        <div>
          Daño💥: <input
            id="dano"
            type="text"
            value={player.dano}
            onChange={(e) => handlePlayerChange(index, 'dano', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
          Evasión💨: <input
            id="evasion"
            type="text"
            value={player.evasion}
            onChange={(e) => handlePlayerChange(index, 'evasion', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
          Armor⛑: <input
            id="armadura"
            type="text"
            value={player.armadura}
            onChange={(e) => handlePlayerChange(index, 'armadura', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        
        <div>
          Ojos  👁: <input
            id="ojos"
            type="number"
            value={player.ojos}
            onChange={(e) => handlePlayerChange(index, 'ojos', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        
        <div>
          Brazos🦾:<input
            id="brazos"
            type="text"
            value={player.brazos}
            onChange={(e) => handlePlayerChange(index, 'brazos', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>
        <div>
        Shar.<img src={tomoeImage} alt="3-tomoe" className="inline-block w-6 h-6 mr-2" /><input
            id="sharinganLvl"
            type="number"
            value={player.sharinganLvl}
            onChange={(e) => handlePlayerChange(index, 'sharinganLvl', e.target.value)}
            className="w-10 pl-2 py-1 text-base focus:ring-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
        </div>

      </div>
      <div className="inline-block align-center mt-1">
          Vida💗:  
          <input 
            type="text" 
            value={player.capvida} 
            onChange={(e) => handlePlayerChange(index, 'capvida', e.target.value)} // No convertimos aquí
            className="ml-2 w-1/4 pl-3 pr-2 py-1 text-base focus:ring-indigo-500 sm:text-sm rounded-md border-2 border-gray-300 focus:border-blue-500"
            />
      </div>
    </>
    );
};
export default BaseStats;