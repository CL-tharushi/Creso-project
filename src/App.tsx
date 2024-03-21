import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import GetStart from "./Pages/GetStart";
import Verify from "./Pages/Verify";
import Agree from "./Pages/Agree";
import CreatePassword from "./Pages/CreatePassword";
import SecureWallet from "./Pages/SecureWallet";
// import SecureWallet from "./Pages/secureWallet";


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
        <Route path="/SecureWallet" element={<SecureWallet />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
