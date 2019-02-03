import Creators from "./actions";
import "../../../styles/custom-props.css";


const toggleTheme = (function() {
  const toggleThemeAction = Creators.toggleTheme;
  const root = document.querySelector(":root");
  const rootStyle = getComputedStyle(root);

  const mainFontColor = rootStyle.getPropertyValue("--main-font-color");
  const noteBg = rootStyle.getPropertyValue("--note-bg");
  const sidebarBg = rootStyle.getPropertyValue("--sidebar-bg");
  const mainBg = rootStyle.getPropertyValue("--main-bg");

  return function(isDark) {
    if (isDark === false) {
      root.style.setProperty("--main-font-color", "white");
      root.style.setProperty("--note-bg", "#4A4A4A");
      root.style.setProperty("--sidebar-bg", "#4A4A4A");
      root.style.setProperty("--main-bg", "#181818");
    } else {
      root.style.setProperty("--main-font-color", mainFontColor);
      root.style.setProperty("--note-bg", noteBg);
      root.style.setProperty("--sidebar-bg", sidebarBg);
      root.style.setProperty("--main-bg", mainBg);
    }
    return function(dispatch) {
      dispatch(toggleThemeAction());
    };
  };
})();

export default {
  toggleTheme
};

