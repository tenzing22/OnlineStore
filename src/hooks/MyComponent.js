import React from 'react'

const MyComponent = (props) => {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={`${props.image}`} alt={`${props.title}`} />
                    </div>
                    <div className='card-body'>
                        <div className='title'>{props.title}</div>
                        <div className='text'>{props.description}</div>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="card shadow-lg mb-3">
                <img src={`${props.image}`} className="card-img-top custom-product-image " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{`${props.title}`}</h5>
                    <div className='text'>{props.description}</div>
                    <button className='btn btn-success'>View Details</button>
                </div>
            </div>
        </div>

        </>
    )
}

export default MyComponent