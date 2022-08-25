import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutProgress from './CheckoutProgress'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'
import { saveShippingInfo } from '../reducers/actions/cartAction'

const Shipping = () => {
    const { user } = isAuthenticated()
    let shipping_info = useSelector(state => state.cart.shipping_info)
    let cart_items = useSelector(state => state.cart.cartItems)
    const [order_quantity, setOrderQuantity] = useState(0)
    const [order_total, setOrderTotal] = useState(0)
    const dispatch =useDispatch()


    const [new_shipping_info,setShippingInfo] = useState({
        street:'',
        street2:'',
        city:'',
        country:'',
        phone:''
    })

    const {street,street2,city,country,phone}=new_shipping_info

    const handleChange = name => event =>{
        setShippingInfo({...new_shipping_info,[name]:event.target.value})
    }

    const saveShipping = () =>{
    dispatch(saveShippingInfo(street,street2,city,country,phone))
    sessionStorage.setItem('orderInfo', order_total)
    }

    useEffect(() => {
        if (cart_items.length > 0) {
            console.log(cart_items)
            const quantity_array = cart_items.map(item => item.quantity)
            setOrderQuantity(quantity_array.reduce((acc, cur) => acc + cur))

            const price_array = cart_items.map(item => item.price * item.quantity)
            setOrderTotal(price_array.reduce((acc, cur) => acc + cur))
        }
        else {
            order_total = 0
            order_quantity = 0
        }
    }, [])

    return (
        <>
            <Nav />
            <CheckoutProgress Shipping />
           
            <div className='d-flex'>
                <form className='my-5 w-50 shadow-lg p-5 mx-auto'>
                <div>
                    {
                localStorage.getItem('shipping_info') &&
                <div className='d-flex'>
                <div className='w-50 border-end p-2 shadow'>
                    <h4>Shipping Address</h4>
                    <hr />
                    <h5>Street: {shipping_info.street}</h5>
                    <h5>City:{shipping_info.city}</h5>
                    <h5>Country: {shipping_info.country}</h5>
                    <h5>Phone: {shipping_info.phone}</h5>
                </div>
                
                <div className='w-50 p-2 shadow'>
                    
                    <h6>Alternate Shipping Address</h6>
                    <hr />
                    <h5>Street: {shipping_info.street2}</h5>
                    <h5>City:{shipping_info.city}</h5>
                    <h5>Country: {shipping_info.country}</h5>
                    <h5>Phone: {shipping_info.phone}</h5>
                </div>
                </div>
            }

                    </div>
                    <label htmlFor='street'>Street</label>
                    <input type={'text'} id='street' className='form-control' onChange={handleChange('street')} value={street} />
                    <label htmlFor='street2'>Street(Alternate)</label>
                    <input type={'text'} id='street2' className='form-control' onChange={handleChange('street2')} value={street2}  />
                    <label htmlFor='city'>City</label>
                    <input type={'text'} id='city' className='form-control' onChange={handleChange('city')} value={city}  />
                    <label htmlFor='country'>Country</label>
                    <input type={'text'} id='country' className='form-control' onChange={handleChange('country')} value={country}  />
                    <label htmlFor='phone'>Phone Number</label>
                    <input type={'text'} id='phone' className='form-control' onChange={handleChange('phone')} value={phone}  />

                    <button className='btn btn-warning' onClick={saveShipping}>Save Shipping Info</button>


                </form>
                <div className='container me-5' style={{ width: '20%' }}>
                    <div className='shadow-lg  p-3 mt-5'>
                        <p>Order Items: <br /><b className='fs-3'> {order_quantity}</b></p>
                        <p>Total Order Price: <br /><b className='fs-3'>Rs. {order_total}</b> </p>
                        <hr className='my-2' />
                        <Link to='/payment'>
                            <button className='btn btn-warning'>To payment</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Shipping