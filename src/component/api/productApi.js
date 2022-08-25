import { API } from "../../config"

export const addProduct = (product,token) =>{
    return fetch(`${API}/addproduct`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            //"Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then(res=>res.json())
    .catch(err=>console.log())
}

export const findProducts = (sortBy,order,limit) => {
    return fetch(`${API}/productlist?sortBy=${sortBy}&ordder=${order}`,{
        method :"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const productDetails=(product_id)=>{
    return fetch(`${API}/product/details/${product_id}`,{
        method :"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export const relatedProduct = (product_id)=>{
    return fetch(`${API}/getrelatedproducts/${product_id}`,{
        method :"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))    
    
}

export const updateProduct = (product_id,product,token)=>{
    return fetch(`${API}/product/update/${product_id}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err)) 

}