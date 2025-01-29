import styled from "styled-components";

export const Hero = () => {
    return (
        <HeroContainer>
            <TextContent>
                <Title>Conectando possibilidades, transformando o futuro</Title>
                <OfferBox>700 MB Fibra + 50 GB Celular</OfferBox>
            </TextContent>
            <HeroImage src="/hero-image.png" alt="Mulher usando laptop" />
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 10%;
    background: linear-gradient(to right, #1e3a8a, #2563eb);
    color: white;
`;

const TextContent = styled.div`
    max-width: 50%;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
`;

const OfferBox = styled.div`
    background: white;
    color: #1e3a8a;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 20px;
    display: inline-block;
    border-radius: 8px;
`;

const HeroImage = styled.img`
    width: 400px;
    border-radius: 10px;
`;
