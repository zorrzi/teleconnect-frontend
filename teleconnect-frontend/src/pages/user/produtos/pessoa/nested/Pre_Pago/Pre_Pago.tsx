import { useEffect, useState } from "react";
import styled from "styled-components";
import { listPackages, Package } from "../../../api/getPackages";
import { PackageCard } from "../../../components/PackageCard";

export const PrePagoPage = () => {
    const [packages, setPackages] = useState<Package[]>([]);

    useEffect(() => {
        async function fetchPackages() {
            const { data } = await listPackages(); // 🔹 Extraindo "data" da resposta
            const filteredPackages = data.filter(pkg => pkg.mobile_service === "Pré-pago");
            setPackages(filteredPackages);
        }

        fetchPackages();
    }, []);

    return (
        <Container>
            <Title>Escolha seu plano Pré-Pago</Title>
            <PackagesGrid>
                {packages.map(pack => (
                    <PackageCard key={pack._id} pack={pack} />
                ))}
            </PackagesGrid>
        </Container>
    );
};

/* ======= Styled Components ======= */

const Container = styled.div`
    padding: 40px;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    color: #003B5C;
    margin-bottom: 20px;
`;

const PackagesGrid = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;
