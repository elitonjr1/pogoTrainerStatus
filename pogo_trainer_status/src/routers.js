import React from "react";
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router"


import Home from "./views/home";
import Layout from "./components/layout/index";
import Views from "./views";

const Page1 = () => <div>Page1</div>
const Login = () => <div>Login</div>
const Sobre = () => <div>Sobre</div>

const Routers = () => {
    return (        
        <Router>
            <Views path="/*"></Views>            
            <Login path="login" />
        </Router>        
    )
}

export default Routers;