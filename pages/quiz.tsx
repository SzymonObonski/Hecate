import React, { useEffect } from 'react';
import { Layout } from '@components/molecules';

const Quiz = () => {
  useEffect(() => {
    fetch('/api/quiz', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ params: [{ tech: 'JavaScript', level: 'middle' }, { tech: 'React', level: 'middle' }] }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Layout>
      Quiz
    </Layout>
  );
};
export default Quiz;
