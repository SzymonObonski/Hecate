import React from 'react';
import Link from 'next/link';
import { paths } from '@utils';
import {
  StyledNav, StyledNavList, StyledNavItem, StyledLink, StyledLogo,
} from './Navigation.styles';

const Navigation = () => {
  const { home, quiz } = paths;
  return (
    <StyledNav>
      <StyledLogo />
      <StyledNavList>
        <StyledNavItem>
          <Link href={home}>
            <StyledLink>
              Home
            </StyledLink>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href={quiz}>
            <StyledLink>
              Quiz
            </StyledLink>
          </Link>
        </StyledNavItem>
      </StyledNavList>
    </StyledNav>
  );
};
export default Navigation;
