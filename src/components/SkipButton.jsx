import { useContext } from 'react';
import PlayersContext from './PlayersContext';

const SkipButton = ({message}) => {
  const {pasos, setPasos} = useContext(PlayersContext);

  const incrementarPasos = () => {
    setPasos(pasos + 1);
  };

  return (
    <>
        <button
        onClick={incrementarPasos}
        className="bg-blue-600 shadow-lg shadow-blue-600/50 text-white px-2 py-1 rounded-md"
        >
        {message + pasos}
        </button>
    </>
        
  );
};

export default SkipButton;