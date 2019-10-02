import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { css } from 'styled-components/macro';
import { clientSettings } from 'components/Cms';

const builder = imageUrlBuilder(clientSettings);

function urlFor(source) {
  return builder.image(source).auto('format');
}

const SanityImage = ({ src, alt, className, ratio }) => {
  try {
    const img = urlFor(src);
    if (ratio) {
      return (
        <img
          className={className}
          alt={alt}
          src={img
            .width(1200)
            .height(1200)
            .fit('crop')
            .url()}
          srcSet={`
        ${img
          .width(1200)
          .height(1200)
          .fit('crop')
          .url()} 1200w,
        ${img
          .width(800)

          .height(800)
          .fit('crop')
          .url()} 800w,
        ${img
          .width(600)

          .height(600)
          .fit('crop')
          .url()} 600w,
        ${img
          .width(300)

          .height(300)
          .fit('crop')
          .url()} 300w
      `}
        />
      );
    }
    return (
      <img
        className={className}
        alt={alt}
        src={img
          .maxWidth(1200)

          .url()}
        srcSet={`
      ${img
        .maxWidth(1200)

        .url()} 1200w,
      ${img
        .maxWidth(800)

        .url()} 800w,
      ${img
        .maxWidth(600)

        .url()} 600w,
      ${img
        .maxWidth(300)

        .url()} 300w
    `}
      />
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('sanity image error', e);
    return null;
  }
};

const defaultOptions = {
  blur: false,
  width: 1200,
};

export const sanityBackgroundImageCss = (src, options) => {
  const opt = { ...defaultOptions, options };
  const sanityImage = src;
  if (!sanityImage) return null;
  const img = urlFor(sanityImage)
    .format('jpg')
    .quality(80);
  const hasHotSpot =
    sanityImage.hotspot && sanityImage.hotspot.x && sanityImage.hotspot.y;

  const url = opt.blur
    ? img.width(opt.width * 0.1).url()
    : img.width(opt.width).url();
  return css`
    background-image: url(${url});
    background-size: cover;
    background-position-x: ${hasHotSpot
      ? `${sanityImage.hotspot.x * 100}%`
      : 'center'};
    background-position-y: ${hasHotSpot
      ? `${sanityImage.hotspot.y * 100}%`
      : 'center'};
  `;
};

export default SanityImage;
