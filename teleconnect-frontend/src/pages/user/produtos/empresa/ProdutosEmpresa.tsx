import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

export const ProdutosEmpresa = () => {
    return (
        <>
            <Header />
            <Container>
                <ImageBanner src="/banner-produtos.jpg" alt="Ofertas especiais" />
                <Title>Os melhores planos separados para você</Title>
                <Description>
                    Escolha o plano que mais combina com você e leve junto com ele diversos benefícios.
                </Description>

                {/* Seletor de categorias */}
                {/* Nested de produtos */}
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

/* ======= Styled Components ======= */

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
`;

const ImageBanner = styled.img`
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 10px;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #222;
    margin-top: 1.5rem;
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-top: 0.5rem;
`;
