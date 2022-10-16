import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <nav>
                <Link to='/login' className='text-decoration-none mx-2 fw-bold'>Login</Link>
                <Link to='/register' className='text-decoration-none mx-2 fw-bold'>Register</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;