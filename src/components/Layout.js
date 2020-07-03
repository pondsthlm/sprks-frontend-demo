import React from 'react';
import styled from 'styled-components/macro';
import { backgroundImageCss } from 'components/Image';
import { maxContentWidth } from 'theme/vars';

export const Background = styled.div`
  max-width: 100vw;
  padding: 0;
  margin: 0;
  background-color: ${p => p.color || 'transparent'};
  background-size: cover;
  ${p => p.image && backgroundImageCss(p.image)}
`;

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  width: 90vw;
  max-width: ${maxContentWidth}px;
`;

export const Section = ({ children, className, image, color }) => {
  return (
    <Background image={image} color={color}>
      <Container className={className}>{children}</Container>
    </Background>
  );
};

export const Card = styled.article`
  position: relative;
  height: 100vh;

  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${p => p.background || ''};
`;

export const Page = styled.article`
  position: relative;
  min-height: 100vh;

  padding: 36px 24px;
  background: ${p => p.background || ''};
`;

/*
const PageExample = () => (
  <>
    <Section color="#fe3472" image="sanityimageobject">
      <h1>Hello</h1>
      <p> contained content</p>
    </Section>
    <Section color="#fe3472" image="sanityimageobject">
      <h2>Next chapter </h2>
    </Section>
  </>
);
*/
