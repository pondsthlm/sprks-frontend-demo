import { css } from 'styled-components';
import { minViewport, maxViewport } from './vars';

export const dynamicSize = (min, max) => {
  // Dynamic size based on device width
  return css`
    font-size: ${max}px;
    font-size: calc(
      ${min}px + ${max - min} *
        ((100vw - ${minViewport}px) / ${maxViewport - minViewport})
    );
    @media (min-width: ${maxViewport}px) {
      font-size: ${max}px;
    }
  `;
};

const sizes = {
  desktop: 992, // min-width desktop
  tablet: 768, // min-width tablet
  phone: 400, // max-width phone
};

export const media = {
  desktop: (...args) => css`
    @media (min-width: ${sizes.desktop}px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${sizes.phone}px) {
      ${css(...args)}
    }
  `,
  tabletOnly: (...args) => css`
    @media (min-width: ${sizes.phone}px) and (max-width: ${sizes.desktop}px) {
      ${css(...args)}
    }
  `,
  phone: (...args) => {
    console.log(...args);
    return css`
      @media (max-width: ${sizes.phone}px) {
        ${css(...args)}
      }
    `;
  },
};
