import { createContext, type ReactNode, useContext, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);


export const ThemeProvider: React.FC<{ children: ReactNode}> = ({children}) =>{
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//custom hook

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}