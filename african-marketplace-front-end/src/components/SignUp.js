import React from 'react'

function SignUp() {



    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
            <form>
                {/* Name */}
                <label htmlFor='name'>Name</label>
                <input 
                    name='name'
                    type='text'
                />
                {/* Name */}
                <label htmlFor='email'>Email</label>
                <input 
                    name='email'
                    type='text'
                />
                {/* Name */}
                <label htmlFor='password'>Password</label>
                <input 
                    name='password'
                    type='text'
                />
                {/* Name */}
                <label htmlFor='location'>Location</label>
                <input 
                    name='location'
                    type='text'
                />
                {/* Name */}
                <label htmlFor='role'>Role</label>
                <input 
                    name='role'
                    type='dropdown'
                />
                <label htmlFor='terms'>Terms Of Service</label>
                <input 
                    name='terms'
                    type='checkbox'
                />
            </form>
        </div>
    )
}

export default SignUp
