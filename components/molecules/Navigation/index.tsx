import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useScrollPosition from '@react-hook/window-scroll';

import { paths } from '@utils';
import {
  StyledNav, StyledNavList, StyledNavItem, StyledLink, StyledLogo,
} from './Navigation.styles';

const Navigation = () => {
  const scrollY = useScrollPosition();

  const router = useRouter();

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
    </StyledNav>
  );
};
export default Navigation;
