import { useState, useContext } from 'react';
import PlayersContext from './PlayersContext';
import muerte1 from '../assets/death1.gif';
import muerte2 from '../assets/death2.gif';
import muerte3 from '../assets/death3.gif';
import muerte4 from '../assets/death4.gif';
import muerte5 from '../assets/death5.gif';
import muerte6 from '../assets/death6.gif';
import win1 from '../assets/win1.gif';
import win2 from '../assets/win2.gif';
import win3 from '../assets/win3.gif';
import win4 from '../assets/win4.gif';
import win5 from '../assets/win5.gif';

const PlayerOptions = ({ index, isDead, setVictoryPlayer, setVictoryGif, setShowVictory }) => {
  const { players, setPlayers } = useContext(PlayersContext);
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  

  
  const confirmDeath = (index) => {
    const newPlayers = [...players];
    const defeatGifs = [muerte1, muerte2, muerte3, muerte4, muerte5, muerte6];
    const randomGif = defeatGifs[Math.floor(Math.random() * defeatGifs.length)];
    newPlayers[index].vida = newPlayers[index].capvida;
    newPlayers[index].defeatGif = randomGif;
    setPlayers(newPlayers);
  };

  const confirmRevive = (index) => {
    const newPlayers = [...players];
    newPlayers[index].vida = parseInt(newPlayers[index].capvida) + 5;
    newPlayers[index].defeatGif = null;
    setPlayers(newPlayers);
  };

  const handleOptionSelect = (index, option) => {
    
    if (option === 'Victoria') {
      const winGifs = [win1, win2, win3, win4, win5];
      const randomGif = winGifs[Math.floor(Math.random() * winGifs.length)];
      setVictoryGif(randomGif);
      setVictoryPlayer(players[index]);
      setShowVictory(true);
    }
  };
  
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    if (option === 'Muerte' || option === 'Revivir' || option === 'Victoria') {
      setModalType(option);
      setShowModal(true);
    } else {
      handleOptionSelect(index, option);
    }
    toggleOptions();
  };

  const confirmAction = () => {
    if (modalType === 'Muerte') {
      confirmDeath(index);
    } else if (modalType === 'Revivir') {
      confirmRevive(index);
    } else if (modalType === 'Victoria') {
      handleOptionSelect(index, 'Victoria');
    }
    setShowModal(false);
  };

  return (
    <div className="relative z-10">
      <button
        onClick={toggleOptions}
        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
      >
        ⚙
      </button>
      {showOptions && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          {!isDead && (
            <>
          <button
            onClick={() => handleOptionClick('Muerte')}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
            Muerte☠
          </button>
          <button
            onClick={() => handleOptionClick('Victoria')}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
            Victoria🏆
          </button>
          </>
          )}
          {isDead && (
            <button
              onClick={() => handleOptionClick('Revivir')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Revivir✨
            </button>
          )}
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirmar {modalType}</h2>
            <p>¿Estás seguro de que quieres darle {modalType.toLowerCase()} a este jugador?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={confirmAction}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerOptions;