import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ collapseText, collapseDescription, collapseUl}) => {

    const [open, setOpen] = useState(false);

    function Toggle() {
        return setOpen(!open);
    }

    return (
        <div className="collapseDiv">
            <div className="buttonDiv"> 
                <p className="collapseText">{ collapseText }</p>
                <button onClick={ Toggle }><FontAwesomeIcon icon={faAngleUp} color="white"/></button>
            </div>
            <div className='descriptionDiv'>
                {open && <div>
                    {collapseDescription ? (
                        <p className="collapseDescription"> { collapseDescription } </p> 
                    ) : (
                        <div className="collapseUl"> 
                        <ul>{ collapseUl.map( collapseUl => (
                            <li key={collapseUl} className="collapseUl">{collapseUl}</li>
                        ))}</ul> 
                        </div>
                    ) } 
                        </div>}
            </div>
        </div>
    );
}

export default Collapse;