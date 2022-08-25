import React from 'react'
import { isAuthenticated } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import AdminSidebar from './AdminSidebar'


const AdminDashBoard = () => {
   const {user} = isAuthenticated()
    

  return (
    <>
    <Nav/>
    <div className='row '>
        <div className='col-md-3'>
           <AdminSidebar name={user.user_name} email={user.email}/>
        </div>
        <div className='col-md-9'>
            <h2>Welcome to Admin Dashboard</h2>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminDashBoard