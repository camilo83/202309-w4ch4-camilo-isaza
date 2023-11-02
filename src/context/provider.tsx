import { useState } from 'react';
import { AppContext, ContextStructure } from './context';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const [actualDisplay, setActualDisplay] = useState('');
  const [isCalling, setIsCalling] = useState(false);

  const context: ContextStructure = {
    actualDisplay,
    setActualDisplay,
    isCalling,
    setIsCalling,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
