import { useCounter } from './src/hooks/counter';
import { Button } from './src/component/button';

const App = () => {
  const { counter, increment, decrement } = useCounter(<></>);

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
