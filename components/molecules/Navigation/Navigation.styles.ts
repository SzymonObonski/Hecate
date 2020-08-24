import styled from 'styled-components';
import { transparentize } from 'polished';
import { Logo } from '@assets';

const StyledNav = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 10px 0 ${({ theme }) => transparentize(0.9, theme.color.black)};
`;

const StyledNavList = styled.ul`
    max-width: ${({ theme }) => theme.layout.gridWidth};
    padding: 0 ${({ theme }) => theme.layout.padding};
    margin: 0 auto;
    list-style: none;
    display: flex;
`;

const StyledNavItem = styled.li`
    display: block;
`;

const StyledLink = styled.a`
    padding: 1rem 1.2rem;
    display: block;
`;

const StyledLogo = styled(Logo)`
  width: 2.5rem;
  height: auto;
`;

export {
  StyledNav, StyledNavList, StyledNavItem, StyledLink, StyledLogo,
};
