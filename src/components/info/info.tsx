import { useContext } from 'react';
import { AppContext } from '../../context/context';

export function Info() {
  const { isCalling } = useContext(AppContext);

  return (
    <span className="message">{isCalling === true ? 'Calling...' : ''}</span>
  );
}
