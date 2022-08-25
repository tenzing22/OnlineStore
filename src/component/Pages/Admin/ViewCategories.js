import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewCategories } from '../../api/categoryApi'

import { isAuthenticated } from '../../api/userApi'
import Footer from '../../Layout/Footer'
import Nav from '../../Layout/Nav'
import AdminSidebar from '../AdminSidebar'

const ViewCategories = () => {
   const {user} = isAuthenticated()
   const[categories,setCategories]= useState([])

   useEffect(()=>{
       viewCategories()
       .then(data=>{
           if(data.error){
               console.log(data.error)
           }
           else{
               setCategories(data)
           }
       })
   },[])

  return (
    <>
    <Nav/>
  
    <div className='row container-fluid'>
        <div className='col-md-3'>
           <AdminSidebar name={user.user_name} email={user.email}/>
        </div>
        <div className='col-md-9'>
         {
             <table className='table table-bordered table-striped table-hover'>
                 <thead>
                    <tr>
                        <td>S.No.</td>
                        <td>Category Name</td>
                        <td>Action</td>
                    </tr>
                 </thead>
                 <tbody>
                       {
                           categories.map((item,i)=>{
                              return <tr key={item._id}>
                                   <td>{i+1}</td>
                                   <td>{item.category_name}</td>

                                   <td>
                                       <Link to={`/admin/category/${item._id}`}>
                                       <button className='btn btn-warning'>View Details</button>
                                       </Link>
                                  </td>
                               </tr>
                           })
                       }
                 </tbody>
             </table>
         }
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ViewCategories