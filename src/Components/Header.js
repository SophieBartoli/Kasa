import logo from '../Assets/Logo/Logo.webp';
import { Link } from 'react-router-dom'

const Header = ( ) => {
    return (
        <div className='headerDiv'>
            <img src={ logo} alt=""/>
            <nav className='headerNav'>
                <Link className='headerLink' to="/">Accueil</Link>
                <Link className='headerLink' to="/Apropos">A propos</Link>
            </nav>
        </div>

    );
};

export default Header;