import { createContext, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme>('light');

export function ThemeProvider({
    theme,
    children,
}: {
    theme: Theme;
    children: ReactNode;
}) {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
