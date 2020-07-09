/*
Sparks personality test reverse engineered

*/
import React, { useState } from 'react';
import { Router } from '@reach/router';
//import { useStore } from 'store';
import styled from 'styled-components/macro';
import { Page } from 'components/Layout';

import {
  Pressentation,
  Result,
} from 'components/PersonalityTest/Pressentation';

import Questions from 'components/PersonalityTest/Questions';

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

const TestPage = () => {
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
        <Questions
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
