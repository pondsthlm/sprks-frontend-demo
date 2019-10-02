import React from 'react';
import styled, { css } from 'styled-components/macro';
import SanityImage, { sanityBackgroundImageCss } from './SanityImage';

const StyledImage = styled(SanityImage)`
  width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const Image = ({ alt, src, className, ratio }) => {
  return (
    <StyledImage className={className} src={src} alt={alt} ratio={ratio} />
  );
};

// const defaultOptions = {
//   blur: false,
//   width: 1200,
// };

export const backgroundImageCss = (src, options = {}) => css`
  ${p => sanityBackgroundImageCss(src, options)};
  ${options.blur && 'filter: blur(125px) brightness(0.42) opacity(1)'}
`;

export default Image;
