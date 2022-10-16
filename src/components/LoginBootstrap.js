import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootstrap = () => {
    const handleSubmit = event =>{
        event.preventDefult();

        const form = event.target;
        const email = form.email;
        const password = form.password;
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!!</h3>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Your Email" required/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Your Password" required/>
            </div>
            <button type="button" class="btn btn-success">Login</button>
            </form>
            <small><p>New To This Website? Please <Link to='/register' className='text-decoration-none'>Register</Link></p></small>
        </div>
    );
};

export default LoginBootstrap;