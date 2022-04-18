module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/nav.png')"
      },
      colors: {
        'blue-main': 'hsl(232, 38%, 18%)',
        'blue-dark': 'hsl(250, 16%, 22%)',
        'blue-darker': 'hsl(335, 10%, 25%)',
        'gold-main': 'hsl(33, 57%, 47%)',
        'gold-dark': 'hsl(31, 46%, 40%)',
        'gold-darker': 'hsl(26, 30%, 33%)',
        'red-main': 'hsl(348, 95%, 31%)',
        'red-light': 'hsl(359, 65%, 39%)',
        'red-ligther': 'hsl(11, 61%, 42%)'
      }

    },
  },
  plugins: [],
}
