import styled from "styled-components";

export const InternetFibraPage = () => {
    return (
        <Container>
            <Title>Planos Pré Pago</Title>
        </Container>
    );
};

/* ======= Styled Components ======= */
const Container = styled.div`
    padding: 20px;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
`;
