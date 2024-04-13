import { useEffect, useState } from "react";
import { Container, Input, Button, Label } from "reactstrap";
import styled from "styled-components";

const Stats = () => {

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    useEffect(() => {
        if(form?.m1){
            setForm({

            });
        }
    }, [form.m1]);

    return (
        <StatsContainer>
            <Title>Preencha suas informações.</Title>
            <StatsForm>
                <StatsLabel>Medalhas</StatsLabel>
                <FormGroup2>
                    <StatsGroup>
                        <Label>m1</Label>
                        <StatsInput for="m1" name="m1" onChange={handleChange} bsSize="sm" type="number"/>   
                    </StatsGroup>                 
                    <StatsGroup>
                        <Label>m1</Label>
                        <StatsInput bsSize="sm" type="number"/>                    
                    </StatsGroup>
                    <StatsGroup>
                        <Label>m1</Label>
                        <StatsInput bsSize="sm" type="number"/>
                    </StatsGroup>
                </FormGroup2>

                <StatsLabel>Medalhas de tipagem</StatsLabel>
                <FormGroup>
                <Label>t1</Label>
                    <StatsInput bsSize="sm" type="number"/>                    
                    <Label>t1</Label>
                    <StatsInput bsSize="sm" type="number"/>                    
                    <Label>t1</Label>
                    <StatsInput bsSize="sm" type="number"/>
                </FormGroup>

                <FormGroup>
                    <StatsLabel>etc</StatsLabel>
                </FormGroup>
                <Button color="primary" className="sm">Salvar Informações</Button>
                {JSON.stringify(form)}
            </StatsForm>
        </StatsContainer>
    );
};

export default Stats;


const StatsContainer = styled(Container)`
    box-shadow: 0 0 24px #cccccc, 0 44px 74px rgb(27 22 66 / 6%);
    background-color: #fff;
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

const FormGroup2 = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 5px 0 20px 0;    
`;

const StatsLabel = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    color: #ec6608;

`

const StatsInput = styled(Input)`    
`

const StatsGroup = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`