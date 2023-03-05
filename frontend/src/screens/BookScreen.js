import React, { useState } from 'react'

import {Checkbox, FormControlLabel, FormLabel, TextField} from '@mui/material'
import { Box } from '@mui/system'
import {Button} from '@mui/material';

export default function BookScreen() {
    const [inputs, setInputs] = useState({
        name:"",
        slug:"",
        image:"",
        brand:"",
        category:"",
        description:"",
        price:"",
        countInStock:""
    })
  return (
    <Box display='flex' flexDirection='column' justifyContent={'center'}
     maxWidth={700} alignContent='center' alignSelf={'center'} marginLeft={'auto'} marginRight={'auto'} marginTop={10}>
<form>
    <FormLabel>Name</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='name'></TextField>
    <FormLabel>Author</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='slug'></TextField>
    <FormLabel>Publisher</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='brand'></TextField>
    <FormLabel>Category</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='category'></TextField>
    <FormLabel>price</FormLabel>
    <TextField type ='number' margin='normal' fullWidth variant='outlined' name='price'></TextField>
    <FormLabel>image</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='image'></TextField>
    <FormLabel>description</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='description'></TextField>
    <FormLabel>CountInStock</FormLabel>
    <TextField type ='number' margin='normal' fullWidth variant='outlined' name='countInStock'></TextField>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    <Button variant='contained' type='submit'> Add Book </Button>

</form>
</Box>
  )
}
