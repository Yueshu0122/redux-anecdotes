import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote,getFilteredAnecdotes } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(getFilteredAnecdotes);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
  };

  return (
    <div>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;