import React, { useState } from 'react'
import { addCategory } from '../../api/categoryApi'
import { isAuthenticated } from '../../api/userApi'
import Footer from '../../Layout/Footer'
import Nav from '../../Layout/Nav'
import AdminSidebar from '../AdminSidebar'

const AddCategory = () => {
    const { user, token } = isAuthenticated()
    const [category_name, setCategory_name] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const clickSubmit = e => {
        setError('')
        setSuccess('')
        e.preventDefault()
        addCategory(token, category_name)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess("New Category added")
                }
            })
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className=' alert alert-success'>{success}</div>
        }
    }
    return (
        <>
            <Nav />
            {showError()}
            {showSuccess()}
            <div className='container-fluid'>
                <div className='row' >
                    <div className='col-md-3'>
                        <AdminSidebar name={user.user_name} email={user.email} />
                    </div>
                    <div className='col-md-9'>
                        <h2>Add Category</h2>
                        <div className='w-50 mx-auto p-3'>
                            <label htmlFor='category_name' className='h4'>Category Name:</label>
                            <input type={'text'} className=' form-control mt-2' onChange={e => setCategory_name(e.target.value)} />
                            <button className='btn btn-warning shadow-lg mt-3 form-control ' onClick={clickSubmit}>ADD CATEGORY</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddCategory