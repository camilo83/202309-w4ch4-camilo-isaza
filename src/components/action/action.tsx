import { useContext } from 'react';
import { AppContext } from '../../context/context';

export function Action() {
  const { actualDisplay, setActualDisplay } = useContext(AppContext);
  const { isCalling, setIsCalling } = useContext(AppContext);

  const handleCall = () => {
    if (actualDisplay.length === 9) {
      console.log('llamando');
      setIsCalling(true);
      setTimeout(() => {
        setIsCalling(false);
        setActualDisplay('');
      }, 3000);
    } else {
      console.log('faltan numeros');
      if (actualDisplay.length === 9) {
        console.log('no llamando');
        setIsCalling(isCalling);
      }
    }
  };

  const handleHang = () => {
    setIsCalling(false);
    setActualDisplay('');
  };

  return (
    <>
      {actualDisplay.length === 9 ? (
        <a href="#" className="call active" onClick={() => handleCall()}>
          Call
        </a>
      ) : (
        ''
      )}
      {actualDisplay.length != 9 ? (
        <a href="#" className="hang active" onClick={() => handleHang()}>
          Hang
        </a>
      ) : (
        ''
      )}
    </>
  );
}
