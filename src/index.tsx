import * as React from 'react';

type tRandomProviderProps = {
  children: React.ReactNode;
  base?: number
}

export const useRandomNumber = () => {
  const context = React.useContext(RandomContext);
  if (context === undefined) {
    throw new Error('useRandom must be used within a RandomProvider');
  }
  return context.random;
};

export const RandomNumberProvider = ({children, base = 1}: tRandomProviderProps) => {
  const [random, ] = React.useState<number>( () =>{return Math.random()*base});

  return (
    <RandomContext.Provider value={{random}}>
      {children}
    </RandomContext.Provider>
  );
};

const RandomContext = React.createContext<{
  random: number;
} | undefined>(undefined);