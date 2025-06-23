import { createContext, useState, useContext } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isFooterHidden, setIsFooterHidden] = useState(false);

  return (
    <UIContext.Provider value={{ isNavbarHidden, setIsNavbarHidden, isFooterHidden, setIsFooterHidden }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);