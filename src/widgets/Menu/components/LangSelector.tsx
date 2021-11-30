import React from "react";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import { Language } from "../types";
import MenuButton from "./MenuButton";
import { ChevronDownIcon } from "../../../components/Svg";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Dropdown
    position="top-right"
    target={
      <Button variant="text" endIcon={<ChevronDownIcon color="textSubtle" style={{ opacity: 0.6 }} width="24px" />}>
        <Text color="textSubtle" style={{ opacity: 0.6 }}>
          {currentLang?.toUpperCase()}
        </Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
