import * as React from 'react';

type tRandomProviderProps = {
  children: React.ReactNode;
  /*  */
  /**
   * Optional. If provided, the random number will be generated between 0 and `base`.
   * If not provided, the random number will be generated between 0 and 1.
   */
  numberBase?: number;
  /**
   * Optional. If provided, a random string of this length will be generated and made available
   * through the `useRandomString` hook.
   */
  stringLength?: number;
}

export function generateRandomString(stringLength: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < stringLength) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const useRandom = () => {
  const context = React.useContext(RandomContext);
  if (context === undefined) {
    throw new Error('useRandom must be used within a RandomProvider');
  }
  return { ...context };
};

export const RandomProvider = ({children, numberBase = 1, stringLength = 4}: tRandomProviderProps) => {
  const [randomNumber, ] = React.useState<number>( () =>{return Math.random()*numberBase});

  const [randomString, ] = React.useState<string>( () =>{return generateRandomString(stringLength)});

  return (
    <RandomContext.Provider value={{randomNumber, randomString}}>
      {children}
    </RandomContext.Provider>
  );
};

const RandomContext = React.createContext<{
  randomNumber: number;
  randomString: string
} | undefined>(undefined);