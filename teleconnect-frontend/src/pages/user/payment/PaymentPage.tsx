import { PaymentForm } from "./components/PaymentsForm";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { PackageCard } from "../produtos/components/PackageCard";

export const PaymentPage = () => {
    const location = useLocation();
    const selectedPackage = location.state?.packageData;

    return (
        <>
            <Header />
            <Container>
                <PaymentSection>
                    <h2>Pagamento</h2>
                    <PaymentForm />
                    <CancellationPolicy>
                        <h3>Política de Cancelamento:</h3>
                        <p>Essa tarifa garante uma condição de preço reduzida mediante a apresentação de um cartão de crédito válido.</p>
                        <ul>
                            <li>
                                <strong>a)</strong> Cancelamentos com antecedência inferior a 24h terão taxa de 10%.
                            </li>
                            <li>
                                <strong>b)</strong> Não comparecimento resultará em uma taxa de 25% do valor.
                            </li>
                            <li>
                                <strong>c)</strong> Cancelamento até 4 horas após a criação não terá taxa adicional.
                            </li>
                        </ul>
                    </CancellationPolicy>
                </PaymentSection>

                <SummarySection>
                    {selectedPackage ? (
                        <PackageCard pack={selectedPackage} />
                    ) : (
                        <p>Nenhum pacote selecionado.</p>
                    )}
                </SummarySection>
            </Container>
            <Footer />
        </>
    );
};

export default PaymentPage;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 3rem;
    background: #f9f9f9;
`;

const PaymentSection = styled.div`
    flex: 1;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SummarySection = styled.div`
    flex: 1;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CancellationPolicy = styled.div`
    margin-top: 2rem;

    h3 {
        font-size: 1.2rem;
        font-weight: bold;
    }

    p, li {
        font-size: 1rem;
        color: #555;
    }
`;
