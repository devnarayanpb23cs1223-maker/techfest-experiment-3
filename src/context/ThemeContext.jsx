import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "#fff",
          color: darkMode ? "#fff" : "#222",
          minHeight: "100vh",
          padding: "20px"
        }}
      >
        <style>
          {`
            h1, h2, h3 {
              color: ${darkMode ? "#ffffff" : "#111111"};
            }

            p {
              color: ${darkMode ? "#dddddd" : "#333333"};
            }
          `}
        </style>

        {children}
      </div>
    </ThemeContext.Provider>
  );
}