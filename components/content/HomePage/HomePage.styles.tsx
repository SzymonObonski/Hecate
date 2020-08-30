import styled, { css } from 'styled-components';

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
  width: 100%;
`;

const StyledHeading = styled.h1`
  font-size: 5rem;
  transition: color 1s linear;
  display: flex;
  flex-direction: column;
  
  > span {
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.quinary};
    opacity: 0;
  }

`;

const StyledSectionTitle = styled.h2``;
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
};
