import { useContext } from "react";
import PlayersContext from "./PlayersContext";
import { elementos } from "../data/elementos"
import Elemento from "./Elemento"


export const SelectElements = ({ index, player }) => {
    const { players, setPlayers } = useContext(PlayersContext);

    const handleElementoChange = (index) => (event) => {
        const newElemento = event.target.value;
        const newPlayers = [...players];
        
        if (!newPlayers[index].nivelesElementos) {
          newPlayers[index].nivelesElementos = {};
        }
    
        if (newElemento === "") {
          return;
        }
      
        if (newElemento === "Todos") {
          Object.keys(elementos).forEach((key) => {
            if (!newPlayers[index].nivelesElementos[key]) {
              newPlayers[index].nivelesElementos[key] = 1;
            }
          });
        } else {
          if (!newPlayers[index].nivelesElementos[newElemento]) {
            newPlayers[index].nivelesElementos[newElemento] = 1;
          }
        }
      
        setPlayers(newPlayers);
    };

    const incrementarNivel = (index, elemento) => {
        const newPlayers = [...players];
        newPlayers[index].nivelesElementos[elemento] = (newPlayers[index].nivelesElementos[elemento] || 1) + 1;
        setPlayers(newPlayers);
    };
    
    const eliminarElemento = (index, elemento) => {
        const newPlayers = [...players];
        delete newPlayers[index].nivelesElementos[elemento];
        setPlayers(newPlayers);
    };

return (
    <>
    <div className='flex justify-center align-center'>
        <select
          id="elemento-select"
          onChange={handleElementoChange(index)}
          className="w-30 pl-3 pr-5 text-xs sm:text-sm rounded-md mt-1 ml-2 mb-2"
          >
          <option value="">Elementos</option>
          {Object.keys(elementos).map((key) => (
              <option className="text-xs" key={key} value={key}>
              {elementos[key]} {key}
            </option>
          ))}
          <option className='text-xs' value="Todos">Todos</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center align-center">
        {player.nivelesElementos && Object.keys(player.nivelesElementos).map((key) => (
            <Elemento
            key={key}
            elemento={elementos[key]}
            nivel={player.nivelesElementos[key]}
            onIncrement={() => incrementarNivel(index, key)}
            onDelete={() => eliminarElemento(index, key)}
            />
        ))}
      </div>
    </>
    );
}
export default SelectElements;
