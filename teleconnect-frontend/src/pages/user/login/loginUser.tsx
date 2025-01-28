import styled from 'styled-components';
import { LoginForm } from './components/loginFormUser';
import { LoginImage } from './components/loginimage';

export const Login = () => {
    return (
        <LoginContainer>
            <LogoWrapper>
                <Logo src="/logo.png" alt="Logo Teleconnect" />
            </LogoWrapper>
            <FormWrapper>
                <LoginForm />
            </FormWrapper>
            <ImageWrapper>
                <LoginImage />
            </ImageWrapper>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    position: relative;
    height: 100vh; /* Ocupa toda a altura da tela */
    display: flex;
    background-color: #f9f9f9;

    @media (max-width: 768px) {
        flex-direction: column; /* Empilha os elementos em telas menores */
    }
`;

const LogoWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10; /* Garante que a logo fique acima de outros elementos */
`;

const Logo = styled.img`
    width: 200px; /* Aumenta o tamanho da logo */
    height: auto;

    @media (max-width: 768px) {
        width: 150px; /* Ajusta o tamanho em telas menores */
    }
`;


const FormWrapper = styled.div`
    flex: 1; /* O formulário ocupa 50% */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 24px;
`;

const ImageWrapper = styled.div`
    flex: 1; /* A imagem ocupa 50% */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
`;
