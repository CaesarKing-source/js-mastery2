import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementCountByAmount } from '../store/slice/counterSlice';

const CounterPage = () => {
  const { count: globalCount } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  
  return (
    <div className="counterApp mt-5 border-2 border-amber-100 p-4 rounded">
        <p>Count: { globalCount }</p>
        <div className="flex gap-2">
          <button onClick={() => dispatch(increment())}>Increment +1</button>
          <button onClick={() => dispatch(decrement())}>Decrement -1</button>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  />
          <button onClick={() => dispatch(incrementCountByAmount(parseInt(value)))}>
            Increment by Amount {value}</button>
        </div>
    </div>
  )
}

export default CounterPage
