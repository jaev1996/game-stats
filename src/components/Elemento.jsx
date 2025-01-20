// src/components/Elemento.js
import React from 'react';

const Elemento = ({ elemento, nivel, onIncrement, onDelete }) => (
  <div className="flex items-center m-1">
    <span className="text-xs">{elemento} x{nivel}</span>
    <button 
      onClick={onIncrement} 
      className="ml-1 bg-blue-500 text-white px-2 rounded-md"
    >
      +
    </button>
    <button 
      onClick={onDelete} 
      className="ml-1 bg-red-500 text-white px-2 rounded-md"
    >
      x
    </button>
  </div>
);

export default Elemento;
