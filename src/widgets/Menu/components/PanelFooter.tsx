import React from "react";
import styled from "styled-components";
import { CogIcon, MessageIcon, CommentIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CrssPrice from "./CrssPrice";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import { Text } from "../../../components/Text";
// import Link from "../../../components/Link/Link";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  // background-color: ${({ theme }) => theme.nav.background};
  // border-top: solid 2px rgba(133, 133, 133, 0.1);

  ${({ theme }) => theme.mediaQueries.xs} {
    display: none;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`;

const PFComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  border-style: solid;
  border-width: 1px;
  border-image: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(to right, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 0.02) 5%, rgba(255, 255, 255, 0.12) 51%, rgba(255, 255, 255, 0.02) 95%, rgba(255, 255, 255, 0) 95%) 1 0 0"
      : "linear-gradient(to right, rgba(255, 255, 255, 0) 5%, rgba(20, 1, 41, 0.02), rgba(20, 1, 41, 0.12) 51%, rgba(20, 1, 41, 0.02) 95%, rgba(255, 255, 255, 0) 95%)  1 0 0"};
`;

const SettingsEntry = styled(PFComponent)`
  padding: 0 8px;
`;

const SocialEntry = styled(PFComponent)`
  padding: 0 16px;
`;

const ContactEntry = styled(PFComponent)`
  display: block;
  height: auto;
  padding: 0 16px;
`;

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
`;

const ContactLink = styled(Text)`
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-left: 8px;
  align-items: center;
  font-size: 13px;
  opacity: 0.6;
`;

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, crssPriceUsd, currentLang, langs, setLang }) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        <CrssPrice crssPriceUsd={crssPriceUsd} />
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
      </SocialEntry>
      <SettingsEntry>
        <SocialLinks />
      </SettingsEntry>
      <ContactEntry>
        <StyledContact>
          <MessageIcon />
          <ContactLink>partnership@crosswise.io</ContactLink>
        </StyledContact>
        <StyledContact>
          <CommentIcon />
          <ContactLink>Support</ContactLink>
        </StyledContact>
      </ContactEntry>
    </Container>
  );
};

export default PanelFooter;
