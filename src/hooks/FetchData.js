import { Key } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [post,setPost] = useState([])
    const [limit, setLimit] =useState(20)
  
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setPost(response.data.slice(0,limit))//console.log(response))
        )
        .catch(error=>console.log(error))
    },[limit])
  return (
    <div>
    {post.map((p,i)=>{
         return <h4 key={i} className='ms-3'>{p.id}: {p.title}</h4>
    })
    }
    {limit<100 &&
    <a href="#" className='btn btn-success me-3 ' onClick={()=>setLimit(limit+20)}>Show More</a>} 
    {limit>0 &&
    <a href="#" className='btn btn-danger' onClick={()=>setLimit(limit-20)}>Show Less</a>}
    </div>
  )
}

export default FetchData