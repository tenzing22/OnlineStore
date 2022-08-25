import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'


const UseContex = () => {
    const message= useContext(GlobalContext)

  return (
    <>

    {message}
    </>
  )
}

export default UseContex