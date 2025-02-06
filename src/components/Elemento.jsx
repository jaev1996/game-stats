// src/components/Elemento.js
import React from 'react';

const Elemento = ({ elemento, nivel, onIncrement, onDelete }) => (
  <div className="flex items-center m-1">
    <span onClick={onDelete} className="text-xs cursor-pointer">{elemento}x{nivel}</span>
    <button 
      onClick={onIncrement} 
      className="ml-1 bg-sky-600 text-white px-1 rounded-md"
    >
      +
    </button>
  </div>
);

export default Elemento;
