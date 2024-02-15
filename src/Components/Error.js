import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='rootDiv'>
            <div className="pageDiv">
                <div className="errorBody">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <nav className='errorNav'>
                        <Link className='errorLink' to="/">Retourner sur la page d'accueil</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}
 
export default Error