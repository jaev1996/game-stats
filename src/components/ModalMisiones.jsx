import React, { useState } from 'react';

const recompensas = [
    '1- Lore ipsum dolor sit amet, consectetur adipiscing elit.',
    '2- Lore ipsum dolor sit amet, consectetur adipiscing elit.',
    '3- Lore ipsum dolor sit amet, consectetur adipiscing elit.',
    '4- Lore ipsum dolor sit amet, consectetur adipiscing elit.',
    '5- Lore ipsum dolor sit amet, consectetur adipiscing elit.',
    '6- Lore ipsum dolor sit amet, consectetur adipiscing elit.'
    // Agrega todas las recompensas aquí
  ];

const ModalMisiones = ({name}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="mb-2 mx-1 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Mision: {name}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Recompensas por {name}</h2>
            <ul>
              {recompensas.map((recompensa, index) => (
                <li key={index} className="mb-2">
                  {recompensa}
                </li>
              ))}
            </ul>
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