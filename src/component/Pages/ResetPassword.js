import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetPassword } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const ResetPassword = () => {
    // const[email,setEmail]=useState('')
    const params=useParams()
    const token=params.token
   const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')


    const clickSubmit =(e)=>{
        setSuccess(false)
        setError('')
        e.preventDefault()
      
       
            if(!password){
                setError("email must not be empty")
            }
            else{
                resetPassword(password,token)
               .then(data=>{
                   if(data.error){
                       setError(data.error)
                   }
                   else{
                       console.log(data)
                       setSuccess("Password reset link has been sent to your email")
                       setPassword('')
                   }
               })
               .catch(err=>console.log(err))
            }
        
    }
 const showError =()=>{
       if (error) {
           return  <div className='alert alert-danger text-center'>{error}</div>
       }
 }
 const showSuccess=()=>{
    if (success) {
        return  <div className='alert alert-success text-center'>Reset Passowrd.</div>
    }
 }
  return (
    <>
     <Nav/>
    {showError()}
    {showSuccess()}

    <h2 className='text-center mt-5'>Reset Password</h2>
       <div className="container w-50 my-5 mx-auto">
           {/* <input type={'text'} className='form-control'onChange={e=>setEmail(e.target.value)} value={email}/> */}
         
           <input type={'password'} className='form-control'onChange={e=>setPassword(e.target.value)} value={password} placeholder="Enter new password here"/>
           <button className='btn btn-warning  mt-3' onClick={clickSubmit} >Reset Password</button>

       </div>
    
    <Footer/>
    </>
  )
}

export default ResetPassword