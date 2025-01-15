// src/components/HealthBar.js
import React from 'react';
const getGradientColor = (vida) => { 
if (vida >= 100) { 
    return `linear-gradient(to right, green ${vida / 4}%, aquamarine 100%)`; 
}else if (vida >= -50) { 
    return `linear-gradient(to right, yellow ${vida / 4}%, green 100%)`; 
} else { 
    return `linear-gradient(to right, red ${-vida / 2}%, yellow 100%)`; 
} };

const BarraDeVida = ({ vida, onIncrement, onDecrement }) => {
    const porcentajeVida = (vida + 200) / 4;
  return (
    <>
    <div className="w-full bg-gray-300 rounded-full h-6">
      <div className="h-6 rounded-full" style={{ width: `${porcentajeVida}%`, background: getGradientColor(vida)}}></div>
    </div>
    <div>
        <span className="right-0 top-0 text-xl p-1">❤{vida}</span>
        <label htmlFor="cantidad" className="block">Controles de Vida</label>
        <div className="flex items-center justify-center space-x-2">
          <button onClick={onDecrement} className="bg-red-500 text-white px-3 py-1 rounded-md" > -5 </button> 
          <button onClick={onIncrement} className="bg-green-500 text-white px-3 py-1 rounded-md" > +5</button> 
        </div>
    </div>
    </>

  );
};

export default BarraDeVida;
