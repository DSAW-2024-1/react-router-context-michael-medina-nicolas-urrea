//AuthProvider.jsx
import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('loggedInUser', 'true');
      return {...state, isLoggedIn: true };
    case 'LOGOUT':
      localStorage.removeItem('loggedInUser');
      return {...state, isLoggedIn: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoggedIn: localStorage.getItem('loggedInUser') === 'true',
  });

  const login = () => {
    dispatch({ type: 'LOGIN' });
    return true;
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: state.isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};