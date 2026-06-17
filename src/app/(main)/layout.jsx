
import Navbar from '@/Components/Shared/Navbar/Navbar';
import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>

            <main>  {children}</main>
        </div>
    );
};

export default Mainlayout;