import { useState, useEffect } from "react";
import Image from "next/image";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return (
  <button  className="hover:scale-110 duration-200 active:scale-90" onClick={() => setTheme(colorTheme)}>
    {theme === "light" ? <Image className="hover:scale-110" src="/dark.svg" alt="light" width={30} height={30}/> : <Image src="/light.svg" alt="dark" width={30} height={30}/>}
  </button>
  );
};

export default DarkMode;
