import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import RegisterCompany from "./components/register-company/RegisterCompany";
import Graphic from "./components/graphic/Graphic";
import ListCompanies from "./components/list-companies/ListCompanies";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/list-companies" element={<ListCompanies />} />
      </Routes>
    </Router>
  );
}