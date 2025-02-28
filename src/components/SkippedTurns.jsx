import React, { useState } from 'react';
import ConfirmResetSkipTurn from './modals/ConfirmResetSkipTurn';

const SkippedTurns = () => {
  const [pasos, setPasos] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const incrementarPasos = () => {
    setPasos(pasos + 1);
  };
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
        <button
        onClick={incrementarPasos}
        className="bg-blue-500 text-white px-2 py-1 rounded-md"
        >
        Pasos: {pasos}
        </button>
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