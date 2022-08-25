import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import './blogs.css'

const Blogs = () => {
    return (
        <>
            <Nav />
            <Typography variant="h4" className='blog text-center mt-3'>
                Blogs
            </Typography>
            <Box className='blogs_container' backgroundColor={'skyblue'} p={3}>
                <Box className='blog' display={'flex'} backgroundColor={'white'} p={3} borderRadius='10px'>
                    <Box className='blog-content' width={'80%'}>
                        <Box className='blog-title'>
                            <Typography variant='h5' fontWeight={'blod'} sx={{ textDecoration: "underline" }}>Tittle</Typography></Box>
                        <Box className='blog-text'> <Typography variant='body1' px={5} align='justify'>Blog Text Blog Text Blog TextBlog Text Blog Text Blog Text Blog TextBlog TextBlog TextBlog Text Blog TextBlog TextBlog Text Blog Text Blog Text Blog Text Blog Text Blog TextBlog TextBlog TextBlog TextBlog Text extBlog TextBlog Text Blog Text Blog Text Blog Text Blog Text Blog TextBlog TextBlog TextBlog TextBlog Text</Typography></Box>
                    </Box>
                    <Box className='blogger' width={'20%'}>
                        <Box className='blogger_image' width='100%' borderRadius={'50%'} overflow={'hidden'}>
                            <img src='te.jpg' style={{ "width": "100%" }}></img>
                            </Box>
                            <Box className='blogger_name'>
                                <Typography variant='h6' align='right'> -Blogger</Typography>
                            </Box>
                        
                    </Box>
                </Box>
                <Box className='blog' display={'flex'} backgroundColor={'white'} p={3} borderRadius='10px'>
                    <Box className='blog-content' width={'80%'}>
                        <Box className='blog-title'>
                            <Typography variant='h5' fontWeight={'blod'} sx={{ textDecoration: "underline" }}>Tittle</Typography></Box>
                        <Box className='blog-text'> <Typography variant='body1' px={5} align='justify'>Blog Text Blog Text Blog TextBlog Text Blog Text Blog Text Blog TextBlog TextBlog TextBlog Text Blog TextBlog TextBlog Text Blog Text Blog Text Blog Text Blog Text Blog TextBlog TextBlog TextBlog TextBlog Text extBlog TextBlog Text Blog Text Blog Text Blog Text Blog Text Blog TextBlog TextBlog TextBlog TextBlog Text</Typography></Box>
                    </Box>
                    <Box className='blogger' width={'20%'}>
                        <Box className='blogger_image' width='100%' borderRadius={'50%'} overflow={'hidden'}>
                            <img src='te.jpg' style={{ "width": "100%" }}></img>
                            </Box>
                            <Box className='blogger_name'>
                                <Typography variant='h6' align='right'> -Blogger</Typography>
                            </Box>
                        
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Blogs