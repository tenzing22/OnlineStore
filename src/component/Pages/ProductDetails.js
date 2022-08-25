
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productDetails, relatedProduct } from '../api/productApi'
import { isAuthenticated } from '../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../reducers/actions/cartAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
    const params = useParams()
    const product_id = params.product_id

    const [product, setProduct] = useState([])
    const [error, setError] = useState('')
    const [relatedProducts, setRelatedProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        productDetails(product_id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProduct(data)
                }
            })
            .catch(error => console.log(error))

        relatedProduct(product_id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setRelatedProducts(data)
                }
            })
            .catch(error => console.log(error))
    }, [params])
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const addItemsToCart = () => {
        dispatch(addItemToCart(product_id, 1))
        toast.success(`${product.product_name} has been added to cart`)
    }

    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <Nav />
            {showError}
            <div className="container mx-auto m-5 p-5 d-flex shadow-lg">
                <div className="product-image mx-auto w-50 border-end border-3 text-center">
                    <img src={`http://localhost:5000/${product.product_image}`} alt={product.product_name} height='300px' />
                </div>
                <div className='product-description mx-auto w-50 ps-5 pt-5'>
                    <h4>Item Name: {product.product_name}</h4>
                    <h5>Price : {product.product_price}</h5>
                    <p><b> Description :</b>{product.product_description}</p>

                    <p><b>Count in Stock :</b> {product.count_in_stock}</p>

                    {
                        isAuthenticated() && isAuthenticated().user.role === 1 ?
                            <Link to={`/product/update/${product_id}`}> <button className='btn btn-warning'>UPDATE PRODUCT</button></Link>
                            :
                            <button className='btn btn-warning' onClick={addItemsToCart}> ADD TO CART</button>
                    }

                </div>
            </div>
            <div className="container">
                <h5>Related products</h5>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-5 ">
                    {
                        relatedProducts.slice(0, 4).map(item => {
                            return <Card item={item} key={item._id} />
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails