import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs } from "./components/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Grid } from "./pages/Museos/Grid";
import IndividualView from "./components/IndividualView/IndividualView";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/museum" element={<IndividualView />} />
        <Route path="museos" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
