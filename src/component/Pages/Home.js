import React from 'react'
import Carousel from '../Carousel'

import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Product from '../Layout/Product'

const Home = () => {
  return (
    <>
      <Nav/>
       <Carousel/>
         <Product/>

        <Footer/>
    </>
  )
}

export default Home