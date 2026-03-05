import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Compoents/Navbar";
import Footer from "./Compoents/Footer";

import Home from "./Compoents/Pages/Home";
import About from "./Compoents/Pages/About";
import Courses from "./Compoents/Pages/Courses";
import Facilities from "./Compoents/Pages/Facilities";
import Contact from "./Compoents/Pages/Contact"

import Chatbot from "./Compoents/chatbot/Chatbot";
import Admission from "./Compoents/Pages/Admission";

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
        <Route path = "/admistion" element= {<Admission />}/>

      </Routes>

      <Chatbot />


      <Footer />
    </Router>
  );
}

export default App;