import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { WifiHigh, Phone, DeviceTabletSpeaker, Briefcase } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);
  const [isvisible, setisvisible] = useState(false);

  // Ativa a animação quando o componente entra na tela
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setisvisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ServicesContainer
      id="services-section"
      $isvisible={isvisible}
      $hovered={hovered}
    >
      <Title>Conecte-se ao futuro com a qualidade dos nossos serviços</Title>
      <ServicesWrapper $hovered={hovered}>
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            $hovered={hovered === index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(service.link)}
          >
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

/* ======= Dados dos Serviços ======= */
const serviceData = [
  {
    title: "Internet Fibra",
    description: "Internet de melhor qualidade e mais veloz",
    icon: <WifiHigh size={48} weight="bold" />,
    link: "/user/produtos/pessoa/internet-fibra",
  },
  {
    title: "Telefonia Móvel",
    description: "A melhor rede móvel, implementada com o MVNO",
    icon: <Phone size={48} weight="bold" />,
    link: "/user/produtos/pessoa/pre-pago",
  },
  {
    title: "Telefonia Fixa",
    description: "Não tenha preocupações com a bateria do seu celular",
    icon: <DeviceTabletSpeaker size={48} weight="bold" />,
    link: "/user/produtos/pessoa/telefone-fixo",
  },
  {
    title: "Pacotes Corporativos",
    description: "Leve a internet para dentro da sua empresa",
    icon: <Briefcase size={48} weight="bold" />,
    link: "/user/produtos/empresa/fibra",
  },
];

/* ======= Animação de Entrada ======= */
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/**
 * Use `$isvisible` e `$hovered` para que não
 * sejam enviados como atributos ao DOM.
 */
const ServicesContainer = styled.section<{
  $isvisible: boolean;
  $hovered: number | null;
}>`
  text-align: center;
  padding: 3rem 2rem;
  background: #f7f7f7;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;

  ${({ $isvisible }) =>
    $isvisible &&
    css`
      animation: ${fadeIn} 1s ease-in-out;
    `}
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
`;

const ServicesWrapper = styled.div<{ $hovered: number | null }>`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  ${({ $hovered }) =>
    $hovered !== null &&
    css`
      & > div:not(:nth-child(${$hovered + 1})) {
        opacity: 0.4;
      }
    `}
`;

const ServiceCard = styled.div<{ $hovered: boolean }>`
  background: white;
  padding: 1.5rem;
  width: 250px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconWrapper = styled.div`
  color: #00a9a5;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  opacity: 0.9;
`;
