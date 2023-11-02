import { createContext } from 'react';

export type ContextStructure = {
  actualDisplay: string;
  setActualDisplay: (actualDisplay: string) => void;
  isCalling: boolean;
  setIsCalling: (isCalling: boolean) => void;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
