import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.background,
  gradient: lightColors.gradients.gradsecondary,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.background,
  gradient: lightColors.gradients.gradsecondary,
  hover: "#473d5d",
};
