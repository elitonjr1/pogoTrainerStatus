import { Router } from "@reach/router";
import Layout from "../components/layout";
import Home from "./home";
import "./../config/plugins";

const Sobre = () => <div>Sobre</div>

const Views = () => {
    return (
        <Layout>
            <Router>
                <Home path="/"></Home>
                <Sobre path="sobre"></Sobre>
            </Router>
        </Layout>
    );

}

export default Views;