import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

const linkStyles = css`
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background-color:  ${({ theme }) => theme.color.tertiary};
  padding: 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color:  ${({ theme }) => transparentize(0.2, theme.color.tertiary)};
  }
`;
const StyledButton = styled.button`
  ${linkStyles}
`;
const StyledLink = styled.a`
  ${linkStyles}

`;
export { StyledButton, StyledLink };
