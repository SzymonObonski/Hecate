import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useScrollPosition from '@react-hook/window-scroll';

import { paths } from '@utils';
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledLink,
  StyledLogo,
  StyledHamburgerButton,
  StyledHamburgerRib,
} from './Navigation.styles';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const { home, quiz } = paths;
  return (
    <StyledNav isScrolled={scrollY > 55}>
      <StyledNavList>
        <StyledNavItem>
          <Link href={home}>
            <StyledLogo />
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href={home}>
            <StyledLink isActive={router.pathname === home}>
              Home
            </StyledLink>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href={quiz}>
            <StyledLink isActive={router.pathname === quiz}>
              Quiz
            </StyledLink>
          </Link>
        </StyledNavItem>
      </StyledNavList>

      <StyledHamburgerButton onClick={toggleMenu}>
        <StyledHamburgerRib isOpen={isMenuOpen} />
        <StyledHamburgerRib isOpen={isMenuOpen} />
        <StyledHamburgerRib isOpen={isMenuOpen} />
        <StyledHamburgerRib isOpen={isMenuOpen} />
      </StyledHamburgerButton>
    </StyledNav>
  );
};
export default Navigation;
