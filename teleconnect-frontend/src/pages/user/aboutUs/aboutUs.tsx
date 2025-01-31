import styled from "styled-components";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer"; // Importando o Footer

export const SobreNos = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Imagem Principal */}
      <Banner>
        <img src="/sobrenos.jpg" alt="Sobre Nós - Teleconnect" />
      </Banner>

      <Container>
        {/* Texto Sobre a Empresa */}
        <TextSection>
          <h2>Sobre a Teleconnect</h2>
          <p>
            A <strong>Teleconnect</strong> é uma <strong>MVNO (Operadora Móvel Virtual)</strong> autorizada
            para fornecer serviços de telecomunicações em todo o Brasil. Nossa empresa atua no setor de telecomunicações 
            com foco em oferecer **planos móveis, internet de fibra óptica e telefonia fixa** de alta qualidade para clientes 
            residenciais e empresariais.
          </p>
          <p>
            Fundada por <strong>Renato Santana</strong>, a Teleconnect iniciou suas operações atendendo pequenas empresas 
            e clientes residenciais. No entanto, graças à nossa infraestrutura robusta e estratégias de expansão, nos 
            tornamos uma referência no mercado, garantindo conectividade estável e de alta velocidade.
          </p>
          <p>
            Como uma MVNO, utilizamos a infraestrutura de grandes operadoras para fornecer serviços móveis com a mesma 
            qualidade e cobertura, mas com atendimento personalizado e pacotes mais flexíveis para atender às necessidades 
            de nossos clientes.
          </p>
          <p>
            Nosso compromisso é **garantir inovação, acessibilidade e excelência no atendimento**, sempre buscando novas 
            formas de entregar conectividade de forma eficiente e segura.
          </p>
        </TextSection>

        {/* Valores da Empresa */}
        <ValuesSection>
          <h2>Nossos Valores</h2>
          <CardsContainer>
            <Card>
              <h3>Inovação</h3>
              <p>
                Utilizamos tecnologia avançada e análise de dados para oferecer um serviço de ponta.
              </p>
            </Card>

            <Card>
              <h3>Excelência no Atendimento</h3>
              <p>
                Garantimos suporte rápido e eficaz, colocando o cliente no centro de nossas decisões.
              </p>
            </Card>

            <Card>
              <h3>Compromisso com a Qualidade</h3>
              <p>
                Investimos continuamente em infraestrutura para garantir estabilidade e velocidade de conexão.
              </p>
            </Card>

            <Card>
              <h3>Expansão Estratégica</h3>
              <p>
                Analisamos constantemente o mercado para levar nossos serviços a novas regiões.
              </p>
            </Card>
          </CardsContainer>
        </ValuesSection>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

/* ======= Estilos ======= */
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 4rem;
`;

/* Banner */
const Banner = styled.div`
  width: 100%;
  height: 60vh; /* Ocupa toda a altura da tela */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra toda a tela */
  }
`;

/* Seção de Texto */
const TextSection = styled.div`
  margin-top: 2rem;
  text-align: left;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 2rem;
    color: #30bbb3;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

/* Seção de Valores */
const ValuesSection = styled.div`
  margin-top: 3rem;

  h2 {
    font-size: 2rem;
    color: #30bbb3;;
    margin-bottom: 1.5rem;
  }
`;

/* Cards dos Valores */
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;

  h3 {
    font-size: 1.4rem;
    color: #30bbb3;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;
