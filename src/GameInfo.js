import React from "react";

function GameInfo({value, isGameOver, winner, gameMode}) {

    return (
        <>
            {isGameOver && (winner === null) && (
                <div className='game_info'>
                    Its a draw!
                </div>)}
            {isGameOver && winner !== null && (
                <div className='game_info'>
                    Player {winner} Won!
                </div>)}
            {!isGameOver && (
                <div className='game_info'>
                    {gameMode && <p>Player {value} Turn</p>}
                </div>)}

        </>
    )
}

export default GameInfo;