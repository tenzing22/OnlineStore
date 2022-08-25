import { Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Card from '@mui/material/Card';
import FacebookIcon from '@mui/icons-material/Facebook';

const About = () => {
    return (
        <>
            <Nav />

            <Typography variant="h4" className='text-center'>
                About Us
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="ten.jpg"
                    alt="admin"
                />

                <CardContent>
                    <Typography variant="h6" color="secondary">
                        Admin
                    </Typography>
                    <Typography variant="body" color="secondary">
                        Mr.ABC
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined' >Portfolio<FacebookIcon/></Button>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="laptop.jpg"
                    alt="admin"
                />

                <CardContent>
                    <Typography variant="h6" color="secondary">
                        Admin
                    </Typography>
                    <Typography variant="body" color="secondary">
                        Mr.ABC
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined'>Portfolio</Button>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="tv.jpg"
                    alt="admin"
                />

                <CardContent>
                    <Typography variant="h6" color="secondary">
                        Admin
                    </Typography>
                    <Typography variant="body" color="secondary">
                        Mr.ABC
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined'>Portfolio</Button>
                </CardActions>
            </Card>
                </Grid>

            </Grid>
           
            <Footer />
        </>
    )
}

export default About