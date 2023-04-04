import { Form } from 'components/Form/Form';
import { useState } from 'react';

export const Home = () => {
  const [result, setResult] = useState('');

  // const setRes = value => {
  //   setResult(value);
  // };

  return (
    <>
      <p>Home</p>
      <p>Input string for example: 15 USD in UAH</p>
      <Form onChange={setResult}></Form>
      <p>{result}</p>
    </>
  );
};
