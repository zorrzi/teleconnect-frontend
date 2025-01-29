import { useEffect, useState } from "react";
import styled from "styled-components";
import { listPackages, Package } from "../../../api/getPackages";
import { PackageCard } from "../../../components/PackageCard";

export const PosPagoPage = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const { data } = await listPackages();
                const filteredPackages = data.filter(pack => pack.mobile_service === "Pós-pago" && !pack.is_b2b);
                setPackages(filteredPackages);
            } catch (error) {
                console.error("Erro ao carregar pacotes:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPackages();
    }, []);

    return (
        <Container>
            <Title>Planos Pós-Pagos</Title>
            {loading ? <Loading>Carregando...</Loading> : (
                <PackageList>
                    {packages.length > 0 ? packages.map(pack => (
                        <PackageCard key={pack._id} pack={pack} />
                    )) : <EmptyMessage>Nenhum plano disponível.</EmptyMessage>}
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
    color: #003B5C;
    margin-bottom: 2rem;
`;

const PackageList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

const Loading = styled.p`
    font-size: 1.2rem;
    color: #666;
`;

const EmptyMessage = styled.p`
    font-size: 1.2rem;
    color: #999;
`;
