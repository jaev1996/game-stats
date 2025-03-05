import oneTomoeImage from '../assets/1-tomoe.png';
import twoTomoeImage from '../assets/2-tomoe.png';
import threeTomoeImage from '../assets/3-tomoe.png';
import sasukeSharingan from '../assets/sasuke.png';
import itachiAltSharingan from '../assets/itachi-alt.png';
import itachiSharingan from '../assets/itachi.png';
import kakashiSharingan from '../assets/kakashi.png';
import madaraSharingan from '../assets/madara-eternal.png';
import wolftrack from '../assets/wolftrack.png';

const sharinganImages = {
  1: oneTomoeImage,
  2: twoTomoeImage,
  3: threeTomoeImage,
  4: sasukeSharingan,
  5: kakashiSharingan,
  6: itachiAltSharingan,
  7: itachiSharingan,
  8: madaraSharingan
};

const BaseStats = ({ player, index, handlePlayerChange }) => {

  const incrementStat = (stat) => {
    if (stat === 'ojos' || stat === 'brazos') {
      handlePlayerChange(index, stat, player[stat] + 1);
      return;
    }
    if (stat === 'sharinganLvl') {
      if (player['ojos'] === 0) {
        return;
      }
      handlePlayerChange(index, stat, player[stat] + 1);
      handlePlayerChange(index, 'evasion', player['evasion'] + 10);
      return;
    }
    handlePlayerChange(index, stat, player[stat] + 5);
  };

  const decrementStat = (stat) => {
    if (stat === 'brazos') {
      handlePlayerChange(index, stat, player[stat] - 1);
      return;
    }
    if(stat === 'ojos'){
      handlePlayerChange(index, stat, player[stat] - 1);
      if(player[stat] === 0){
        handlePlayerChange(index, 'evasion', player['evasion'] - (player['sharinganLvl'] * 10));
        handlePlayerChange(index, 'sharinganLvl', 0);
      }
      return;
    }
    if (stat === 'sharinganLvl') {
      if (player['sharinganLvl'] < 1) {
        return;
      }
      handlePlayerChange(index, stat, player[stat] - 1);
      handlePlayerChange(index, 'evasion', player['evasion'] - 10);
      return;
    }
    handlePlayerChange(index, stat, player[stat] - 5);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
        <div className="flex items-center relative">
          Daño💥:{player.dano}
            <button className='ml-1' onClick={() => incrementStat('dano')}>▲</button>
            <button onClick={() => decrementStat('dano')}>▼</button>
        </div>
        <div className="flex items-center relative">
          Evas.💨:{player.evasion}
            <button className='ml-1' onClick={() => incrementStat('evasion')}>▲</button>
            <button onClick={() => decrementStat('evasion')}>▼</button>
        </div>
        <div className="flex items-center relative">
          Arm.⛑:{player.armadura}
            <button className='ml-1' onClick={() => incrementStat('armadura')}>▲</button>
            <button onClick={() => decrementStat('armadura')}>▼</button>
        </div>
        <div className="flex items-center relative">
          Ojos👁:{player.ojos}
            <button className='ml-1' onClick={() => incrementStat('ojos')}>▲</button>
            <button onClick={() => decrementStat('ojos')}>▼</button>
        </div>
        <div className="flex items-center relative">
          Brazos🦾:{player.brazos}
            <button className='ml-1' onClick={() => incrementStat('brazos')}>▲</button>
            <button onClick={() => decrementStat('brazos')}>▼</button>
        </div>
        <div className="flex items-center relative">
        Shar: {player.sharinganLvl > 0 && (
            <img src={sharinganImages[player.sharinganLvl > 8 ? 8 : player.sharinganLvl]} alt="sharinganLvl" className="inline-block w-6 h-6 mr-2" />
          )}
          {player.sharinganLvl} 
            <button onClick={() => incrementStat('sharinganLvl')} className='ml-1'>▲</button>
            <button onClick={() => decrementStat('sharinganLvl')}>▼</button>
        </div>
        <div className="flex items-center relative">
          D.Inv<img src={wolftrack} alt="dInv" className="inline-block w-5 h-5 mr-2" />:{player.dInv}
            <button className='ml-1' onClick={() => incrementStat('dInv')}>▲</button>
            <button onClick={() => decrementStat('dInv')}>▼</button>
        </div>
        <div className="flex items-center relative">
          Vida💗:{player.capvida}
            <button onClick={() => decrementStat('capvida')} className="ml-1 mb-1">▲</button>
            <button onClick={() => incrementStat('capvida')}>▼</button>
        </div>
        
      </div>
    </>
  );
};

export default BaseStats;