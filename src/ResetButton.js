import React from "react";
import returnIcon from "./images/return.png";

function ResetButton({handleReset}) {
    return (
        <>
            <button title='Reset' onClick={handleReset} className='reset_game_button'><img src={returnIcon} alt='Reset'
                                                                                           className='icon'
                                                                                           id='returnIcon'/></button>
        </>
    )
}

export default ResetButton;