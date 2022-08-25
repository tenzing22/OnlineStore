import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '../api/userApi'

const Nav = () => {
    const { user } = isAuthenticated()
    const navigate = useNavigate()
    const signoutHandler = () => {
        signout()
            .then(data => {
                console.log(data.message)
                navigate('/')

            })
            .catch(error => console.log(error))
    }
    return (
        <div className='container-fluid'>
            <div className='row pt-1 bg-dark'>
                <div className='col-md-3 text-center'>
                    <Link className="navbar-brand fs-3 fw-bold text-white" to="/">Online Store</Link>

                </div>
                <div className='col-md-6'>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form></div>
                <div className='col-md-3 d-flex justify-content-evenly '>
                    {!user &&
                        <>

                            <Link to="/signin"><i className="bi bi-box-arrow-in-right fs-3 text-white"></i></Link>
                            <Link to="/register"><i className="bi bi-person-plus fs-3 text-white"></i></Link>
                            <Link to="/cart"><i className="bi bi-cart-fill fs-3 text-white"></i></Link>
                        </>
                    }


                    {
                        user && user.role === 1 &&
                        <Link to="/admin/dashboard"><i className="bi bi-laptop fs-3 text-white"></i></Link>
                    }
                    {
                        user && user.role === 0 &&
                        <>
                            <Link to="/userprofile"><i className='bi bi-person-circle fs-3 text-white'></i></Link>
                            <Link to="/cart"><i className="bi bi-cart-fill fs-3 text-white"></i></Link>
                        </>
                    }
                    {
                        user &&
                       <Link to='#'> <i className='bi bi-box-arrow-in-right fs-3 text-white' onClick={signoutHandler}></i></Link>

                    }



                </div>

            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-50 mx-auto">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>

                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav