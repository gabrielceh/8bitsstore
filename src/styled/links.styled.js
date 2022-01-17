import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import theme from '../theme/theme';

export const LinksNavBar = styled(NavLink)`
  margin-left: 0.5rem;
  padding-bottom: 1.2rem;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;

  &.active {
    border-bottom: 2px solid ${theme.colors.redPrincipal.light};
    color: ${theme.colors.redPrincipal.light};
  }
  &:hover {
    color: ${theme.colors.redPrincipal.primary};
    border-bottom: 2px solid ${theme.colors.redPrincipal.dark};
  }
`;

export const LinksHamburger = styled(NavLink)`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &.active {
    background-color: ${theme.colors.redPrincipal.dark};
    color: #ffffff;
  }
  &:hover {
    color: #ffffff;
    background-color: ${theme.colors.redPrincipal.light};
  }
`;

export const LinkCommon = styled(Link)`
  &:hover {
    color: ${theme.colors.redPrincipal.primary};
  }
`;
