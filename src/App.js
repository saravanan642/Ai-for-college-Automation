import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Compoents/Footer";
import Footer from "./Compoents/Navbar";

import Home from "./Compoents/Pages/Home";
import About from "./Compoents/Pages/About";
import Courses from "./Compoents/Pages/Courses";
import Facilities from "./Compoents/Pages/Facilities";
import Contact from "./Compoents/Pages/Courses"

import Chatbot from "./Compoents/chatbot/Chatbot";

function App() {

  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/facilities" element={<Facilities />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Chatbot />

      <Footer />

    </Router>
  );
}

export default App;