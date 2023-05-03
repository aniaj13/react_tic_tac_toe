import React from "react";
import multiPlayerIcon from "./images/people.png";

function MultiPlayerButton({onClick, className}) {
    return (
        <button title='Multiplayer' className={className} onClick={onClick}><img src={multiPlayerIcon} alt="MultiPlayer"
                                                                                 className='icon'
                                                                                 id='multiPlayerIcon'/>
        </button>
    )
}

export default MultiPlayerButton;