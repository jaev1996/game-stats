import { useState, useEffect, useContext } from 'react';
import BarraDeVida from './BarraDeVida';
import BaseStats from './BaseStats';
import SelectElements from './SelectElements';
import SkippedTurns from './SkippedTurns';
import ModalMisiones from './ModalMisiones';
import PlayerOptions from './PlayerOptions';
import VictoryModal from './VictoryModal';
import MissionControls from './MissionControls';
import PlayersContext from './PlayersContext';
import Clanes from './Clanes';
import AddBiju from './AddBiju';
import AddInvo from './AddInvo';
import InvocacionesActivas from './InvocacionesActivas';
import SkipButton from './SkipButton';

const GameBoard = ({ onNewGame, handlePlayerChange }) => {
  const { players } = useContext(PlayersContext);
  const [showVictory, setShowVictory] = useState(false);
  const [victoryPlayer, setVictoryPlayer] = useState(null);
  const [victoryGif, setVictoryGif] = useState(null);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Esto es necesario para algunos navegadores
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div className='flex flex-row justify-center'>
        <SkippedTurns />
        <ModalMisiones />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {players.map((player, index) => (
          <div className="p-1 border rounded-lg shadow-md bg-white" key={index}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold">
                  {player.name}
                </h3>
                <SkipButton message="+"/>
              </div>
              <div className="flex items-center space-x-2">
                <AddBiju 
                  index={index} 
                  player={player} 
                  handlePlayerChange={handlePlayerChange} 
                />
                <AddInvo 
                  index={index} 
                  player={player} 
                  handlePlayerChange={handlePlayerChange} 
                />
                <PlayerOptions
                  index={index}
                  setVictoryPlayer={setVictoryPlayer}
                  setVictoryGif={setVictoryGif}
                  setShowVictory={setShowVictory}
                  isDead={player.vida === player.capvida}
                />
              </div>
            </div>
            {player.defeatGif ? (
              <img src={player.defeatGif} alt="Derrota" className="w-full h-auto" />
            ) : (
              <>
                <BaseStats
                  player={player}
                  index={index}
                  handlePlayerChange={handlePlayerChange}
                />
                <SelectElements
                  player={player}
                  index={index}
                />
                <Clanes
                  player={player}
                  index={index}
                />
                <div className="gap-2 mt-2">
                  <InvocacionesActivas
                    player={player}
                    index={index}
                  />
                </div>
                
                <BarraDeVida
                  index={index}
                  player={player}
                  handlePlayerChange={handlePlayerChange}
                />
                
              </>
            )}
            
            <MissionControls
              index={index}
              player={player}
            />
          </div>
        ))}
      </div>
      {showVictory && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <img src={victoryGif} alt="Victoria" className="w-4/5 h-full" />
        </div>
      )}
      <VictoryModal
        show={showVictory}
        victoryPlayer={victoryPlayer}
        setShowVictory={setShowVictory}
        onNewGame={onNewGame}
      />
    </>
  );
};

export default GameBoard;