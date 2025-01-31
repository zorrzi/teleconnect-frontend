import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getUserPackages } from "./api/MeusPlanos"; // <-- importa a função
import styled from "styled-components";

interface PackageData {
  id: string;
  price?: number;
  fiber?: string;
  mobile_service?: string;
  fixed_phone?: boolean;
  is_b2b?: boolean;
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
      <h2>Meus Planos</h2>
      <CardList>
        {packages.map((pkg) => (
          <Card key={pkg.id}>
            <h3>{pkg.fiber || pkg.mobile_service || "Pacote"}</h3>
            {pkg.price !== undefined && <p>R$ {pkg.price.toFixed(2)}</p>}
            {pkg.fixed_phone && <p>Telefone Fixo</p>}
            {pkg.is_b2b && <p>É B2B</p>}
          </Card>
        ))}
      </CardList>
    </Container>
  );
}

/* ======= Styled Components ======= */

const Container = styled.div`
  padding: 2rem;
`;

const CardList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem;
  min-width: 200px;
`;
