import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAD61B",
        secondary: "#C0FA1B",
        // "primary-gradient": "linear-gradient(to right,#FAD61B , #C0FA1B)",
        black: "#32312F",
        "antiflash-white": "#f1f1f1",
      },
    },
  },
  plugins: [],
};
export default config;
