import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutProgress = ({ConfirmOrder, Shipping, Payment}) => {
  return (
    <>
    <div className='container-fluid my-3'>
        <div className='d-flex justify-content-evenly'>
            <Link to= '/cart'><button className='btn btn-warning'>Go Back</button></Link>
            <Link to ='/confirmorder'>
            <button className='btn btn-warning'>Confirm Order</button>
            </Link>
            {
                Shipping? <button className='btn btn-warning'>Shipping</button>:
                <button className='btn btn-secondary disabled'>Shipping</button>
            }

            {
                Payment?<button className='btn btn-warning'>Payment</button>:
                <button className='btn btn-secondary disabled'>Payment</button>
            }
        </div>
    </div>
    </>
  )
}

export default CheckoutProgress