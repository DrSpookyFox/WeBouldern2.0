import Home from "./pages/Home";
import Gunks from "./pages/Gunks";
import Acadia from "./pages/Acadia";
import Smuggs from "./pages/Smuggs";
import Navigation from "./Navigation";
import Footie from "./Footie";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gunks" element={<Gunks />} />
          <Route path="/acadia" element={<Acadia />} />
          <Route path="/Smuggs" element={<Smuggs />} />
        </Routes>
      </div>
      <Footie />
    </>
  );
};

export default App;
