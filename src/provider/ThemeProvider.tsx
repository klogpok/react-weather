import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../models/ChangeCssRootVariables";
import { storage } from "../models/Storage";

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

    changeCssRootVariables(theme);

    const changeTheme = (theme: Theme): void => {
        setTheme(theme);
        changeCssRootVariables(theme);
        storage.setItem('theme', theme);
    }

    return <ThemeContext.Provider value={{
        theme,
        changeTheme
    }} {...props}>{children}</ThemeContext.Provider>;
}