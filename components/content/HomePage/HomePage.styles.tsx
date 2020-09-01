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
  flex-direction: column;
  max-width: ${({ theme }) => theme.layout.gridWidth};
  padding: 0.5rem ${({ theme }) => theme.layout.padding};
  align-items: center;
  margin: 0 auto;
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

const StyledSubHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const StyledSectionTitle = styled.h2`
  font-size: 3rem;
`;
const StyledBlockContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 0.5rem;

  ${({ theme }) => theme.mq.medium} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBlockNumber = styled.span`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const StyledBlockTitle = styled.h3`
  margin: 0.5rem 0;
`;

const StyledBlockText = styled.p`
  font-family: ${({ theme }) => theme.font.family.secondary};
`;

export {
  StyledLandingSection,
  StyledAboutSection,
  StyledContainer,
  StyledHeading,
  StyledSectionTitle,
  StyledBlockContainer,
  StyledBlock,
  StyledBlockNumber,
  StyledBlockTitle,
  StyledBlockText,
  StyledSubHeader,
};
