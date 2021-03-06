import { css } from 'styled-components';
import { minViewport, maxContentWidth } from './vars';

export const dynamicSize = (min, max) => {
  // Dynamic size based on device width
  return css`
    font-size: ${max}px;
    font-size: calc(
      ${min}px + ${max - min} *
        ((100vw - ${minViewport}px) / ${maxContentWidth - minViewport})
    );
    @media (min-width: ${maxContentWidth}px) {
      font-size: ${max}px;
    }
  `;
};

const sizes = {
  desktop: 992, // min-width desktop
  phone: 450, // max-width phone
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
