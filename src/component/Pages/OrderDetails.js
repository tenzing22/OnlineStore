import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { orderDetail } from '../reducers/actions/orderAction'

const OrderDetails = () => {

    const { user, token } = isAuthenticated()

    const orderStore = useSelector(state => state.orderDetail)
    const order = orderStore.order

    const { order_id } = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(orderDetail(order_id, token))
    }, [])
    return (
        <>

            <Nav />
            <div className='container my-5 mx-auto p-5'>
                <h1 className='text-center'> Order Details</h1>
                <hr />
                {
                    order &&
                    <>
                        <h3>order ID : <u>{order._id}</u></h3>
                        <h3>Total price : <u>{order.total_price}</u></h3>
                        <h3>No. of items : <u>{order.orderItems.length}</u></h3>
                        <h3>Status : <u>{order.status}</u></h3>

                        <h3 className='text-start'> order Items:</h3>
                        <div className='row row-cols-md-3'>
                            {
                                order.orderItems.map(item => {
                                    return <>
                                        <div className="col my-2">
                                            <div className="card shadow-lg">
                                                <img src={`http://localhost:5000/${item.product.product_image}`} class="card-img-top" alt="..." height={'150px'} />
                                                <div class="card-body text-center">
                                                    <h5 className="card-title">{item.product.product_name}</h5>
                                                    <h6 >{item.product.product_price}</h6>
                                                    <p className="card-text text-truncate">{item.product.product_description}</p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                        <Link to='/userprofile'><h4>Go Back</h4></Link>
                    </>
                }
            </div>

            <Footer />
        </>
    )
}

export default OrderDetails