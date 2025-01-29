import { Carousel } from "./components/Carrosel";
import { Offers } from "./components/Offers";
import { Features } from "./components/Features";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Services } from "./components/Services";


export const LandingPage = () => {
    return (
        <>
            <Header />
            <Carousel />
            <Offers />
            <Features />
            <Services />
            <Footer />
        </>
    );
};
