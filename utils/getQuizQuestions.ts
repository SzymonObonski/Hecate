const getQuizQuestions = () => fetch('/api/quiz', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ params: [{ tech: 'JavaScript', level: 'middle' }, { tech: 'React', level: 'middle' }] }),
})
  .then((response) => response.json());

export default getQuizQuestions;
