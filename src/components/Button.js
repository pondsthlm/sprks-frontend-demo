import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from '@reach/router';

const buttonCss = css`
  border: none;
  background: #000;
  outline: none;
  text-align: center;
  color: #fff;
  margin: 20px 0;
  padding: 16px;

  font-size: 16px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  text-decoration: none;
`;

export const Button = styled.button`
  ${buttonCss}
`;

export const LinkButton = styled(Link)`
  ${buttonCss}
`;

export default Button;
