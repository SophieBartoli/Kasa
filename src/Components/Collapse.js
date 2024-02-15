import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ collapseText, collapseDescription, collapseUl }) => {
    const [open, setOpen] = useState(false);

    function Toggle() {
        return setOpen(!open);
    }

    return (
        <div className="collapseDiv">
            <div className="buttonDiv">
                <p className="collapseText">{collapseText}</p>
                <button onClick={Toggle}>
                    <FontAwesomeIcon icon={open ? faAngleDown : faAngleUp} color="white" />
                </button>
            </div>
            <div
                className='descriptionDiv'
                style={{
                    maxHeight: open ? '1000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease-in-out'
                }}
            >
                {collapseDescription ? (
                    <p className="collapseDescription"> {collapseDescription} </p>
                ) : (
                    <div className="collapseUlDiv">
                        <ul>
                            {collapseUl.map(item => (
                                <li key={item} className="collapseUl">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Collapse;