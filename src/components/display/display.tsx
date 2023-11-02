import { useContext } from 'react';
import { AppContext } from '../../context/context';

export function Display() {
  const { actualDisplay } = useContext(AppContext);
  return <span className="number">{actualDisplay}</span>;
}
