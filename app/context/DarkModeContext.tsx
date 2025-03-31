"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    if (hasCookie("DARK_MODE")) {
      const darkModeCookie = getCookie("DARK_MODE") === "true";
      setDarkMode(darkModeCookie);
      if (darkModeCookie) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    } else {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      setCookie("DARK_MODE", newValue.toString());
      if (newValue) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      return newValue;
    });
  };

  if (darkMode === null) return null;

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}
