import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from "./Components/Apropos";
import Accueil from "./Components/Accueil";
import Error from "./Components/Error";
import Logements from "./Components/Logements";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const App = () => {


        ReactDOM.render(
            <React.StrictMode>
                <Router>
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/Apropos" element={<Apropos/>} />
                        <Route path="*" element={<Error />} />
                         <Route path="/logement/:id" element={<Logements />} />
                    </Routes>
                </Router>
            </React.StrictMode>,
            document.getElementById('root')
        )

};

export default App;
