import React,{useState} from 'react'
import { forgetPassword } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const ForgetPasssword = () => {
   
    const[email,setEmail]=useState('')
   
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')


    const clickSubmit =(e)=>{
        setSuccess(false)
        e.preventDefault()
      
       
            if(!email){
                setError("email must not be empty")
            }
            else{
                forgetPassword(email)
               .then(data=>{
                   if(data.error){
                       setError(data.error)
                   }
                   else{
                       console.log(data)
                       setSuccess(data.message)
                       setEmail('')
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
        return  <div className='alert alert-success text-center'>{success}</div>
    }
 }

  return (
    <>
    <Nav/>
    {showError()}
    {showSuccess()}

    <h2 className='text-center mt-5'>Forget Password</h2>
       <div className="container w-50 my-5 mx-auto">
           <input type={'text'} className='form-control'onChange={e=>setEmail(e.target.value)} value={email}/>
           <button className='btn btn-warning  mt-3' onClick={clickSubmit} >Forget Password</button>

       </div>
    
    <Footer/>
    </>
  )
}

export default ForgetPasssword