import { createContext, useState, useContext } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  return (
    <UIContext.Provider value={{ isNavbarHidden, setIsNavbarHidden }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);