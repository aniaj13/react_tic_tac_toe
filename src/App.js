import {useState} from "react";
import './App.css'

function Square({id, value, onClick}) {
    return (
        <div onClick={onClick} className='square' id={id}>{value}</div>
    )
}

function GameInfo({value, isGameOver, winner}) {

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
                Player {value} Turn
            </div>)}

        </>
    )
}

function Board() {
    const [squares, setSquares] = useState(Array(3).fill(null).map(() => Array(3).fill(null)))
    const [isOTurn, setOTurn] = useState(true);
    const [playerTurnSign, setPlayerTurnSign] = useState('O')
    const [isGameOver, setIsGameOver] = useState(false)
    const [winner, setWinner] = useState(null)

    function handleClick(i, j) {
        if (squares[i][j] || isGameOver) {
            return;
        }
        const nextSquares = squares.slice()
        if (isOTurn) {
            nextSquares[i][j] = 'O'
            setPlayerTurnSign('X')
        } else if (!isOTurn) {
            nextSquares[i][j] = 'X'
            setPlayerTurnSign('O')
        }
        setSquares(nextSquares);
        calculateGameResult(isOTurn);
        setOTurn(!isOTurn);
    }

    function calculateGameResult() {
        let player;
        if (isOTurn) {
            player = 'O'
        } else if (!isOTurn) {
            player = 'X'
        }
        if (checkWin(player)) {
            console.log(`${player} Won`)
            setIsGameOver(true);
            setWinner(player)
            return true;
        } else if (checkDraw()) {
            console.log('Its a draw')
            setIsGameOver(true)
            return true;
        }
        return false;
    }

    function checkWin(player) {
        for (let i = 0; i < 3; i++) {
            if (squares[i][0] === player && squares[i][1] === player && squares[i][2] === player) {
                return true
            }
            if (squares[0][i] === player && squares[1][i] === player && squares[2][i] === player) {
                return true
            }
        }
        if (squares[0][2] === player && squares[1][1] === player && squares[2][0] === player) {
            return true;
        }
        if (squares[0][0] === player && squares[1][1] === player && squares[2][2] === player) {
            return true;
        }
        return false;
    }

    function checkDraw() {
        for (let i = 0; i < squares.length; i++) {
            for (let j = 0; j < squares.length; j++) {
                if (squares[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }


    return (
        <>
            <GameInfo value={playerTurnSign} isGameOver={isGameOver} winner={winner}/>
            <div className='boardPanel'>
                <div className='board_row'>
                    <Square id='square_0_0' value={squares[0][0]} onClick={() => handleClick(0, 0)}/>
                    <Square id='square_0_1' value={squares[0][1]} onClick={() => handleClick(0, 1)}/>
                    <Square id='square_0_2' value={squares[0][2]} onClick={() => handleClick(0, 2)}/>
                </div>
                <div className='board_row'>
                    <Square id='square_1_0' value={squares[1][0]} onClick={() => handleClick(1, 0)}/>
                    <Square id='square_1_1' value={squares[1][1]} onClick={() => handleClick(1, 1)}/>
                    <Square id='square_1_2' value={squares[1][2]} onClick={() => handleClick(1, 2)}/>
                </div>
                <div className='board_row'>
                    <Square id='square_2_0' value={squares[2][0]} onClick={() => handleClick(2, 0)}/>
                    <Square id='square_2_1' value={squares[2][1]} onClick={() => handleClick(2, 1)}/>
                    <Square id='square_2_2' value={squares[2][2]} onClick={() => handleClick(2, 2)}/>
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
