import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs } from "./components/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import IndividualView from "./components/IndividualView/IndividualView";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/museum" element={<IndividualView />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
