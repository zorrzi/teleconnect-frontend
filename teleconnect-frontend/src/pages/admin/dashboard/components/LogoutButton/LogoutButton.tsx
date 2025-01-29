import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutAdmin } from './FetchLogout';
import styled from "styled-components";
import toast from "react-hot-toast";
import { SignOut } from "@phosphor-icons/react";

export const LogoutButton: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {

        const isLoggedOut = await LogoutAdmin();
        if (isLoggedOut) {
            toast.success("Logout realizado com sucesso!");
            navigate("/admin/login");
        } else {
            toast.error("Erro ao fazer logout. Tente novamente.");
        }
    };

    return (
        <StyledButton onClick={handleLogout}>
            <IconWrapper>
                <SignOut size={24} weight="bold" />
            </IconWrapper>
            <span>Logout</span>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80%; /* Ocupa toda a largura do menu */
    padding: 12px;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #d32f2f;
        color: #fff;
        transform: scale(1.05);
    }

    span {
        font-family: 'Roboto', sans-serif; /* Certifique-se de usar a mesma fonte */
    }
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;
