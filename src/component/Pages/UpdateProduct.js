import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { viewCategories } from '../api/categoryApi'
import { productDetails, updateProduct } from '../api/productApi'
import { isAuthenticated } from '../api/userApi'
import Card from '../Card'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const UpdateProduct = () => {
    const {token} = isAuthenticated()
    const params = useParams()
    const product_id = params.product_id
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const file_ref = useRef()
    const select_ref = useRef()
    const [new_product, setNewProduct] = useState({
        product_name: '',
        product_description: '',
        product_price: '',
        product_image: '',
        category: '',
        count_in_stock: '',
        formData: ''
    })

    const { product_name, product_description, product_price, product_image, category, count_in_stock, formData } = new_product
    // destructing object to use its field names directly    const [error, setError] = useState('')

    const loadCategories = () => {
        viewCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                    setNewProduct({ formData: new FormData })
                }
            })
    }


    useEffect(() => {
        loadCategories()
        productDetails(product_id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    setError(data.error)
                }
                else {
                    setNewProduct(data)
                }
            })
            .catch(error => console.log(error))


    }, [params,success])

    const handleChange = name => event => {
        // if (name == 'product_image') {
        //     formData.set(name, event.target.files[0])
        //     setNewProduct({ ...new_product, [name]: event.target.files[0] })
        // }
        // else {
            formData.set(name, event.target.value)
            setNewProduct({ ...new_product, [name]: event.target.value })

        // }
    }

    const clickSubmit = e => {
        e.preventDefault()
        // console.log(formData)
        updateProduct(product._id, formData, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
                setError('')
            }
        })
        .catch(err=>console.log(err))
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>"Product updated successfully."</div>
        }
    }

    return (
        <>
            <Nav />
            {showError()}
            {showSuccess()}
            <div className='container mx-auto m-5 p-5 d-flex shadow'>
                <div className='product-image mx-auto w-50 border-end border-3 text-center'>
                    <img src={`http://localhost:5000/${product.product_image}`} alt={product.product_name} height='300px' />
                
                <div className='product-description mx-auto ps-5 pt-5'>
                    <h4>Item Name: {product.product_name}</h4>
                    <h5>Price: Rs.{product.product_price}</h5>
                    <p><b>Description:</b> {product.product_description}</p>
                    <p><b>Count in Stock:</b> {product.count_in_stock}</p>
                </div>
                </div>
                <div className='w-50'>
                    <form className='shadow-lg p-5'>
                        <label htmlFor='product_name'>Product Name:</label>
                        <input type='text' id='product_name' className='form-control'
                            onChange={handleChange('product_name')} value={product_name} />

                        <label htmlFor='product_description'>Description:</label>
                        <textarea className='form-control' onChange={handleChange('product_description')} value={product_description} />

                        <label htmlFor='price'>Price:</label>
                        <input type='number' id='price' className='form-control' onChange={handleChange('product_price')} value={product_price} />

                        {/* <label htmlFor='image'>Image: </label>
                        <input type='file' id='image' className='form-control' onChange={handleChange('product_image')} ref={file_ref} /> */}

                        <label htmlFor='count'>Count in Stock:</label>
                        <input type='number' id='count' className='form-control' onChange={handleChange('count_in_stock')} value={count_in_stock} />

                        <label htmlFor='category'>Category</label>
                        <select className='form-control' onChange={handleChange('category')}>
                            <option></option>
                            {
                                categories.map(category => {
                                    return <option key={category._id} value={category._id} ref={select_ref}>{category.category_name}</option>
                                })
                            }
                        </select>

                        <button className='btn btn-warning form-control' onClick={clickSubmit}>Update Product</button>


                    </form>
                </div>

            </div>



            <Footer />
        </>
    )
}

export default UpdateProduct

