// src/components/Elemento.js
import React from 'react';

const Elemento = ({ elemento, nivel, onIncrement, onDelete }) => (
  <div className="flex items-center m-2">
    <span className="text-xs">{elemento} x{nivel}</span>
    <button 
      onClick={onIncrement} 
      className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md"
    >
      ➕
    </button>
    <button 
      onClick={onDelete} 
      className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md"
    >
      ✖
    </button>
  </div>
);

export default Elemento;
