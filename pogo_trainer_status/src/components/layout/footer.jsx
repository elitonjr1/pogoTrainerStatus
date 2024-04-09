import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            All rights reserved by <span>POGONIT</span>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    border-top: 3px solid #92a9d8;
    background-color: #f54242;
    text-align: center;
    color: #fff;
    padding: 12px 10px;
    font-family: "Roboto", sans-serif;
`; 