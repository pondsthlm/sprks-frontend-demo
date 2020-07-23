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
import { questions } from 'components/PersonalityTest/data';

const TestPage = () => {
  const [answers, setAnswers] = useState([]);
  const index = answers.length || 0;
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
          answers={answers}
        />

        <Result path="iam/:character" />
      </Router>
    </Page>
  );
};

export default TestPage;
