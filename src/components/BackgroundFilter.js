import React from 'react';
//import { useStore } from 'store';
import styled, { css } from 'styled-components/macro';
import { bgUrl, bgPosition } from 'components/Image/SanityImage';

const selectFilter = (index, effectList) =>
  effectList[index % effectList.length];

const fixed = css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const effectCss = (image, filterNumber) => {
  const filterList = [
    { color: '240, 0, 128', opacity: '0.40' },
    { color: '0, 180, 155', opacity: '0.75' },
    { color: '225, 240, 0', opacity: '0.30' },
  ];
  const filter = selectFilter(filterNumber, filterList);
  return css`
    background: url(${bgUrl(image)}),
      linear-gradient(
        rgba(${filter.color}, ${filter.opacity}),
        rgba(${filter.color}, ${filter.opacity})
      ),
      linear-gradient(rgba(${filter.color}, 0.75), rgba(${filter.color}, 0.75));
    background-blend-mode: multiply, screen;
  `;
};

export default styled.div`
  ${fixed}

  ::after {
    ${fixed};
    backdrop-filter: saturate(150%);
  }
  ${p => effectCss(p.image, p.filterNumber)}
  background-size: cover;
  background-position: center center;
`;
