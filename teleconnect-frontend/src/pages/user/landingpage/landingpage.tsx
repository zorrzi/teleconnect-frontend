import { Hero } from "./components/Carrosel";
import { Offers } from "./components/Offers";
import { Features } from "./components/Features";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Offers />
            <Features />
            <Footer />
        </>
    );
};
