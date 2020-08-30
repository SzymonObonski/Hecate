import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Logo, GithubLogo } from '@assets/svg';

const StyledNav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};

  ${({ isScrolled }) => isScrolled
    && css`
      position: fixed;
      box-shadow: 0 0 10px 0
        ${({ theme }) => transparentize(0.6, theme.color.black)};
    `}
`;

const StyledNavContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.gridWidth};
  padding: 0.5rem ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 0;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
  margin: 0;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: center;
  padding: 0;
  
  ${({ isOpen }) => isOpen
    && css`
      width: 100vw;
    `}

  ${({ theme }) => theme.mq.medium} {
    position: relative;
    height: auto;
    width: auto;
    background: transparent;
    flex-direction: row;
  }
`;

const StyledNavItem = styled.li`
  display: flex;
  cursor: pointer;
`;

const StyledLink = styled.a`
  padding: 1rem 1.2rem;
  display: block;
  border-bottom: 2px solid transparent;
  transition: 0.4s border-color;
  height: 3.5rem;
  
  &:hover {
    border-color: ${({ theme }) => theme.color.quinary};
  }

  ${({ isActive }) => isActive
    && css`
      border-color: ${({ theme }) => theme.color.quinary};
    `}
`;

const StyledLogo = styled(Logo)`
  width: auto;
  height: 3.5rem;
  cursor: pointer;
  z-index: 2;
`;

const StyledGHLogo = styled(GithubLogo)`
  width: 1.375rem;
  height: auto;
`;

const StyledHamburgerButton = styled.div`
  width: 2.5rem;
  height: 1.5rem;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  margin-left: auto;
  z-index: 2;
  
  ${({ theme }) => theme.mq.medium} {
    display: none;
  }
`;

const StyledHamburgerRib = styled.span`
  display: block;
  position: absolute;
  height: 0.25rem;
  width: 100%;
  background: ${({ theme }) => theme.color.quinary};
  border-radius: 0.56rem;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: 0.6rem;
  }

  &:nth-child(4) {
    top: 1.2rem;
  }

  ${({ isOpen }) => isOpen
    && css`
      &:nth-child(1) {
        top: 1.125rem;
        width: 0;
        left: 50%;
      }

      &:nth-child(2) {
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
  StyledNavContainer,
  StyledGHLogo,
};
