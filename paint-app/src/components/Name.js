import React, { useState } from "react";

export default function Name() {
  const [name, setName] = useState('');
  
  return(
    <label className='header-name'>
      <input
      value={name}
      placeholder='Untitled'
      onChange={e => setName(e.target.value)}
      onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
      />
    </label>
  ) 
}
