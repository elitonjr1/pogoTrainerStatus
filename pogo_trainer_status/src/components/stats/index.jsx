import { Container, Input } from "reactstrap";
import styled from "styled-components";

const Stats = () => {
    return (
        <StatsContainer>
            <Title>Preencha suas informações.</Title>
            <StatsForm>
                <Label>Medalhas</Label>
                <FormGroup>
                    <Label>m1</Label>
                    <StatsInput bsSize="sm" type="number"/>                    
                    <Label>m1</Label>
                    <StatsInput bsSize="sm" type="number"/>                    
                    <Label>m1</Label>
                    <StatsInput bsSize="sm" type="number"/>
                </FormGroup>

                <Label>Medalhas de tipagem</Label>
                <FormGroup>
                <Label>t1</Label>
                    <StatsInput bsSize="sm" type="number"/>                    
                    <Label>t1</Label>
                    <StatsInput bsSize="sm" type="number"/>                    
                    <Label>t1</Label>
                    <StatsInput bsSize="sm" type="number"/>
                </FormGroup>

                <FormGroup>
                    <Label>etc</Label>
                </FormGroup>
            </StatsForm>
        </StatsContainer>
    );
};

export default Stats;


const StatsContainer = styled(Container)`
    box-shadow: 0 0 24px #cccccc, 0 44px 74px rgb(27 22 66 / 6%);
    backgroung-color: #fff;
    padding: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
`
const Title = styled.div`
    font-size: 35px;
    font-family: "Rubik", sans-serif;
    font-weight: 700;
    text-align: center;
    color: #00305a;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px dotted #eee;
`;

const StatsForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 5px 0 20px 0;
    flex-direction: column;
`;

const Label = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    color: #ec6608;

`

const StatsInput = styled(Input)`
    display:block;
    width: 10%;
`