/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bright-blue-primary": "hsl(220, 98%, 61%)",
        "dark-blue": "hsl(192, 100%, 67%)",
        "dark-magenta": "hsl(280, 87%, 65%)",
        "very-light-gray-ligth-theme": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue-ligth-theme": "hsl(236, 33%, 92%)",
        "light-grayish-blue-ligth-theme": "hsl(233, 11%, 84%)",
        "dark-grayish-blue-ligth-theme": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue-ligth-theme": "hsl(235, 19%, 35%)",
        "very-dark-blue-dark-theme": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue-dark-theme": "hsl(235, 24%, 19%)",
        "light-grayish-blue-dark-theme": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover-dark-theme": "hsl(236, 33%, 92%)",
        "dark-grayish-blue-dark-theme": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue-dark-theme": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-dark-theme-2": "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        ["sans"]: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "desktop-dark": "url('/images/bg-desktop-dark.jpg')",
        "desktop-light": "url('/images/bg-desktop-light.jpg')",
        "mobile-dark": "url('/images/bg-mobile-dark.jpg')",
        "mobile-light": "url('/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
