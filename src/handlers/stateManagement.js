import {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <DataContext.Provider
      value={{
        menuOpen,
        setMenuOpen
      }}>
      {props.children}
    </DataContext.Provider>
  );
};
