/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(0deg, rgba(45,194,223,1) 0%, rgba(0,80,255,1) 100%)',
      },
      textColor: {
        "custom-color": "linear-gradient(0deg, rgba(6,79,228,1) 0%, rgba(3,166,242,1) 48%, rgba(0,243,255,1) 100%)"
      }
    },
  },
  plugins: [],
};
