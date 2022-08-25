import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <>
     <div className="col my-2">
    <div className="card shadow-lg">
      <img src={`http://localhost:5000/${item.product_image}`} class="card-img-top" alt="..." height={'150px'}/>
      <div class="card-body text-center">
        <h5 className="card-title">{item.product_name}</h5>
        <h6 >{item.product_price}</h6>
        <p className="card-text text-truncate">{item.product_description}</p>
        <Link to={`/product/${item._id}`}>
        <button className='btn btn-warning'>View Details</button>
      </Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Card