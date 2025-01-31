import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getUserPackages } from "../api/FetchMyPlans";
import styled from "styled-components";
import { CheckCircle } from "phosphor-react";

interface PackageData {
  id: string;
  fiber?: string; // Tipo de fibra
  fiber_amount?: number; // Quantidade de MB para fibra
  mobile_service?: string; // Pré-pago ou Pós-pago
  mobile_service_amount?: number; // Quantidade de GB para serviço móvel
  fixed_phone?: boolean; // Telefone fixo incluído
  streaming_partnership?: string; // Parceria de streaming
  is_b2b?: boolean; // Se é um plano B2B
}

export function MeusPlanos() {
  const [packages, setPackages] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getUserPackages();
        setPackages(result);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (packages.length === 0) {
    return <p>Você ainda não possui pacotes.</p>;
  }

  return (
    <Container>
      <Titulo>Meus Planos</Titulo>
      <CardList>
        {packages.map((pkg) => (
          <Card key={pkg.id}>
            <Header>
              <StatusBadge>Plano Ativo</StatusBadge>
              <PackageType>
                {pkg.mobile_service
                  ? "Serviço Móvel"
                  : pkg.fiber
                  ? "Fibra"
                  : "Telefone Fixo"}
              </PackageType>
            </Header>
            <Content>
              <Details>
                {pkg.streaming_partnership && (
                  <Feature>
                    <CheckCircle size={20} />
                    Parceria: {pkg.streaming_partnership}
                  </Feature>
                )}
                {pkg.fiber_amount && (
                  <Feature>
                    <CheckCircle size={20} />
                    {pkg.fiber_amount} MB de Fibra
                  </Feature>
                )}
                {pkg.mobile_service && (
                  <>
                    <Feature>
                      <CheckCircle size={20} />
                      {pkg.mobile_service_amount} GB de Serviço Móvel
                    </Feature>
                    <Feature>
                      <CheckCircle size={20} />
                      {pkg.mobile_service}
                    </Feature>
                  </>
                )}
                {pkg.fixed_phone && (
                  <Feature>
                    <CheckCircle size={20} />
                    Minutos ilimitados para o Brasil inteiro
                  </Feature>
                )}
                {pkg.is_b2b && (
                  <Feature>
                    <CheckCircle size={20} />
                    Plano Corporativo (B2B)
                  </Feature>
                )}
              </Details>
            </Content>
            <Footer>
            </Footer>
          </Card>
        ))}
      </CardList>
    </Container>
  );
}

/* ======= Styled Components ======= */

const Titulo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #003b5c;
  margin-bottom: 1.5rem;
  align-self: center;
`;

const Container = styled.div`
  padding: 2rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  margin-top: 2rem;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  transition: transform 0.2s ease-in-out;

`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const StatusBadge = styled.div`
  background-color: #ffa14a;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
`;

const PackageType = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #003b5c;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #3cbbb4;
  gap: 0.5rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: #003b5c;
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #e74c3c;
  }
`;
