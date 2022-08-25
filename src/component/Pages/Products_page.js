
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Product from '../Layout/Product'
import Card from '../Card'
import CheckBox from '../CheckBox'
import Radiobutton from '../Radiobutton'
import { prices } from '../Prices'
import { filterProduct } from '../api/categoryApi'


const Products_page = () => {
    const [products, setProducts] = useState([])
    const [sortBy, setSortBy] = useState('createAt')
    const [order, setOrder] = useState('1')
    const [limit, setLimit] = useState(2)
    const [error, setError] = useState()
    const [myFilter,setMyFilter] = useState({
        filters:{category:[],product_price:[]}
    })
    const[size,setSize] =useState(0)
    const[skip,setSkip]= useState(0)


    const handlePrice = index => {
    const data = prices
    let result = [ ]
    result =data.find(item=>item._id === index)
      return result.value
    }

    const handleFilters = (filters,filterBy) =>{
        const newFilter = {...myFilter}
        newFilter.filters [filterBy] = filters 

        if (filterBy === 'product_price') {
             let priceValue = handlePrice(filters)
             newFilter.filters[filterBy] = priceValue
        }
        setMyFilter(newFilter)
    }
    
    const {filters} = myFilter

    useEffect(() => {
        setSkip(0)
        filterProduct(sortBy, order, limit ,skip ,myFilter)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {

                    setProducts(data.filterProduct)
                    setSize(data.size)
                }

            })
            .catch(err => console.log(err))

    }, [sortBy, order ,limit,myFilter])
  
    const loadMore = () =>{
        let toskip=(skip+limit)
       // setLimit(limit+1)
        filterProduct(sortBy, order, limit ,toskip ,myFilter)
        .then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {

                setProducts([...products,...data.filterProduct])
                setSkip(toskip)
                setSize(data.size)
            }

        })
        .catch(err => console.log(err))
    }
    const showError = () => {
        if(error){

            return <div className="alert alert-danger">{error}</div>
        }

    }
    return (
        <>
            <Nav />
            {showError()}
            <div className='row'>
                <div className='col-md-3'>
                    <h4 className='mt-3'>Departments</h4>
                    
                    <CheckBox handleFilters ={(filters)=>handleFilters(filters,'category')}/>
                    
                    <h4 className='mt-3'>Price</h4>
                    <Radiobutton handleFilters={filters=>handleFilters(filters,'product_prce')}/>

                </div>

                <div className='col-md-9'>
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">

                        {
                            products.map(item =>{return <Card item={item}/>})
                        }
                    </div>
                    <button className='btn btn-warning' onClick={loadMore}>Load More</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products_page