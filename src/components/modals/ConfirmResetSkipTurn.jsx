import React, { useState } from 'react';

const ConfirmResetSkipTurn = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirmar Reset</h2>
        <p>¿Estás seguro de que quieres resetear los pasos?</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmResetSkipTurn;