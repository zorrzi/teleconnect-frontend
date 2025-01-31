// src/components/footer.tsx
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTimes } from "react-icons/fa";
import { FeedbackButton } from "./FeedbackButton/feedbackbutton";
import { submitFeedback } from "./FeedbackButton/FetchCreateFeedback";

export const Footer = () => {
  // Recebe do feedbackButton
  const handleFeedbackSubmit = async (feedbackText: string, stars: number) => {
    try {
      const response = await submitFeedback(feedbackText, stars);
      alert("Feedback enviado com sucesso!");
      console.log("Resposta do servidor:", response);
    } catch (error: any) {
      console.error("Erro ao enviar feedback:", error.message);
      alert("Erro ao enviar feedback: " + error.message);
    }
  };

  return (
    <FooterContainer>
      {/* Seção Esquerda: Texto + Imagem */}
      <LeftSection>
        <p>Conectando possibilidades, transformando o futuro</p>
        <img src="/footer.png" alt="Conectando possibilidades, transformando o futuro" />
      </LeftSection>

      {/* Seção Direita: Links + Redes Sociais */}
      <RightSection>
        {/* Links de navegação */}
        <NavLinks>
          <Link to="/">Home</Link>
          <a href="https://wa.me/5511940491919" target="_blank" rel="noopener noreferrer">
            SAC
          </a>
          <Link to="/sobre">Sobre Nós</Link>
          <Link to="/user/produtos/empresa">Para empresa</Link>
          <Link to="/user/produtos/pessoa">Para você</Link>
          <Link to="/admin/login">Funcionários</Link>
        </NavLinks>

        {/* Botão de Feedback */}
        <FeedbackSection>
          <FeedbackButton onSubmitFeedback={handleFeedbackSubmit} />
        </FeedbackSection>

        {/* Redes Sociais + Logo */}
        <BottomSection>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTimes />
            </a>
          </SocialIcons>
          <Logo>
            <img src="/logo.png" alt="Teleconnect Logo" />
          </Logo>
        </BottomSection>
      </RightSection>
    </FooterContainer>
  );
};

/* ======= Estilos ======= */
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  background: #f7f7f7;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: center;
  width: 50%;

  p {
    padding-left: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
    margin-bottom: 1rem;
  }

  img {
    width: 50%;
    height: auto;
  }

  @media (max-width: 720px) {
    width: 100%;
    p {
      padding-left: 0;
    }
  }

  @media (max-width: 520px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  width: 45%;
  height: 400px;

  @media (max-width: 720px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  max-height: 150px;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: #777;

    &:hover {
      color: #449598;
    }
  }

  @media (max-width: 720px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 2px solid #eee;
  padding-top: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #555;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #449598;
    }
  }
`;

const Logo = styled.div`
  img {
    width: 120px;
    height: auto;
  }
`;

const FeedbackSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;
