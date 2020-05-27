import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton, Form, Input } from './StyledComponents';
import axios from 'axios';

export const Login = (props) => {

    const [ user, setUser ] = useState({ 
        email: '', 
        password: '' 
    });

    const hanldeSubmit = e => {
        e.preventDefault();
        axios
            .post('https://sauti-africa.herokuapp.com/api/login', user)
            .then(res => {
                console.log(res.data.payload);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/');
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setUser({
            [e.target.name] : e.target.value
        })
    }

    return (
        <Form className='centeredToPageForms'>
        {/* <Form onSubmit={hanldeSubmit}> */}
            <h1>Login</ h1>
            <Input name='email' placeholder='Email' onChange={handleChange} />
            <Input name='password' type='password' placeholder='Password' onChange={handleChange}/>
            <div className='buttonsLogin'>
                <PrimaryButton onClick={hanldeSubmit}>Login</PrimaryButton>
                <SecondaryButton onClick={() => {props.history.push('/signup')}}>Sign Up</SecondaryButton>
            </div>
        </Form>
    )
} 