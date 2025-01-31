import React from "react";
import { MeusPlanos } from "./components/loadPlans"; // Importa o componente de planos
import { Header } from "../../components/header";


const handleFeedbackSubmit = (feedbackText: string, stars: number) => {
    console.log("Feedback enviado:", feedbackText, "Nota:", stars);
    // Aqui você pode implementar a lógica de envio ao backend
  };

export function MyPlansPage() {
  return(
    <>
      <Header />

      <MeusPlanos />

    </>
    
  );
  
}

export default MyPlansPage;
