import { createContext, useContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  return (
    <ErrorContext.Provider value={{ messages, setMessages }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useErrorContext = () => {
  return useContext(ErrorContext);
};
