// What do we want here ?
import styled, { css } from 'styled-components';
import { dynamicSize } from './helpers';

const theme = {
  font: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: 'black',
  tint: 'navy',
  title: 'orchid',

  // re-export functions
  dynamicSize,
};

export const globalCSS = css`
  font-family: Arial, sans-serif;
`;

export const PreTitle = styled.span`
  color: ${theme.title};
  font-size: 18px;
  ${dynamicSize(13, 18)};
  line-height: 1;
  padding-bottom: 1em;
`;

export const TitleCSS = css`
  font-size: 66px;
  ${dynamicSize(26, 66)};
  line-height: 0.91;
  padding-bottom: 0.45em;
  margin: 0;
  font-weight: bold;
`;

export const Title = styled.h2`
  ${TitleCSS}
`;

export const SmallerTitle = styled.h2`
  ${TitleCSS}
  color: ${theme.title};
  font-size: 54px;
  ${dynamicSize(24, 54)};
  line-height: 0.89;
`;

export const Highlight = styled.p`
  color: ${theme.tint};
  ${dynamicSize(16, 19)};
  text-align: center;
  line-height: 1.33;
  padding-bottom: 1.6;
  font-weight: 500;
`;

export const blockStyles = [
  { title: 'Normal', value: 'normal' },
  { title: 'Title', value: 'title', blockEditor: { render: Title } },
  {
    title: 'SmallerTitle',
    value: 'smallerTitle',
    blockEditor: { render: SmallerTitle },
  },
  {
    title: 'Highlight',
    value: 'highlight',
    blockEditor: { render: Highlight },
  },
  // { title: 'PreTitle', value: 'preTitle', blockEditor: { render: TitleStyle } },
  // { title: 'H1', value: 'h1' },
  // { title: 'H2', value: 'h2' },
  // { title: 'H3', value: 'h3' },
  // { title: 'H4', value: 'h4' },
  // { title: 'H5', value: 'h5' },
];

export default theme;
