import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from "../home/Navbar";
import bg from '../../public/bg-graphic.png';
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
    );
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
        font-size: 18px;

        @media (max-width: 768px) {
            font-size: 16px;
        }

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }

    h1 {
        font-size: 16px;
        color: #1679AB;
        display: flex;
        align-items: center;
        font-weight: 700;
        gap: 8px;

        @media (max-width: 768px) {
            font-size: 14px;
        }

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }

    p {
        text-align: left;
        color: black;
        font-weight: 300;
        font-size: 14px;

        @media (max-width: 768px) {
            font-size: 12px;
        }

        @media (max-width: 480px) {
            font-size: 10px;
        }
    }
`;

const ListContainer = styled.div`
    min-height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    @media (max-width: 1024px) {
        background-position: center;
    }
`;

const MainContent = styled.div`
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 5%;
    }
`;

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    margin-bottom: 52px;
    font-size: 24px;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 40px;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        margin-bottom: 30px;
    }
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;

    @media (max-width: 768px) {
        gap: 12px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 8px;
    }
`;