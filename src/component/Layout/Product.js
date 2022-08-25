import React from 'react'
import './product.css'

const Product = () => {
  return (
    <> 
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-5">
        <div className="col">
            <div className="card shadow-lg mb-3">
                <img src="computer.jpg" className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">laptop</h5>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-lg mb-3">
                <img src="tv.jpg" className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">TV</h5>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-lg mb-3">
                <img src="mac.jpg" className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">MAC</h5>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-lg mb-3">
                <img src="camera.jpg" className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Sony Camera</h5>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-lg mb-3">
                <img src="ihpn.jpg" className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Iphone</h5>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-lg mb-3">
                <img src="washingmachine.jpg" className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Washing Machine</h5>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-lg mb-3">
                <img src="laptop.jpg" className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Laptop</h5>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-lg mb-3">
                <img src="blog1.png" className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Canon Camera</h5>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>
    </div>
</>
)
}




export default Product