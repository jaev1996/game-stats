// src/components/HealthBar.js
import React from 'react';
const getGradientColor = (vida) => { if (vida >= 0) { 
    return `linear-gradient(to right, yellow ${vida / 2}%, green 100%)`; 
} else { 
    return `linear-gradient(to right, red ${-vida / 2}%, yellow 100%)`; 
} };

const BarraDeVida = ({ vida }) => {
    const porcentajeVida = (vida + 200) / 4;
  return (
    <>
    <div className="w-full bg-gray-300 rounded-full h-6">
      <div className="h-6 rounded-full" style={{ width: `${porcentajeVida}%`, background: getGradientColor(vida)}}></div>
    </div>
    <div>
        <span className="right-0 top-0 text-xl p-1">❤{vida}</span>
    </div>
    </>

  );
};

export default BarraDeVida;
