/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from 'next/link';

import { StyledButton, StyledLink } from './Button.styles';

const Button = ({ href, children, ...rest }: {href: string, children: string | Element}) => (href.length ? (
  <Link href={href} {...rest}>
    <StyledLink>{children}</StyledLink>
  </Link>
) : (
  <StyledButton {...rest}>
    {children}
  </StyledButton>
));

export default Button;
