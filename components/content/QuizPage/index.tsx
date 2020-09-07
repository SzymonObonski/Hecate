import React from 'react';
import { getQuizQuestions } from '@utils';
import Questionnaire from './Questionnaire';

const QuizPage = () => {
  const sendForm = async (data) => {
    const response = await getQuizQuestions(data.items);
    console.log(response);
  };
  return (
    <><Questionnaire handleFormSubmit={sendForm} /></>
  );
};
export default QuizPage;
