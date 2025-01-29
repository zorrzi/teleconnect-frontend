import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/menu';
import styled from 'styled-components';
import { Home } from './nested/home/homepage';
import { CreatePackage } from './nested/home/createpackage';
import { Catalog } from './nested/home/catalog';

export const Dashboard = () => {
    return (
        <DashboardStyles>
            <Menu />
            <MainContent>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="new-package" element={<CreatePackage />} />
                    <Route path="catalog" element={<Catalog />} />
                </Routes>
            </MainContent>
        </DashboardStyles>
    );
};

const DashboardStyles = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr; /* Barra lateral fixa (200px) + Conteúdo (1fr) */
    height: 100vh; /* Altura total da tela */
    width: 100vw; /* Largura total da tela */
    background-color: #f9f9f9; /* Cor de fundo geral */
`;

const MainContent = styled.div`
    background-color: #f0f0f0; /* Cor de fundo do conteúdo principal */
    padding: 20px; /* Espaçamento interno */
    overflow-y: auto; /* Adiciona scroll vertical, se necessário */
    border-left: 1px solid #ddd; /* Linha separadora entre a barra lateral e o conteúdo */
    display: flex;
    flex-direction: column;
`;
