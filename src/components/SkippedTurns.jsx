import { useState, useContext } from 'react';
import ConfirmResetSkipTurn from './modals/ConfirmResetSkipTurn';
import PlayersContext from './PlayersContext';
import SkipButton from './SkipButton';

const SkippedTurns = () => {
  
  const [showModal, setShowModal] = useState(false);
  const {setPasos} = useContext(PlayersContext);
  const resetPasos = () => {
    setPasos(0);
    setShowModal(false);
  };
  const handleResetClick = () => {
    setShowModal(true);
  };
  const handleCancelReset = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center mb-2">
        <SkipButton message="Pasos: "/>
        <button
        onClick={handleResetClick}
        className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
        >
        Reset
        </button>

        {showModal && (
        <ConfirmResetSkipTurn
            onConfirm={resetPasos}
            onCancel={handleCancelReset}
        />
        )}
    </div>
    
  );
};

export default SkippedTurns;