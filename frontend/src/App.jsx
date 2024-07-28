import "./App.css";
import { Navbar } from "./components";
import { Specialities, Services, Carousel } from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Specialities />
      <Services />
    </>
  );
}

export default App;
