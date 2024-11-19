import styled from 'styled-components'
import LoginForm from './LoginForm';
import bg from '../../public/bg-login.png'

function Login() {
    const LoginContainer = styled.div`
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
        <LoginContainer>
            <LoginForm></LoginForm>
        </LoginContainer>
    )
}

export default Login;