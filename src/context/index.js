import React, { createContext, useReducer } from 'react';

import Reducers, { initialState } from './reducers';


const Context = createContext(initialState);

export default Context;

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(Reducers, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}
