import React, {Fragment} from 'react';
import {useForm} from '../helpers/useForm';
import InitialStateRegister from './InitialStateRegister';

const App = () => {

  const [value, handleChange] = useForm(InitialStateRegister)

  const inputArr = [
    {type: 'text' ,name: 'username' },
    {type: 'password' ,name: 'password' },
    {type: 'number' ,name: 'umur' },
  ]
  
  const _habdleSubmit = () => {
    console.log(value)
  }
  return (
    <Fragment>
      {
        inputArr.map((v,i)=> {
          return (
            <input key={i} type={v.type} value={value.name} onChange={handleChange} name={v.name} />
          )
        })
      }

      <button onClick={_habdleSubmit} >submit</button>


     
     
    </Fragment>
  );
}

export default App;
