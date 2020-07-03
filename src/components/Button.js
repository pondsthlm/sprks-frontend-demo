import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from '@reach/router';

const buttonCss = css`
  border: none;
  font-family: LabGrotesque;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  margin: 36px 25px 0;
  padding: 16px;
  text-decoration: none;
  background: #000;
`;

export const Button = styled.button`
  ${buttonCss}
`;

export const LinkButton = styled(Link)`
  ${buttonCss}
`;

export default Button;
