import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { addItemToCart, removeItemFromCart } from '../reducers/actions/cartAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Carts = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  let [order_quantity, setOrderQuantity] = useState(0)
  let [order_total, setOrderTotal] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(cartItems)
    if (cartItems.length > 0) {
      let quantity_array = cartItems.map(item => item.quantity)
      let order_quantity = quantity_array.reduce((acc, cur) => acc + cur)
      setOrderQuantity(order_quantity)
      let price_array = cartItems.map(item => item.price * item.quantity)
      let order_total = price_array.reduce((acc, cur) => acc + cur)
      setOrderTotal(order_total)
    }
    else {
      setOrderQuantity(0)
      setOrderTotal(0)
    }

  }, [cartItems])

  const removeFromCart = (id) => {
    dispatch(removeItemFromCart(id))
    toast.error("item removed from cart")
  }
  const increaseQuantity = (id,quantity,stock) =>{
  let new_quantity = quantity +1
  if (new_quantity===stock) {
    toast.error('canot increase number')
    return
  }
  dispatch(addItemToCart(id,new_quantity))
  toast.success('item quantity incresed')
  }
  const decreaseQuantity =(id,quantity)=>{
    let new_quantity =quantity-1 
    if (new_quantity===0) {
       toast.error("cannot reduce number")
       return
    }
    dispatch(addItemToCart(id,new_quantity))
    toast.error("item quantity reduced")
    
  }
  return (
    <>
    <ToastContainer theme='colored' position='top-right'/>
        <Nav />
        <div className='d-flex'>
            <div className='container mx-auto' style={{ width: '65%' }}>
               {cartItems.length> 0 ?
                <table className="table my-5 shadow-lg table-striped table-hover text-center align-middle table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">SNO</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product</th>
                            <th>Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item, i) => {
                                return <tr>
                                    <td width={'5%'}>{i + 1}</td>
                                    <td width={'40%'}><img src={`http://localhost:5000/${item.image}`} alt={item.name} style={{ height: 200 }} /></td>
                                    <td width={'30%'}>
                                        <h4>{item.name}</h4>
                                        <h5>Rs. {item.price}</h5>
                                    </td>
                                    <td width={'15%'}>
                                        <div className='d-flex'>
                                            <button className='btn btn-warning'onClick={()=>decreaseQuantity(item.product,item.quantity)}>-</button>
                                            <input type={'text'} value={item.quantity} readOnly className='form-control text-center' />
                                            <button className='btn btn-success' onClick={()=>increaseQuantity(item.product,item.quantity,item.stock)}>+</button>

                                        </div>
                                    </td>
                                    <td width={'5%'}>
                                        <button className='btn btn-danger' onClick={()=>removeFromCart(item.product)}>
                                        <i class="bi bi-trash3"></i>
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                :
                <div className='alert alert-danger mt-5'>No items in cart</div>
               
               }
               
            </div>
            <div className='container me-5' style={{ width: '20%' }}>
                <div className='shadow-lg  p-3 mt-5'>
                    <p>Order Items: <br/><b className='fs-3'> {order_quantity}</b></p>
                    <p>Total Order Price: <br/><b className='fs-3'>Rs. {order_total}</b> </p>
                    <hr className='my-2' />
                   <Link to='/confirmorder'> <button className='btn btn-warning'>Confirm Order</button></Link>

                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Carts