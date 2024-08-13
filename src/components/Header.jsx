import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const initialStateDarkMode = localStorage.theme == "dark";

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkMode]);

    const handlerToggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-3xl">
            <div className="flex justify-between">
                <h1 className="todo-title text-3xl font-bold uppercase tracking-[0.3em] text-white">
                    TODO
                </h1>
                <button onClick={handlerToggleDarkMode}>
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
