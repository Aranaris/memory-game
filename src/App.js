import './App.css';
import Game from "./components/Game";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <header className="page-header">Welcome to Memory Card!</header>
      <Player />
      <Game />
      {/* Page-Header
      Player Info
        Game Level
        Game Score
        Game Board
          Cards
            Card Image
            Card Name
      Footer */}
    </div>
  );
}

export default App;
