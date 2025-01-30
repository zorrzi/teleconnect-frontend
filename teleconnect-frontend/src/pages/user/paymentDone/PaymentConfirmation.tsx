import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { CheckCircle, WhatsappLogo } from "phosphor-react";

export const PaymentConfirmation = () => {
    const whatsappNumber = "5511940491919"; 
    const whatsappMessage = encodeURIComponent(
        "Olá, realizei o pagamento e gostaria de agendar a instalação/entrega do meu produto."
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <>
            <Header />
            <Container>
                <LeftSection>
                    <CheckIcon>
                        <CheckCircle size={80} weight="bold" color="green" />
                    </CheckIcon>
                    <Title>Pagamento Confirmado com Sucesso!</Title>
                    <Text>
                        Obrigado por escolher nossos serviços. <br />
                        Seu pagamento foi processado com êxito e sua reserva está confirmada.
                    </Text>
                </LeftSection>

                <RightSection>
                    <Card>
                        <SubTitle>Próximos Passos:</SubTitle>
                        <Text>
                            Entre no seguinte link do WhatsApp para entrar em contato com a nossa equipe e agendar um
                            dia para a instalação ou a entrega do seu produto.
                        </Text>
                        <WhatsAppButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <WhatsappLogo size={30} />
                            Fale Conosco
                        </WhatsAppButton>
                    </Card>
                </RightSection>
            </Container>
            <Footer />
        </>
    );
};

/* ======= Styled Components ======= */

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    padding: 4rem 2rem;
    background: #f9f9f9;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
`;

const CheckIcon = styled.div`
    margin-bottom: 1rem;
`;

const Title = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

const Text = styled.p`
    font-size: 1rem;
    color: #555;
`;

const RightSection = styled.div`
    display: flex;
    justify-content: center;
`;

const Card = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    text-align: center;
`;

const SubTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const WhatsAppButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #25d366;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.3s ease;
    margin-top: 15px;

    &:hover {
        background: #1ebe57;
    }
`;
