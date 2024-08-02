import React from "react";
import ReactDOM from 'react-dom';
import { Router, Link, Redirect } from "@reach/router"
import Login from './views/auth/login';
import Register from './views/auth/register';
import Dashboard from './views/dashboard';
import Views from "./views/portal";
import { isAuth } from "./config/storage";


const PrivateRoute = ({ component : Component, ...rest}) => {
    if(!isAuth()){
        return <Redirect to="/login" noThrow />
    }

    return <Component {...rest} />
}

const Routers = () => {
    return (        
        <Router>
            <Views path="/*"></Views>
            <Login path="/login/*" />
            <Register path="/register/*" />
            <PrivateRoute component={Dashboard} path="/dashboard/*" />
        </Router>        
    )
}

export default Routers;