import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useThemeService } from "./services/theme";
import logo from './logo.png';

export const noop = () => null;

const common = css`
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
`;

export const HeaderStyleSection = styled.header`
  ${common}
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
  }
`;

export const Image = styled.img`
  ${common}
    height: 18vmin;
    pointer-events: none;
    padding: 1px;
`;

const Nav = styled.nav`
  &&& {
    a {
      margin-left: 5px;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export function Header({ children }) {
    const { toggleTheme, themeName, setTheme, themeNames } = useThemeService();
    return (
      <HeaderStyleSection>
        <h1 onClick={toggleTheme}>{children}</h1>
        <Image src={logo} alt="logo" />
        <select value={themeName} onChange={e => setTheme(e.target.value)}>
          {themeNames.map(name => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/bag">Bag</Link>
          <Link to="/myOrders">My Orders</Link>
        </Nav>
      </HeaderStyleSection>
    );
  }

export const FooterStyleSection = styled.footer`
  ${common}
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export function Footer({ copyrightExpiary, name }) {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const showFooter = year <= copyrightExpiary;
  if (!showFooter) {
    return null;
  }
  return (
    <FooterStyleSection>
      <small>
        &copy; Copyright {copyrightExpiary}, {name}
      </small>
    </FooterStyleSection>
  );
}

export const MainStyleContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Main = styled.main`
  padding: 20px;
  margin-bottom: 58px;

  section * {
    margin-right: 5px;
  }
`;

export function PageSection({ children, heading }) {
  return (
    <Main>
      <h2>{heading}</h2>
      {children}
    </Main>
  );
}