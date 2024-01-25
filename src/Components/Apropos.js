import ImgApropos from '../Assets/Images/ImgApropos.webp';
import Footer from './Footer';
import Header from './Header';

const Apropos = () => {
    return (
        <div className='rootDiv'>
          <div className="pageDiv">
            <Header/>
            <div className="banniereAccueil">
             <img src={ImgApropos} alt=""/>
            </div>
          </div>
          <div className="bodyDiv">
            <div className="buttonDiv">
              <p>Fiabilité</p>
              <button/>
            </div>
            <div className="buttonDiv">
              <p>Respect</p>
              <button/>
            </div>
            <div className="buttonDiv">
              <p>Service</p>
              <button/>
            </div>
            <div className="buttonDiv">
              <p>Sécurité</p>
              <button/>
            </div>
          </div>
          <Footer/>
        </div>
    );
};

export default Apropos;