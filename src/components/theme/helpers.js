// Smallest supported device ( iphone es ? )
const minViewport = 320;
// Original desktop design
const maxViewport = 1200;

export const dynamicSize = (min, max) => {
  // Dynamic size based on device width
  return css`
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
  desktop: 992,
  tablet: 768,
  phone: 400,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
