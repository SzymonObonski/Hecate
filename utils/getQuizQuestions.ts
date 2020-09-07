import { QuestionnaireForm } from '@models/quiz';

const getQuizQuestions = (params: QuestionnaireForm[]) => fetch('/api/quiz', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ params }),
})
  .then((response) => response.json());

export default getQuizQuestions;
