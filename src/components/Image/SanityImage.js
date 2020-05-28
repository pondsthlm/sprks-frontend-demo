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
  width: 1200,
  quality: 80,
  format: 'jpg',
};

export const bgUrl = (sanityImage, options) => {
  const opt = { ...defaultOptions, options };
  if (!sanityImage) return null;
  const img = urlFor(sanityImage)
    .auto('format')
    .quality(opt.quality);

  const url = img.width(opt.width).url();
  return url;
};

export const bgPosition = sanityImage => {
  const hasHotSpot =
    sanityImage.hotspot && sanityImage.hotspot.x && sanityImage.hotspot.y;

  const x = hasHotSpot ? `${sanityImage.hotspot.x * 100}%` : 'center';
  const y = hasHotSpot ? `${sanityImage.hotspot.y * 100}%` : 'center';

  return { x, y };
};

export const sanityBackgroundImageCss = (sanityImage, options) => {
  const url = bgUrl(sanityImage, options);
  const position = bgPosition(sanityImage);

  return css`
    background-image: url(${url});
    background-size: cover;
    background-position-x: ${position.x};
    background-position-y: ${position.y};
  `;
};

export default SanityImage;
