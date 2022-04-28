const plugin = require("tailwindcss/plugin");

module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
            },
            colors: {
                skills: "#E0DEFA",
                yellow: {
                    50: "#FEFCEC",
                    100: "#FDFADD",
                    200: "#FCF5BB",
                    300: "#FAF099",
                    400: "#F8EA72",
                    500: "#F5E33B",
                    600: "#E4CE0C",
                    700: "#C7B40A",
                    800: "#A59508",
                    900: "#796E06",
                },
            },
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            const utilities = {
                ".bg-hero": {
                    "background-image": "url(/Hero.png)",
                    "background-size": "cover",
                    "background-position": "bottom",
                    "background-repeat": "no-repeat",
                },
                ".bg-navbar": {
                    background:
                        "linear-gradient(98.51deg, #3221F0 -19.66%, rgba(20, 12, 117, 0.95) 75.89%)",
                },
                ".box-skills": {
                    background: "#FFFFFF",
                    "box-shadow": "0px 10px 15px 10px rgba(0, 0, 0, 0.1)",
                },
                ".input-shadow": {
                    background: "#FFFFFF",
                    "box-shadow": "0px 10px 15px 10px rgba(0, 0, 0, 0.1)",
                },
                ".footer": {
                    background:
                        "linear-gradient(98.51deg, #3221F0 -19.66%, rgba(20, 12, 117, 0.95) 75.89%)",
                },
            };

            addUtilities(utilities);
        }),
    ],
};
