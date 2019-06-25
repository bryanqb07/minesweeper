import React from 'react';
import Tile from './tile';

class Board extends React.Component{
    constructor(props){
        super(props); // board, updateGame
    }   
    render(){
        return(
            <div className="grid-container">
                {
                    this.props.board.grid.map((row, idx) => 
                    
                        <div key={idx} className="grid-row">
                        
                        {
                            row.map((tile, idx) => 
                            
                                <Tile key={idx} tile={tile} updateGame={this.props.updateGame} />)
                        }
                        
                    </div>) 
                }
            </div>
        )
    }
}

export default Board;
