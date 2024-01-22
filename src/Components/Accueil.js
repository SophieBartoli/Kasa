import { useEffect, useState } from "react";
import Header from "./Header";
import Logement from "./Logement";
import Footer from "./Footer";
import ImgAccueil from '../Assets/Images/ImgAccueil.webp';

const Accueil = () => {

    const [logementData, setLocationData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5500/logement.json").then((response) => {
            response.json().then((data) => {
                setLocationData(data);
            });
        });
    }, []);
    
    return (
        <div>
            <Header/>
            <div className="banniereAccueil">
                <img src={ImgAccueil} alt="" /> 
                <h1>Chez vous partout ailleurs</h1>
            </div>
            <div className="logement">
                {logementData.length !== 0 ? logementData.map((elem) => {
                    return <Logement key={elem.id} data={elem} />;
                })
                : null}
            </div>
            <Footer/>
        </div>
    );
};

export default Accueil;