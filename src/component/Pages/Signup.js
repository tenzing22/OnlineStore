import React, { useState } from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Link } from 'react-router-dom'
import { userRegister } from '../api/userApi'

const Signup = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const[success,setSuccess]=useState(false)


    const clickSubmit =(e)=>{
        setSuccess(false)
        e.preventDefault()
        userRegister(username,email,password)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
                setUsername('')
                setEmail('')
                setPassword('')
            }
        })
    }
 const showError =()=>{
       if (error) {
           return  <div className='alert alert-danger text-center'>{error}</div>
       }
 }
 const showSuccess=()=>{
    if (success) {
        return  <div className='alert alert-success text-center'>User Registered.</div>
    }
 }

    return (
        <>
            <Nav />
            {showError()}
            {showSuccess()}
            <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5 text-center">
                <form>
                    <img className="mb-4" src="./logo192.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="Name" placeholder="Name" onChange={e=>setUsername(e.target.value)}value={username}/>
                        <label for="Name">Name</label>

                    </div>
                    {/* <div className="form-floating mb-2">
                        <input type="date" className="form-control" id="date" placeholder="date" />
                        <label for="date">Date Of birth</label>

                    </div>

                    <label className='form-control text-start d-flex mb-2'>Gender :
                        
                            <div class="form-check ">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label class="form-check-label" for="flexRadioDefault3">
                                    Others
                                </label>
                            </div>
                        

                    </label> */}





                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)} value={email} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}value={password}/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    {/* <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
                        <label for="floatingPassword"> ConfirmPassword</label>
                    </div> */}

                    <div className="checkbox mb-3 text-start  m-1">
                        <label>
                            <input type="checkbox" value="remember-me" /> I agree to term and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary " type="submit" onClick={clickSubmit}
                    >Register</button>
                    Already have an account. <Link to='/signin'>sign in</Link>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>


            <Footer />
        </>
    )
}

export default Signup