import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import GetStart from "./Pages/GetStart";
import Verify from "./Pages/Verify";
import Agree from "./Pages/Agree";
import CreatePassword from "./Pages/CreatePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/GetStart" element={<GetStart />} />
        <Route path="/Verify" element={<Verify />} />
        <Route path="/Agree" element={<Agree />} />
        <Route path="/CreatePassword" element={<CreatePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
