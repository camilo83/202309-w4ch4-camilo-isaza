import { useContext } from 'react';
import { AppContext } from '../../context/context';

export function Key() {
  const { actualDisplay, setActualDisplay } = useContext(AppContext);

  const handleChangeDisplay = (numb: string) => {
    if (actualDisplay.length === 9) {
      setActualDisplay(actualDisplay);
    } else {
      setActualDisplay(actualDisplay + numb);
    }
  };

  const handleDeleteDisplay = () => {
    setActualDisplay('');
  };

  return (
    <>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('1')}>
          1
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('2')}>
          2
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('3')}>
          3
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('4')}>
          4
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('5')}>
          5
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('6')}>
          6
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('7')}>
          7
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('8')}>
          8
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('9')}>
          9
        </button>
      </li>
      <li>
        <button className="key" onClick={() => handleChangeDisplay('0')}>
          0
        </button>
      </li>
      <li>
        <button className="key big" onClick={() => handleDeleteDisplay()}>
          delete
        </button>
      </li>
    </>
  );
}
