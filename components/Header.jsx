import { Box, Typography } from '@mui/material'
import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'


const Header = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${'https://images.unsplash.com/photo-1515665966984-831e4cd20f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80'})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '600px' }} >
                <Box>
                    <Typography variant="h2" color="initial" sx={{ textAlign: 'center', color: 'white' }}>Thousand of best grocery items </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                        <InputGroup className="mb-3 w-50" >
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Header