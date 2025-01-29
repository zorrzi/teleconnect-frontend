import styled from 'styled-components';
import { SignupForm } from './components/signupform';
import { SignupImage } from './components/signupimage';
import { Link } from 'react-router-dom';

export const Signup = () => {
    return (
        <SignupContainer>
            <LogoWrapper>
            <Link to="/">
                    <Logo src="/logo.png" alt="Logo Teleconnect" />
                </Link>
            </LogoWrapper>
            <FormWrapper>
                <SignupForm />
            </FormWrapper>
            <ImageWrapper>
                <SignupImage />
            </ImageWrapper>
        </SignupContainer>
    );
};

const SignupContainer = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    background-color: #f9f9f9;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LogoWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
`;

const Logo = styled.img`
    width: 200px;
    height: auto;

    @media (max-width: 768px) {
        width: 150px;
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
