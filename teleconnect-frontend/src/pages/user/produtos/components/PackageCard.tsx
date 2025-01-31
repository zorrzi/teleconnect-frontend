import styled from "styled-components";
import { Package } from "../api/getPackages";
import { CheckCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ValidateSession } from "../api/FetchValidateSession";

interface PackageCardProps {
    pack: Package;
}

export const PackageCard = ({ pack }: PackageCardProps) => {
    const navigate = useNavigate();

    const handleSubscribe = async () => {
        const isValidSession = await ValidateSession();
        if (isValidSession) {
            console.log(pack);
            console.log(pack._id);
            navigate("/pagamento", { state: { packageData: pack} });
        } else {
            navigate("/user/login"); // Redireciona para a página de login
        }
    };

    return (
        <Card>
            <TopSection>
                <TriangleImage src="/triangulo.png" alt="Destaque do Pacote" />
            </TopSection>
            <Content>
                <Title>{pack.fiber || pack.mobile_service || "Pacote"}</Title>
                <Price>R$ {pack.price}</Price>
                <Subtitle>Por mês</Subtitle>

                {pack.streaming_partnership && <Feature>+ {pack.streaming_partnership}</Feature>}

                <Features>
                    {pack.fiber_amount && <Feature><CheckCircle size={20} /> {pack.fiber_amount} MB de Fibra</Feature>}
                    {pack.mobile_service_amount && <Feature><CheckCircle size={20} /> {pack.mobile_service_amount} GB de celular</Feature>}
                    {pack.fixed_phone && <Feature><CheckCircle size={20} /> Telefone Fixo Incluso</Feature>}
                </Features>
            </Content>
            <LowerSection>
                <SubscribeButton onClick={handleSubscribe}>Assine Já</SubscribeButton>
            </LowerSection>
        </Card>
    );
};

/* ======= Styled Components ======= */

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 280px;
    height: 380px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`;

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

const Content = styled.div`
    padding: 2rem;
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

const SubscribeButton = styled.button`
    width: 100%;
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

const LowerSection = styled.div`
    padding: 1rem;
    border-radius: 0 0 12px 12px;
`;
