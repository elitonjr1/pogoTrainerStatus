import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Header from './header';
import Footer from './footer';
import { Height } from '@mui/icons-material';

const Layout = ({ children }) => {
    return (
        <div>
            <Header>POGONit Status</Header>            
            <Main>{children}</Main>            
            <Footer>All rights reserved for POGONit</Footer>            
        </div>
    );
}

export default Layout;


const Main = styled.main`
height: 100%;
`