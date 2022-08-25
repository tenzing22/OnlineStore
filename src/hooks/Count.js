import { ButtonGroup, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Count = () => {
  //useState -react hook,manage states,
  // const[variable,function] =useState(intialValue)
  // variable -> state variable to store state/values -> count
  //initialValue -> intial value of state variable -> setCount
  //const [count,setCount] = useState(0) -> 0
  const[count,setCount]=useState(0)

  const increase =()=> setCount(count+1)

  // useEffect -> to show effect when a state changes
  // useEffect(function,[statevariables])
  // function -> effect to be seen
  // statevariables-> state which will trigger function in useEffect

  useEffect(()=>{
    window.alert("count is updated")
  },[count])

  return (
    <div className='text-center'>
    <h1>Count: {count}</h1>
    <ButtonGroup>
    {(count<10) && <Button className='btn btn-success' variant='contained' color='success' onClick={increase}>Increase</Button>}
    {(count>-10)&&<Button className='btn btn-danger' variant='contained' color='error' onClick={()=>setCount(count-1)}>Decrease</Button>}
    <Button className='btn btn-warning' variant='conatined' color='warning' onClick={()=>setCount(0)}>Reset</Button>
    </ButtonGroup>
    </div>
    
  )
}

export default Count