import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
// import UserBlock from "./components/UserBlock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { NavProps } from "./types";
// import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import MenuButton from "./components/MenuButton";
import { HamburgerCloseIcon, HamburgerIcon } from "./icons";
import MobileFooter from "./components/MobileFooter";
import { Text } from "../../components/Text";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  background-image: ${({ theme }) => theme.nav.gradient};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const StyledVCenter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 18px;
`;

const StyledMobileToggleMenu = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  // account,
  // login,
  // logout,
  userMenu,
  globalMenu,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  crssPriceUsd,
  links,
  // profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex>
          {/* <StyledVCenter>
            <UserBlock account={account} login={login} logout={logout} />
          </StyledVCenter>
          <StyledVCenter>{profile && <Avatar profile={profile} />}</StyledVCenter> */}
          <StyledVCenter>{globalMenu}</StyledVCenter>
          <StyledVCenter>{userMenu}</StyledVCenter>
          <StyledVCenter>
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          </StyledVCenter>
          <StyledVCenter>
            <Text color="text">Dark Mode</Text>
          </StyledVCenter>
          <StyledMobileToggleMenu>
            <MenuButton
              aria-label="Toggle menu"
              onClick={() => setIsPushed((prevState: boolean) => !prevState)}
              mr="24px"
            >
              {isPushed ? (
                <HamburgerCloseIcon width="24px" color="textSubtle" />
              ) : (
                <HamburgerIcon width="24px" color="textSubtle" />
              )}
            </MenuButton>
          </StyledMobileToggleMenu>
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          crssPriceUsd={crssPriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
          <MobileFooter
            isPushed={isPushed}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            crssPriceUsd={crssPriceUsd}
            pushNav={setIsPushed}
            links={links}
          />
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
