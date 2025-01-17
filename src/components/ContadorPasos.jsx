import React, { useState } from 'react';

const ContadorPasos = () => {
  const [pasos, setPasos] = useState(0);

  const incrementarPasos = () => {
    setPasos(pasos + 1);
  };
  const resetPasos = () => {
    setPasos(0);
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
        onClick={resetPasos}
        className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
        >
        Reset
        </button>
    </div>
    
  );
};

export default ContadorPasos;