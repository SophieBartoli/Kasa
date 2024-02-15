import { useEffect, useState } from "react";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import ImgAccueil from '../Assets/Images/ImgAccueil.webp';
import Banner from "./Banner";

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
        <div className="rootDiv">
            <div className="pageDiv">
                <Banner
                    imgSrc={ImgAccueil} 
                    imgText={"Chez vous, partout et ailleurs"}/>
                <div className="logement">
                    <div className="imagesDiv">
                        {logementData.length !== 0 ? logementData.map((elem) => {
                            return <Cards key={elem.id} data={elem} />;
                        })
                        : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;