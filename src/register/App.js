import React, {Fragment} from 'react';
import {useForm} from '../helpers/useForm';
import InitialStateRegister from './InitialStateRegister';

const App = () => {

  const [value, handleChange] = useForm(InitialStateRegister)

  return (
    <Fragment>
     <input type="text" value={value.username} onChange={handleChange} name="username" />
     <br/>
     <input type="password" value={value.password} onChange={handleChange} name="password" />
    </Fragment>
  );
}

export default App;
