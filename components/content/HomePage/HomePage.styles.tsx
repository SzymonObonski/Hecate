import styled, { css } from 'styled-components';
import Link from 'next/link';

const sectionStyles = css`
  width: 100%;
  min-height: 90vh;
  display: flex;
`;

const StyledLandingSection = styled.section`
  ${sectionStyles}
  background-color: ${({ theme }) => theme.color.light};
`;

const StyledAboutSection = styled.section`
  ${sectionStyles}
`;

const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.gridWidth};
  padding: 0.5rem ${({ theme }) => theme.layout.padding};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledHeading = styled.h1`
  font-size: 5rem;
  transition: color 1s linear;
  display: flex;
  height: fit-content;
  margin-top: 13rem;
  margin-bottom: 2rem;
  
  > span {
    margin-left: 1.5rem;
    color: ${({ theme }) => theme.color.quinary};
    opacity: 0;
    display: block;
    
    &:first-child {
      margin-left: 0;
    }
  }

`;

const StyledSectionTitle = styled.h2`
  font-size: 2rem;

`;

const StyledLink = styled(Link)`
  
`;
const StyledBlock = styled.div``;
const StyledBlockNumber = styled.span``;
const StyledBlockText = styled.p``;

export {
  StyledLandingSection,
  StyledAboutSection,
  StyledContainer,
  StyledHeading,
  StyledSectionTitle,
  StyledBlock,
  StyledBlockNumber,
  StyledBlockText,
  StyledLink,
};
