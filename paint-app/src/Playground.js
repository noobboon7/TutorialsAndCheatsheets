import React, {useState} from 'react';
import randomcolor from 'randomcolor';

export default function Playgound() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <button onClick={ () => setCount(curCount => curCount - 1)} >-</button>
      {count}
      <button onClick={ () => setCount(curCount => curCount + 1)} >+</button>
    </div>
  )
}