/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'bgImg': "url('https://logoapi.voetbal.nl/logo.php?clubcode=BBJH113')",
        },

    },
  },
  plugins: [],
}
