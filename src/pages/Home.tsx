import Footer from "../components/Footer";
import Header from "../components/Header";
import CallToAction from "./CallToAction";
import Feature from "./Feature";
import Hero from "./Hero";
import Meet from "./Meet";
import Services from "./Services";
import System from "./System";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Feature />
      <Services />
      <System />
      <Meet />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Home;
