import "./App.css";
import { Navbar } from "./components";
import {
  Specialities,
  Services,
  Carousel,
  NewsLetter,
  Footer,
} from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Specialities />
      <Services />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
