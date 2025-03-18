const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            default: {
              DEFAULT: "#b69e5a",
              foreground: "#FFFFFF",
              background: "#433e2e"
            },
            background: "#FFFFFF",
            foreground: "#11181C",
            success: "#c7ffa8",
            primary: {
              DEFAULT: "#b69e5a",
              foreground: "#FFFFFF",
              background: "#433e2e"
            },
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              DEFAULT: "#006FEE", // Azul no tema escuro
              foreground: "#FFFFFF",
            },
          },
        },
        mytheme: {
          extend: "dark", // Herda do tema escuro
          colors: {
            primary: {
              DEFAULT: "#BEF264", // Verde limão no tema customizado
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }
  )],
};
