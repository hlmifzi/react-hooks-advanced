import {useState} from 'react'

export const useForm = (initialValues) => {
  const [values , setValues] = useState(initialValues)
 
  const res =  e  => {
    const { name, value } = e.target
    setValues({
      [name] : value
    })
  }
  
  return [ 
    values,
    res
  ]
}
