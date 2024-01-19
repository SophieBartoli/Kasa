import ImgApropos from '../Assets/Images/ImgApropos.webp';
import Footer from './Footer';
import Header from './Header';

const Apropos = () => {
    return (
        <div>
          <Header/>
          <img src={ImgApropos} alt=""/>
          <div>
            <p>Fiabilité</p>
            <button/>
            <p>Respect</p>
            <button/>
            <p>Service</p>
            <button/>
            <p>Sécurité</p>
            <button/>
          </div>
          <Footer/>
        </div>
    );
};

export default Apropos;