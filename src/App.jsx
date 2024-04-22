
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home/Home';
import Favs from './Pages/Favs/Favs';
import Contact from './Pages/Contacto/Contact';
import Detail from './Pages/Dentist/Detail';
import "./Styles/App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dentists/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

