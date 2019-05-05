function Header(props) {
  return (
    <header>
      <h1>{ props.title}</h1>
      <span className="stats">Player: { props.totalPlayers }
      </span>
    </header>
);
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }

        </span>
      <Counter score={props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="GAME OF THRONES"
      totalPlayers={1} />

      {/* Players */}
      <Player name="Tyrion Lannister"
      score={35} />
      <Player name="King In The North"
      score={35} />
      <Player name="Dragon Queen"
      score={35} />
      <Player name="The Night King"
      score={35} />
      <Player name="Cersei Lannister"
      score={35} />
      <Player name="Greyworm"
      score={35} />
    </div>
  );
}

ReactDOM.render(
    <App />,
        document.getElementById('root')

);
