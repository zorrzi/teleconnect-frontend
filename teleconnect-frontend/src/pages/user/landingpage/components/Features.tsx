import styled from "styled-components";

export const Features = () => {
    return (
        <FeaturesContainer>
            <FeatureCard>
                <Icon src="/internet.png" alt="Ícone Fibra" />
                <Text>Internet de melhor qualidade e mais veloz</Text>
            </FeatureCard>
            <FeatureCard>
                <Icon src="/mobile.png" alt="Ícone Telefone Móvel" />
                <Text>A melhor rede móvel, implementada com o MVNO</Text>
            </FeatureCard>
            <FeatureCard>
                <Icon src="/phone.png" alt="Ícone Telefone Fixo" />
                <Text>Não tenha preocupações com a bateria do celular</Text>
            </FeatureCard>
        </FeaturesContainer>
    );
};

const FeaturesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px;
`;

const FeatureCard = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 250px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.img`
    width: 50px;
`;

const Text = styled.p`
    margin-top: 10px;
    font-size: 1rem;
    color: #333;
`;
