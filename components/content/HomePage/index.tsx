import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { theme } from '@styles';
import { paths } from '@utils';
import { Button } from '@components/atoms';

import {
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
} from './HomePage.styles';

interface Step {
  number: string;
  title: string;
  text: string;
}
const steps: Step[] = [{ number: '01', title: 'Fill the form', text: 'Go to quiz page and fill the form. Pick technology that interest you, and your experience with it.' },
  { number: '02', title: 'Wait for test', text: 'Based on your input we will generate your test. Each of tests are generated from scratch, so each of them are different.' },
  { number: '03', title: 'Solve it!', text: 'Using your knowledge finish the test. Remember, don\'t cheat! It is only a training!' },
  { number: '04', title: 'Get the feedback', text: 'See which of the question you have answered wrongly. For those we will provide you some tips, or links to where you can read more about them.' },
  { number: '05', title: 'Repeat!', text: 'Have you failed you expectations? Do it again! Remember we try to make all of the tests unique, but basing on finite questions, some of them can repeat.' },
];

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
          <StyledSubHeader>Fill the form & test your knowledge.</StyledSubHeader>
          <Button href={home}>
            Check now!
          </Button>
        </StyledContainer>

      </StyledLandingSection>
      <StyledAboutSection>
        <StyledSectionTitle>How it works?</StyledSectionTitle>
        <StyledBlockContainer>
          {steps.map((step) => (
            <StyledBlock key={step.number}>
              <StyledBlockNumber>
                {step.number}
              </StyledBlockNumber>
              <StyledBlockTitle>{step.title}</StyledBlockTitle>
              <StyledBlockText>
                {step.text}
              </StyledBlockText>
            </StyledBlock>
          ))}
        </StyledBlockContainer>
      </StyledAboutSection>
    </>
  );
};

export default HomePage;
