import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useThem =() =>{
    const context = useContext(ThemeContext)
    if(context===undefined){
        throw new Error("useTheme() must used Inside a ThemeProvider")
    }
    return context
}