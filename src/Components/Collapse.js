import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ collapseText, collapseDescription }) => {

    const [open, setOpen] = useState(false);

    function Toggle() {
        return setOpen(!open);
    }

    return (
        <div>
            <div className="buttonDiv"> 
                <p className="collapseText">{ collapseText }</p>
                <button onClick={ Toggle }><FontAwesomeIcon icon={faAngleUp} color="white"/></button>
            </div>
            <div className='descriptionDiv'>
                {open && <p className="collapseDescription"> { collapseDescription } </p>}
            </div>
        </div>
    );
}

export default Collapse;