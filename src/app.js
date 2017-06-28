class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.props.value}
      </button>
    );
  }

}

class Board extends React.Component {
  renderSquare(i) {
    return <Square/>
  }

  render() {
    const status = 'Next player: X';

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
        <board/>
        <div className='game-info'>
          <div>{/*status*/}</div>
          <ol>{/*todo*/}</ol>
        </div>
      </div>
    );
  }
}