import styled from 'styled-components'
import bg from '../../public/bg-login.png'
import RegisterCompanyForm from './RegisterCompanyForm';
import Navbar from '../home/Navbar';

function RegisterCompany() {
    const RegisterContainer = styled.div`
        height: 100vh;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        
        font-size: 16px;
        font-family: "Outfit", sans-serif;
    `

    return (
        <RegisterContainer>
            <Navbar name={true} />
            <RegisterCompanyForm></RegisterCompanyForm>
        </RegisterContainer>
    )
}

export default RegisterCompany;