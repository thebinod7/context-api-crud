import React, { useEffect } from 'react';

export default function ChildOfAdd({ todos }) {
  useEffect(() => {
    console.log('Child useEffect!');
  }, []);
  return (
    <div>
      {todos.length > 0
        ? todos.map((t) => {
            return <li key={t.id}>{t.title}</li>;
          })
        : ''}
    </div>
  );
}
