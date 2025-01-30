import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import { SelecaoProdutosEmpresa } from "./components/selecaoServicos";

export const ProdutosEmpresa = () => {
    return (
        <>
            <Container>
                <ImageBanner src="/produtos.png" alt="Ofertas especiais" />
                <Title>Os melhores planos separados para sua empresa</Title>
                <Description>
                    Escolha o plano que mais combina com os valores da sua empresa e leve junto com ele diversos benefícios.
                </Description>

                {/* Seletor de categorias */}
                <SelecaoProdutosEmpresa />

                {/* Nested de produtos */}
                <Outlet />

            </Container>
        </>
    );
};

/* ======= Styled Components ======= */

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageBanner = styled.img`
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 0 0 10px 10px;
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
