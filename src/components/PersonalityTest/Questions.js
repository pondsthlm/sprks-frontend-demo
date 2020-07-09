import React from 'react';

import styled from 'styled-components/macro';
import Button from 'components/Button';

import { WaitForResult } from './Pressentation';
import Progress from 'components/PersonalityTest/Progress';

import results from './results.json';

const QuestionStyle = styled.div`
  position: relative;
  h2 {
    font-size: 54px;
    font-weight: 900;
    line-height: 1.11;
    margin-bottom: 36px;
  }
  button {
    margin: 0 0 36px 0;
    padding: 0;
    font-size: 54px;
    font-weight: 900;
    line-height: 1.11;
    color: #000;
    background: none;
    text-decoration: underline;
    text-align: left;
    outline: none;
  }
`;

const Question = ({ index, question, addAnswer }) => {
  if (!question)
    return <WaitForResult resultUrl={`/test/iam/${results['captain'].url}`} />;

  const { altA, altB, text } = question;
  return (
    <QuestionStyle>
      <h2>{text} ...</h2>
      <Button onClick={() => addAnswer('altA')}>{altA.title}</Button>
      <Button onClick={() => addAnswer('altB')}>{altB.title}</Button>
      <Progress index={index} />
    </QuestionStyle>
  );
};

export default Question;
