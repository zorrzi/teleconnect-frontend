import { Carousel } from "./components/Carrosel";
import { SpecialOffers } from "./components/servicos/Offers";
import { Features } from "./components/Features";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Services } from "./components/Services";
import { TopRatings } from "./components/topratings/TopRatings";

export const LandingPage = () => {
    return (
        <>
            <Header />
            <Carousel />
            <SpecialOffers />
            <Features />
            <Services />
            <TopRatings />
            <Footer />
        </>
    );
};
