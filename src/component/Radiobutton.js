import React from 'react'
import { prices } from './Prices'

const Radiobutton = ({handleFilters}) => {
const handleChange =(e) =>{
        handleFilters(e.target.value,'product_price')
    }
    return (
        <>
            {
                prices.map(price => {
                 return   <div className="form-check" key={price._id}>
                        <input className="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id={price._id} onChange={handleChange} value={price._id}/>
                            <label className="form-check-label" htmlFor={price._id}>
                                 {price.name}
                            </label>
                    </div>
                })
            }
        </>
    )
}

export default Radiobutton