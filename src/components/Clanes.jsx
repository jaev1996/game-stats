import { useContext } from "react";
import PlayersContext from "./PlayersContext";
import hyugaImage from '../assets/hyuga.png';
import uchihaImage from '../assets/uchiha.png';
import uzumakiImage from '../assets/uzumaki.png';
import senjuImage from '../assets/senju.png';
import kaguyaImage from '../assets/kaguya.png';
import powerImage from '../assets/poder.png';

const clanes = ['Kaguya', 'Uzumaki', 'Hyuga', 'Power', 'Senju', 'Uchiha'];
const clanImages = {
  Kaguya: kaguyaImage,
  Uzumaki: uzumakiImage,
  Hyuga: hyugaImage,
  Power: powerImage,
  Senju: senjuImage,
  Uchiha: uchihaImage
  };

const Clanes = ({ player, index }) => {

    const { players, setPlayers } = useContext(PlayersContext);
    
    const handleClanChange = (index) => (event) => {
        const selectedClan = event.target.value;
        const newPlayers = [...players];
        
        if (newPlayers[index].clan.length >= 2) {
          alert('Un jugador no puede tener más de 2 clanes.');
          return;
        }
      
        if (selectedClan && !newPlayers[index].clan.includes(selectedClan)) {
          newPlayers[index].clan.push(selectedClan);
          setPlayers(newPlayers);
        }
    };
    
      const eliminarClan = (index, clanToRemove) => {
        const newPlayers = [...players];
        newPlayers[index].clan = newPlayers[index].clan.filter(c => c !== clanToRemove);
        setPlayers(newPlayers);
      };
return (
    <div className='flex flex-wrap justify-center align-center'>
        <select
            id="clan-select"
            onChange={handleClanChange(index)}
            className="w-30 pl-3 pr-5 text-xs sm:text-sm rounded-md mt-1 ml-2"
            >
            <option value="">Clanes</option>
            {clanes.map((clan) => (
                <option key={clan} value={clan}>
                {clan}
              </option>
            ))}
        </select>
        {player.clan.map((clan) => (
            <div key={clan} className="text-xs mt-2">
            <img
              src={clanImages[clan]}
              alt={clan}
              className="max-w-10 max-h-6 cursor-pointer mx-2 object-contain"
              onClick={() => eliminarClan(index, clan)}
              />
          </div>
        ))}
    </div>
)};
export default Clanes;