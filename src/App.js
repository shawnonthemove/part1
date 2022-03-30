import React, { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

function App() {
  let [ good, setGood ] = useState(0);
  let [ neutral, setNeutral ] = useState(0);
  let [ bad, setBad ] = useState(0);
  let [selected, setSelected] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  return (
    <>
    <h1>Give a feedback!</h1>
    <Button text="good" onClick={() => setGood(good+1)}></Button>
    <Button text="neutral" onClick={() => setNeutral(neutral+1)}></Button>
    <Button text="bad" onClick={() => setBad(bad+1)}></Button>
    <h1>Statistics</h1>
    <Statistics info={{good, neutral, bad}}/>
    <hr></hr>
    <q style={{display: "block"}}>{anecdotes[selected]}</q>
    <Button text="nextAnecdotes" onClick={() => setSelected(Math.round(Math.random()*6))}></Button>
    </>
  );
}

export default App;
