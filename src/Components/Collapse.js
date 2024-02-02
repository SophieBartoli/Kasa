import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ collapseText }) => {

    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(true);

    return (
        <div className="buttonDiv">
            <p>{ collapseText }</p>
            <button onClick={() => {setOpen(true); setClose(false)}}><FontAwesomeIcon icon={faAngleUp} color="white"/></button>
        </div>
    );
}

export default Collapse;