import styled from "styled-components";
import { MapPin, RocketLaunch } from "phosphor-react";

export const Features = () => {
    return (
        <FeaturesContainer>
            <FeatureBox>
                <FeatureIcon>
                    <PlusIcon>+</PlusIcon>
                    <MapPin size={24} weight="bold" />
                </FeatureIcon>
                <h3>Perto de você!</h3>
                <p>
                    Estamos presentes em <strong>Belo Horizonte, Campinas, Juíz de Fora, Niterói, Petrópolis, Rio de Janeiro, Santos, São Paulo, Serra, Uberlândia, Vila Velha, Vitória.</strong>
                </p>
            </FeatureBox>

            <FeatureBox>
                <FeatureIcon>
                    <PlusIcon>+</PlusIcon>
                    <RocketLaunch size={24} weight="bold" />
                </FeatureIcon>
                <h3>Velocidade</h3>
                <p>
                    Experimente a máxima velocidade com nossos produtos! Roteadores **5G** de última geração garantem uma conexão estável, rápida e de longo alcance. Assista vídeos em **4K**, jogue online e conecte todos os seus dispositivos com facilidade.
                </p>
            </FeatureBox>
        </FeaturesContainer>
    );
};

/* ======= Styled Components ======= */

/* Container principal */
const FeaturesContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 2rem;
    background: url("/caracteristicas.png") no-repeat center center/cover;
    color: white;
    text-align: left;

    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
    }
`;

/* Box de cada característica */
const FeatureBox = styled.div`
    max-width: 450px;
    padding: 20px;
    
    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        opacity: 0.9;
    }
`;

/* Ícone de cada característica */
const FeatureIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

/* Ícone "+" personalizado */
const PlusIcon = styled.span`
    font-size: 2rem;
    color: #00A9A5;
`;
