import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.backgroundAlt,
  gradientAlt: lightColors.gradients.gradprimary,
  gradientBeta: lightColors.gradients.gradsecondary,
  boxShadow:
    "8px 8px 24px 0 rgba(9, 13, 20, 0.06), -4px -4px 8px 0 rgba(255, 255, 255, 0.4), 0 1px 1px 0 rgba(9, 13, 20, 0.06)",
  // boxShadow: "solid 1px rgba(245, 247, 250, 0.06)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: lightColors.gradients.cardHeader,
    blue: lightColors.gradients.blue,
    violet: lightColors.gradients.violet,
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

export const dark: CardTheme = {
  background: darkColors.backgroundAlt,
  gradientAlt: darkColors.gradients.gradprimary,
  gradientBeta: darkColors.gradients.gradsecondary,
  boxShadow:
    "8px 8px 24px 0 rgba(9, 13, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 13, 20, 0.4)",
  // boxShadow: "solid 1px rgba(245, 247, 250, 0.06)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: darkColors.gradients.cardHeader,
    blue: darkColors.gradients.blue,
    violet: darkColors.gradients.violet,
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
