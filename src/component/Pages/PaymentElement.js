import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../config'
import Payment from './Payment'

const PaymentElement = () => {
  const [stripeApiKey, setStripeApiKey] = useState('')

  useEffect(async () => {
    const { data } = await axios.get(`${API}/getStripeKey`)
    setStripeApiKey(data.stripeAPIKey)
  }, [])
  return (
    <>
      {
        stripeApiKey &&
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Payment />
        </Elements>
      }

    </>
  )
}

export default PaymentElement