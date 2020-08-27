import React from 'react';

import {
  StyledSection,
  StyledHeading,
  StyledSectionTitle,
  StyledBlock,
  StyledBlockNumber,
  StyledBlockText,
} from './HomePage.styles';

// const steps = [''];

const HomePage = () => (
  <>
    <StyledSection>
      <StyledHeading>
        <span>Try.</span>
        <span>Fail.</span>
        <span>Retake.</span>
        <span>Succeed.</span>
      </StyledHeading>
    </StyledSection>
    <StyledSection>
      <StyledSectionTitle>How it works?</StyledSectionTitle>
      <StyledBlock>
        <StyledBlockNumber>
          1
        </StyledBlockNumber>
        <StyledBlockText>
          123
        </StyledBlockText>
      </StyledBlock>
    </StyledSection>
  </>
);

export default HomePage;
