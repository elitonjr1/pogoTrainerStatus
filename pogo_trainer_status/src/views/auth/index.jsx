import { Router } from "@reach/router";
import Home from './auth';

const Login = () => {
    return (
        <Router>
            <Home path="/" />
        </Router>
    );
}

export default Login;