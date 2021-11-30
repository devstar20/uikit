import React from "react";
// import { SvgProps } from "../../../components/Svg";
import Toggle from "../../../components/Toggle/Toggle";
// import * as IconModule from "../icons";

// const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <Toggle checked={isDark} onChange={(e) => toggleTheme(e.target.checked)} scale="sm" />
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
