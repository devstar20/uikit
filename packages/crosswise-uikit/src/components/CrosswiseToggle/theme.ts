import { darkColors, lightColors } from "../../theme/colors";
import { CrosswiseToggleTheme } from "./types";

export const light: CrosswiseToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: CrosswiseToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
