import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div className='mx-auto w-full'>
                <Navbar />
                {children}
            </div>

        </React.Fragment>
    )
}

export default Layout;