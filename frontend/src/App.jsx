import "./App.css";
import { About, Contact, Home, SpecialitiesPage } from "./pages";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        <Route path="/specialities" Component={SpecialitiesPage} />
      </Routes>
    </Router>
  );
}

export default App;
