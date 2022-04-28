import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { Input } from '@mui/material';
import { IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const initalState = {
    name: '',
    description: '',
    price: null,
    jointSize: '',
    height: '',
    weight: null,
    wholeSalePrice: null,
    category: '',
    pictures: [],
    available: true
}

const AddNewItemForm = () => {

    const [ form, setForm ] = useState(initalState);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
    }

    return(
        <>
            <h1>Add Item</h1>
            <Box component='form' onSubmit={handleSubmit} sx={{ margin: '11px',p: 2, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid lightgrey'}}>
                <TextField 
                    required
                    name='name' 
                    label='Name' 
                    variant='outlined'
                    onChange={handleChange}
                    margin='dense'
                />
                <TextField 
                    required
                    name='description' 
                    label='Description' 
                    variant='outlined'
                    onChange={handleChange} 
                    margin='dense'
                />
                <TextField 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                    required
                    name='price' 
                    label='Price' 
                    variant='outlined'
                    onChange={handleChange} 
                    margin='dense'
                />
                <TextField 
                    name='height' 
                    label='Height (Inches)' 
                    variant='outlined'
                    onChange={handleChange}
                    margin='dense'
                />
                <TextField 
                    name='weight' 
                    label='Weight' 
                    variant='outlined'
                    onChange={handleChange} 
                    margin='dense'
                />
                <FormControl sx={{ width: '13.9rem', margin: '.6rem'} }>
                <InputLabel id='idk'>Joint Size</InputLabel>
                <Select
                    labelId='idk'
                    name='jointSize'
                    label="Joint Size"
                    onChange={handleChange}
                >
                    <MenuItem value={'10mm'}>10mm</MenuItem>
                    <MenuItem value={'14mm'}>20mm</MenuItem>
                    <MenuItem value={'18mm'}>30mm</MenuItem>
                </Select>
                </FormControl>

                <FormControl sx={{ width: '13.9rem', margin: '.6rem'}}>
                <InputLabel id='category'>Category</InputLabel>
                <Select
                    labelId='category'
                    name='category'
                    label="Category"
                    onChange={handleChange}
                >
                    <MenuItem value={'Spoon'}>Spoon</MenuItem>
                    <MenuItem value={'Rig'}>Rig</MenuItem>
                    <MenuItem value={'Carb Cap'}>Carb Cap</MenuItem>
                    <MenuItem value={'Honeysucker'}>Honeysucker</MenuItem>
                    <MenuItem value={'Sherlock'}>Sherlock</MenuItem>
                    <MenuItem value={'Weirdo Pipe'}>Weirdo Pipe</MenuItem>
                    <MenuItem value={'Hammer'}>Hammer</MenuItem>
                </Select>
                </FormControl>

                <TextField 
                    helperText='Leave blank if no wholesale'
                    name='wholeSalePrice' 
                    label='Wholesale Price' 
                    variant='outlined'
                    onChange={handleChange} 
                    margin='dense'
                />
                <TextField 
                    required
                    name='phoneNumber' 
                    label='Phone Number' 
                    variant='outlined'
                    onChange={handleChange} 
                    margin='dense'
                />
                <h3>Select Pictures</h3>
                {/* <Button  variant="contained" component="label" color="primary">
                    {" "}
                    Upload a file
                    <input type="file" hidden />
                </Button> */}
                {/* <label htmlFor="contained-button-file"> */}
                    <Button variant="contained" component="span">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" hidden/>
                        Upload
                    </Button>
                {/* </label>
                <label htmlFor="icon-button-file"> */}
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                {/* </label> */}
                <Button
                    variant='outlined'
                    type='submit'
                >
                    Submit
                </Button>
            </Box>
        </>
    )
}

export default AddNewItemForm;