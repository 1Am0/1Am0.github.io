import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Theme = 
  | 'minimal'      // Clean white, sans-serif, flat design
  | 'corporate'    // Professional dark, geometric, bold
  | 'retro'        // Terminal green, monospace, nostalgic
  | 'elegant'      // Cream/warm, serif fonts, classic
  | 'neon'         // Cyberpunk dark, glowing accents
  | 'playful';     // Soft pastels, rounded, friendly

export const themeLabels: Record<Theme, string> = {
  minimal: 'Minimal',
  corporate: 'Corporate',
  retro: 'Retro',
  elegant: 'Elegant',
  neon: 'Neon',
  playful: 'Playful',
};

export const themeDescriptions: Record<Theme, string> = {
  minimal: 'Clean & Modern',
  corporate: 'Bold & Professional',
  retro: 'Terminal Style',
  elegant: 'Classic & Warm',
  neon: 'Cyberpunk Glow',
  playful: 'Soft & Friendly',
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: Theme[] = ['minimal', 'corporate', 'retro', 'elegant', 'neon', 'playful'];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as Theme;
      if (saved && themes.includes(saved)) return saved;
    }
    return 'minimal';
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
