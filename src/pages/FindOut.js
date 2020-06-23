/*
Sparks personality test reverse engineered

*/
import React, { useState } from 'react';
import { Router } from '@reach/router';
//import { useStore } from 'store';
import styled, { css } from 'styled-components/macro';
import { useStore } from 'store';
import A from 'components/A';
import { Card } from 'components/Layout';
import Button from 'components/Button';

import Pressentation from 'components/PersonalityTest/Pressentation';
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
      title: '...när det är lugn och ro.',
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
      title: '...när det är full fart.',
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
      title: 'bollkänsla',
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
      title: 'inte så bra bollkänsla',
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

const Wrapper = styled.div`
  position: relative;
`;

const Question = ({ index, question, addAnswer }) => {
  console.log(question);
  const { altA, altB, text } = question;
  return (
    <Card>
      <p>{text}</p>
      <Button onClick={() => addAnswer('altA')}>{altA.title}</Button>
      <Button onClick={() => addAnswer('altB')}>{altB.title}</Button>
    </Card>
  );
};

const Page = ({}) => {
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
    <Router>
      <Pressentation path="start" default />
      <Question
        path="test/questions"
        index={index}
        question={currentQuestion}
        addAnswer={addAnswer}
      />
      <Result path="test/iam/:character" answers={answers} />
    </Router>
  );
};

export default Page;
