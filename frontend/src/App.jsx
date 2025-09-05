import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import AppListing from "./Components/AddListing.jsx";
import LoginRegister from "./Components/LoginRegister.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRegister />} />
    </Routes>
  );
}

export default App;
