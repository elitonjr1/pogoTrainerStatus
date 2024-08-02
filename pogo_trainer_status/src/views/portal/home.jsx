import React from 'react';
import Banner from '../../components/banner';
import { Container } from 'reactstrap';
import Stats from '../../components/stats';

const Home = () => {
    return (
        <Container>
            <Banner />
            <Stats />
        </Container>
    )
}

export default Home;