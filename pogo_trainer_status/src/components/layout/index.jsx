import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div>

            <Header>POGONit Status</Header>            
            <main>{children}</main>            
            <Footer>All rights reserved for POGONit</Footer>            
        </div>
    );
}

export default Layout;