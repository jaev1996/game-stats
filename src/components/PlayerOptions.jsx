import React, { useState } from 'react';

const PlayerOptions = ({ index, handleOptionSelect, confirmDeath, confirmRevive, isDead }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

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