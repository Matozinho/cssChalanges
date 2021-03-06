import { useState } from "react";
import styles from "../styles/components/TodoHeader.module.css";

function setElement(element, value) {
  document.documentElement.style.setProperty(element, value);
}

export default function TodoHeader() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [themeIcon, setThemeIcon] = useState("iconMoon.svg");

  function setTheme() {
    if (isDarkTheme) {
      setElement("--backgroundColor", "#fafafa");
      setElement("--backgroundImg", "../../public/bg-desktop-dark.jpg");
      setThemeIcon("iconMoon.svg");
      setIsDarkTheme(false);
    } else {
      setElement("--backgroundColor", "#161722");
      console.log(document.style.backgroundImage);

      setThemeIcon("iconSun.svg");
      setIsDarkTheme(true);
    }
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>todo</h1>
      <img onClick={setTheme} src={`${themeIcon}`} alt="Change Theme" />
    </header>
  );
}
