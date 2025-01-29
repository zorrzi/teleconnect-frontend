import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa"; // Ícones de usuário e hambúrguer
import { IoChevronDownOutline } from "react-icons/io5"; // Ícone de dropdown

export const Header = () => {
    const [activeTab, setActiveTab] = useState("Para Você");
    const [menuOpen, setMenuOpen] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const storedName = localStorage.getItem("user_name");
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    return (
        <>
            <TopBar>
                <Tab active={activeTab === "Para Você"} onClick={() => setActiveTab("Para Você")}>
                    Para Você
                </Tab>
                <Tab active={activeTab === "Para Empresas"} onClick={() => setActiveTab("Para Empresas")}>
                    Para Empresas
                </Tab>
            </TopBar>

            {/* Header Principal */}
            <HeaderContainer>
                <Logo>
                    <Link to="/">
                        <img src="/logo.png" alt="Teleconnect Logo" />
                    </Link>
                </Logo>

                {/* Ícone do Menu Hambúrguer para telas pequenas */}
                <Hamburger onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir Menu">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </Hamburger>

                {/* Menu de Navegação */}
                <Nav menuOpen={menuOpen}>
                    <Dropdown>
                        <DropdownButton>
                            Home <IoChevronDownOutline />
                        </DropdownButton>
                        <DropdownContent>
                            <Link to="/">Início</Link>
                            <Link to="/sobre">Sobre Nós</Link>
                            <Link to="/contato">Contato</Link>
                        </DropdownContent>
                    </Dropdown>
                    <Dropdown>
                        <DropdownButton>
                            Celular <IoChevronDownOutline />
                        </DropdownButton>
                        <DropdownContent>
                            <Link to="/planos-celular">Planos</Link>
                            <Link to="/cobertura">Cobertura</Link>
                        </DropdownContent>
                    </Dropdown>
                    <Dropdown>
                        <DropdownButton>
                            Casa <IoChevronDownOutline />
                        </DropdownButton>
                        <DropdownContent>
                            <Link to="/internet-fibra">Internet Fibra</Link>
                            <Link to="/telefone-fixo">Telefone Fixo</Link>
                        </DropdownContent>
                    </Dropdown>

                    {/* Login dentro do menu para telas pequenas */}
                    <MobileLogin>
                        {userName ? (
                            <span>Bem-vindo, {userName}!</span>
                        ) : (
                            <Link to="/user/login">
                                <FaUser /> Login
                            </Link>
                        )}
                    </MobileLogin>
                </Nav>

                {/* Login para telas grandes */}
                <LoginSection>
                    {userName ? (
                        <span>Bem-vindo, {userName}!</span>
                    ) : (
                        <Link to="/user/login">
                            <FaUser /> Login
                        </Link>
                    )}
                </LoginSection>
            </HeaderContainer>
        </>
    );
};



/* Paleta de Cores */
const colors = {
    primary: "#449598",
    lightBlue: "#7fc1ca",
    gray: "#555",
    bgLight: "#f5f5f5",
    borderGray: "#ddd",
};

/* Barra Superior */
const TopBar = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.3rem 1rem;
    background: ${colors.bgLight};
    font-size: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Tab = styled.button<{ active: boolean }>`
    background: none;
    border: none;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    color: ${(props) => (props.active ? colors.primary : colors.gray)};
    cursor: pointer;
    padding: 4px 12px;
    border-bottom: ${(props) => (props.active ? `2px solid ${colors.primary}` : "none")};

    &:hover {
        color: ${colors.primary};
    }
`;

/* Header Principal */
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    position: relative;
`;

/* Logo */
const Logo = styled.div`
    img {
        width: 150px;
        height: auto;
    }

    @media (max-width: 720px) {
        img {
            width: 120px;
        }
    }
`;

/* Menu Hambúrguer */
const Hamburger = styled.button`
    display: none;
    font-size: 1.8rem;
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 720px) {
        display: block;
        position: absolute;
        right: 2rem;
        top: 1rem;
    }
`;

/* Menu de Navegação */
const Nav = styled.nav<{ menuOpen: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-left: 20%;

    @media (max-width: 720px) {
        display: ${(props) => (props.menuOpen ? "flex" : "none")};
        flex-direction: column;
        position: absolute;
        top: 3.5rem;
        left: 0;
        width: 100%;
        background: white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        padding: 15px;
        z-index: 100;
        transition: all 0.3s ease-in-out;
    }
`;

/* ===== Dropdown ===== */
const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    background: none;
    border: none;
    font-size: 0.85rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${colors.gray};

    &:hover {
        color: ${colors.primary};
    }
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background: white;
    min-width: 150px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    border-radius: 5px;
    border: 1px solid ${colors.borderGray};

    a {
        display: block;
        padding: 10px;
        text-decoration: none;
        color: ${colors.gray};
        font-size: 0.85rem;

        &:hover {
            background: ${colors.bgLight};
        }
    }

    ${Dropdown}:hover & {
        display: block;
    }
`;

/* Login para telas grandes */
const LoginSection = styled.div`
    a {
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${colors.gray};
        text-decoration: none;
        font-weight: bold;

        &:hover {
            color: ${colors.primary};
        }
    }

    @media (max-width: 720px) {
        display: none;
    }
`;

/* Login dentro do menu para telas menores */
const MobileLogin = styled.div`
    display: none;

    @media (max-width: 720px) {
        display: block;
        text-align: center;
        font-weight: bold;

        a {
            color: ${colors.primary};
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
