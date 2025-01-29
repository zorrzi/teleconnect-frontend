import styled from "styled-components";

export const Offers = () => {
    return (
        <OffersContainer>
            <Title>Ofertas Especiais</Title>
            <OfferCards>
                <OfferCard>
                    <PlanTitle>Básico</PlanTitle>
                    <Price>$29</Price>
                    <PerMonth>Por mês</PerMonth>
                    <Bonus>+ GloboPlay</Bonus>
                    <Features>
                        <li>500 MB de Fibra</li>
                        <li>50 GB de celular</li>
                    </Features>
                    <SubscribeButton>Assine Já</SubscribeButton>
                </OfferCard>
                <OfferCard>
                    <PlanTitle>Premium</PlanTitle>
                    <Price>$39</Price>
                    <PerMonth>Por mês</PerMonth>
                    <Bonus>+ GloboPlay</Bonus>
                    <Features>
                        <li>500 MB de Fibra</li>
                        <li>50 GB de celular</li>
                    </Features>
                    <SubscribeButton>Assine Já</SubscribeButton>
                </OfferCard>
            </OfferCards>
        </OffersContainer>
    );
};

const OffersContainer = styled.div`
    text-align: center;
    padding: 50px;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
`;

const OfferCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;

const OfferCard = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
`;

const PlanTitle = styled.h3`
    font-size: 1.5rem;
`;

const Price = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #2563eb;
`;

const PerMonth = styled.p`
    font-size: 1rem;
    color: #555;
`;

const Bonus = styled.p`
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Features = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
`;

const SubscribeButton = styled.button`
    background: #ff9900;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #e68a00;
    }
`;
