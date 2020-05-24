import React from 'react'
import { Form, Input, PrimaryButton } from './StyledComponents';

function SignUp() {
    return (
        <Form className="centeredToPageForms">
            <h1>Sign Up</h1>
            <Input name='email' placeholder='Email' />
            <Input name='password' type='password' placeholder='Password'/>
            <PrimaryButton>Submit</PrimaryButton>
        </Form>
    )
}

export default SignUp;
