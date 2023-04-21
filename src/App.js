import {useState} from "react";
import './App.css'

function Square({id}) {
    return (
        <div className='square' id={id}></div>
    )
}

function Board() {
    const [squares, setSquares] = useState(Array(3).fill(null).map(() => Array(3).fill(null)))

    return (
        <>
            <div className='boardPanel'>
                <div className='board_row'>
                    <Square id='square_0_0' index={squares[0][0]}/>
                    <Square id='square_0_1' index={squares[0][1]}/>
                    <Square id='square_0_2' index={squares[0][2]}/>
                </div>
                <div className='board_row'>
                    <Square id='square_1_0' index={squares[1][0]}/>
                    <Square id='square_1_1' index={squares[1][1]}/>
                    <Square id='square_1_2' index={squares[1][2]}/>
                </div>
                <div className='board_row'>
                    <Square id='square_2_0' index={squares[2][0]}/>
                    <Square id='square_2_1' index={squares[2][1]}/>
                    <Square id='square_2_2' index={squares[2][2]}/>
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
