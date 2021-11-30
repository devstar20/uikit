import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleBackgroundImage: lightColors.gradients.gradprimary,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleBackgroundImage: darkColors.gradients.gradprimary,
};
