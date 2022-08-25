import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = (prop) => {
    return (
        <>

            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                    <span className="fs-4">Sidebar</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">

                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/addcategory" className="nav-link text-white">

                            Add Category
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/viewcategories" className="nav-link text-white">

                            View Category
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/addproduct" className="nav-link text-white">

                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/products" className="nav-link text-white">

                            View Product
                        </Link>
                    </li>
                </ul>
                <hr/>
                    <div className="dropdown">
                        <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>{prop.name}</strong>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><Link className="dropdown-item" to="#">{prop.email}</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                        </ul>
                    </div>
            </div>
        
        
                    
    </>
                
                )
}
export default AdminSidebar