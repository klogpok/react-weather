import { createContext } from "react";
import { storage } from "../models/Storage";

interface Props {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const ThemeContext = createContext<Props>({
    theme: storage.getItem('theme'),
    changeTheme: () => {}
})