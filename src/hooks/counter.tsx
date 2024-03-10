import { useState } from 'react';

type Props = {};

export default function useCounter({}: Props) {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return { counter, increment, decrement };
}

export { useCounter };
