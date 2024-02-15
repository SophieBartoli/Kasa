import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from "./Components/Apropos";
import Accueil from "./Components/Accueil";
import Error from "./Components/Error";
import Logements from "./Components/Logements";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/Apropos" element={<Apropos />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/logement/:id" element={<Logements />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    );
};

export default App;