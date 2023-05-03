import React from "react";
import singlePlayerIcon from "./images/computer.png";


function SinglePlayerButton({onClick, className}) {
    return (
        <button title='Singleplayer' className={className} onClick={onClick}><img src={singlePlayerIcon}
                                                                                  alt="SinglePlayer"
                                                                                  className='icon'
                                                                                  id='singlePlayerIcon'/></button>
    )
}

export default SinglePlayerButton;