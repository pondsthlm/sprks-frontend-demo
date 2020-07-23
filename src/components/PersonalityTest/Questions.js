import React from 'react';

import styled from 'styled-components/macro';
import Button from 'components/Button';

import { WaitForResult } from './Pressentation';
import Progress from 'components/PersonalityTest/Progress';

import { caracters, questions } from './data';

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

const calculateResultAndGetUrl = answers => {
  // sum of caractaers poinst hihgest will be winner array index  == caracter id
  let sums = [0, 0, 0, 0, 0, 0, 0, 0];
  // loop throw the answers and add the coresponding caracter points
  answers.map((answer, index) => {
    // answer is "altA" or "altB"
    const characterPointsForQestion = questions[index][answer].res;
    // found in questions in  ./data.js
    characterPointsForQestion.map(p => {
      sums[p.caracterId] = sums[p.caracterId] + p.score;
    });
    console.log('caracterpoints', sums);
  });
  // get array key for the higest score
  const idOfCaracterWinner = sums.indexOf(Math.max(...sums));
  const winner = caracters.find(c => c.id === idOfCaracterWinner);
  console.log(winner.url);

  return winner.url;
};

const Question = ({ index, answers, addAnswer }) => {
  const question = questions[index] || null;
  if (!question) {
    // all qestions have been answered
    // calculate resulting caracter
    const caracterUrl = calculateResultAndGetUrl(answers);
    return <WaitForResult resultUrl={`/test/iam/${caracterUrl}`} />;
  }

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
