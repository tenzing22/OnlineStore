import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import About from './component/Pages/About'
import AddCategory from './component/Pages/Admin/AddCategory'
import AddProduct from './component/Pages/Admin/AddProduct'
import CategoriesDetails from './component/Pages/Admin/CategoriesDetails'
import ViewCategories from './component/Pages/Admin/ViewCategories'
import AdminDashBoard from './component/Pages/AdminDashBoard'
import Blogs from './component/Pages/Blogs'
import Carts from './component/Pages/Cart'
import ConfirmOrder from './component/Pages/ConfirmOrder'
import Contact from './component/Pages/Contact'
import ForgetPasssword from './component/Pages/ForgetPasssword'
// import First from './component/First'
// import Second from './component/Second'
import Home from './component/Pages/Home'
import ProductDetails from './component/Pages/ProductDetails'
import ProductsAdminPage from './component/Pages/ProductsAdminPage'
import Products_page from './component/Pages/Products_page'
import ResetPassword from './component/Pages/ResetPassword'
import Shipping from './component/Pages/Shipping'
import Signin from './component/Pages/Signin'
import Signup from './component/Pages/Signup'
import UpdateProduct from './component/Pages/UpdateProduct'
import UserConfirmation from './component/Pages/UserConfirmation'
import Payment from './component/Pages/Payment'
import Count from './hooks/Count'
import Data from './hooks/Data'
import FetchData from './hooks/FetchData'
import Main from './hooks/Main'
import AdminRoute from './Route/AdminRoute'
import PrivateRoute from './Route/PrivateRoute'
import PaymentElement from './component/Pages/PaymentElement'
import PaymentSuccess from './component/Pages/PaymentSuccess'
import UserProfile from './component/Pages/UserProfile'
import OrderDetails from './component/Pages/OrderDetails'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path='/first' element={<First/>}/>
          <Route path='/second' element={<Second/>}/> */}
          <Route path='/' element ={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/register' element={<Signup/>}/>


          <Route path='/' element={<PrivateRoute/>}>
          <Route path='/cart'element={<Carts/>}/>
          </Route>
          
          <Route path='/products' element={<Products_page/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs' element={<Blogs/>}/>


          <Route path='/email/confirmation/:token' element={<UserConfirmation/>}/>
          <Route path='/forgetpassword' element={<ForgetPasssword/>}/>
          <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
          <Route path='product/:product_id' element={<ProductDetails/>}/>


          <Route path='/' element={<AdminRoute/>}>
          <Route path='/admin/dashboard' element={<AdminDashBoard/>}/>
          <Route path='/admin/addcategory' element={<AddCategory/>}/>
          <Route path='/admin/viewcategories' element={<ViewCategories/>}/>
          <Route path='/admin/category/:id' element={<CategoriesDetails/>}/>
          <Route path='/admin/addproduct' element={<AddProduct/>}/>
          <Route path='/product/update/:product_id' element={<UpdateProduct/>}/>
          <Route path='/admin/products' element={<ProductsAdminPage/>}/>
          </Route>

          <Route path='/' element={<PrivateRoute />}>
          <Route path='/cart' element={<Carts/>} />
          <Route path='/confirmOrder' element={<ConfirmOrder/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/payment' element={<PaymentElement/>}/>
          <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
          <Route path='/userprofile' element= {<UserProfile/>}/>
          <Route path='/order/:order_id' element = {<OrderDetails/>}/>
        </Route>

          {/* hooks */}
          <Route path='/count' element={<Count/>}/>
          <Route path='/data' element={<Data/>}/>
          <Route path='/fetchdata' element={<FetchData/>}/>
          <Route path='/main' element={<Main/>}/>
       
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
