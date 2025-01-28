import styled from 'styled-components';

export const SignupImage = () => {
    return (
        <ImageContainer>
            <Image src="/login.svg" alt="Ilustração de comunicação" />
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    max-width: 75%; /* Permite que a imagem ocupe o máximo do espaço disponível */
    height: 80%; /* Define uma altura maior para destacar a imagem */
    object-fit: contain; /* Garante que a imagem seja redimensionada proporcionalmente */
    border-radius: 8px;
`;
