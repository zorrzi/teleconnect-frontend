import React from "react";
import styled, { keyframes } from "styled-components";

export const SkeletonLoader: React.FC = () => {
  return (
    <SkeletonCard>
      <SkeletonTop />
      <SkeletonContent>
        <SkeletonTitle />
        <SkeletonPrice />
        <SkeletonSubtitle />
        <SkeletonFeature />
        <SkeletonFeature />
        <SkeletonFeature />
      </SkeletonContent>
      <SkeletonButton />
    </SkeletonCard>
  );
};

/* ======= Styled Components ======= */

// Animação de shimmer
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 380px;
  background: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
`;

const SkeletonTop = styled.div`
  height: 80px;
  background: #e0e0e0;
  animation: ${shimmer} 1.5s infinite;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
`;

const SkeletonContent = styled.div`
  padding: 2rem;
  text-align: center;
`;

const SkeletonTitle = styled.div`
  height: 20px;
  width: 70%;
  margin: 0 auto 10px auto;
  background: #e0e0e0;
  border-radius: 5px;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonPrice = styled.div`
  height: 30px;
  width: 50%;
  margin: 0 auto 10px auto;
  background: #e0e0e0;
  border-radius: 5px;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonSubtitle = styled.div`
  height: 15px;
  width: 40%;
  margin: 0 auto 15px auto;
  background: #e0e0e0;
  border-radius: 5px;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonFeature = styled.div`
  height: 15px;
  width: 80%;
  margin: 8px auto;
  background: #e0e0e0;
  border-radius: 5px;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonButton = styled.div`
  height: 40px;
  width: 80%;
  margin: 0 auto 1rem auto;
  background: #e0e0e0;
  border-radius: 8px;
  animation: ${shimmer} 1.5s infinite;
`;
