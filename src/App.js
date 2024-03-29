import React, { Component } from 'react';
import Board from './components/Board';
import Card from './components/Card';


class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="flexbox">
          <Board id="board-1" className="board">
            {/* <p className="info">One</p> */}
            <Card id="card-1" className="card" draggable="true">
              <p>Card one</p>
            </Card>
          </Board>

          <Board id="board-2" className="board">
          {/* <p className="info">Two</p> */}
            <Card id="card-2" className="card" draggable="true">
              <p>Card two</p>
            </Card>
          </Board>

          <Board id="board-3" className="board">
          {/* <p className="info">Three</p> */}
            <Card id="card-3" className="card" draggable="true">
              <p>Card three</p>
            </Card>
          </Board>

          <Board id="board-4" className="board">
          {/* <p className="info">Four</p> */}
            <Card id="card-4" className="card" draggable="true">
              <p>Card four</p>
            </Card>
          </Board>
        </main>
      </div>
    );
  }
}

export default App;
