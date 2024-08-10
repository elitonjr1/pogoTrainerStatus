import styled from "styled-components";

import BannerImg from "../../assets/imgs/toppng.com-inoy-pokemon-go-pokemon-go-logo-transparent-689x183.png"
const Banner = () => {
    return (
        <BannerContainer>
            <Title>
                <p>
                    Acompanhe sua evolução e seja o <span>melhor treinador</span> da comunidade!
                </p>
            </Title>
           <ImgBanner src={BannerImg}></ImgBanner>
        </BannerContainer>
    );
};

export default Banner;

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
`

const Title = styled.div`
    flex: 1;
    font-size: 50px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    color: #00305a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
        color: red;
    }

`;

const ImgBanner = styled.img`
    height: 150px;
    flex: 1;
    margin: 50px auto 50px auto;
`