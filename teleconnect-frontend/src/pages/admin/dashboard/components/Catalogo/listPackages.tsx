import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { listPackages, Package } from "./FetchPackages";
import { DeletePackageButton } from "../DeletePackage/DeletePackageButton";
import { CheckCircle } from "phosphor-react";

export const ListPackages = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        setLoading(true);
        try {
            const { data, response } = await listPackages();
            if (response.ok) {
                setPackages(data);
            } else {
                setError("Erro ao carregar pacotes.");
            }
        } catch (err) {
            setError("Erro ao carregar pacotes.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading>Carregando pacotes...</Loading>;
    if (error) return <Error>{error}</Error>;

    return (
        <CatalogContainer>
            {packages.map((pkg) => (
                <PackageCard key={pkg._id}>
                    <TopSection>
                        <TriangleImage src="/triangulo.png" alt="Destaque" />
                    </TopSection>
                    <Content>
                        <Title>{pkg.fiber || pkg.mobile_service || "Pacote"}</Title>
                        <Price>R$ {pkg.price.toFixed(2)}</Price>
                        <Subtitle>Por mês</Subtitle>

                        {pkg.streaming_partnership && (
                            <Feature>+ {pkg.streaming_partnership}</Feature>
                        )}

                        <Features>
                            {pkg.fiber_amount && (
                                <Feature>
                                    <CheckCircle size={20} /> {pkg.fiber_amount} MB de Fibra
                                </Feature>
                            )}
                            {pkg.mobile_service_amount && (
                                <Feature>
                                    <CheckCircle size={20} /> {pkg.mobile_service_amount} GB de Celular
                                </Feature>
                            )}
                            {pkg.fixed_phone && (
                                <Feature>
                                    <CheckCircle size={20} /> Telefone Fixo Incluso
                                </Feature>
                            )}
                        </Features>
                    </Content>

                    <LowerSection>
                        <DeletePackageButton packageId={pkg._id} onPackageDeleted={fetchPackages} />
                    </LowerSection>
                </PackageCard>
            ))}
        </CatalogContainer>
    );
};

/* ======= Estilos Atualizados ======= */

const CatalogContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-content: center;
`;

/* 🔹 Estilização do Card */
const PackageCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 280px;
    height: 400px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease-in-out;

`;

/* 🔹 Imagem no topo do card */
const TopSection = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
`;

const TriangleImage = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: auto;
`;

/* 🔹 Conteúdo do Card */
const Content = styled.div`
    padding: 1.5rem;
    text-align: center;
`;

const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: bold;
    color: #003B5C;
    margin-bottom: 10px;
`;

const Price = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    color: #003B5C;
    margin-bottom: 5px;
`;

const Subtitle = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
`;

const Feature = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #3CBBB4;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
`;

const Features = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 1rem;
`;

/* 🔹 Seção Inferior do Card */
const LowerSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 0 0 12px 12px;
`;

/* 🔹 Botão de Assinatura */
const SubscribeButton = styled.button`
    width: 70%;
    padding: 12px;
    background-color: #FFA14A;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #E88E3A;
    }
`;

/* 🔹 Indicador de Carregamento */
const Loading = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
    color: #333;
`;

/* 🔹 Indicador de Erro */
const Error = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
    color: red;
`;
