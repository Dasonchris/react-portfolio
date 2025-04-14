import "./Home.css";
import { React } from "react";
import Navbar from "../../Components/Narvbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import ContainerSection from "../../Components/containerSection/containerSection";
import Backend from "../../Components/BackendSection/Backend";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollTotop";

function Home () {
    return(
        <>
        <Navbar />

        <HeroSection />
        <ContainerSection />
        <Backend />
        <ScrollToTop />
        <Footer />
       

        </>
    );
};


export default Home;