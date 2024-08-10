import { Router } from "@reach/router";
import Home from './home';
import Layout from "../../components/layout";
import "./../../config/plugins";

const Portal = () => {
    return (
        <Layout>
            <Router>
                <Home path="/" />
            </Router>
        </Layout>

    );
}

export default Portal;