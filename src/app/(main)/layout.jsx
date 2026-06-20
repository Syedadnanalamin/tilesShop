
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Shared/Navbar/Navbar';
import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <main>  {children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;