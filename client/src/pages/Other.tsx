import { useState } from 'react';
import { Tweet } from '../components/Tweet';

export function Other() {
  const [tweets, setTweets] = useState(['Tweet 01', 'Tweet 02', 'Tweet 03']);

  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />;
      })}
      <button type="button" onClick={() => setTweets([...tweets, 'novo'])}>
        Adicionar tweet
      </button>
    </div>
  );
}
