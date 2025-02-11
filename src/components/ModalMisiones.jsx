import React, { useState } from 'react';
import mEjecucion from '../assets/m1.png';
import mCaza from '../assets/m2.png';
import mPasos from '../assets/m3.png';



const ModalMisiones = () => {

const rewardCazarBestias = mCaza;
const rewardEjecucionNinja = mEjecucion;
const rewardPasos = mPasos;
  

  

  const [isOpen, setIsOpen] = useState(false);
  const [showMisiones, setShowMisiones] = useState(false);
  const [rewards, setRewards] = useState();

  const openModal = (name) => {
    if (name === 'Ejecucion Ninjas') {
      setRewards(rewardEjecucionNinja);
    } else if (name === 'Cazar Bestias') {
      setRewards(rewardCazarBestias);
    } else if (name === 'Pasos en Conjunto') {
      setRewards(rewardPasos);
    }
    setIsOpen(true);
    setShowMisiones(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
      <div className="relative ml-2 z-20">
      <button
        onClick={() => setShowMisiones(!showMisiones)}
        className="bg-sky-500 text-white px-2 py-1 rounded-md"
      >
        Misiones
      </button>
      {showMisiones && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          <button
            onClick={() => openModal('Pasos en Conjunto')}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
            Pasos en Conjunto
          </button>
          <button
            onClick={() => openModal('Cazar Bestias')}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
            Cazar Bestias
          </button>      
            <button
              onClick={() => openModal('Ejecucion Ninjas')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
            Ejecucion Ninjas
            </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Recompensas</h2>
            <div className="flex justify-center">
              <img src={rewards} alt="rewards" className="w-full h-auto" />
            </div>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalMisiones;