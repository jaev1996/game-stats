import React, { useState } from 'react';



const ModalMisiones = ({name}) => {

  const rewardCazarBestias = [
    'Si la Inv. no requiere Sharingan(Grado C):',
    '1- Obten +1 Nivel de Sharingan.',
    '2- Curate 40 de Vida.',
    '3- Roba 1 Carta.',
    '4- Pierdes 40 de Vida con tu siguiente Invocacion.',
    '5- Aumenta en 20 tu daño contra Invocaciones.',
    '6- Obten del Cementerio la Invocacion que acabas de Matar.',
    ' ',
    'Si la Inv. requiere Sharingan(Grado B):',
    '1- Obten +1 Nivel de Sharingan.',
    '2- Curate 55 de Vida.',
    '3- Roba 2 Carta.',
    '4- El enemigo perdera 40 de Vida con su siguiente Invocacion.',
    '5- Aumenta en 40 tu daño contra Invocaciones.',
    '6- Obten del Cementerio la Invocacion que acabas de Matar.',
    
    // Agrega todas las recompensas aquí
  ];
const rewardEjecucionNinja = [
    '1- Robale los Ojos a tu enemigo.',
    '2- Roba 2 Cartas de tu enemigo.',
    '3- Toma una Carta del Cementerio.',
    '4- Toma 5 Cartas del Mazo.',
    '5- Roba los Biju y Cartas tipo Item de la Mano y Campo de tu rival.',
    '6- Sella el Alma de tu Enemigo (No puede Revivir por cuenta Propia).'
    // Agrega todas las recompensas aquí
  ];
const rewardPasos = [
    '1- +70 de vida a todos los Jugadores (Rango C)',
    '2- Cada Jugador roba 3 Cartas (Rango C)',
    '3- Todos obtienen +1 Nivel de Sharingan y Toman una carta del cementerio, comenzando por el que tiene menos vida (Rango B)',
    '4- Todos toman una carta aleatoria del jugador que les Corresponde Atacar(Rango B)',
    '5- Todos aumentan x2 sus Elementos Actuales (Rango A)',
    '6- Revive a todos los Jugadores Muertos y les da una carta de Edo Tensei a los seguian con vida en ese momento (Rango A)'
    // Agrega todas las recompensas aquí
  ];
  let rewards = [];

  if (name === 'Ejecucion Ninjas') {
    rewards = rewardEjecucionNinja;
  } else if (name === 'Cazar Bestias') {
    rewards = rewardCazarBestias;
  } else if (name === 'Pasos en Conjunto') {
    rewards = rewardPasos;
  }

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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Recompensas por {name}</h2>
            <ul>
              
              {rewards.map((rewards, index) => (
                <li key={index} className="mb-2">
                  {rewards}
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