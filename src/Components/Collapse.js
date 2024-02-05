import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ collapseText }) => {

    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(true);

    function Example() { 
        if (close) {
            return ( 
                <>
                    onClick={() => {setOpen(true); setClose(false)}}
                </>
            )}
            return (
                <> 
                    onClick={() => {setClose(true); setOpen(false)}}
                </>
            )};


    return (
        <div className="buttonDiv">
            <p>{ collapseText }</p>
            <button onClick={ Example }><FontAwesomeIcon icon={faAngleUp} color="white"/></button>
            { open && <p> Loading... </p> }

        </div>
    );
}

export default Collapse;