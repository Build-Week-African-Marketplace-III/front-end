import React, { useState } from 'react';

export const Login = () => {

    const [ user, setUser ] = useState({ 
        username: '', 
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
        <form>
        {/* <form onSubmit={hanldeSubmit}> */}
            <input name='username' placeholder='Username' onChange={handleChange} />
            <input name='password' type='password' placeholder='Password' onChange={handleChange}/>
            <button type='submit' />
        </form>
    )
} 