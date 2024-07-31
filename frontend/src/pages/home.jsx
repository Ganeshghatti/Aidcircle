import Navbar from "../components/navbar";
import {
  Carousel,
  Specialities,
  Services,
  Processes,
  NewsLetter,
  Footer,
} from "../sections";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Specialities />
      <Services />
      <Processes />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
