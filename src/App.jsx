import React, { useEffect } from "react";
import CreateTodo from "./components/CreateTodo";
import Footer from "./components/Footer";
import ListTodo from "./components/ListTodo";
import { motion } from "framer-motion";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  useEffect(() => {
    const html = document.getElementById("html");
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  function handleClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  const variants = {
    dark: { backgroundColor: "#1a202c", color: "#ffffff" },
    light: { backgroundColor: "#ffffff", color: "#000000" },
  };

  return (
    <motion.main
      variants={variants}
      initial={isDarkMode ? "dark" : "light"}
      animate={isDarkMode ? "dark" : "light"}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col gap-7 py-20 items-center bg-contain bg-desktop-light dark:bg-desktop-dark max-[800px]:bg-mobile-light dark:max-[800px]:bg-mobile-dark bg-no-repeat"
    >
      <div className="flex items-center justify-between w-1/3 max-xl:w-1/2 max-[800px]:w-11/12">
        <h1 className="text-4xl font-extrabold text-white tracking-widest">
          TODO
        </h1>
        {isDarkMode ? (
          <img
            onClick={handleClick}
            src="images/icon-sun.svg"
            className="cursor-pointer"
            alt="month"
          />
        ) : (
          <img
            onClick={handleClick}
            src="images/icon-moon.svg"
            className="cursor-pointer"
            alt="month"
          />
        )}
      </div>

      <CreateTodo></CreateTodo>
      <ListTodo></ListTodo>
      <Footer></Footer>
    </motion.main>
  );
}

export default App;
