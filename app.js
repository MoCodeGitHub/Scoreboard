const players = [
{
  name: "Tyrion Lannister",
  score: 35,
  id: 1
},
{
  name: "King In The North",
  score: 60,
  id: 2
},
{
  name: "Dragon Queen",
  score: 40,
  id: 3
},
{
  name: "Greyworm",
  score: 90,
  id: 4
},
{
  name: "The Night King",
  score: 200,
  id: 5
},
{
  name: "Cersei Lannister",
  score: 40,
  id: 6
},
{
  name: "Arya Stark",
  score: 300,
  id: 7
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
      <Counter />
    </div>
  );
}

class Counter extends React.Component {
  constructor(){
    super()
    this.state={
      score: 0
    };
  }
  render (){
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="GAME OF THRONES"
      totalPlayers={props.initialPlayers.length} />

      {/* Players */}
      {props.initialPlayers.map(players =>
        <Player
          name={players.name}
          score={players.score}
          key={players.id.toString()}
          />
      )}
    </div>
  );
}

ReactDOM.render(
    <App initialPlayers={players} />,
        document.getElementById('root')

);
