import React from 'react';
import Navbar from "../../Page/Shared/Navbar/Navbar";
import Footer from "../../Page/Shared/Footer/Footer";
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;