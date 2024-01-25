import logoBlanc from '../Assets/Logo/LogoBlanc.webp';

const Footer = () => {
    return (
        <div className="footerDiv">
           <img src={logoBlanc} alt=""/>
           <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;