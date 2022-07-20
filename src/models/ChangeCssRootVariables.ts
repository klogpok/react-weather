import { Theme } from "../context/ThemeContext";

export const changeCssRootVariables = (theme: Theme) => {
    const rootVariables: string[] = [
        '--body-bg',
        '--components-bg',
        '--card-bg',
        '--card-shadow',
        '--text-color'
    ];

    const root = document.querySelector(':root') as HTMLElement;

    for (const rootVariable of rootVariables) {
        root.style.setProperty(`${rootVariable}-default`, `var(${rootVariable}-${theme})`);
    }
}