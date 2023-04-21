import {useState} from "react";
import './App.css'

function Square({id, value, onClick}) {
    return (
        <div onClick={onClick} className='square' id={id}>{value}</div>
    )
}

function GameInfo({value}) {

    return (
        <>
        <div className='game_info'>
            Player {value} Turn
        </div>
        </>
    )
}

function Board() {
    const [squares, setSquares] = useState(Array(3).fill(null).map(() => Array(3).fill(null)))
    const [isOTurn, setOTurn] = useState(true);
    const [playerTurnSign, setPlayerTurnSign] = useState('O')

    function handleClick(i,j) {
        const nextSquares = squares.slice()
        if (isOTurn) {
            nextSquares[i][j] = 'O'
            setPlayerTurnSign('X')
        } else if (!isOTurn) {
            nextSquares[i][j] = 'X'
            setPlayerTurnSign('O')
        }
        setSquares(nextSquares);
        setOTurn(!isOTurn);
    }

    return (
        <>
            <GameInfo value={playerTurnSign}/>
            <div className='boardPanel'>
                <div className='board_row'>
                    <Square id='square_0_0' value={squares[0][0]} onClick={() => handleClick(0,0)}/>
                    <Square id='square_0_1' value={squares[0][1]} onClick={() => handleClick(0,1)}/>
                    <Square id='square_0_2' value={squares[0][2]} onClick={() => handleClick(0,2)}/>
                </div>
                <div className='board_row'>
                    <Square id='square_1_0' value={squares[1][0]} onClick={() => handleClick(1,0)}/>
                    <Square id='square_1_1' value={squares[1][1]} onClick={() => handleClick(1,1)}/>
                    <Square id='square_1_2' value={squares[1][2]} onClick={() => handleClick(1,2)}/>
                </div>
                <div className='board_row'>
                    <Square id='square_2_0' value={squares[2][0]} onClick={() => handleClick(2,0)}/>
                    <Square id='square_2_1' value={squares[2][1]} onClick={() => handleClick(2,1)}/>
                    <Square id='square_2_2' value={squares[2][2]} onClick={() => handleClick(2,2)}/>
                </div>
            </div>
        </>
    )
}


function App() {
    return (
        <>
            <Board/>
        </>
    )
}

export default App;
