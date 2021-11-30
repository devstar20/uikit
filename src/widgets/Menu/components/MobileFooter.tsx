import React from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import { LogoIcon as LogoWithText } from "../icons";
import { Text } from "../../../components/Text";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  padding: 8px 4px;

  ${({ theme }) => theme.mediaQueries.xs} {
    display: block;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }

  & .crosswise-icon {
    width: 156px;
  }
`;

const LogoEntry = styled.div`
  min-height: ${MENU_ENTRY_HEIGHT}px;
  padding: 8px 0;
`;

const InfoEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // min-height: ${MENU_ENTRY_HEIGHT}px;
  padding: 16px 0;
`;

const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
`;

const Location = styled.div`
  width: 50%;
  // height: ${MENU_ENTRY_HEIGHT}px;
`;
const Language = styled.div`
  width: 50%;
  // height: ${MENU_ENTRY_HEIGHT}px;
`;

const LinkEntry = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  min-height: ${MENU_ENTRY_HEIGHT}px;
  padding: 24px 0;
`;

const LearnEntry = styled.div`
  width: 50%;
  color: white;
  ul {
    padding: 20px 0;
    margin: 0;
    list-style: none;
    li {
      padding: 4px 0;
      color: ${({ theme }) => theme.colors.textSubtle};
      opacity: 0.6;
    }
  }
`;

const SocialEntry = styled.div`
  width: 50%;
  color: white;
  ul {
    padding: 20px 0;
    margin: 0;
    list-style: none;
    li {
      padding: 4px 0;
      color: ${({ theme }) => theme.colors.textSubtle};
      opacity: 0.6;
    }
  }
`;

const CopyrightEntry = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  align-items: center;
  display: flex;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 8px 0;
  opacity: 0.6;
`;

const MobileFooter: React.FC<Props> = ({ isDark }) => {
  return (
    <Container>
      <LogoEntry>
        <LogoWithText className="crosswise-icon" isDark={isDark} />
      </LogoEntry>
      <InfoEntry>
        <Location>
          <StyledText color="textSubtle">United States</StyledText>
        </Location>
        <Language>
          <StyledText color="textSubtle">English (US)</StyledText>
        </Language>
        {/* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> */}
      </InfoEntry>
      <LinkEntry>
        <LearnEntry>
          LEARN
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Support</li>
            <li>Send email</li>
            <li>Privacy & terms</li>
          </ul>
        </LearnEntry>
        <SocialEntry>
          FOLLOW
          <ul>
            <li>Telegram</li>
            <li>Twitter</li>
            <li>Medium</li>
            <li>GitHub</li>
            <li>Discord</li>
            <li>Facebook</li>
          </ul>
        </SocialEntry>
      </LinkEntry>
      <CopyrightEntry>© 2021 CrossWise</CopyrightEntry>
    </Container>
  );
};

export default MobileFooter;
