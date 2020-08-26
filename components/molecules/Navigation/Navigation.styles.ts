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

const StyledHamburgerButton = styled.div`
  width: 3.75rem;
  height: 3rem;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
`;

const StyledHamburgerRib = styled.span`
  display: block;
  position: absolute;
  height: 0.56rem;
  width: 100%;
  background: ${({ theme }) => theme.color.darken};
  border-radius: 0.56rem;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
  
  &:nth-child(1) {
    top: 0;
  }
  
  &:nth-child(2), &:nth-child(3) {
    top: 1.125rem;
  }
  
  &:nth-child(4) {
    top: 2.25rem;
  }
  
  ${({ isOpen }) => isOpen
  && css`
    &:nth-child(1) {
      top: 1.125rem;
      width: 0;
      left: 50%;
    }
    
    &:nth-child(2){
      transform: rotate(45deg);
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }

    &:nth-child(4) {
      top: 1.125rem;
      width: 0;
      left: 50%;
    }
`}
`;

export {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledLink,
  StyledLogo,
  StyledHamburgerButton,
  StyledHamburgerRib,
};
