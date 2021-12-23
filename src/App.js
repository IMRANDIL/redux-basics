import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './action/action';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div className="App">
      <h1>Basic Counter(Using Redux and React-Redux)</h1>
      <div className='Counter'>
        <p><span>{count}</span></p>

      </div>
      <div className="btnContainer">
        <button className="btn" onClick={handleIncrement}>Increment</button>
        <button className="btn" onClick={handleReset}>Reset</button>
        <button className="btn" onClick={handleDecrement}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
