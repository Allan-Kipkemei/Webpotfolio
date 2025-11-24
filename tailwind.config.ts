import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'rgb(3,0,15)',
  			foreground: 'rgb(255,255,255)',
        slate: {
          // 350: 'rgb(163,160,185)',
          350: 'rgb(175.5,188,204.5)'
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      screens: {
        '1640': '1640px',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
