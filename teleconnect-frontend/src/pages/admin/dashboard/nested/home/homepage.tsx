import { useEffect, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { fetchActivePackages } from "./api/FetchActivePackages";
import { listAllFeedbacks } from "./api/feedbacks";

interface ActivePackage {
  id: string;
  fiber?: string;
  fiber_amount?: number;
  mobile_service?: string;
  mobile_service_amount?: number;
  fixed_phone?: boolean;
}

interface Feedback {
  _id: string;
  feedback_text: string;
  stars: number;
}

export const Home = () => {
  const [totalPackages, setTotalPackages] = useState(0);
  const [fiberPackages, setFiberPackages] = useState(0);
  const [fixedPackages, setFixedPackages] = useState(0);
  const [mobilePackages, setMobilePackages] = useState(0);
  const [fiberDetails, setFiberDetails] = useState({
    basic: 0,
    intermediate: 0,
    family: 0,
  });
  const [mobileDetails, setMobileDetails] = useState({
    prepaid: 0,
    postpaid: 0,
  });

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ActivePackage[] = await fetchActivePackages();

        setTotalPackages(data.length);

        const fiber = data.filter((pkg) => pkg.fiber !== null);
        const fixed = data.filter((pkg) => pkg.fixed_phone === true);
        const mobile = data.filter((pkg) => pkg.mobile_service !== null);

        setFiberPackages(fiber.length);
        setFixedPackages(fixed.length);
        setMobilePackages(mobile.length);

        setFiberDetails({
          basic: fiber.filter((pkg) => pkg.fiber === "Básico").length,
          intermediate: fiber.filter((pkg) => pkg.fiber === "Intermediário")
            .length,
          family: fiber.filter((pkg) => pkg.fiber === "Família").length,
        });

        setMobileDetails({
          prepaid: mobile.filter((pkg) => pkg.mobile_service === "Pré-pago")
            .length,
          postpaid: mobile.filter((pkg) => pkg.mobile_service === "Pós-pago")
            .length,
        });
      } catch (error) {
        console.error("Erro ao buscar dados dos pacotes ativos:", error);
        toast.error("Erro ao buscar dados dos pacotes ativos.");
      }
    };

    const fetchFeedbacks = async () => {
      try {
        const feedbackData = await listAllFeedbacks();
        setFeedbacks(feedbackData);
      } catch (error) {
        console.error("Erro ao buscar feedbacks:", error);
        toast.error("Erro ao buscar feedbacks.");
      }
    };

    fetchData();
    fetchFeedbacks();
  }, []);

  return (
    <Container>
      <LeftSection>
        <Indicators>
          <Card>
            <h3>Total de Pacotes Ativos</h3>
            <p>{totalPackages}</p>
          </Card>

          <Card>
            <h3>Pacotes de Fibra</h3>
            <p>{fiberPackages}</p>
            <Details>
              <p>Básico: {fiberDetails.basic}</p>
              <p>Intermediário: {fiberDetails.intermediate}</p>
              <p>Família: {fiberDetails.family}</p>
            </Details>
          </Card>

          <Card>
            <h3>Pacotes de Telefone Fixo</h3>
            <p>{fixedPackages}</p>
          </Card>

          <Card>
            <h3>Pacotes de Telefone Móvel</h3>
            <p>{mobilePackages}</p>
            <Details>
              <p>Pré-pago: {mobileDetails.prepaid}</p>
              <p>Pós-pago: {mobileDetails.postpaid}</p>
            </Details>
          </Card>
        </Indicators>
      </LeftSection>

      <RightSection>
        <FeedbackBox>
          <h3>Feedbacks dos Clientes</h3>
          {feedbacks.length === 0 ? (
            <p>Nenhum feedback disponível no momento.</p>
          ) : (
            feedbacks.slice(0, 3).map((feedback) => (
              <FeedbackCard key={feedback._id}>
                <Stars>{"⭐".repeat(feedback.stars)}</Stars>
                <p>{feedback.feedback_text}</p>
              </FeedbackCard>
            ))
          )}
        </FeedbackBox>
      </RightSection>
    </Container>
  );
};

/* ======= Estilos ======= */
const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Indicators = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 2rem;
    color: #666;
  }
`;

const Details = styled.div`
  margin-top: 10px;
  text-align: left;

  p {
    font-size: 1.2rem;
    margin: 3px 0;
  }
`;

const FeedbackBox = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #333;
  }
`;

const FeedbackCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Stars = styled.div`
  font-size: 1.2rem;
  color: #ffa14a;
  margin-bottom: 5px;
`;
