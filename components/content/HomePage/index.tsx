import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { theme } from '@styles';
import { paths } from '@utils';
import {
  StyledLandingSection,
  StyledAboutSection,
  StyledContainer,
  StyledHeading,
  StyledSectionTitle,
  StyledBlock,
  StyledBlockNumber,
  StyledBlockText,
  StyledLink,
} from './HomePage.styles';

// const steps = [''];

const HomePage = () => {
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const thirdLineRef = useRef(null);
  const fourthLineRef = useRef(null);

  const { home } = paths;

  useEffect(() => {
    gsap
      .timeline({
        defaults: { duration: 0.7, opacity: 1, x: 32 },
      })
      .to(firstLineRef.current, {})
      .to(secondLineRef.current, { color: theme.color.primary })
      .to(thirdLineRef.current, {})
      .to(fourthLineRef.current, { color: theme.color.quaternary });
  }, []);

  return (
    <>
      <StyledLandingSection>
        <StyledContainer>
          <StyledHeading>
            <span ref={firstLineRef}>Try.</span>
            <span ref={secondLineRef}>Fail.</span>
            <span ref={thirdLineRef}>Retake.</span>
            <span ref={fourthLineRef}>Succeed.</span>
          </StyledHeading>
          <StyledSectionTitle>Fill the form & test your knowledge.</StyledSectionTitle>
          <StyledLink href={home}>
            <a>
              Check now!
            </a>
          </StyledLink>
        </StyledContainer>

      </StyledLandingSection>
      <StyledAboutSection>
        <StyledSectionTitle>How it works?</StyledSectionTitle>
        <StyledBlock>
          <StyledBlockNumber>
            1
          </StyledBlockNumber>
          <StyledBlockText>
            123
          </StyledBlockText>
        </StyledBlock>
      </StyledAboutSection>
    </>
  );
};

export default HomePage;
