import React from "react";
import Home from "./Home";
import Terms from "./Terms";
import Contact from "./Contact";
import Tools from "./Tools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools/*" element={<Tools />} />
        <Route path="/homeandgarden/*" element={<Tools />} />
        <Route path="/cars/*" element={<Tools />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
