import React from 'react';
import Navbar from './Navbar';

const Layout = (children) => {
    return (
        <React.Fragment>
            <div className='container'>
                <Navbar>
                    {children}
                </Navbar>
            </div>

        </React.Fragment>
    )
}

export default Layout;