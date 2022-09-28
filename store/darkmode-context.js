import React, { useContext, useState } from "react";

const DarkModeContext = React.createContext();

export function useDarkMode() {
  const DarkMode = useContext(DarkModeContext);

  return DarkMode;
}

export default function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function ToggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  const value = { darkMode, ToggleDarkMode };

  return (
    <DarkModeContext.Provider value={value}>
      {props.children}
    </DarkModeContext.Provider>
  );
}
