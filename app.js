const players = [
{
  name: "Tyrion Lannister",
  score: 35
},
{
  name: "King In The North",
  score: 60
},
{
  name: "Dragon Queen",
  score: 40
},
{
  name: "Greyworm",
  score: 90
},
{
  name: "The Night King",
  score: 200
},
{
  name: "Cersei Lannister",
  score: 40
},
{
  name: "Arya Stark",
  score: 300
}
];

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

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="GAME OF THRONES"
      totalPlayers={1} />

      {/* Players */}
      {props.initialPlayers.map(players =>
        <Player
          name={players.name}
          score={players.score}
          />
      )}
    </div>
  );
}

ReactDOM.render(
    <App initialPlayers={players} />,
        document.getElementById('root')

);
