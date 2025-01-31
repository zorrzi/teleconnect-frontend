import { SkeletonLoader } from "../../../../landingpage/components/shimmer";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { listPackages, Package } from "../../../api/getPackages";
import { PackageCard } from "../../../components/PackageCard";

export const TelefoneFixoPage = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [shimmerCount, setShimmerCount] = useState(2); // Valor inicial padrão

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data } = await listPackages();
        const filteredPackages = data.filter(
          (pack) => pack.fixed_phone && !pack.is_b2b
        );

        // Define a quantidade de shimmers baseada nos pacotes
        setShimmerCount(filteredPackages.length || 4);

        // Simula atraso no carregamento
        setTimeout(() => {
          setPackages(filteredPackages);
          setLoading(false);
        }, 300); // Exibe os shimmers por 0,5s antes de carregar os pacotes reais
      } catch (error) {
        console.error("Erro ao carregar pacotes:", error);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <Container>
      <Title>Planos de Telefone Fixo</Title>
      {loading ? (
        <PackageList>
          {Array.from({ length: shimmerCount }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </PackageList>
      ) : (
        <PackageList>
          {packages.length > 0 ? (
            packages.map((pack) => (
              <PackageCard key={pack._id} pack={pack} />
            ))
          ) : (
            <EmptyMessage>Nenhum plano disponível.</EmptyMessage>
          )}
        </PackageList>
      )}
    </Container>
  );
};

/* ======= Styled Components ======= */

const Container = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #003b5c;
  margin-bottom: 2rem;
`;

const PackageList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: #999;
`;
