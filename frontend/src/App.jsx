import "./App.css";
import { Navbar } from "./components";
import { Specialities, Carousel, NewsLetter, Footer } from "./sections";
import Processes from "./sections/processes";
import Services from "./sections/services";

function App() {
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
}

export default App;
