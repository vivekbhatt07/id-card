import React from "react";
import Pic from "../src/Components/Pic";
import Header from "../src/Components/Header";
import Link from "../src/Components/Link";
import About from "../src/Components/About";
import Interest from "./Components/Interest";
import Footer from "./Components/Footer";
import "./style.css";
export default function App() {
  return (
    <div className="card-container">
      <div className="card">
        <Pic />
        <Header />
        <Link />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
