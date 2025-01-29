import { menuItems } from "../constants/menu-items";
import styled from "styled-components";
import { LogoutButton } from "./LogoutButton/LogoutButton";

export const Menu = () => {
    return (
        <MenuStyles>
            <Logo>
                <img src="/logo.png" alt="Logo Teleconnect" />
            </Logo>
            <MenuList>
                {menuItems.map((item, index) => {
                    return (
                        <MenuItem key={index} href={item.href}>
                            <IconWrapper>{item.icon}</IconWrapper>
                            <Label>{item.label}</Label>
                        </MenuItem>
                    );
                })}
            </MenuList>
            
                <LogoutButton />
            
        </MenuStyles>
    );
};


const MenuStyles = styled.div`
    grid-column: 1; /* Define que o Menu ocupa a primeira coluna do grid */
    grid-row: 1; /* Define que o Menu ocupa toda a linha */
    background-color: #f9f9f9;
    padding: 20px;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%; /* Garante que o menu ocupe o espaço da coluna */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para separação visual */
`;


const Logo = styled.div`
    width: 100%; /* Ocupa toda a largura disponível do container */
    display: flex;

    align-items: center; /* Centraliza a logo verticalmente */
    margin-bottom: 20px; /* Espaçamento inferior */
    
    img {
        max-width: 150px; /* Limite máximo de largura */
        height: auto; /* Mantém a proporção da imagem */
        object-fit: contain; /* Garante que a imagem não seja cortada */
    }
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 80%;
`;

const MenuItem = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #30BBB3; /* Cor de fundo ao passar o mouse */
        color: #fff;
        transform: scale(1.05);
    }
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px; /* Tamanho fixo para o ícone */
    height: 24px; /* Tamanho fixo para o ícone */
    font-size: 1.5rem;
    color: inherit;
`;

const Label = styled.span`
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
