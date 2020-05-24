import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton, Form, Input } from './StyledComponents';
export const Login = () => {

    const [ user, setUser ] = useState({ 
        email: '', 
        password: '' 
    });

    // const hanldeSubmit = e => {
    //     e.preventDefault();
    //     axios
    //         .post('http://localhost:5000/api/login', user)
    //         .then(res => {
    //             console.log(res.data.payload)
    //             localStorage.setItem('token', res.data.payload);
    //             // props.history.push('/items');
    //         })
    //         .catch(err => console.log(err))
    // }

    const handleChange = e => {
        setUser({
            [e.target.name] : e.target.value
        })
    }

    return (
        <Form>
        {/* <Form onSubmit={hanldeSubmit}> */}
            <Input name='email' placeholder='Email' onChange={handleChange} />
            <Input name='password' type='password' placeholder='Password' onChange={handleChange}/>
            <PrimaryButton>Login</PrimaryButton>
            <SecondaryButton>Sign Up</SecondaryButton>
        </Form>
    )
} 