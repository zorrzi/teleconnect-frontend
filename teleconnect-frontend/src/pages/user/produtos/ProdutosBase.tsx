import styled from "styled-components";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export const ProdutosBase = () => {
    const location = useLocation();
    const isPessoa = location.pathname.includes("/pessoa");

    return (
        <>
            <Header />
                {/* Renderiza o nested correspondente */}
                <Outlet />
            <Footer />
        </>
    );
};

/* ======= Styled Components ======= */

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #222;
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-top: 0.5rem;
`;

const Selector = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
`;

const Tab = styled(Link)<{ active: boolean }>`
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ active }) => (active ? "#fff" : "#222")};
    background: ${({ active }) => (active ? "#3CBBB4" : "#f5f5f5")};
    border-radius: 8px;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        background: #3CBBB4;
        color: #fff;
    }
`;
