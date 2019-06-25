import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    getDiv() { 
        if (this.props.tile.flagged && !this.props.tile.explored){
            return <div className="tile flagged" onClick={this.handleClick}>{' \u2691 '}</div>;
        } else if (!this.props.tile.explored) {
            return <div className="tile" onClick={this.handleClick}></div>;
        } else {
            if (this.props.tile.bombed) {
                return <div className="tile bombed revealed">{' \u2622 '}</div>;
            }
            else if ( this.props.tile.adjacentBombCount() >= 1){
                return <div className="tile revealed">{this.props.tile.adjacentBombCount()}</div>
            }else{
                return <div className="tile revealed"></div>;
            }
        }
    }

    handleClick(e){
        this.props.updateGame(this.props.tile, e.altKey);
    }

    render(){
        const tile = this.props.tile
        let klass, text, count;
        
        if(tile.explored){
            if(tile.bombed){
                klass = "bombed";
                text = "\u2622";
            }else{
                count = tile.adjacentBombCount();
                text = (count > 0 ? `${count}` : "");
            }
            klass = `${klass} revealed`;
        }
        else if(tile.flagged){
            text = ' \u2691 ';
            klass = "flagged";
        }
        else{
            text = ""
        }
        klass = `tile ${klass}`
        return (<div className={klass} onClick={this.handleClick}>{text}</div>) 
    }
}

export default Tile;