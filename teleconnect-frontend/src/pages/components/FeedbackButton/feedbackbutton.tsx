// src/components/FeedbackButton/feedbackbutton.tsx
import { useState } from "react";
import styled from "styled-components";
import { Star } from "phosphor-react";

interface FeedbackButtonProps {
  // Recebe uma função que recebe "feedbackText" e "stars"
  onSubmitFeedback: (feedbackText: string, stars: number) => void;
}

export const FeedbackButton: React.FC<FeedbackButtonProps> = ({
  onSubmitFeedback,
}) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  // Clique na estrela
  const handleStarClick = (stars: number) => {
    setSelectedStars(stars);
  };

  // Hover nas estrelas
  const handleStarHover = (stars: number) => {
    setHoveredStars(stars);
  };

  const handleStarHoverOut = () => {
    setHoveredStars(0);
  };

  const handleCancel = () => {
    setShowFeedbackForm(false);
    setSelectedStars(0);
    setHoveredStars(0);
    setFeedbackText("");
  };

  // Ao clicar em "Enviar" no modal
  const handleSubmit = () => {
    if (selectedStars === 0 || feedbackText.trim() === "") {
      alert("Por favor, forneça uma mensagem e uma avaliação antes de enviar.");
      return;
    }
    // Chama a função recebida por props, enviando feedbackText e selectedStars
    onSubmitFeedback(feedbackText, selectedStars);
    handleCancel();
  };

  return (
    <>
      {!showFeedbackForm ? (
        <StyledButton onClick={() => setShowFeedbackForm(true)}>
          Enviar Feedback
        </StyledButton>
      ) : (
        <>
          <Overlay onClick={handleCancel} />
          <FeedbackModal>
            <h3>Deixe seu Feedback</h3>
            <FeedbackTextarea
              placeholder="Digite seu feedback aqui..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />
            <StarRating>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  filled={star <= (hoveredStars || selectedStars)}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={handleStarHoverOut}
                >
                  <Star
                    size={32}
                    weight={
                      star <= (hoveredStars || selectedStars) ? "fill" : "regular"
                    }
                  />
                </StarIcon>
              ))}
            </StarRating>
            <FeedbackActions>
              <SendButton onClick={handleSubmit}>Enviar</SendButton>
              <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
            </FeedbackActions>
          </FeedbackModal>
        </>
      )}
    </>
  );
};

/* ======= Styled Components ======= */

const StyledButton = styled.button`
  background-color: #ffa14a;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e88e3a;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const FeedbackModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  max-width: 500px;
  z-index: 20;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const StarIcon = styled.div<{ filled: boolean }>`
  cursor: pointer;
  color: ${({ filled }) => (filled ? "#FFA14A" : "#ccc")};
  transition: color 0.2s ease;

  &:hover {
    color: #ff914d;
  }
`;

const FeedbackTextarea = styled.textarea`
  width: 90%;
  height: 100px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1rem;
  resize: none;
  justify-self: center;
`;

const FeedbackActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const SendButton = styled.button`
  background-color: #3cbbb4;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #32a2a0;
  }
`;

const CancelButton = styled.button`
  background-color: #e74c3c;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;
