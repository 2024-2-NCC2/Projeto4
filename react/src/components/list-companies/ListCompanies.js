import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Navbar from "../home/Navbar";
import bg from '../../public/bg-graphic.png'
import axios from 'axios';

export default function ListCompanies() {
    const [ongs, setOngs] = useState([]);

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3001/list-companies")
            .then((response) => {
                setOngs(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar empresas:", error);
            });
    }, []);
    console.log(ongs)
    return (
        <ListContainer>
            <Navbar name={true} />
            <MainContent>
                <H1>Selecione uma ONG abaixo, entre em contato e faça a diferença!</H1>
                <Cards>
                    {ongs.length > 0 ? (
                        ongs.map((ong) => (
                            <Card key={ong.id}>
                                <h2>{ong.name}</h2>
                                <h1>Contato: <p>{ong.contact}</p></h1>
                                <h1>CNPJ: <p>{ong.cnpj}</p></h1>
                                <h1>ODS Atendida: <p>{ong.ods_name}</p></h1>
                                <h1>Setor: <p>{ong.company_sector}</p></h1>
                            </Card>
                        ))
                    ) : (
                        <p>Carregando ONGs...</p>
                    )}
                </Cards>
            </MainContent>
        </ListContainer>
    )
}

const Card = styled.div`
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    
    h2 {
        color: #1679AB;
        padding: 16px;
    }

    h1 {
        font-size: 16px;
        color: #1679AB;
        display: flex;
        align-items: center;
        font-weigth: 700;
        gap: 8px;
    }
    
    p {
        text-align: left;
        color: black;
        font-weigth: 300;
        font-size: 14px;
    }
`;

const ListContainer = styled.div`
    min-height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
`

const MainContent = styled.div`
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    margin-bottom: 52px;
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
`
