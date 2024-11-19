import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import AboutUsSection from "./AboutUsSection";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
    const UnionAllBoxes = styled.div`     
        display: flex;
        flex-direction: column;
    `
    const navigate = useNavigate();
    const [name, setName] = useState('');
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001').then(res => {
            if (res.data.valid) {
                setName(res.data.email);
            } else {
                navigate('/login')
            }
        }).catch(err => console.log(err))
    }, [])
    return (
        <UnionAllBoxes>
            <FirstSection name={name} />
            <SecondSection />
            <ThirdSection />
            <AboutUsSection />
        </UnionAllBoxes>
    );
}

export default Home;
