import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "28px",
    padding: "0 8px",
    fontSize: "14px",
  },
  [scales.SM]: {
    height: "24px",
    padding: "0 4px",
    fontSize: "12px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    color: "primary",
  },
  [variants.SECONDARY]: {
    color: "secondary",
  },
  [variants.SUCCESS]: {
    color: "success",
  },
  [variants.TEXTDISABLED]: {
    color: "textDisabled",
  },
  [variants.TEXTSUBTLE]: {
    color: "textSubtle",
  },
  [variants.BINANCE]: {
    color: "binance",
  },
  [variants.FAILURE]: {
    color: "failure",
  },
  [variants.WARNING]: {
    color: "warning",
  },
  [variants.FEES]: {
    color: "fees",
  },
};
