import GamesGrid from "./components/GamesGrid/GamesGrid";
import { Header } from "./components/Header/Header";
import { StateProvider } from "./components/store/Store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Header />
        <GamesGrid />
      </StateProvider>
    </div>
  );
}

export default App;
