import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <>
            <div id="top" className="absolute top-0"></div>
            <Hero />
            <Profile />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Home;
