import styled, { css } from 'styled-components';

const sectionStyles = css`
  width: 100%;
  min-height: 90vh;
  display: flex;
`;

const StyledLandingSection = styled.section`
  ${sectionStyles}
  background-color: ${({ theme }) => theme.color.light};
  padding: 2rem 0;
  
  ${({ theme }) => theme.mq.medium} {
    padding: 0;
  }
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
  flex-direction: column;
  height: fit-content;
  margin-top: 0;
  margin-bottom: 2rem;
  
  > span {
    color: ${({ theme }) => theme.color.quinary};
    opacity: 0;
    display: block;
    transform: translate(-2rem,0);
  }
  
  ${({ theme }) => theme.mq.medium} {
    flex-direction: row;
    margin-top: 13rem;
    
    > span {
      margin-left: 1.5rem;
      
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

const StyledSubHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const StyledSectionTitle = styled.h2`
  font-size: 4rem;
  margin: 5rem 0;
`;
const StyledBlockContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.medium} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5rem;
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
