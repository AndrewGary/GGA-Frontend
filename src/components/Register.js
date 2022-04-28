import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import FileUpload from 'react-material-file-upload';

const initialState = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    birthday: '',
    phoneNumber: ''
}

export default function Register() {
    
    const [form, setForm] = useState(initialState);
    
    const handleChange = e => {
        console.log(e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
        setForm(initialState);
    }

    return (<>
        <h1>Register</h1>
        <Box component='form' onSubmit={handleSubmit} sx={{ margin: '11px',p: 2, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid lightgrey'}}>
            <TextField 
                required
                name='firstname' 
                label='Firstname' 
                variant='outlined'
                onChange={handleChange}
                margin='dense'
            />
            <TextField 
                required
                name='lastname' 
                label='Lastname' 
                variant='outlined'
                onChange={handleChange} 
                margin='dense'
            />
            <TextField 
                required
                name='username' 
                label='Username' 
                variant='outlined'
                onChange={handleChange} 
                margin='dense'
            />
            <TextField 
                required
                name='email' 
                label='Email' 
                variant='outlined'
                onChange={handleChange}
                margin='dense'
            />
            <TextField 
                required
                name='password' 
                label='Password' 
                variant='outlined'
                onChange={handleChange} 
                margin='dense'
            />
            <TextField 
                required
                name='birthday' 
                label='Birthday - MM/DD/YY' 
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
            <FileUpload />
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