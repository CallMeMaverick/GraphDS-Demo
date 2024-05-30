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
        'custom-gradient-body': 'linear-gradient(0deg, rgba(0,80,255,1) 0%, rgba(45,194,223,1) 100%)',
        'custom-footer': 'linear-gradient(0deg, rgba(0,80,255,1) 0%, rgba(45,194,223,1) 100%)'
      },
      textColor: {
        "custom-color": "linear-gradient(90deg, rgba(13,217,192,1) 0%, rgba(5,120,244,1) 100%)"
      }
    },
  },
  plugins: [],
};
