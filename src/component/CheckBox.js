import React, { useEffect, useState } from 'react'
import { viewCategories } from './api/categoryApi'


const CheckBox = ({ handleFilters }) => {
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([])

    const handleToggle = (e) => {
        const newChecked = [ ...checked ]
        const categoryId = checked.indexOf(e)

        if (categoryId === -1) {
            newChecked.push(e)
        }
        else {
            newChecked.splice(categoryId, 1)
        }
        setChecked(newChecked)
        handleFilters(newChecked, 'category')
    }

    useEffect(() => {
        viewCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [])
    return (
        <>
            {
                categories.map((category, i) => {
                    return <div className="form-check" key={i}>
                        <input className="form-check-input mt-1 me-2" type="checkbox" value={category._id} id={category._id} onChange={()=>handleToggle(category._id)} />
                        <label className="form-check-label" htmlFor={category._id}>
                            {category.category_name}
                        </label>
                    </div>
                })
            }

        </>
    )
}

export default CheckBox