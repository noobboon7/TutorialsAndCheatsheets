import React, { useEffect } from 'react';
import { useForm } from './useForm';

import './App.css';

const  App = () => {
  const [values, handleChange] = useForm({email: '', password: '', name: ''})
  useEffect(() => {
    console.log("render");
  },
  [values]
  )


  return (
    <div className="App">
      <input type="name" onChange={handleChange} placeholder = 'name' name="name" value={values.name} />
      <input type="email" onChange={handleChange} placeholder = 'email' name="email" value={values.email} />
      <input type="password" onChange={handleChange} placeholder = 'password' name="password" value={values.password} />
    </div>
  );
}

export default App;
