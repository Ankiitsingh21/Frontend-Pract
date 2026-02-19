import {createContext,useContext} from "react";

const ThemeContext= createContext({
        thememode:"light"
        ,darkMode:()=>{

        },
        lightMode:()=>{

        }
});

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
        return useContext(ThemeContext);
}
