import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
