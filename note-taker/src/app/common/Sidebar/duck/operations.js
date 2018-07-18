import Creators from "./actions";
import "../../../styles/custom-props.css";

const toggleThemeAction = Creators.toggleTheme;
const root = document.querySelector(":root");
const rootStyle = getComputedStyle(root);

const mainFontColor = rootStyle.getPropertyValue("--main-font-color");
const noteBg = rootStyle.getPropertyValue("--note-bg");
const sidebarBg = rootStyle.getPropertyValue("--sidebar-bg");
const mainBg = rootStyle.getPropertyValue("--main-bg");

const toggleTheme = isDark => {
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

  return dispatch => {
    dispatch(toggleThemeAction());
  };
};

export default {
  toggleTheme
};
// --main-font-color: #4A4A4A;
// --btn-font-color: #FFFFFF;
// --main-border-color: #979797;

// --sidebar-bg: #D8D8D8;
// --main-bg: #F3F3F3;
// --main-btn-bg: #2BC1C4;
// --danger-btn-bg: #D0021B;

// --sidebar-width: 250px;
