import React, { createContext, useState } from 'react';

const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [pasos, setPasos] = useState(0);

  return (
    <PlayersContext.Provider value={{ players, setPlayers, pasos, setPasos }}>
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersContext;