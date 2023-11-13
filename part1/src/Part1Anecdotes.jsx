import { useState } from "react";

function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max); // The maximum is exclusive and the minimum is inclusive
}

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Part1Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const voteThisAnecdote = () => {
    const newVotes = { ...votes };
    if (selected in newVotes) {
      newVotes[selected] += 1;
    } else {
      newVotes[selected] = 1;
    }
    setVotes(newVotes);
  };

  const pickRandomAnecdote = () => {
    const anecNumber = getRandomInt(anecdotes.length);
    setSelected(anecNumber);
  };

  var maxCount = 0;
  var mostVotedAnecdoteNumber = -1;
  Object.entries(votes).forEach((entry) => {
    const [anecNumber, voteCount] = entry;
    if (voteCount > maxCount) {
      mostVotedAnecdoteNumber = anecNumber;
      maxCount = voteCount;
    }
  });

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button text="vote this" onClick={voteThisAnecdote} />
      <Button text="next anecdote" onClick={pickRandomAnecdote} />
      {mostVotedAnecdoteNumber > -1 && (
        <>
          <h3>Anecdote with most votes</h3>
          <p>{anecdotes[mostVotedAnecdoteNumber]}</p>
        </>
      )}
    </div>
  );
};
export default Part1Anecdotes;
