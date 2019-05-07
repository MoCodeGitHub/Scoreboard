function Header(props) {
  return (
    <header>
      <h1>{ props.title}</h1>
      <span className="stats">Players: { props.totalPlayers }
      </span>
    </header>
);
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)} >✖</button>
        { props.name }
        </span>
      <Counter />
    </div>
  );
}

class Counter extends React.Component {

  state = {
      score: 0
    };

  incrementScore() {
    this.setState( prevState =>({
    score: prevState.score + 1
    }));
  }

  decrementScore() {
    this.setState( prevState => ({
    score: this.state.score - 1
    }));
  }

  render (){
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick= {() => this.decrementScore()}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick= {() => this.incrementScore()}> + </button>
      </div>
    );
  }
}

class App extends React.Component {

  state = {
    players: [
      {
        name: "Tyrion Lannister",
        id: 1
      },
      {
        name: "King In The North",
        id: 2
      },
      {
        name: "Dragon Queen",
        id: 3
      },
      {
        name: "Greyworm",
        id: 4
      },
      {
        name: "The Night King",
        id: 5
      },
      {
        name: "Arya Stark",
        id: 7
      }
    ]
  };

handleRemovePlayer = (id) => {
  this.setState( prevState => {
    return {
      players: prevState.players.filter( p => p.id !== id)
    };
  });
}
  render(){
    return (
      <div className="scoreboard">
        <Header title="GAME OF THRONES"
        totalPlayers={this.state.players.length} />

        {/* Players */}
        {this.state.players.map(players =>
          <Player
            name={players.name}
            score={players.score}
            id={players.id}
            key={players.id.toString()}
            removePlayer={this.handleRemovePlayer}
            />
        )}
    </div>
);
}
}


ReactDOM.render(
    <App />,
        document.getElementById('root')

);
