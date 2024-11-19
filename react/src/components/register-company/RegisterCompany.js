import styled from 'styled-components'
import bg from '../../public/bg-login.png'
import RegisterCompanyForm from './RegisterCompanyForm';

function RegisterCompany() {
    const RegisterContainer = styled.div`
        height: 100vh;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-family: "Outfit", sans-serif;
    `
    
    return (
        <RegisterContainer>
            <RegisterCompanyForm></RegisterCompanyForm>
        </RegisterContainer>
    )
}

export default RegisterCompany;