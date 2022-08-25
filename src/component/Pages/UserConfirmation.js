import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { confirmUser } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const UserConfirmation = () => {
    const params = useParams()
    console.log(params)

    const token=params.token
    const[error,setError]=useState('')
    const [success,setSuccess]=useState(false)

    useEffect(()=>{
        confirmUser(token)
        .then(data=>{
            if(data.error){
            setError(data.error)
        }
        else{
            setSuccess(true)
        }
        })
        .catch(err=>console.log(err))
    },[params])
    const showError =()=>{
        if (error) {
            return  <div className='alert alert-danger text-center'>{error}</div>
        }
  }
  const showSuccess=()=>{
     if (success) {
         return  <div className='alert alert-success text-center'>User Verified successfully.</div>
     }
  }
  return (
    <div>
        <Nav/>
    {showError()}
    {showSuccess()}
    <Footer/>
    </div>
  )
}

export default UserConfirmation