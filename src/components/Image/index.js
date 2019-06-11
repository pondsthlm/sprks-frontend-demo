import React from 'react';
import styled from 'styled-components/macro';
import { css } from 'styled-components/macro';
import imageUrlBuilder from '@sanity/image-url';

import { client } from '../Cms';
const builder = imageUrlBuilder(client);

const urlFor = source => {
  return builder.image(source);
};

const StyledImage = styled.img`
  width: 100%;
`;

const Image = ({ alt, src, className, originalSize }) => {
  const img = urlFor(src).quality(80);

  if (originalSize) {
    return <img className={className} src={img.url()} alt={alt} />;
  }

  return (
    <StyledImage
      className={className}
      alt={alt}
      src={img.width(800).url()}
      srcSet={`
        ${img.width(1200).url()} 1200w,
        ${img.width(800).url()} 800w,
        ${img.width(600).url()} 600w,
        ${img.width(300).url()} 300w
      `}
    />
  );
};

export const backgroundImageCss = (sanityImage, options = {}) => {
  if (!sanityImage) return null;
  const img = urlFor(sanityImage)
    .format('jpg')
    .quality(80);
  const hasHotSpot =
    sanityImage.hotspot && sanityImage.hotspot.x && sanityImage.hotspot.y;
  const x = hasHotSpot ? sanityImage.hotspot.x : 'center';
  const y = hasHotSpot ? sanityImage.hotspot.y : 'center';
  const url = options.blur ? img.width(100).url() : img.width(1200).url();
  return css`
    background-image: url(${url});
    background-size: cover;
    background-position-x: ${hasHotSpot ? `${x * 100}%` : x};
    background-position-y: ${hasHotSpot ? `${y * 100}%` : y};
    ${options.blur ? 'filter: blur(125px) brightness(0.42) opacity(0.9)' : ''}
  `;
};

export default Image;
