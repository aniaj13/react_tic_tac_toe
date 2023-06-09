import {useState} from "react";
import Square from "./Square";
import GameInfo from "./GameInfo";
import ResetButton from "./ResetButton";
import MultiPlayerButton from "./MultiPlayerButton";
import SinglePlayerButton from "./SinglePlayerButton";
import './App.css'

function Board() {
    const [squares, setSquares] = useState(Array(3).fill(null).map(() => Array(3).fill(null)))
    const [isOTurn, setOTurn] = useState(true);
    const [playerTurnSign, setPlayerTurnSign] = useState('O')
    const [isGameOver, setIsGameOver] = useState(false)
    const [winner, setWinner] = useState(null)
    const [gameMode, setGameMode] = useState(null)
    const [isPcMakingMove, setIsPcMakingMove] = useState(false)
    const [isButton1Selected, setIsButton1Selected] = useState(false)
    const [isButton2Selected, setIsButton2Selected] = useState(false)

    function singlePlayerStart() {
        setGameMode('singleplayer')
        setIsButton1Selected(true)
        setIsButton2Selected(false)
        resetGame()
    }

    function multiPlayerStart() {
        setGameMode('multiplayer')
        setIsButton1Selected(false)
        setIsButton2Selected(true)
        resetGame()
    }

    function makeMove(i, j) {
        const nextSquares = squares.slice()
        if (isOTurn) {
            nextSquares[i][j] = 'O'
            setPlayerTurnSign('X')
        } else if (!isOTurn) {
            nextSquares[i][j] = 'X'
            setPlayerTurnSign('O')
        }
        setSquares(nextSquares);
        calculateGameResult(isOTurn ? 'O' : 'X');
        setOTurn(!isOTurn);
    }

    function handleClick(i, j) {
        if (squares[i][j] || isGameOver || winner || isPcMakingMove) {
            return;
        }
        if (gameMode === 'multiplayer') {
            makeMove(i, j);
        } else if (gameMode === 'singleplayer') {
            makeMove(i, j)
            const gameResult = calculateGameResult('O')
            if (!gameResult) {
                setIsPcMakingMove(true);
                setTimeout(() => {
                    makePcMove()
                    setIsPcMakingMove(false)
                }, 500)
            }
        } else if (gameMode === null) {
            alert('Pick a game mode to start')
        }
    }

    function makePcMove() {
        const pcSquares = squares.slice()
        let row = Math.floor(Math.random() * 3)
        let column = Math.floor(Math.random() * 3)
        while (squares[row][column] !== null) {
            row = Math.floor(Math.random() * 3)
            column = Math.floor(Math.random() * 3)
        }
        pcSquares[row][column] = 'X'
        setPlayerTurnSign('O')
        setSquares(pcSquares)
        calculateGameResult('X')
        setOTurn(true)
    }

    function calculateGameResult(player) {
        if (checkWin(player)) {
            setIsGameOver(true);
            setWinner(player)
            return true;
        } else if (checkDraw()) {
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

    function resetGame() {
        setIsGameOver(false);
        setOTurn(true)
        setWinner(null)
        setSquares(Array(3).fill(null).map(() => Array(3).fill(null)))
        setPlayerTurnSign('O')
    }


    return (
        <>

            <div className='upper_panel'>
                <h1>XO</h1>
                <SinglePlayerButton className={isButton1Selected ? 'selectedButton' : 'gameModeButton'} onClick={() => {
                    singlePlayerStart()
                }}/>
                <MultiPlayerButton className={isButton2Selected ? 'selectedButton' : 'gameModeButton'} onClick={() => {
                    multiPlayerStart()
                }}/>
                <ResetButton handleReset={resetGame}/>
            </div>
            <div className='game_mode_info'>{gameMode}</div>
            <GameInfo value={playerTurnSign} isGameOver={isGameOver} winner={winner} gameMode={gameMode}/>
            <div className='boardPanel'>
                <div className='board_row'>
                    <Square id='square_0_0' value={squares[0][0]}
                            onClick={() => handleClick(0, 0)}/>
                    <Square id='square_0_1' value={squares[0][1]}
                            onClick={() => handleClick(0, 1)}/>
                    <Square id='square_0_2' value={squares[0][2]}
                            onClick={() => handleClick(0, 2)}/>
                </div>
                <div className='board_row'>
                    <Square id='square_1_0' value={squares[1][0]}
                            onClick={() => handleClick(1, 0)}/>
                    <Square id='square_1_1' value={squares[1][1]}
                            onClick={() => handleClick(1, 1)}/>
                    <Square id='square_1_2' value={squares[1][2]}
                            onClick={() => handleClick(1, 2)}/>
                </div>
                <div className='board_row'>
                    <Square id='square_2_0' value={squares[2][0]}
                            onClick={() => handleClick(2, 0)}/>
                    <Square id='square_2_1' value={squares[2][1]}
                            onClick={() => handleClick(2, 1)}/>
                    <Square id='square_2_2' value={squares[2][2]}
                            onClick={() => handleClick(2, 2)}/>
                </div>
            </div>
            <div className="sources">
                Icons made by
                <a href="https://www.flaticon.com/free-icons/return" title="return icons">Return icons created by
                    Smartline - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/people" title="people icons">People icons created by
                    Muhazdinata -
                    Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by
                    Freepik -
                    Flaticon</a>
            </div>
        </>
    )
}


function App() {
    return (
        <Board/>
    )
}

export default App;
