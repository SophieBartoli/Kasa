import logo from '../Assets/Logo/Logo.webp';
import { Link } from 'react-router-dom'

const Header = ( ) => {
    return (
        <div className='headerLogo'>
            <img src={ logo} alt=""/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/Apropos">A propos</Link>
            </nav>
        </div>

    );
};

export default Header;