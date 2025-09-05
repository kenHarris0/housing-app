import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import LoginRegister from "./Components/LoginRegister.jsx";
import About from "./Components/About.jsx";
// import AddListing from "./Components/AddListing.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRegister />} />
      {/* <Route path="/properties" element={<AddListing />} /> */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
