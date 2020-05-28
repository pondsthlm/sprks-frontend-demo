import React from 'react';
//import { useStore } from 'store';
import styled, { css } from 'styled-components/macro';
import { bgUrl, bgPosition } from 'components/Image/SanityImage';

const effects = [
  css`
    filter: saturate(150%);
    background: rgba(240, 0, 128, 0.4) center center,
      rgba(240, 0, 128, 0.74) center center;
    background-blend-mode: multiply, screen;
  `,
  css`
    opacity: 0.75;
    background-blend-mode: screen;
    background-image: linear-gradient(
      to bottom,
      rgb(240, 0, 128),
      rgb(240, 0, 128)
    );
  `,
  css`
    opacity: 0.75;
    background-blend-mode: screen;
    background-image: linear-gradient(
      to bottom,
      rgb(225, 240, 0),
      rgb(225, 240, 0)
    );
  `,
];

const selectFilter = index => effects[index % effects.length];
const fixed = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export default styled.div`
  ${fixed}

  ::after {
    ${fixed}; // backdrop-filter: saturate(150%);
  }
  /*Magenta effekt.*/
  background: url(${p => bgUrl(p.image)}),
    linear-gradient(rgba(240, 0, 128, 0.4), rgba(240, 0, 128, 0.4)),
    linear-gradient(rgba(240, 0, 128, 0.75), rgba(240, 0, 128, 0.75));
  background-blend-mode: multiply, screen;

  background-size: cover;
`;
