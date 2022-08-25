import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { userOrder } from '../reducers/actions/orderAction'

const UserProfile = () => {
    const {user, token} = isAuthenticated()
    const order = useSelector(state=>state.userOrder)
    console.log(order.order)
    const orderStore=useSelector(state=>state.userOrder)
      const orders = orderStore.order
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(userOrder(user._id, token))
    },[])
  return (
    <>
    <Nav/>
    <div className='container mx-auto my-5'>

        <table className='table'>
            <thead>
                <tr>
                    <td>SNO.</td>
                    <td>No . Of items</td>
                    <td>Product</td>
                    <td>Total Amout</td>
                    <td>Status</td>
                </tr>
            </thead>

            <tbody>
                {
                    orders&& 
                    orders.map((item,i)=>{
                            return <tr>
                                <td>{i+1}</td>
                                <td>{
                                    item.orderItems.length}
                                </td>
                                <td>
                            {item.orderItems.map(product=>{return <h6>{product.name}</h6>})}
                                </td>
                                <td>{item.total_price}</td>
                                <td>
                                    <Link to={`/order/${item._id}`}>{item.status}</Link></td>
                            </tr>
                        })
                    
                }
            </tbody>
        </table>
    </div>

    <Footer/>
        
    </>
  )
}

export default UserProfile