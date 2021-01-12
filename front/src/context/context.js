import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
  state: {
    searchValue: "",
  },
  setState: () => {}, //função de inicialização
};

const Context = createContext(DEFAULT_VALUE);

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <Context.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { ContextProvider };
export default Context;