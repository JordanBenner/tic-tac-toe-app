import React from 'react';

class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

  clickedBox () {
    console.log('Box', this.props.boxNum);
    this.setState({value: 'X'});
  }

  render() {
    return (
      <button className="square" onClick={() => this.clickedBox()}>
        {this.state.value}
      </button>
    );
  }

}

class Board extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares:squares, xIsNext: !this.state.xIsNext});
  }

  renderSquare(i) {
    return <Square boxNum={this.state.squares[i]}
    onClick={() => this.handleClick(i)}/>

  }

  render() {
    const winner = calculateWinner(this.state.squares);
   let status;
   if (winner) {
     status = 'Winner: ' + winner;
   } else {
     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
   }

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}



class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board/>
        </div>
        <div className='game-info'>
          <div>{/*status*/}</div>
          <ol>{/*todo*/}</ol>
        </div>
      </div>
    );
  }
}

export default Game
