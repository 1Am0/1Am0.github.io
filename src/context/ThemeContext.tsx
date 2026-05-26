import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Theme = 
  | 'midnight'      // Deep dark with blue accents (original dark)
  | 'light'         // Clean bright white
  | 'ocean'         // Deep teal/blue professional
  | 'forest'        // Nature-inspired green
  | 'sunset'        // Warm orange/coral tones
  | 'lavender';     // Soft purple/violet

export const themeLabels: Record<Theme, string> = {
  midnight: 'Midnight',
  light: 'Light',
  ocean: 'Ocean',
  forest: 'Forest',
  sunset: 'Sunset',
  lavender: 'Lavender',
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: Theme[] = ['midnight', 'light', 'ocean', 'forest', 'sunset', 'lavender'];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as Theme;
      if (saved && themes.includes(saved)) return saved;
    }
    return 'ocean';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
