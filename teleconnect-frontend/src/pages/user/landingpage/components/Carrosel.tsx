import { useState, useEffect } from "react";
import styled from "styled-components";

export const Carousel = () => {
  const images = ["/propaganda1.png", "/carrossel.png", "/carrossel2.png"];
  const [currentindex, setcurrentindex] = useState(0);

  // Função para avançar automaticamente o slide
  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentindex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <CarouselContainer>
      {/* Slides */}
      <SlideWrapper $currentindex={currentindex}>
        {images.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SlideWrapper>

      {/* Indicadores (bolinhas) */}
      <Indicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            $active={index === currentindex}
            onClick={() => setcurrentindex(index)}
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

/* ======= Styled Components ======= */

/* Container principal do carrossel */
const CarouselContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  max-height: 600px; /* 🔹 Define a altura máxima */
`;

/* 
  Em vez de currentindex, use $currentindex 
  para não passar essa prop ao DOM.
*/
const SlideWrapper = styled.div<{ $currentindex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.$currentindex * 100}%);
`;

/* Slide individual */
const Slide = styled.div`
  flex: 0 0 100%;
  width: 100vw;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    max-height: 600px;
    object-fit: cover; /* 🔹 Mantém proporções sem distorcer */
  }
`;

/* Indicadores (bolinhas) */
const Indicators = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

/* 
  Em vez de active, use $active 
  para não passar essa prop ao DOM.
*/
const Indicator = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.$active ? "#fff" : "#bbb")};
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #fff;
  }
`;
