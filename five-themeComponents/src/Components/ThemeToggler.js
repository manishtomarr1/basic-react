import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div style={{textAlign:"center"}}
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <button style={{textAlign:"center"}}>{themeMode === "light" ? "Turn off" : "Lights On"}</button>
    </div>
  );
};

export default ThemeToggler;
