import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        custom: "linear-gradient(to right top, black, transparent)",
      },
      height: {
        "88": "22rem",
      },
    },
    colors: {
      mainBgGrey: "#272727",
      colorWhite: "white",
      logoColor: "#0A21C0",
      navTextColor: "#B3B4BD",
      colorBlack: "black",
      colorBlackWithOpacity: "rgba(0, 0, 0, 0.6)",
    },
  },
  plugins: [],
};
export default config;
