import React from 'react';
import * as Minesweeper from '../minesweeper.js';

import Board from './board';

class Game extends React.Component{
    constructor(){
        super();
        this.state = { board: new Minesweeper.Board(9, 10) };
        this.updateGame = this.updateGame.bind(this); 
        this.resetGame = this.resetGame.bind(this);
    }

    updateGame(tile, flagged){
        if(flagged){
            tile.toggleFlag();
        }
        else{
            tile.explore();
        }
        this.setState({board: this.state.board});
    }

    resetGame(){
        this.setState({ board: new Minesweeper.Board(9, 10)});
    }


    render(){
        let modal;
        if(this.state.board.won() || this.state.board.lost()){
            const text = this.state.board.won() ? "You win!" : "You lose!";
            modal = 
                (
                <div className="modal-screen">
                    <div className="modal-content">
                        <p>{text}</p>
                        <button onClick={this.resetGame}>Play again?</button>
                    </div>
                </div>
            )
        }
            return(
                <div>
                    {modal}
                    <Board board={this.state.board} updateGame={this.updateGame} />
                </div>
            )
        
    }


}

export default Game;