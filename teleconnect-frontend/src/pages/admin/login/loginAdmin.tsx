import styled from "styled-components";
import { LoginFormDirector } from "./components/loginFormAdmin";
import { LoginImage } from "./components/loginImage";
import { Link } from "react-router-dom";

export const LoginAdmin = () => {
    return (
        <LoginContainer>
            <LogoWrapper>
                <Link to="/">
                    <Logo src="/logo.png" alt="Logo Teleconnect" />
                </Link>
            </LogoWrapper>
            <FormWrapper>
                <LoginFormDirector />
            </FormWrapper>
            <ImageWrapper>
                <LoginImage />
            </ImageWrapper>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    height: 100vh;
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
    z-index: 10;

    a {
        text-decoration: none;
    }
`;

const Logo = styled.img`
    width: 150px;
    height: auto;
    cursor: pointer; /* Adiciona um cursor de ponteiro para indicar que é clicável */

    @media (max-width: 768px) {
        width: 120px; /* Ajusta o tamanho em telas menores */
    }
`;

const FormWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 24px;
`;

const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
`;
