/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        neon: {
          cyan: '#00f5ff',
          purple: '#c026d3',
          pink: '#f472b6',
        }
      }
    },
  },
  plugins: [],
}