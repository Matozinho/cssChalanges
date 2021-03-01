let isDarkTheme = true;
let darkPoint = "rgb(228, 121, 121)",
  darkLogo = "rgb(219, 213, 213)",
  darkBackground = "#292929";

let lightPoint = "#000",
  lightLogo = "rgb(43.919373%, 33.329773%, 49.01886%)",
  lightBackground = "rgb(200, 200, 200)";

function changeTheme() {
  if (isDarkTheme) {
    document.documentElement.style.setProperty(
      "--backgroundColor",
      darkBackground
    );
    document.documentElement.style.setProperty("--logoColor", darkLogo);
    document.documentElement.style.setProperty("--pointColor", darkPoint);
    isDarkTheme = false;
  } else {
    document.documentElement.style.setProperty(
      "--backgroundColor",
      lightBackground
    );
    document.documentElement.style.setProperty("--logoColor", lightLogo);
    document.documentElement.style.setProperty("--pointColor", lightPoint);
    isDarkTheme = true;
  }
}
