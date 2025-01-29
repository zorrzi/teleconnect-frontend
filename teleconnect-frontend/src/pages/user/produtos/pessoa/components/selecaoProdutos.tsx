import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const SelecaoProdutos = () => {
    const location = useLocation(); // 📌 Para saber qual aba está ativa

    return (
        <Selector>
            {tabs.map((tab) => (
                <Tab key={tab.path} to={tab.path}>
                    {tab.label}
                    {location.pathname.includes(tab.path) && (
                        <ActiveIndicator
                            layoutId="activeTab" // 🔥 Faz a animação deslizar suavemente
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </Tab>
            ))}
        </Selector>
    );
};

// 📌 Tabs disponíveis
const tabs = [
    { path: "pre-pago", label: "Pré Pago" },
    { path: "pos-pago", label: "Pós Pago" },
    { path: "internet-fibra", label: "Internet Fibra" },
    { path: "telefone-fixo", label: "Telefone Fixo" },
];

/* ======= Styled Components ======= */

const Selector = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
    border-bottom: 2px solid #ddd;
    position: relative;
`;

const Tab = styled(NavLink)`
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: #666;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
        color: #3CBBB4;
    }

    &.active {
        color: #3CBBB4;
    }
`;

/* 🔥 Barra deslizante animada */
const ActiveIndicator = styled(motion.div)`
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #3CBBB4;
    border-radius: 4px;
`;

