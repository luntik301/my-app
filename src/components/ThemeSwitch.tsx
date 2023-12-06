import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/ThemeSwitcher.scss'
const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`theme-switcher ${theme}`}>
            <input
                type="checkbox"
                id="themeToggle"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
            />
            <label htmlFor="themeToggle"></label>
        </div>
    );
};

export default ThemeSwitcher;
