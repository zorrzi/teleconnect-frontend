import React from "react";
import styled from "styled-components";
import { LogoutUser } from "./FetchLogout";
import toast from "react-hot-toast";

interface LogoutButtonProps {
  onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const handleLogout = async () => {
    const isLoggedOut = await LogoutUser();
    if (isLoggedOut) {
      toast.success("Logout realizado com sucesso!");
      onLogout(); // Atualiza o estado no Header
    } else {
      toast.error("Erro ao fazer logout. Tente novamente.");
    }
  };

  return <LogoutButtonStyled onClick={handleLogout}>Logout</LogoutButtonStyled>;
};

const LogoutButtonStyled = styled.button`
  background: none;
  border: none;
  padding: 10px;
  text-align: left;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  width: 100%;
  font-family: "Smooch Sans", sans-serif;

  &:hover {
    background-color: #30bbb3;
    color: white;
  }
`;
