import logo from '../Assets/Logo/Logo.webp';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    function ToggleActive() {
        return setIsActive(!isActive);
    }

    const ButtonLink = ( {linkText, linkTo}) => {
        return (
            <Link className="headerLink" to={ linkTo }>{ linkText }</Link>
        )
    } 


    return (
        <div className='headerDiv'>
            <img src={ logo } alt=""/>
            <nav className='headerNav'>
                <ButtonLink className="headerLink" onClick={ ToggleActive } linkTo={"/"} linkText={"Accueil"}></ButtonLink>
                <ButtonLink className="headerLink" onClick={ ToggleActive } linkTo={"/Apropos"} linkText={"A propos"}></ButtonLink>
            </nav>
        </div>

    );
};

export default Header;