import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import { Box, CardMedia } from '@mui/material'

const Home = () => {
    return (

        <Box sx={{ marginTop: '40px' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <CardMedia component="img" height="234" image={'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fdiscount%2Fbanner-1.png&w=640&q=100'} alt="Paella dish" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardMedia component="img" height="234" image={'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-2.png&w=1080&q=100'} alt="Paella dish" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardMedia component="img" height="234" image={'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-11.png&w=750&q=100'} alt="Paella dish" style={{ backgroundSize: 'cover', }} />
                </Grid>
            </Grid>
        </Box>

    )
}

export default Home