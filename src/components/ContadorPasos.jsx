import React, { useState } from 'react';

const ContadorPasos = () => {
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirmar Reset</h2>
            <p>¿Estás seguro de que quieres resetear los pasos?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={resetPasos}
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

export default ContadorPasos;