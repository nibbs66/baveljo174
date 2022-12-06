/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'bgImg': "url('https://www.vvbavel.nl/wp-content/uploads/vvbavel/2018/05/logo-512.png')",
        },

    },
  },
  plugins: [],
}
