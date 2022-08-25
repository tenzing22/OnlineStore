import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { findProducts } from '../api/productApi'
import { isAuthenticated } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'

const ProductsAdminPage = () => {
  const {user} = isAuthenticated()
  const [products,setProducts] = useState([])
  

  useEffect(()=>{
     findProducts("product_price","1",0)
     .then(data=>{
          if (data.error) {
             console.log(data.error)
          }
          else{
            setProducts(data)
          }
     })
     .catch(error=>console.log(error))
  },[])
  return (
    <>
     <Nav/>
    <div className='row '>
        <div className='col-md-3'>
           <AdminSidebar name={user.user_name} email={user.email}/>
        </div>
        <div className='col-md-9'>
            <h2>Products</h2>
            <div className="container">
              <div className="table">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Product Image</th>
                    <th>Products Details</th>
                    <th>Count In Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((product,i)=>{
                      return <tr key={i}>
                        <td>{i+1}</td>
                        <td>
                          <img src={`http://localhost:5000/${product.product_image}`} alt={product.product_name} height='100px'/>
                        </td>
                        <td>
                          <h5>{product.product_name}</h5>
                          <h5>Rs{product.product_price}</h5>
                          <p>Description{product.product_description}</p>
                        </td>
                        <td>{product.count_in_stock}</td>
                        <td>
                          <Link to={`/product/${product._id}`}>
                            <button className='btn btn-warning'>View Details</button>
                          </Link>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </div>
            </div>
        </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default ProductsAdminPage