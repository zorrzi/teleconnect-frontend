// src/pages/user/landingpage/components/SpecialOffers.tsx

import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAllPackages } from "./api/offers";
import { PackageCard } from "../../../produtos/components/PackageCard";
import { toast } from "react-hot-toast";

interface PackageData {
  _id: string;
  fiber?: "Básico" | "Intermediário" | "Família"; 
  fiber_amount?: number;
  streaming_partnership?: "GloboPlay" | "HBO Max"; 
  price?: number;
  is_b2b?: boolean;
}

export function SpecialOffers() {
  const [allPackages, setAllPackages] = useState<PackageData[]>([]);
  const [activeStreaming, setActiveStreaming] = useState<"GloboPlay" | "HBO Max">("GloboPlay");
  const [displayedPackages, setDisplayedPackages] = useState<PackageData[]>([]);
  const [loading, setLoading] = useState(true);

  // Carrega todos os pacotes
  useEffect(() => {
    async function loadOffers() {
      try {
        const result = await fetchAllPackages();
        setAllPackages(result);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadOffers();
  }, []);

  // Filtro local baseado no streaming ativo
  useEffect(() => {
    const filtered = allPackages
      .filter((pkg) => 
        pkg.fiber !== undefined &&
        pkg.streaming_partnership === activeStreaming
      )
      .slice(0, 3);  // limita a 3 pacotes

    setDisplayedPackages(filtered);
  }, [allPackages, activeStreaming]);

  if (loading) {
    return <p>Carregando Ofertas Especiais...</p>;
  }

  // Renderização
  return (
    <Container>
      <Title>Ofertas Especiais</Title>

      {/* Botões para trocar de streaming */}
      <ButtonRow>
        <SwitchButton
          $active={activeStreaming === "GloboPlay"}
          onClick={() => setActiveStreaming("GloboPlay")}
        >
          GloboPlay
        </SwitchButton>
        <SwitchButton
          $active={activeStreaming === "HBO Max"}
          onClick={() => setActiveStreaming("HBO Max")}
        >
          HBO Max
        </SwitchButton>
      </ButtonRow>

      <OffersRow>
        <CardList>
          {displayedPackages.length === 0 ? (
            <p>Nenhum pacote encontrado</p>
          ) : (
            displayedPackages.map((pkg) => (
              <PackageCard
                key={pkg._id}
                pack={{
                  ...pkg,
                  price: pkg.price ?? 0,
                  is_b2b: pkg.is_b2b ?? false,
                }}
              />
            ))
          )}
        </CardList>
      </OffersRow>
    </Container>
  );
}

/* ======= Styled Components ======= */

const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SwitchButton = styled.button<{ $active: boolean }>`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: ${(props) => (props.$active ? "#3CBBB4" : "#ccc")};

  &:hover {
    background-color: ${(props) => (props.$active ? "#32A09A" : "#bbbbbb")};
  }
`;

const OffersRow = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;   
  gap: 1rem;
  justify-content: center; 
  align-items: center;
`;
