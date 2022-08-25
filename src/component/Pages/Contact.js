import { Box,Container, TextField, Typography ,Button} from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const Contact = () => {
  return (
    <>
    <Nav/>
   <Typography variant='h4' align='center'>
       Contact
   </Typography>
   <Container className='mx-auto'  sx={{ mx:'auto',width:'90%'}}>
      
      <Box boxShadow={3} p={3} sx={{display:'flex', flexWrap:'wrap',justifyContent:'space-evenly'}}>
           <Box sx={{width:"50%",py:"20px"}} boxShadow={3} borderRadius='10px'>
               <Box>
               <Typography variant='h5'>Our Store</Typography>33
               <Typography variant='h6'>Kathmandhu</Typography>
               <Typography variant='body'>Phone: 9866473662</Typography><br/>
               <Typography variant='body'>Email: ltenzing99@gmail.com</Typography><br/>
               </Box>
           <Box>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2402493600753!2d85.31271801425788!3d27.70986753198982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1647844313925!5m2!1sen!2snp" width="90%" height="350" style={{"border":"0"}} allowfullscreen="" loading="lazy"></iframe>
           </Box>
           </Box>

           <Box sx={{width:"50%"}} pl={5}>
               <Box>
                <Typography variant='h5' align='center' color='secondary' fontWeight='bold' sx={{textDecoration:"underline"}}>
                  Contact Form

                </Typography>
                <TextField variant='outlined' label='Email' multiline maxRows={1} fullWidth='true' required placeholder='Enter E-mail here'
                helperText='this is required field'/>
                <TextField variant='outlined' label='Subject' multiline maxRows={1} fullWidth='true' required placeholder='Enter Subject here'/><br/> <br/>
                <TextField size='medium' variant='outlined' label='Message' multiline maxRows={4} minRows='4' fullWidth='true' required placeholder='Enter Message here'/> <br/> <br/>
                <Button variant='contained' fullwidth>Submit</Button>
                   
               </Box>
              
           </Box>

      </Box>

      </Container>

    <Footer/>
    </>
  )
}

export default Contact