import ImgApropos from '../Assets/Images/ImgApropos.webp';
import Banner from './Banner';
import Collapse from './Collapse';
import Footer from './Footer';
import Header from './Header';

const Apropos = () => {
    return (
        <div className='rootDiv'>
          <div className="pageDiv">
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
              collapseDescription={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
            <Collapse
              collapseText={"Sécurité"}
              collapseDescription={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
          </div>
        </div>
    );
};

export default Apropos;