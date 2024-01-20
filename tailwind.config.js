/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#c3b0a2',
        'secondary': '#FAF880',
        'accent': '#ff9292',
      }
    },
  },
  plugins: [],
}

