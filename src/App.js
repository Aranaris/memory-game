import "./styles/App.css"
import Game from "./components/Game";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <header className="page-header">Welcome to Memory Card!</header>
      <Player />
      <Game />
    </div>
  );
}

export default App;
