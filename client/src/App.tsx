import { useState } from 'react';
import './App.css';
import { Tweet } from './components/Tweet';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Qtde Cliques {count}
      <Tweet text="Tweet 01" />
      <Tweet text="Tweet 02" />
      <Tweet text="Tweet 03" />
      <button type="button" onClick={() => setCount(count + 1)}>
        Adicionar tweet
      </button>
    </div>
  );
}
