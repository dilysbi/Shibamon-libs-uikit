/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
// import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "../icons";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";
// import logoPng from "../../../assets/images/logo.svg";
// import logoTextPng from "../../../assets/images/logo/logo-text.png";

interface Props {
  isMobile: boolean;
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const BoxImage = styled.div<{ isMobile: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: ${({ isMobile }) => (isMobile ? '110px' : '160px')};
    height: auto;
  }

  img:first-child {
    margin-left: ${({ isMobile }) => (isMobile ? 0 : "10px")};
    margin-right: 15px;
  }
`;

const Logo: React.FC<Props> = ({ isMobile, isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = ( 
    <BoxImage isMobile={isMobile}>
      <img src="/images/logo/logo-full.svg" alt="logo"/>
      {/* <img src={logoPng} alt="logo"/> */}

      {/* {!isMobile && <img src="/images/logo/logo-text.png" alt="logo" width={120} />} */}
 
      {/* {!isMobile && <img src={logoTextPng} alt="logo" width={120} />} */}
      {/* <LogoIcon className="mobile-icon" /> */}
      {/* <LogoWithText className="desktop-icon" isDark={isDark} /> */}
    </BoxImage>
  );

  return (
    <Flex>
      {/* Icon collapse siderbar menu */}
      {isMobile && (
        <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="2px">
          {isPushed ? (
            <HamburgerCloseIcon width="24px" color="textSubtle" />
          ) : (
            <HamburgerIcon width="24px" color="textSubtle" />
          )}
        </MenuButton>
      )}

      {/* {!isMobile && ( */}
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Home page">
          {innerLogo}
        </StyledLink>
      )}
      {/* )} */}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
