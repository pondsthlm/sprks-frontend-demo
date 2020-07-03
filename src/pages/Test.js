/*
Sparks personality test reverse engineered

*/
import React, { useState } from 'react';
import { Router } from '@reach/router';
//import { useStore } from 'store';
import styled, { css } from 'styled-components/macro';
import { useStore } from 'store';
import A from 'components/A';
import { Page } from 'components/Layout';
import Button from 'components/Button';

import Pressentation, {
  WaitForResult,
} from 'components/PersonalityTest/Pressentation';
import Result from 'components/PersonalityTest/Result';

const questions = [
  {
    text: '',
    altA: {
      title: '',
      res: [
        { caracter: 1, score: 0 }, //kaptenen
        { caracter: 2, score: 0 }, //fixaren
        { caracter: 3, score: 0 }, //kreatören
        { caracter: 4, score: 0 }, //artisten
        { caracter: 5, score: 0 }, //lagspelaren
        { caracter: 6, score: 0 }, //äventyraren
      ],
    },
    altB: {
      title: '',
      res: [
        { caracter: 1, score: 0 }, //kaptenen
        { caracter: 2, score: 0 }, //fixaren
        { caracter: 3, score: 0 }, //kreatören
        { caracter: 4, score: 0 }, //artisten
        { caracter: 5, score: 0 }, //lagspelaren
        { caracter: 6, score: 0 }, //äventyraren
      ],
    },
  },
  //1
  {
    text: 'Jag trivs bäst',
    altA: {
      title: 'i grupp med andra.',
      res: [
        { caracter: 1, score: 1 }, //kaptenen
        { caracter: 2, score: -1 }, //fixaren
        { caracter: 3, score: -1 }, //kreatören
        { caracter: 4, score: -1 }, //artisten
        { caracter: 5, score: 1 }, //lagspelaren
        { caracter: 6, score: 1 }, //äventyraren
      ],
    },
    altB: {
      title: 'när jag får vara själv.',
      res: [
        { caracter: 1, score: -1 }, //kaptenen
        { caracter: 2, score: 1 }, //fixaren
        { caracter: 3, score: 1 }, //kreatören
        { caracter: 4, score: 1 }, //artisten
        { caracter: 5, score: -1 }, //lagspelaren
        { caracter: 6, score: -1 }, //äventyraren
      ],
    },
  },
  //2
  {
    text: 'Jag gillar mest',
    altA: {
      title: 'när det är lugn och ro.',
      res: [
        { caracter: 1, score: -1 }, //kaptenen
        { caracter: 2, score: 1 }, //fixaren
        { caracter: 3, score: 1 }, //kreatören
        { caracter: 4, score: 1 }, //artisten
        { caracter: 5, score: -1 }, //lagspelaren
        { caracter: 6, score: -1 }, //äventyraren
      ],
    },
    altB: {
      title: 'när det är full fart.',
      res: [
        { caracter: 1, score: -1 }, //kaptenen
        { caracter: 2, score: -1 }, //fixaren
        { caracter: 3, score: -1 }, //kreatören
        { caracter: 4, score: -1 }, //artisten
        { caracter: 5, score: 1 }, //lagspelaren
        { caracter: 6, score: 1 }, //äventyraren
      ],
    },
  },
  //3
  {
    text: 'Det är viktigast att',
    altA: {
      title: 'ha kul.',
      res: [
        { caracter: 1, score: -1 }, //kaptenen
        { caracter: 2, score: 1 }, //fixaren
        { caracter: 3, score: 1 }, //kreatören
        { caracter: 4, score: -1 }, //artisten
        { caracter: 5, score: 0 }, //lagspelaren
        { caracter: 6, score: 1 }, //äventyraren
      ],
    },
    altB: {
      title: 'vinna.',
      res: [
        { caracter: 1, score: 1 }, //kaptenen
        { caracter: 2, score: -1 }, //fixaren
        { caracter: 3, score: -1 }, //kreatören
        { caracter: 4, score: 1 }, //artisten
        { caracter: 5, score: 0 }, //lagspelaren
        { caracter: 6, score: -1 }, //äventyraren
      ],
    },
  },
  //4
  {
    text: 'Jag har',
    altA: {
      title: 'bollkänsla.',
      res: [
        { caracter: 1, score: 1 }, //kaptenen
        { caracter: 2, score: -1 }, //fixaren
        { caracter: 3, score: -1 }, //kreatören
        { caracter: 4, score: -1 }, //artisten
        { caracter: 5, score: 1 }, //lagspelaren
        { caracter: 6, score: 0 }, //äventyraren
      ],
    },
    altB: {
      title: 'inte så bra bollkänsla.',
      res: [
        { caracter: 1, score: -1 }, //kaptenen
        { caracter: 2, score: 1 }, //fixaren
        { caracter: 3, score: 1 }, //kreatören
        { caracter: 4, score: 1 }, //artisten
        { caracter: 5, score: -1 }, //lagspelaren
        { caracter: 6, score: 0 }, //äventyraren
      ],
    },
  },
  //5
  {
    text: 'Jag ser mig själv som',
    altA: {
      title: 'nyfiken.',
      res: [
        { caracter: 1, score: 0 }, //kaptenen
        { caracter: 2, score: 0 }, //fixaren
        { caracter: 3, score: 0 }, //kreatören
        { caracter: 4, score: 0 }, //artisten
        { caracter: 5, score: 0 }, //lagspelaren
        { caracter: 6, score: 0 }, //äventyraren
      ],
    },
    altB: {
      title: 'nervös.',
      res: [
        { caracter: 1, score: 0 }, //kaptenen
        { caracter: 2, score: 0 }, //fixaren
        { caracter: 3, score: 0 }, //kreatören
        { caracter: 4, score: 0 }, //artisten
        { caracter: 5, score: 0 }, //lagspelaren
        { caracter: 6, score: 0 }, //äventyraren
      ],
    },
  },
];

const caracters = [
  {
    url: 'captain',
    title: 'Name Of caracter?',
    text: 'A description of the caracter you are and what to do now',
    image: '',
  },
  //1:
  'captain',
  //2
  'fixer',
  //3
  'creator',
  //4
  'artist',
  //5
  'teamplayer',
  //6
  'adventurer',
  //7
  'chameleon',
];

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
  console.log(question);
  const { altA, altB, text } = question;
  if (index > question.length)
    return <WaitForResult resultUrl={`iam/${caracters[1].url}`} />;

  return (
    <QuestionStyle>
      <h2>{text} ...</h2>
      <Button onClick={() => addAnswer('altA')}>{altA.title}</Button>
      <Button onClick={() => addAnswer('altB')}>{altB.title}</Button>
    </QuestionStyle>
  );
};

const TestPage = ({}) => {
  const [answers, setAnswers] = useState([]);
  const index = answers.length + 1 || 1;
  const currentQuestion = questions[index];

  const addAnswer = newAswer => {
    console.log('yes', newAswer);

    setAnswers(answers.concat([newAswer]));
  };
  console.log({ answers, index, currentQuestion });
  // TODO: lägg url för svaret
  return (
    <Page background="#f00080">
      <Router>
        <Pressentation path="start" default />
        <Question
          path="questions"
          index={index}
          question={currentQuestion}
          addAnswer={addAnswer}
        />
        <Result path="iam/:character" answers={answers} />
      </Router>
    </Page>
  );
};

export default TestPage;
