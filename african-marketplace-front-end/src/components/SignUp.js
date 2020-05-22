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
                {/* Email */}
                <label htmlFor='email'>Email</label>
                <input 
                    name='email'
                    type='text'
                />
                {/* Password */}
                <label htmlFor='password'>Password</label>
                <input 
                    name='password'
                    type='text'
                />
                {/* Location - city */}
                <label htmlFor='location'>Location</label>
                <input 
                    name='location'
                    type='text'
                />
            </form>
        </div>
    )
}

export default SignUp
