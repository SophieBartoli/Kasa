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
              collapseText={"Fiabilité"}/>
            <Collapse
              collapseText={"Respect"}/>
            <Collapse
              collapseText={"Service"}/>
            <Collapse
              collapseText={"Sécurité"}/>
          </div>
          <Footer/>
        </div>
    );
};

export default Apropos;