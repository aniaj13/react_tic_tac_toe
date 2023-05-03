import React from "react";
function Square({id, value, onClick}) {

    return (
        <div onClick={onClick} className={`square ${value === 'O' ? 'O_sign' : 'X_sign'}`} id={id}>{value}</div>
    )
}

export default Square;