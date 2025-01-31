import { SkeletonLoader } from "../../../../landingpage/components/shimmer";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { listPackages, Package } from "../../../api/getPackages";
import { PackageCard } from "../../../components/PackageCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PosPagoPage = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data } = await listPackages();
        const filteredPackages = data.filter(
          (pack) => pack.mobile_service === "Pós-pago" && !pack.is_b2b
        );

        setTimeout(() => {
          setPackages(filteredPackages);
          setLoading(false);
        }, 300); // Simula atraso no carregamento
      } catch (error) {
        console.error("Erro ao carregar pacotes:", error);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  useEffect(() => {
    // Ajusta o número de itens por página com base no tamanho da tela
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 1440) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(packages.length / itemsPerPage);
  const hasMultiplePages = totalPages > 1;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const displayedPackages = packages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Container>
      <Title>Planos Pós-Pagos</Title>

      <CarouselContainer>
        {hasMultiplePages && (
          <ArrowButton onClick={prevPage} disabled={currentPage === 0}>
            <FaChevronLeft />
          </ArrowButton>
        )}

        <CarouselWrapper>
          <PackageList>
            {loading
              ? Array.from({ length: itemsPerPage }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))
              : displayedPackages.map((pack) => (
                  <PackageCard key={pack._id} pack={pack} />
                ))}
          </PackageList>
        </CarouselWrapper>

        {hasMultiplePages && (
          <ArrowButton
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            <FaChevronRight />
          </ArrowButton>
        )}
      </CarouselContainer>

      {/* Indicadores de página */}
      {hasMultiplePages && (
        <Indicators>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Indicator key={index} active={index === currentPage} />
          ))}
        </Indicators>
      )}

      {!loading && packages.length === 0 && (
        <EmptyMessage>Nenhum plano disponível.</EmptyMessage>
      )}
    </Container>
  );
};

/* ======= Styled Components ======= */

const Container = styled.div`
  padding: 3rem;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #003b5c;
  margin-bottom: 2rem;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1500px;
  height: auto; /* Altura ajustável para pacotes responsivos */
`;

const PackageList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite quebra de linha */
  gap: 2rem;
  transition: transform 0.6s ease-in-out;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #003b5c;
  padding: 10px;
  transition: 0.3s ease;

  &:hover {
    color: #ff914d;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Indicator = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#ff914d" : "#ccc")};
  transition: background-color 0.3s ease;
`;

const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: #999;
  margin-top: 1rem;
`;
