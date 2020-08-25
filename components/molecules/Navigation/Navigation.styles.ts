import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Logo } from '@assets';

const StyledNav = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    
    ${({ isScrolled }) => isScrolled
    && css`
        position: fixed;
        box-shadow: 0 0 10px 0 ${({ theme }) => transparentize(0.9, theme.color.black)};
    `
}
`;

const StyledNavList = styled.ul`
    max-width: ${({ theme }) => theme.layout.gridWidth};
    padding: 0 ${({ theme }) => theme.layout.padding};
    margin: 0 auto;
    list-style: none;
    display: flex;
    align-items: center;
`;

const StyledNavItem = styled.li`
    display: flex;
    cursor: pointer;
    
    &:first-child {
      margin-right: auto;
    }
`;

const StyledLink = styled.a`
    padding: 1rem 1.2rem;
    display: block;
    border-bottom: 2px solid transparent;
    transition: .4s border-color;
    
    &:hover {
      border-color: ${({ theme }) => theme.color.darken};
    }
    
    ${({ isActive }) => isActive
      && css`border-color: ${({ theme }) => theme.color.darken};`
}
`;

const StyledLogo = styled(Logo)`
  width: 3rem;
  height: auto;
`;

export {
  StyledNav, StyledNavList, StyledNavItem, StyledLink, StyledLogo,
};
