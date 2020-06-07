import React, {useState, useEffect} from 'react';
import randomcolor from 'randomcolor';

export default function Playgound() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(randomcolor())
  }, [count])


  return(
    <div style={{borderTop: `10px solid ${color}`}}>
      <button onClick={ () => setCount(curCount => curCount - 1)} >-</button>
      {count}
      <button onClick={ () => setCount(curCount => curCount + 1)} >+</button>
    </div>
  )
}