/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          100: '#f5d7c4', // Customize this hex code to match your desired shade
        },
        beige: {
          100: '#f5f5dc', // Customize this hex code to match your desired shade
        },
      },
    },
  },
  plugins: [
  ],
}

