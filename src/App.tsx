import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import GetStart from "./Pages/GetStart";
import Verify from "./Pages/Verify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/GetStart" element={<GetStart />} />
        <Route path="/Verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
