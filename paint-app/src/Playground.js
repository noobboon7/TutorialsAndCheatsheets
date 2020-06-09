import React, {useState, useEffect, useRef} from 'react';
import randomcolor from 'randomcolor';

export default function Playgound() {
  const [count, setCount] = useState(30);
  const [color, setColor] = useState(null);

  const inputRef = useRef();
  
  useEffect(() => {
    setColor(randomcolor());
    inputRef.current.focus();
  }, [count]);


  return(
    <div style={{borderTop: `10px solid ${color}`}}>
      <button onClick={ () => setCount(curCount => curCount - 1)} >-</button>
      {count}
      <button onClick={ () => setCount(curCount => curCount + 1)} >+</button>
      <hr/>
      <input ref={inputRef} type='range' onChange={e => setCount(e.target.value)} value={count} />
    </div>
  )
}