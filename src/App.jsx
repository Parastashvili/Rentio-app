import React from "react";
import Home from "./Home";
import Terms from "./Terms";
import Contact from "./Contact";
import Product from "./Product";
import Tools from "./Tools";
import Garden from "./Garden";
import Cars from "./Cars";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools/*" element={<Tools />} />
        <Route path="/homeandgarden/*" element={<Garden />} />
        <Route path="/cars/*" element={<Cars />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
