import ImgApropos from '../Assets/Images/ImgApropos.webp';
import Banner from './Banner';
import Collapse from './Collapse';
import Footer from './Footer';
import Header from './Header';

const Apropos = () => {
    return (
        <div className='rootDiv'>
          <div className="pageDiv">
            <Header/>
            <Banner
              imgSrc={ImgApropos}
              />
          </div>
          <div className="bodyDiv">
            <Collapse
              collapseText={"Fiabilité"}
              collapseDescription={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
            <Collapse
              collapseText={"Respect"}
              collapseDescription={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
            <Collapse
              collapseText={"Service"}
              collapseDescription={" "}/>
            <Collapse
              collapseText={"Sécurité"}
              collapseDescription={" "}/>
          </div>
          <Footer/>
        </div>
    );
};

export default Apropos;