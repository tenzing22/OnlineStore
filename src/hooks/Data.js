import React,{useState ,useEffect} from 'react'
import { ButtonGroup, Button } from '@mui/material'

const Data = () => {
   
        //useState -react hook,manage states,
        // const[variable,function] =useState(intialValue)
        // variable -> state variable to store state/values -> count
        //initialValue -> intial value of state variable -> setCount
        //const [count,setCount] = useState(0) -> 0
        const[data,setData]=useState(0)
      
        const increase =()=> setData(data+2)
        useEffect(()=>{
          window.alert("count is updated")
        },[data])
  return (
    <>
    <div className='text-center'>
    <h1>Data: {data}</h1>
    <ButtonGroup>
    <Button className='btn btn-success' variant='contained' color='success' onClick={increase}>Increase</Button>
    <Button className='btn btn-danger' variant='contained' color='error' onClick={()=>setData(data-2)}>Decrease</Button>
    <Button className='btn btn-warning' variant='conatined' color='warning' onClick={()=>setData(0)}>Reset</Button>
    </ButtonGroup>
    </div>
    </>
  )
}

export default Data