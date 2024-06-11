import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';


const Theme = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button onClick={toggleTheme} className='dark:text-neutral-100 text-neutral-800 text-lg w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800/80 flex items-center justify-center'>
            {
                theme === 'dark'
                    ?
                    <FaMoon />
                    :
                    <FaSun />
            }
        </button>
    )
}

export default Theme