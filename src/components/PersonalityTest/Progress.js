import React from 'react';
import styled, { css } from 'styled-components/macro';

function createChildAnimationCSS() {
  let styles = '';

  for (let i = 1; i <= 10; i++) {
    styles += `
       span:nth-child(${i}) {
        -webkit-animation-delay: ${i}00ms;
        animation-delay: ${i}00ms;
      }
       `;
  }

  return css`
    ${styles}
  `;
}

const childAnimations = createChildAnimationCSS();

const AnimationStyle = styled.div`
  text-align: center;
  bottom: 80px;
  position: fixed;
  margin: 0 auto;
  width: 100%;
  left: 0;

  span {
    width: 12px;
    height: 12px;
    background: #000;
    display: inline-block;
    border-radius: 50%;
    right: 0px;
    bottom: 0px;
    margin: 0px 2.5px;
    opacity: 0.2;

    animation: ${p =>
      p.animate ? 'scaling 2.5s ease-in-out infinite' : 'none'};
  }

  span.filled {
    opacity: 1;
  }

  ${childAnimations}

  @keyframes scaling {
    0%,
    100% {
      transform: scale(0.2);
      //background-color: #30ffb7;
    }
    40% {
      transform: scale(1);
      //background-color: #07deff;
    }
    50% {
      transform: scale(1);
      //background-color: #0761ff;
    }
  }
`;

const Progress = ({ index, animate }) => {
  let dots = [];
  for (let i = 1; i <= 10; i++) {
    const isFilled = i <= index ? 'filled' : ''; // add other opacity to all for dots marking pgrogress has passed
    dots.push(<span className={`${isFilled}`} />);
  }
  return <AnimationStyle animate={animate}>{dots}</AnimationStyle>;
};

export default Progress;
