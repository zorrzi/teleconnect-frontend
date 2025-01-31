// src/pages/user/landingpage/components/TopRatings.tsx

import { useEffect, useState } from "react";
import styled from "styled-components";
import { listAllFeedbacks } from "./api/listafeedbacks"; 
// Ajuste o path para onde você faz GET /user/feedback

interface FeedbackData {
  _id: string;
  stars: number;
  feedback_text: string;
  // ou message, dependendo do back
  user_id?: string;
}

export function TopRatings() {
  const [topFiveStars, setTopFiveStars] = useState<FeedbackData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeedbacks() {
      try {
        const allFeedbacks = await listAllFeedbacks(); 
        // allFeedbacks deve retornar array de obj { _id, stars, feedback_text,... }
        
        // Filtra star==5 e pega só 3
        const fiveStars = allFeedbacks
          .filter((fb: FeedbackData) => fb.stars === 5)
          .slice(0, 3);

        setTopFiveStars(fiveStars);
      } catch (error) {
        console.error("Erro ao carregar feedbacks 5 estrelas", error);
      } finally {
        setLoading(false);
      }
    }
    loadFeedbacks();
  }, []);

  if (loading) {
    return <p>Carregando feedbacks 5 estrelas...</p>;
  }

  if (topFiveStars.length === 0) {
    return <p>Nenhum feedback 5 estrelas ainda</p>;
  }

  return (
    <Container>
      <Title>O que nosso cliente estão falando?</Title>
      <FeedbackList>
        {topFiveStars.map((fb) => (
          <FeedbackCard key={fb._id}>
            <p>{fb.feedback_text}</p>
            <StarsIndicator>
              {Array.from({ length: fb.stars }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </StarsIndicator>
          </FeedbackCard>
        ))}
      </FeedbackList>
    </Container>
  );
}

/* ======= Styled Components ======= */
const Container = styled.div`
  padding: 1rem;
  margin: 2rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const FeedbackList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  `;

const FeedbackCard = styled.div`
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 250px;
`;

const StarsIndicator = styled.div`
  margin-top: 0.5rem;
  color: #ffa14a;
`;
