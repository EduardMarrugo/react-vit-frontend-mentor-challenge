/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "header-mobile-light":
                    "url('./assets/images/bg-mobile-light.jpg')",
                "header-mobile-dark":
                    "url('./assets/images/bg-mobile-dark.jpg')",
                "header-desktop-light":
                    "url('./assets/images/bg-desktop-light.jpg')",
                "header-desktop-dark":
                    "url('./assets/images/bg-desktop-dark.jpg')",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
