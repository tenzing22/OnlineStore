import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const PaymentSuccess = () => {
    const newOrder = useSelector(state=>state.newOrder)
    console.log(newOrder)

    
  return (
    <div>
        <Nav/>
        <h3>Your order has been placed successfully.</h3>

        <Link to='/userprofile'>Go back</Link>
        <Footer/>
    </div>
  )
}

export default PaymentSuccess