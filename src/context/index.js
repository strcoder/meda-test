/* eslint-disable no-unused-vars */
import { createContext, useReducer, useContext } from 'react';
import reducer from './reducers';

export const Context = createContext({
  theme: 'light',
  dispatch: () => null,
});

export const Provider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      { children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
