import * as React from 'react';
import useCounter from '../hooks/counter';

function Button({
  children,
  onClick,
}: {
  children: React.PropsWithChildren;
  onClick: () => void;
}) {
  const { counter, increment, decrement } = useCounter(<></>);

  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '1.2rem',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
      }}>
      {children}
    </button>
  );
}

export { Button };
