import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { listPackages, Package } from "./FetchPackages";

export const ListPackages = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const { data, response } = await listPackages();
                if (response.ok) {
                    setPackages(data);
                } else {
                    setError("Erro ao carregar pacotes.");
                }
            } catch (err) {
                console.error("Erro ao buscar pacotes:", err);
                setError("Erro ao carregar pacotes.");
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    if (loading) return <Loading>Carregando pacotes...</Loading>;
    if (error) return <Error>{error}</Error>;

    return (
        <CatalogContainer>
            {packages.map((pkg) => {
                if (pkg.fiber) {
                    return (
                        <FiberCard key={pkg._id}>
                            <FiberTitle>{pkg.fiber}</FiberTitle>
                            <FiberPrice>R${pkg.price}</FiberPrice>
                            <FiberSubtitle>Por mês</FiberSubtitle>
                            {pkg.streaming_partnership && (
                                <StreamingInfo>+ {pkg.streaming_partnership}</StreamingInfo>
                            )}
                            <FiberDetails>{pkg.fiber_amount} MB de Fibra</FiberDetails>
                            <ActionButton>Assine Já</ActionButton>
                        </FiberCard>
                    );
                } else if (pkg.mobile_service) {
                    return (
                        <MobileCard key={pkg._id}>
                            <MobileTitle>Serviço {pkg.mobile_service}</MobileTitle>
                            <MobilePrice>R${pkg.price}</MobilePrice>
                            <MobileSubtitle>Por mês</MobileSubtitle>
                            {pkg.mobile_service_amount && (
                                <MobileDetails>{pkg.mobile_service_amount} GB de Internet</MobileDetails>
                            )}
                            <ActionButton>Assine Já</ActionButton>
                        </MobileCard>
                    );
                } else if (pkg.fixed_phone) {
                    return (
                        <FixedCard key={pkg._id}>
                            <FixedTitle>Telefone Fixo</FixedTitle>
                            <FixedPrice>R${pkg.price}</FixedPrice>
                            <FixedSubtitle>Por mês</FixedSubtitle>
                            <FixedDetails>Inclui ligação ilimitada</FixedDetails>
                            <ActionButton>Assine Já</ActionButton>
                        </FixedCard>
                    );
                } else {
                    return (
                        <GenericCard key={pkg._id}>
                            <GenericTitle>Pacote Desconhecido</GenericTitle>
                            <GenericPrice>R${pkg.price}</GenericPrice>
                            <ActionButton>Assine Já</ActionButton>
                        </GenericCard>
                    );
                }
            })}
        </CatalogContainer>
    );
};

const CatalogContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
`;

/* Estilo para Fibra */
const FiberCard = styled.div`
    background-color: #e3f2fd;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 15rem;
    height: 20rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column; /* Organiza os elementos em uma coluna */
    justify-content: space-between; /* Coloca o botão na parte inferior */
`;

const FiberTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;
    color: #003366;
    margin-bottom: 10px;
`;

const FiberPrice = styled.p`
    font-size: 4rem;
    color: #003366;
    font-weight: bold;
    margin: 0;
`;

const FiberSubtitle = styled.p`
    font-size: 1rem;
    color: #555;
    margin: 0;
`;

const StreamingInfo = styled.p`
    font-size: 1.5rem;
    color: #d32f2f;
    margin: 10px 0;
`;

const FiberDetails = styled.p`
    font-size: 1.3rem;
    color: #003366;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "✔";
        color: #003366;
        margin-right: 8px;
    }
`;

/* Estilo para Móvel */
const MobileCard = styled(FiberCard)`
    background-color: #dff7df;
`;

const MobileTitle = styled(FiberTitle)`
    color: #006400;
`;

const MobilePrice = styled(FiberPrice)`
    color: #006400;
`;

const MobileSubtitle = styled(FiberSubtitle)`
    color: #555;
`;

const MobileDetails = styled(FiberDetails)`
    color: #006400;
`;

/* Estilo para Telefone Fixo */
const FixedCard = styled(FiberCard)`
    background-color: #fdeaea;
`;

const FixedTitle = styled(FiberTitle)`
    color: #b22222;
`;

const FixedPrice = styled(FiberPrice)`
    color: #b22222;
`;

const FixedSubtitle = styled(FiberSubtitle)`
    color: #555;
`;

const FixedDetails = styled(FiberDetails)`
    color: #b22222;
`;

/* Estilo para Pacote Genérico */
const GenericCard = styled(FiberCard)`
    background-color: #f5f5f5;
`;

const GenericTitle = styled(FiberTitle)`
    color: #555;
`;

const GenericPrice = styled(FiberPrice)`
    color: #555;
`;

const ActionButton = styled.button`
    background-color: #FFA82E;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #fb8c00;
    }

    margin-top: auto; /* Empurra o botão para a parte inferior */
`;

const Loading = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
    color: #333;
`;

const Error = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
    color: red;
`;
